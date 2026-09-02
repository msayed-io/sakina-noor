'use client'

import { useEffect } from 'react'

export default function Header() {
  useEffect(() => {
    /* Nav scrolled state — منطق أصلي حرفيًا */
    const nav = document.getElementById('nav');
    if(!nav) return;
    let ticking = false;

    const onScroll = () => {
      if(!ticking){
        requestAnimationFrame(() => {
          if(window.scrollY > 20){
            nav.classList.add('scrolled');
          } else {
            nav.classList.remove('scrolled');
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [])

  return (
    <nav className="nav cut-crystal-panel" id="nav" aria-label="التنقل الرئيسي">
      <a href="#" className="nav-brand">
        <span className="nav-brand-mark">س</span>
        <span>سَكِينَة</span>
      </a>
      <div className="nav-links">
        <a href="#features">المميزات</a>
        <a href="#quran">القرآن</a>
        <a href="#azkar">الأذكار</a>
        <a href="#prayer">الصلاة</a>
      </div>
      <a href="#download" className="nav-cta">
        <span>حمّل التطبيق</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </a>
    </nav>
  )
}
