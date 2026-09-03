'use client'

import { useEffect, useState } from 'react'

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

/* Live product showcase — the published website itself, streaming inside
   the device frame. Fixed URL per design-owner directive. */
const LIVE_SITE_URL = 'https://sakina-design-transplant.vercel.app/'

export default function Hero() {
  /* Flips once the live site inside the phone paints its first frame —
     the brand-cream skeleton then fades out gracefully. */
  const [liveReady, setLiveReady] = useState(false)

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
      {/* Immersive photographic background — smart mobile/desktop switch.
          Decorative by design: alt="" on the img is the AT hiding mechanism
          (<picture> itself does not support ARIA attributes). */}
      <picture className="hero-bg">
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
            {/* The REAL published website, alive inside the device.
                A showcase surface — not a browser: pointer events are cut,
                it is out of the tab order (no keyboard scroll) and inner
                scrolling is disabled. A brand-cream skeleton with a soft
                shimmer stands in until the site's first paint, then the
                two layers cross-fade through the brand cream. */}
            <iframe
              className={`phone-live${liveReady ? ' is-ready' : ''}`}
              src={LIVE_SITE_URL}
              title="سَكِينَة — الموقع الحي"
              scrolling="no"
              tabIndex={-1}
              onLoad={() => setLiveReady(true)}
            />
            <div
              className={`phone-live-skeleton${liveReady ? ' is-ready' : ''}`}
              aria-hidden="true"
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}
