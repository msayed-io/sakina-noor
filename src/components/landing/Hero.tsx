'use client'

import { useEffect } from 'react'

/* ------------------------------------------------------------------
   Immersive hero background — mandated Cloudinary assets (fixed URLs).
   Mobile: 9:16 portrait · Desktop: 16:9 widescreen.
   The <picture> media-query switch downloads ONLY the matching asset,
   so a device never fetches both versions (zero wasted bytes).
   A plain <img> is deliberate here: next/image cannot art-direct two
   distinct remote assets via media queries, and the exact URLs must
   be preserved verbatim (no CDN transformation allowed).
------------------------------------------------------------------- */
const HERO_BG_MOBILE =
  'https://res.cloudinary.com/dubcctda0/image/upload/v1788448109/MEITU_%D9%A2%D9%A0%D9%A2%D9%A6%D9%A0%D9%A9%D9%A0%D9%A3_%D9%A1%D9%A8%D9%A0%D9%A1%D9%A5%D9%A6%D9%A9%D9%A7%D9%A0_gyl6yw.jpg'
const HERO_BG_DESKTOP =
  'https://res.cloudinary.com/dubcctda0/image/upload/v1788448076/MEITU_%D9%A2%D9%A0%D9%A2%D9%A6%D9%A0%D9%A9%D9%A0%D9%A3_%D9%A1%D9%A7%D9%A4%D9%A9%D9%A5%D9%A8%D9%A2%D9%A6%D9%A9_emndof.jpg'

export default function Hero() {
  useEffect(() => {
    /* Phone parallax — منطق أصلي حرفيًا */
    const phone = document.querySelector<HTMLElement>('.phone');
    const heroVisual = document.querySelector<HTMLElement>('.hero-visual');

    if(phone && heroVisual && window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
      const onMove = (e: MouseEvent) => {
        const rect = heroVisual.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        phone.style.transform = `rotateY(${-8 + x * 8}deg) rotateX(${4 - y * 8}deg) rotateZ(${2 - x * 2}deg) translateY(${y * -8}px)`;
      };

      const onLeave = () => {
        phone.style.transform = '';
      };

      heroVisual.addEventListener('mousemove', onMove);
      heroVisual.addEventListener('mouseleave', onLeave);
      return () => {
        heroVisual.removeEventListener('mousemove', onMove);
        heroVisual.removeEventListener('mouseleave', onLeave);
      };
    }
  }, [])

  return (
    <section className="hero">
      {/* Immersive photographic background — smart mobile/desktop switch */}
      <picture className="hero-bg" aria-hidden="true">
        <source media="(max-width: 768px)" srcSet={HERO_BG_MOBILE} />
        <source media="(min-width: 769px)" srcSet={HERO_BG_DESKTOP} />
        <img
          src={HERO_BG_DESKTOP}
          alt=""
          fetchPriority="high"
          decoding="async"
          draggable={false}
        />
      </picture>
      {/* Cinematic scrim — readability shield floating above the photograph */}
      <div className="hero-scrim" aria-hidden="true"></div>

      <div className="hero-content">
        <div className="hero-eyebrow">رفيقك الروحي اليومي</div>
        <h1 className="hero-title">
          <span className="accent">سَكِينَة</span><br />
          في كل لحظة
        </h1>
        <p className="hero-subtitle">
          صلواتك، أذكارك، قرآنك، وحصن المسلم. كل ما تحتاجه روحك في تطبيق واحد بتصميم هادئ يليق بخشوعك.
        </p>
        <div className="hero-ctas">
          <a href="#download" className="btn-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
            <span>حمّل التطبيق</span>
          </a>
          <a href="#features" className="btn-secondary">
            <span>اكتشف المميزات</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-value">15<span className="suffix">+</span></div>
            <div className="hero-stat-label">ميزة روحية</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">50<span className="suffix">+</span></div>
            <div className="hero-stat-label">قارئ عالمي</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">99</div>
            <div className="hero-stat-label">اسم من أسماء الله</div>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        {/* Realistic iPhone 16 Pro Frame */}
        <div className="phone">
          {/* Side buttons */}
          <div className="phone-btn-volume"></div>
          <div className="phone-btn-camera"></div>
          <div className="phone-btn-power"></div>
          {/* Dynamic Island (replaces notch) */}
          <div className="phone-island"></div>
          <div className="phone-screen">

            {/* Status bar */}
            <div className="phone-status">
              <span className="phone-status-time">9:41</span>
              <span>سَكِينَة</span>
            </div>

            {/* App header */}
            <div className="phone-app-header">
              <div className="phone-app-title">الصلاة الحالية</div>
              <div className="phone-app-location">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21s-6-5.2-6-10a6 6 0 1 1 12 0c0 4.8-6 10-6 10z"/><circle cx="12" cy="11" r="2"/></svg>
                <span>القاهرة</span>
              </div>
            </div>

            {/* Prayer card (dark glass) */}
            <div className="phone-prayer-card">
              <div className="phone-prayer-label">الصلاة الحالية</div>
              <div className="phone-prayer-name">العصر</div>
              <div className="phone-prayer-next">التالية: المغرب ٦:١٥</div>
              <div className="phone-prayer-ring">
                <div className="phone-ring-circle">
                  <div className="phone-ring-inner">
                    <div className="phone-ring-count">متبقي</div>
                    <div className="phone-ring-time">2:34</div>
                  </div>
                </div>
                <div className="phone-ring-info">
                  <div className="phone-ring-label">الهجري</div>
                  <div className="phone-ring-value">3 محرم 1448</div>
                </div>
              </div>
            </div>

            {/* Hadith card */}
            <div className="phone-hadith-card">
              <div className="phone-hadith-label">حديث اليوم</div>
              <div className="phone-hadith-text">إنما الأعمال بالنيات، وإنما لكل امرئٍ ما نوى</div>
            </div>

            {/* Tab bar */}
            <div className="phone-tabbar">
              <div className="phone-tab active">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M3 10a2 2 0 0 1 .7-1.5l7-6a2 2 0 0 1 2.6 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
              </div>
              <div className="phone-tab">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 3a9 9 0 1 0 9 9A6.5 6.5 0 0 1 12 3z"/></svg>
              </div>
              <div className="phone-tab">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
              </div>
              <div className="phone-tab">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6m11-7h-6m-6 0H1m16.24-7.24l-4.24 4.24m-6 6l-4.24 4.24m12.48 0l-4.24-4.24m-6-6L3.76 4.76"/></svg>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
