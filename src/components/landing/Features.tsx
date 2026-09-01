export default function Features() {
  return (
    <section className="features" id="features">
      <div className="features-header">
        <div className="features-eyebrow reveal">المميزات</div>
        <h2 className="features-title reveal">كل ما تحتاجه <span className="accent">روحك</span></h2>
        <p className="features-subtitle reveal">15 ميزة روحية متناسقة في تطبيق واحد، صُممت بعناية لتكون رفيقك في كل لحظة من يومك.</p>
      </div>

      <div className="bento reveal-stagger">

        <div className="bento-cell size-lg featured">
          <div className="bento-card-header">
            <div className="bento-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
            </div>
            <h3 className="bento-title">القرآن الكريم</h3>
          </div>
          <p className="bento-desc">نص عثماني أصلي بخط المصحف، مع تلاوات لأكثر من 50 قارئ عالمي، تحكم كامل في التشغيل، تكرار الآيات، ومؤقت النوم.</p>
          <div className="bento-arabic">بسم الله الرحمن الرحيم</div>
        </div>

        <div className="bento-cell size-md">
          <div className="bento-card-header">
            <div className="bento-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <h3 className="bento-title">مواقيت الصلاة</h3>
          </div>
          <p className="bento-desc">دقة عالية حسب موقعك، 5 طرق حسابية، ضبط تلقائي للمذهب، وعد تنازلي لكل صلاة.</p>
        </div>

        <div className="bento-cell size-tall">
          <div className="bento-card-header">
            <div className="bento-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
            </div>
            <h3 className="bento-title">إشعارات الأذان</h3>
          </div>
          <p className="bento-desc">تنبيهات محلية للأذان ووقت الصلاة، مع تذكير قبلي قابل للتخصيص.</p>
        </div>

        <div className="bento-cell size-md">
          <div className="bento-card-header">
            <div className="bento-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 3a9 9 0 1 0 9 9A6.5 6.5 0 0 1 12 3z"/>
                <path d="M19 2l.7 1.3L21 4l-1.3.7L19 6l-.7-1.3L17 4l1.3-.7z"/>
              </svg>
            </div>
            <h3 className="bento-title">الأذكار اليومية</h3>
          </div>
          <p className="bento-desc">أذكار الصباح والمساء، النوم، الاستيقاظ، وبعد الصلاة بعدّاد ذكي ومتابعة يومية.</p>
        </div>

        <div className="bento-cell size-md">
          <div className="bento-card-header">
            <div className="bento-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <h3 className="bento-title">حصن المسلم</h3>
          </div>
          <p className="bento-desc">67+ تصنيف كامل من الأذكار والأدعية لأحوال يومية متنوعة.</p>
        </div>

        <div className="bento-cell">
          <div className="bento-card-header">
            <div className="bento-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2l3 6 6 .9-4.5 4.4 1 6.7L12 17l-5.5 3 1-6.7L3 8.9 9 8z"/>
              </svg>
            </div>
            <h3 className="bento-title">أسماء الله الحسنى</h3>
          </div>
          <p className="bento-desc">99 اسماً بمعانيها وتفاصيلها.</p>
        </div>

        <div className="bento-cell">
          <div className="bento-card-header">
            <div className="bento-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="2"/>
                <path d="M16.24 7.76a6 6 0 0 1 0 8.49M7.76 16.24a6 6 0 0 1 0-8.49M19.07 4.93a10 10 0 0 1 0 14.14M4.93 19.07a10 10 0 0 1 0-14.14"/>
              </svg>
            </div>
            <h3 className="bento-title">راديو إسلامي</h3>
          </div>
          <p className="bento-desc">محطات بث مباشر على مدار الساعة.</p>
        </div>

        <div className="bento-cell size-md">
          <div className="bento-card-header">
            <div className="bento-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
              </svg>
            </div>
            <h3 className="bento-title">حديث اليوم</h3>
          </div>
          <p className="bento-desc">حديث شريف يومياً مع الشرح والتخريج، يُتجدّد تلقائياً.</p>
        </div>

        <div className="bento-cell cta-cell">
          <div className="bento-card-header">
            <div className="bento-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
            </div>
            <h3 className="bento-title">ابدأ رحلتك الآن</h3>
          </div>
          <p className="bento-desc">حمّل سكينة ولتكن رفيقك الروحي في كل لحظة.</p>
        </div>

      </div>
    </section>
  )
}
