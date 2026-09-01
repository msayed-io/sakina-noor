'use client'

/*
 * ملاحظة توثيقية: في الملف الأصلي لا يوجد أي JavaScript لعداد الأذكار —
 * شبكة الأذكار ثابتة تمامًا (البطاقات تعرض عدد الأذكار كنص فقط)،
 * والحركات الوحيدة هي reveal-stagger (تُدار مركزيًا عبر ScrollEffects)
 * وتأثيرات hover في CSS. النقل هنا حرفي 100% بنفس المظهر والسلوك.
 */
export default function AzkarSection() {
  return (
    <section className="azkar-section" id="azkar">
      <div className="azkar-header">
        <div className="azkar-eyebrow reveal">الأذكار والحصن</div>
        <h2 className="azkar-title reveal">أذكارك <span className="accent">يومياً</span></h2>
        <p className="azkar-subtitle reveal">أذكار الصباح والمساء، حصن المسلم كاملاً، أسماء الله الحسنى، وعدّاد ذكي يرافق عبادتك في كل وقت.</p>
      </div>

      <div className="azkar-grid reveal-stagger">

        <div className="azkar-card">
          <div className="azkar-icon morning">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="4"/>
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2"/>
            </svg>
          </div>
          <div className="azkar-name">أذكار الصباح</div>
          <div className="azkar-count">23 ذكر</div>
        </div>

        <div className="azkar-card">
          <div className="azkar-icon evening">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          </div>
          <div className="azkar-name">أذكار المساء</div>
          <div className="azkar-count">23 ذكر</div>
        </div>

        <div className="azkar-card">
          <div className="azkar-icon sleep">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              <path d="M19 6l1-1M22 9l1-1"/>
            </svg>
          </div>
          <div className="azkar-name">أذكار النوم</div>
          <div className="azkar-count">15 ذكر</div>
        </div>

        <div className="azkar-card">
          <div className="azkar-icon prayer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2L4 7v10l8 5 8-5V7z"/>
              <path d="M12 22V12M4 7l8 5 8-5"/>
            </svg>
          </div>
          <div className="azkar-name">بعد الصلاة</div>
          <div className="azkar-count">12 ذكر</div>
        </div>

        <div className="azkar-card">
          <div className="azkar-icon home">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 10a2 2 0 0 1 .7-1.5l7-6a2 2 0 0 1 2.6 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <path d="M9 22V12h6v10"/>
            </svg>
          </div>
          <div className="azkar-name">دخول المنزل</div>
          <div className="azkar-count">3 ذكر</div>
        </div>

        <div className="azkar-card">
          <div className="azkar-icon food">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 11h18M3 11a2 2 0 0 0 0 4h18a2 2 0 0 0 0-4M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"/>
            </svg>
          </div>
          <div className="azkar-name">الطعام والشراب</div>
          <div className="azkar-count">5 ذكر</div>
        </div>

        <div className="azkar-card">
          <div className="azkar-icon travel">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 17H3v-5l2-5h12l4 5v5h-2"/>
              <circle cx="7" cy="17" r="2"/>
              <circle cx="17" cy="17" r="2"/>
            </svg>
          </div>
          <div className="azkar-name">السفر والركوب</div>
          <div className="azkar-count">8 ذكر</div>
        </div>

        <div className="azkar-card">
          <div className="azkar-icon shield">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="M9 12l2 2 4-4"/>
            </svg>
          </div>
          <div className="azkar-name">الحفظ والتحصين</div>
          <div className="azkar-count">10 ذكر</div>
        </div>

      </div>
    </section>
  )
}
