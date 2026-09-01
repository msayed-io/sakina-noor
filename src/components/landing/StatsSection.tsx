export default function StatsSection() {
  return (
    <section className="stats">
      <div className="stats-header">
        <h2 className="stats-title reveal">أرقام <span className="accent">تطمئنك</span></h2>
        <p className="stats-subtitle reveal">محتوى موثوق ومراجع بعناية، يجمع كل ما تحتاجه روحك في مكان واحد.</p>
      </div>

      <div className="stats-grid reveal-stagger">
        <div className="stat-card">
          <div className="stat-value">50<span className="suffix">+</span></div>
          <div className="stat-label">قارئ عالمي</div>
          <div className="stat-sub">بروايات متعددة</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">114</div>
          <div className="stat-label">سورة قرآنية</div>
          <div className="stat-sub">بنص عثماني أصلي</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">67<span className="suffix">+</span></div>
          <div className="stat-label">تصنيف أذكار</div>
          <div className="stat-sub">من حصن المسلم</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">99</div>
          <div className="stat-label">اسم من أسماء الله</div>
          <div className="stat-sub">بمعانيها وتفاصيلها</div>
        </div>
      </div>
    </section>
  )
}
