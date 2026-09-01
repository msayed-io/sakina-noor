export default function PrayerSection() {
  return (
    <section className="prayer-section" id="prayer">
      <div className="prayer-inner">
        <div className="prayer-visual reveal">
          <div className="prayer-ring-wrap">
            <div className="prayer-ring-outer"></div>

            <svg className="prayer-ring-svg" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="prayerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#deab65"/>
                  <stop offset="100%" stopColor="#9a6f3a"/>
                </linearGradient>
              </defs>
              <circle className="prayer-ring-bg" cx="50" cy="50" r="42"/>
              <circle className="prayer-ring-fill" cx="50" cy="50" r="42" strokeDasharray="264" strokeDashoffset="92"/>
            </svg>

            <div className="prayer-ring-content">
              <div className="prayer-ring-label">الصلاة القادمة</div>
              <div className="prayer-ring-name">العصر</div>
              <div className="prayer-ring-time">3:45 <span className="small">م</span></div>
            </div>

            <div className="prayer-pill p1">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 18a5 5 0 0 0-10 0M12 2v7m0 0l3-3m-3 3L9 6"/></svg>
              المغرب · 6:15
            </div>
            <div className="prayer-pill p2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              العشاء · 7:45
            </div>
            <div className="prayer-pill p3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 18a5 5 0 0 0-10 0M12 2v7"/></svg>
              الفجر · 4:32
            </div>
            <div className="prayer-pill p4">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4"/></svg>
              الظهر · 12:08
            </div>
          </div>
        </div>

        <div className="prayer-content">
          <div className="prayer-eyebrow reveal">مواقيت الصلاة</div>
          <h2 className="prayer-title reveal">صلاتك <span className="accent">في وقتها</span></h2>
          <p className="prayer-body reveal">
            مواقيت دقيقة حسب موقعك الجغرافي، مع دعم 5 طرق حسابية، ضبط تلقائي للمذهب (شافعي/حنفي)، وتنبيهات ذكية للأذان ووقت الصلاة. لن تفوتك صلاة مرة أخرى.
          </p>
          <div className="prayer-features reveal-stagger">
            <div className="prayer-feature">
              <div className="prayer-feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12l5 5L20 7"/></svg>
              </div>
              <span>كشف تلقائي للموقع GPS + خريطة لاختيار الموقع يدوياً</span>
            </div>
            <div className="prayer-feature">
              <div className="prayer-feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12l5 5L20 7"/></svg>
              </div>
              <span>5 طرق حسابية (مصري، كراتشي، أم القرى، MWL، ISNA)</span>
            </div>
            <div className="prayer-feature">
              <div className="prayer-feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12l5 5L20 7"/></svg>
              </div>
              <span>ضبط تلقائي للمذهب حسب الدولة (شافعي/حنفي)</span>
            </div>
            <div className="prayer-feature">
              <div className="prayer-feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12l5 5L20 7"/></svg>
              </div>
              <span>تنبيهات محلية للأذان + تذكير قبلي قابل للتخصيص</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
