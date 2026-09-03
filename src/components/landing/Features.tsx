export default function Features() {
  return (
    <section className="features" id="features">
      <div className="features-header">
        <div className="features-eyebrow reveal">المميزات</div>
        <h2 className="features-title reveal">كل ما تحتاجه <span className="accent">روحك</span></h2>
        <p className="features-subtitle reveal">أدوات أساسية لعبادتك اليومية، مرتبة في تجربة واحدة هادئة.</p>
      </div>

      <div className="bento reveal-stagger">

        <div className="bento-cell size-lg featured" data-n="٠١">
          <div className="bento-card-header">
            <div className="bento-icon">
              {/* Double mihrab arch — custom Sakina icon set */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4.5 21V10a7.5 7.5 0 0 1 15 0v11" />
                <path d="M8.5 21v-8.5a3.5 3.5 0 0 1 7 0V21" />
                <path d="M2.5 21h19" />
              </svg>
            </div>
            <h3 className="bento-title">القرآن الكريم</h3>
          </div>
          <p className="bento-desc">مصحف المدينة بخطه الرسمي، مع تلاوات وتحكم كامل في الاستماع.</p>
          <div className="bento-arabic">بسم الله الرحمن الرحيم</div>
        </div>

        <div className="bento-cell size-md" data-n="٠٢">
          <div className="bento-card-header">
            <div className="bento-icon">
              {/* Clock under an arch — custom */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="13" r="7.5" />
                <path d="M12 9.5V13l2.8 1.8" />
                <path d="M9 3.2a8.6 8.6 0 0 1 6 0" />
              </svg>
            </div>
            <h3 className="bento-title">مواقيت الصلاة</h3>
          </div>
          <p className="bento-desc">مواقيت دقيقة تتكيّف مع موقعك ومذهبك.</p>
        </div>

        <div className="bento-cell size-tall" data-n="٠٣">
          <div className="bento-card-header">
            <div className="bento-icon">
              {/* Minaret bell — custom */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2.5v2" />
                <path d="M7.5 17V11a4.5 4.5 0 0 1 9 0v6" />
                <path d="M5.5 17h13" />
                <path d="M10 20.2a2.2 2.2 0 0 0 4 0" />
              </svg>
            </div>
            <h3 className="bento-title">إشعارات الأذان</h3>
          </div>
          <p className="bento-desc">تنبيه هادئ يوصلك إلى الصلاة في وقتها.</p>
        </div>

        <div className="bento-cell size-md" data-n="٠٤">
          <div className="bento-card-header">
            <div className="bento-icon">
              {/* Tasbih beads — custom */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="10" r="6.6" strokeDasharray="0.5 3.1" />
                <path d="M12 16.6v2.6" />
                <circle cx="12" cy="20.8" r="1.2" fill="currentColor" stroke="none" />
              </svg>
            </div>
            <h3 className="bento-title">الأذكار اليومية</h3>
          </div>
          <p className="bento-desc">وردك اليومي مع عدّاد بسيط ومتابعة مستمرة.</p>
        </div>

        <div className="bento-cell size-md" data-n="٠٥">
          <div className="bento-card-header">
            <div className="bento-icon">
              {/* Shield with arched keyhole — custom */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2.8l7 2.4v5.2c0 5.6-3.1 9.1-7 10.8-3.9-1.7-7-5.2-7-10.8V5.2z" />
                <path d="M12 9.4a1.9 1.9 0 0 1 1.9 1.9c0 1.5-1.9 3.4-1.9 3.4s-1.9-1.9-1.9-3.4A1.9 1.9 0 0 1 12 9.4z" />
              </svg>
            </div>
            <h3 className="bento-title">حصن المسلم</h3>
          </div>
          <p className="bento-desc">أدعية وأذكار مرتبة لأكثر من 67 حالًا يوميًا.</p>
        </div>

        <div className="bento-cell" data-n="٠٦">
          <div className="bento-card-header">
            <div className="bento-icon">
              {/* Khatam star — custom */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2.8l2.6 6.6 6.6 2.6-6.6 2.6-2.6 6.6-2.6-6.6-6.6-2.6 6.6-2.6z" />
                <circle cx="12" cy="12" r="1.8" />
              </svg>
            </div>
            <h3 className="bento-title">أسماء الله الحسنى</h3>
          </div>
          <p className="bento-desc">الأسماء الحسنى بمعانيها وتفاصيلها.</p>
        </div>

        <div className="bento-cell" data-n="٠٧">
          <div className="bento-card-header">
            <div className="bento-icon">
              {/* Mosque dome broadcasting — custom */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7 21v-7.5a5 5 0 0 1 10 0V21" />
                <path d="M12 5.5v3" />
                <path d="M4.2 9.5A8.4 8.4 0 0 1 6.8 5M19.8 9.5A8.4 8.4 0 0 0 17.2 5" />
                <path d="M4.5 21h15" />
              </svg>
            </div>
            <h3 className="bento-title">راديو إسلامي</h3>
          </div>
          <p className="bento-desc">تلاوات ومحطات إسلامية على مدار الساعة.</p>
        </div>

        <div className="bento-cell size-md" data-n="٠٨">
          <div className="bento-card-header">
            <div className="bento-icon">
              {/* Page with arched window — custom */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6.5 3h7.5l4 4v14h-11.5z" />
                <path d="M14 3v4h4" />
                <path d="M10 17.5v-4a2 2 0 0 1 4 0v4" />
              </svg>
            </div>
            <h3 className="bento-title">حديث اليوم</h3>
          </div>
          <p className="bento-desc">حديث يومي موثّق، يتجدد مع بداية كل يوم.</p>
        </div>

        <div className="bento-cell cta-cell" data-n="٠٩">
          <div className="bento-card-header">
            <div className="bento-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3v10.5m0 0l-4-4m4 4l4-4" />
                <path d="M4.5 15v4a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-4" />
              </svg>
            </div>
            <h3 className="bento-title">ابدأ رحلتك الآن</h3>
          </div>
          <p className="bento-desc">حمّل سَكِينَة ولتكن رفيقك الروحي في كل لحظة.</p>
        </div>

      </div>
    </section>
  )
}
