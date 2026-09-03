export default function Manifesto() {
  return (
    <section className="manifesto">
      <div className="manifesto-eyebrow reveal">من نحن</div>
      <h2 className="manifesto-title reveal">
        أكثر من تطبيق<br />
        <span className="accent">سَكِينَة ليومك</span>
      </h2>
      <p className="manifesto-body reveal">
        كل ما تحتاجه لعبادتك اليومية، في تجربة واحدة هادئة ومركّزة. من <strong>الصلاة</strong> و<strong>الأذكار</strong> إلى <strong>القرآن</strong> و<strong>حصن المسلم</strong> — صُمّمت سَكِينَة لتترك مساحة أكبر للطمأنينة.
      </p>

      <div className="manifesto-pillars reveal-stagger">
        <div className="pillar">
          <div className="pillar-icon">
            {/* Mihrab arch + clock hands — custom Sakina icon set */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 21V11a7 7 0 0 1 14 0v10" />
              <path d="M3 21h18" />
              <path d="M12 8.5V12l2.6 1.6" />
            </svg>
          </div>
          <h3 className="pillar-title">دقة المواقيت</h3>
          <p className="pillar-desc">مواقيت دقيقة تتكيّف مع موقعك ومذهبك، دون تعقيد.</p>
        </div>

        <div className="pillar">
          <div className="pillar-icon">
            {/* Open mushaf — custom */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 7.5C10.2 6.2 7.4 5.6 4 6.1v12.2c3.4-.5 6.2.1 8 1.4 1.8-1.3 4.6-1.9 8-1.4V6.1c-3.4-.5-6.2.1-8 1.4z" />
              <path d="M12 7.5v12.2" />
            </svg>
          </div>
          <h3 className="pillar-title">خشوع القرآن</h3>
          <p className="pillar-desc">مصحف واضح وتلاوات مختارة، لتقرأ وتستمع بخشوع.</p>
        </div>

        <div className="pillar">
          <div className="pillar-icon">
            {/* Tasbih beads — custom */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="10.5" r="6.8" strokeDasharray="0.5 3.2" />
              <path d="M12 17.3v2.2" />
              <circle cx="12" cy="21" r="1.1" fill="currentColor" stroke="none" />
            </svg>
          </div>
          <h3 className="pillar-title">طمأنينة الأذكار</h3>
          <p className="pillar-desc">وردك اليومي، في مسار بسيط يساعدك على الاستمرار.</p>
        </div>
      </div>
    </section>
  )
}
