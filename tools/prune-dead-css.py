#!/usr/bin/env python3
"""
إزالة قواعد CSS الميتة من src/app/globals.css بدقة.

المنهج:
1. تقسيم الملف إلى كتل (comments / at-rules / قواعد) مع الحفاظ على الترتيب والمسافات.
2. حذف أي قاعدة كل selectors فيها تشير فقط إلى classes ميتة.
3. داخل @media: نفس المنطق، وحذف الـ@media نفسها لو فرغت.
4. حذف @keyframes التي لم يعد أحد يشير إليها.
"""
import re
import sys

PATH = 'src/app/globals.css'

DEAD = {
    # بلوك المصحف القديم بالكامل
    'mushaf', 'mushaf-nav', 'mushaf-nav-link', 'mushaf-surah-frame',
    'mushaf-surah-frame-inner', 'mushaf-surah-name', 'mushaf-ornament',
    'mushaf-ornament-word', 'mushaf-verses', 'mushaf-verse', 'mushaf-ayah-text',
    'mushaf-ayah-num', 'mushaf-footer', 'mushaf-page-num', 'mushaf-divider',
    # نظام qcf-preview القديم (المكوّن يستخدم qcf-word / qcf-line)
    'qcf-preview-page', 'qcf-preview-line-wrap', 'qcf-preview-line', 'qcf-preview-glyph',
    # فقاعات الصلاة القديمة
    'prayer-pill', 'p1', 'p2', 'p3', 'p4',
    # primitives غير مستخدمة في JSX
    'cut-crystal-capsule', 'cut-crystal-capsule-dark', 'cut-crystal-capsule-gold',
    'gem-rim-glow',
    # أخرى
    'prayer-ring-name', 'qcf-empty', 'stats-eyebrow', 'mushaf-player',
}

# classes حية لكنها تظهر فقط داخل قواعد مشتركة مع classes ميتة
ALIVE = {'qcf-line', 'qcf-page', 'qcf-word', 'surah-header-line', 'qcf-opening-page'}


def classes_of(selector: str):
    return set(re.findall(r'\.(-?[A-Za-z_][A-Za-z0-9_-]*)', selector))


def selector_is_dead(selector: str) -> bool:
    """القاعدة ميتة لو كل class فيها ميت، وفيها class ميت واحد على الأقل."""
    cs = classes_of(selector)
    if not cs:
        return False
    return bool(cs & DEAD) and not (cs & ALIVE) and cs <= (DEAD | ALIVE | classes_of(selector))


def split_selectors(sel: str):
    # فصل على الفاصلة العليا (خارج الأقواس)
    parts, depth, cur = [], 0, ''
    for ch in sel:
        if ch in '([':
            depth += 1
        elif ch in ')]':
            depth -= 1
        if ch == ',' and depth == 0:
            parts.append(cur)
            cur = ''
        else:
            cur += ch
    if cur.strip():
        parts.append(cur)
    return [p.strip() for p in parts if p.strip()]


def prune_selector_list(sel: str):
    """يرجع (النص الجديد أو None لو القاعدة كلها ميتة)."""
    parts = split_selectors(sel)
    kept = [p for p in parts if not selector_is_dead(p)]
    if not kept:
        return None
    if len(kept) == len(parts):
        return sel
    return ','.join(kept)


def tokenize(src: str):
    """يقسّم CSS إلى قائمة كتل: ('comment'|'rule'|'at'|'space', text)."""
    blocks = []
    i, n = 0, len(src)
    while i < n:
        # تعليق
        if src.startswith('/*', i):
            j = src.find('*/', i + 2)
            j = n if j == -1 else j + 2
            blocks.append(('comment', src[i:j]))
            i = j
            continue
        # مسافة
        if src[i].isspace():
            j = i
            while j < n and src[j].isspace():
                j += 1
            blocks.append(('space', src[i:j]))
            i = j
            continue
        # at-rule أو قاعدة: نقرأ حتى '{' أو ';'
        j = i
        depth = 0
        while j < n:
            if src[j] == '{':
                break
            if src[j] == ';' and depth == 0:
                break
            j += 1
        if j >= n:
            blocks.append(('rule', src[i:]))
            break
        if src[j] == ';':
            blocks.append(('rule', src[i:j + 1]))
            i = j + 1
            continue
        prelude = src[i:j]
        # نجد القوس المطابق
        k, depth = j, 0
        while k < n:
            if src[k] == '{':
                depth += 1
            elif src[k] == '}':
                depth -= 1
                if depth == 0:
                    break
            k += 1
        body = src[j:k + 1]
        kind = 'at' if prelude.lstrip().startswith('@') else 'rule'
        blocks.append((kind, prelude + body))
        i = k + 1
    return blocks


def rule_selector(block: str):
    return block[:block.index('{')]


def rule_body_inner(block: str):
    return block[block.index('{') + 1:block.rindex('}')]


def main():
    src = open(PATH, encoding='utf-8').read()
    blocks = tokenize(src)
    removed = []

    def process(blocks, inside_media=False):
        out = []
        for kind, text in blocks:
            if kind == 'at' and text.lstrip().startswith(('@media', '@supports')):
                prelude = text[:text.index('{')]
                inner = rule_body_inner(text)
                new_inner = process(tokenize(inner), inside_media=True)
                if new_inner.strip() == '':
                    removed.append((prelude.strip(), '<كل ما بداخله ميت>'))
                    continue
                out.append(prelude + '{' + new_inner + '}')
            elif kind == 'at' and text.lstrip().startswith('@keyframes'):
                out.append(text)
            elif kind == 'at':
                out.append(text)
            elif kind == 'rule' and '{' in text:
                sel = rule_selector(text)
                if '@' in sel:
                    out.append(text)
                    continue
                new_sel = prune_selector_list(sel)
                if new_sel is None:
                    removed.append((sel.strip(), text.strip()[:120]))
                    continue
                if new_sel != sel:
                    removed.append(('جزئي: ' + sel.strip(), '→ ' + new_sel.strip()))
                    out.append(new_sel + text[len(sel):])
                else:
                    out.append(text)
            else:
                out.append(text)
        return ''.join(out)

    result = process(blocks)

    # حذف @keyframes التي لم تعد أي قاعدة تشير إليها
    used_anims = re.findall(r'animation(?:-name)?\s*:\s*([^;}]+)', result)
    used_names = set()
    for chunk in used_anims:
        for tok in re.split(r'[\s,]+', chunk):
            used_names.add(tok.strip())
    orphan_kf = []
    result = re.sub(
        r'@keyframes\s+([A-Za-z0-9_-]+)\s*\{(?:[^{}]|\{[^{}]*\})*\}',
        lambda m: (m.group(0) if m.group(1).strip() in used_names
                   else (orphan_kf.append(m.group(1)) or '')),
        result)
    for name in orphan_kf:
        removed.append(('@keyframes ' + name, ''))

    # تنظيف الأسطر الفارغة المتتالية
    result = re.sub(r'\n{3,}', '\n\n', result)

    open(PATH, 'w', encoding='utf-8').write(result)

    print(f"قواعد محذوفة/معدّلة: {len(removed)}")
    for sel, _ in removed:
        print("  -", sel[:110])
    print()
    print(f"الأسطر: {len(src.splitlines())} → {len(result.splitlines())}")


if __name__ == '__main__':
    main()
