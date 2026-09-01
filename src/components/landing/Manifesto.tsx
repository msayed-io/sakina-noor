export default function Manifesto() {
  return (
    <section className="manifesto">
      <div className="manifesto-eyebrow reveal">من نحن</div>
      <h2 className="manifesto-title reveal">
        أكثر من تطبيق<br />
        <span className="accent">سكينة ليومك</span>
      </h2>
      <p className="manifesto-body reveal">
        كل ما تحتاجه لعبادتك اليومية، في تجربة واحدة هادئة ومركّزة. من <strong>الصلاة</strong> و<strong>الأذكار</strong> إلى <strong>القرآن</strong> و<strong>حصن المسلم</strong> — صُمّمت سكينة لتترك مساحة أكبر للطمأنينة.
      </p>

      <div className="manifesto-pillars reveal-stagger">
        <div className="pillar">
          <div className="pillar-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/>
              <path d="M12 6v6l4 2"/>
            </svg>
          </div>
          <h3 className="pillar-title">دقة المواقيت</h3>
          <p className="pillar-desc">مواقيت دقيقة تتكيّف مع موقعك ومذهبك، دون تعقيد.</p>
        </div>

        <div className="pillar">
          <div className="pillar-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </div>
          <h3 className="pillar-title">خشوع القرآن</h3>
          <p className="pillar-desc">مصحف واضح وتلاوات مختارة، لتقرأ وتستمع بخشوع.</p>
        </div>

        <div className="pillar">
          <div className="pillar-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="M9 12l2 2 4-4"/>
            </svg>
          </div>
          <h3 className="pillar-title">طمأنينة الأذكار</h3>
          <p className="pillar-desc">وردك اليومي، في مسار بسيط يساعدك على الاستمرار.</p>
        </div>
      </div>
    </section>
  )
}
