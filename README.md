# سكينة نور

> **رفيقك الروحي اليومي** — صلوات، أذكار، قرآن، وحصن المسلم في تجربة هادئة تليق بخشوعك.

[![CI](https://github.com/msayed-io/sakina-noor/actions/workflows/ci.yml/badge.svg)](https://github.com/msayed-io/sakina-noor/actions/workflows/ci.yml)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)

**سكينة نور** صفحة هبوط عربية فاخرة لتطبيق روحي إسلامي، مصممة من اليمين إلى اليسار لتقديم تجربة هادئة، واضحة، ومتجاوبة على الهاتف والكمبيوتر. الاسم الجديد قصير وسهل التذكر، بينما يحافظ على معنى العلامة وروحها.

## ما الذي يقدمه المشروع؟

تستقبل الصفحة الزائر برسالة واضحة عن التطبيق، ثم تعرض المزايا الأساسية في أقسام بصرية متسلسلة تشمل القرآن الكريم، الأذكار، مواقيت الصلاة، الإحصاءات، ودعوة التحميل. أضيفت تأثيرات تمرير وحركة خفيفة لإبراز تجربة الهاتف من دون التأثير على سرعة القراءة أو سهولة الاستخدام.

## التقنيات

| الطبقة | التقنية |
| --- | --- |
| الواجهة | Next.js 16 وReact 19 |
| اللغة | TypeScript |
| التنسيق | Tailwind CSS وCSS مخصص |
| الاتجاه واللغة | Arabic RTL مع Cairo وAmiri |
| التحقق | ESLint وGitHub Actions |
| النشر | Vercel عبر تكامل GitHub |

## التشغيل محليًا

يتطلب المشروع Node.js 20+ وBun.

```bash
bun install
bun dev
```

ثم افتح [http://localhost:3000](http://localhost:3000).

للفحص والبناء:

```bash
bun run lint
bun run build
```

## النشر على Vercel

بعد ربط مستودع [سكينة نور](https://github.com/msayed-io/sakina-noor) بحساب Vercel، ستنشئ Vercel معاينة تلقائية لكل Pull Request، وتنشر الإصدار الإنتاجي عند الدفع إلى فرع `main`. إعدادات المشروع موجودة في `vercel.json`، بينما يتحقق GitHub Actions من `lint` و`build` على كل تغيير.

لربط المشروع يدويًا:

1. افتح لوحة Vercel واختر **Add New Project**.
2. اختر GitHub ثم المستودع `msayed-io/sakina-noor`.
3. اترك Framework على **Next.js**، وتأكد من أن فرع الإنتاج هو `main`.
4. اضغط **Deploy**، ثم أضف نطاقًا مخصصًا من إعدادات Domains إذا لزم.

## بنية المشروع

- `src/app` يحتوي على صفحة Next.js والبيانات الوصفية العامة.
- `src/components/landing` يحتوي على أقسام صفحة الهبوط القابلة لإعادة الاستخدام.
- `src/components/ui` يحتوي على مكونات الواجهة المشتركة.
- `.github/workflows/ci.yml` يحتوي على فحوصات CI التلقائية.
- `docs/portfolio.md` يقدم ملخصًا جاهزًا لعرض المشروع في بورتفوليو أو ملف أعمال.

## ملاحظات

لا تُرفع ملفات البيئة أو قواعد البيانات المحلية أو مخرجات الاختبار. أي روابط تحميل أو تكاملات خارجية غير مكتملة في التصميم الحالي يجب ربطها بخدمات الإنتاج قبل الإطلاق التجاري.

## الترخيص

لم يُحدَّد ترخيص للمشروع بعد. أضف ملف ترخيص مناسب قبل الاستخدام التجاري أو إعادة التوزيع.
