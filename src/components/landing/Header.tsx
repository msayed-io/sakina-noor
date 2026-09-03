import type { ReactNode } from 'react'

/*
 * الهيدر العائم الرسمي — نفس فلسفة/كبسولات تطبيق سكينة الحقيقي:
 * كبسولة عنوان (cut-crystal-capsule) تحمل اسم سَكِينَة، وكبسولة روابط
 * مقسّمة، وكبسولة ذهبية (cut-crystal-capsule-gold) لدعوة التحميل.
 * لا قائمة همبرغر ولا لوحة ملء الشاشة — مطابق للتطبيق.
 */

const links = [
  { href: '#features', label: 'المميزات' },
  { href: '#quran', label: 'القرآن' },
  { href: '#azkar', label: 'الأذكار' },
  { href: '#prayer', label: 'الصلاة' },
]

function DownloadIcon(): ReactNode {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </svg>
  )
}

export default function Header() {
  return (
    <nav className="nav" aria-label="التنقل الرئيسي">
      <a href="#" className="nav-brand cut-crystal-capsule">
        <span className="nav-brand-name">سَكِينَة</span>
      </a>

      <div className="nav-links cut-crystal-capsule">
        {links.map((link) => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
      </div>

      <div className="nav-actions">
        <a href="#download" className="nav-cta cut-crystal-capsule-gold">
          <span>حمّل التطبيق</span>
          <DownloadIcon />
        </a>
      </div>
    </nav>
  )
}
