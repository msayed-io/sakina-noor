export default function Manifesto() {
  return (
    <section className="manifesto">
      <div className="manifesto-eyebrow reveal">من نحن</div>
      <h2 className="manifesto-title reveal">
        ليس مجرد تطبيق<br />
        <span className="accent">بل رفيقك الروحي</span>
      </h2>
      <p className="manifesto-body reveal">
        سكينة وُلدت لتكون رفيقك اليومي في رحلتك نحو الله. صُمّم بتأنٍّ وإتقان، يحمل بين جنباته كل ما تحتاجه روحك من <strong>صلوات دقيقة</strong>، <strong>أذكار يومية</strong>، <strong>قرآن كريم بصوت نخبة القرّاء</strong>، و<strong>حصن المسلم</strong> بأكمله. كل ميزة صُممت بروح الطمأنينة، لتكون سكينتك في كل لحظة.
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
          <p className="pillar-desc">مواقيت الصلاة بدقة عالية حسب موقعك الجغرافي، مع دعم 5 طرق حسابية وضبط تلقائي للمذهب.</p>
        </div>

        <div className="pillar">
          <div className="pillar-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </div>
          <h3 className="pillar-title">خشوع القرآن</h3>
          <p className="pillar-desc">قراءة وتلاوة بنص عثماني أصلي، مع أكثر من 50 قارئ عالمي وتحكم كامل في التشغيل.</p>
        </div>

        <div className="pillar">
          <div className="pillar-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="M9 12l2 2 4-4"/>
            </svg>
          </div>
          <h3 className="pillar-title">طمأنينة الأذكار</h3>
          <p className="pillar-desc">أذكار الصباح والمساء، حصن المسلم كاملاً، أسماء الله الحسنى، وعدّاد ذكي يرافق عبادتك.</p>
        </div>
      </div>
    </section>
  )
}
