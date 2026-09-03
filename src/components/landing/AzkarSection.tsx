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
            {/* Sunrise over horizon — custom Sakina icon set */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3.5 17.5h17" />
              <path d="M7.8 17.5a4.2 4.2 0 0 1 8.4 0" />
              <path d="M12 5.5v2.2M5.9 9.1l1.5 1.5M18.1 9.1l-1.5 1.5" />
            </svg>
          </div>
          <div className="azkar-name">أذكار الصباح</div>
          <div className="azkar-count">23 ذكر</div>
        </div>

        <div className="azkar-card">
          <div className="azkar-icon evening">
            {/* Crescent with khatam star — custom */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19.5 14.2A8.2 8.2 0 1 1 9.8 3.6a6.6 6.6 0 0 0 9.7 10.6z" />
              <path d="M17.4 4.2l.65 1.55 1.55.65-1.55.65-.65 1.55-.65-1.55-1.55-.65 1.55-.65z" />
            </svg>
          </div>
          <div className="azkar-name">أذكار المساء</div>
          <div className="azkar-count">23 ذكر</div>
        </div>

        <div className="azkar-card">
          <div className="azkar-icon sleep">
            {/* Crescent over sleeping hill — custom */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18.8 11.6A7.6 7.6 0 1 1 9.9 2.9a6.1 6.1 0 0 0 8.9 8.7z" />
              <path d="M8 21a4 4 0 0 1 8 0" />
              <path d="M5 21h14" />
            </svg>
          </div>
          <div className="azkar-name">أذكار النوم</div>
          <div className="azkar-count">15 ذكر</div>
        </div>

        <div className="azkar-card">
          <div className="azkar-icon prayer">
            {/* Mihrab niche — custom */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 21V10.5a6 6 0 0 1 12 0V21" />
              <path d="M9.5 21v-6.2a2.5 2.5 0 0 1 5 0V21" />
              <path d="M3.5 21h17" />
            </svg>
          </div>
          <div className="azkar-name">بعد الصلاة</div>
          <div className="azkar-count">12 ذكر</div>
        </div>

        <div className="azkar-card">
          <div className="azkar-icon home">
            {/* House with arched door — custom */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 10.8L12 4l8 6.8V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" />
              <path d="M9.8 21v-5.2a2.2 2.2 0 0 1 4.4 0V21" />
            </svg>
          </div>
          <div className="azkar-name">دخول المنزل</div>
          <div className="azkar-count">3 ذكر</div>
        </div>

        <div className="azkar-card">
          <div className="azkar-icon food">
            {/* Bowl with steam — custom */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3.8 11h16.4a8.2 8.2 0 0 1-16.4 0z" />
              <path d="M9.2 7.6c.9-.9.9-1.9 0-2.8M14.8 7.6c.9-.9.9-1.9 0-2.8" />
              <path d="M6.5 21h11" />
            </svg>
          </div>
          <div className="azkar-name">الطعام والشراب</div>
          <div className="azkar-count">5 ذكر</div>
        </div>

        <div className="azkar-card">
          <div className="azkar-icon travel">
            {/* Travel case with arch handle — custom */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 9.5h14V19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19z" />
              <path d="M9 9.5V7a3 3 0 0 1 6 0v2.5" />
              <path d="M12 13.5v3" />
            </svg>
          </div>
          <div className="azkar-name">السفر والركوب</div>
          <div className="azkar-count">8 ذكر</div>
        </div>

        <div className="azkar-card">
          <div className="azkar-icon shield">
            {/* Shield with khatam star — custom */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 2.8l7 2.4v5.2c0 5.6-3.1 9.1-7 10.8-3.9-1.7-7-5.2-7-10.8V5.2z" />
              <path d="M12 8.4l1.3 2.9 2.9 1.3-2.9 1.3-1.3 2.9-1.3-2.9-2.9-1.3 2.9-1.3z" />
            </svg>
          </div>
          <div className="azkar-name">الحفظ والتحصين</div>
          <div className="azkar-count">10 ذكر</div>
        </div>

      </div>
    </section>
  )
}
