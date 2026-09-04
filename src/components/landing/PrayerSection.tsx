const prayers = [
  { name: 'المغرب', time: '6:15', period: 'م', icon: 'moon' },
  { name: 'العشاء', time: '7:45', period: 'م', icon: 'night' },
  { name: 'الفجر', time: '4:32', period: 'ص', icon: 'sunrise' },
  { name: 'الظهر', time: '12:08', period: 'م', icon: 'sun' },
]

function PrayerIcon({ type }: { type: string }) {
  if (type === 'moon') {
    return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.4 14.6A8.6 8.6 0 1 1 9.9 3.4a7 7 0 0 0 10.5 11.2z" /></svg>
  }
  if (type === 'sunrise') {
    return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3.5 18.5h17M7.8 18.5a4.2 4.2 0 0 1 8.4 0M12 6v2.4M5.9 9.6l1.5 1.5M18.1 9.6l-1.5 1.5" /></svg>
  }
  if (type === 'sun') {
    return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3.6" /><path d="M12 2.8v2.4m0 13.6v2.4M2.8 12h2.4m13.6 0h2.4M5.5 5.5l1.7 1.7m9.6 9.6 1.7 1.7m0-13-1.7 1.7M7.2 16.8l-1.7 1.7" /></svg>
  }
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19.4 13.6A7.6 7.6 0 1 1 10.1 3.6a6.2 6.2 0 0 0 9.3 10z" /><path d="M17.6 4.4l.6 1.4 1.4.6-1.4.6-.6 1.4-.6-1.4-1.4-.6 1.4-.6z" /></svg>
}

export default function PrayerSection() {
  return (
    <section className="prayer-section" id="prayer" aria-labelledby="prayer-title">
      <div className="prayer-inner">
        <div className="prayer-content">
          <div className="prayer-eyebrow reveal">مواقيت الصلاة</div>
          <h2 className="prayer-title reveal" id="prayer-title">صلاتك <span className="accent">في وقتها</span></h2>
          <p className="prayer-body reveal">
            مواقيت دقيقة حسب موقعك الجغرافي، مع دعم طرق الحساب والمذهب والتنبيهات الذكية، لتبقى صلاتك حاضرة في يومك دون تعقيد.
          </p>
          <div className="prayer-features reveal-stagger">
            <div className="prayer-feature"><div className="prayer-feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M5 12l5 5L20 7" /></svg></div><span>تحديد الموقع تلقائيًا مع إمكانية اختياره يدويًا</span></div>
            <div className="prayer-feature"><div className="prayer-feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M5 12l5 5L20 7" /></svg></div><span>خمس طرق حسابية وضبط تلقائي للمذهب</span></div>
            <div className="prayer-feature"><div className="prayer-feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M5 12l5 5L20 7" /></svg></div><span>تنبيهات أذان محلية وتذكير قبل الصلاة</span></div>
          </div>
        </div>

        <div className="prayer-visual reveal">
          <div className="prayer-dashboard" aria-label="لوحة مواقيت الصلاة">
            {/* UX audit item 3: the dashboard renders fixed sample data
                (city / date / times). This note states upfront that it is
                an illustrative in-app preview — the real app computes the
                times from the user's actual location. */}
            <div className="prayer-demo-note" role="note">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9.2" /><path d="M12 11v5.2" /><path d="M12 7.4h.01" /></svg>
              <span>عرض توضيحي — الأوقات داخل التطبيق حسب موقعك</span>
            </div>
            <div className="prayer-dashboard-head">
              <div><span className="prayer-dashboard-kicker">اليوم</span><strong>الأحد، 21 يونيو</strong></div>
              <div className="prayer-location"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>القاهرة</div>
            </div>

            <div className="prayer-current-card">
              <div className="prayer-current-copy"><span>الصلاة الحالية</span><strong>العصر</strong><small>متبقي على المغرب · 2:34</small></div>
              <div className="prayer-ring-wrap">
                <div className="prayer-ring-outer" aria-hidden="true" />
                <svg className="prayer-ring-svg" viewBox="0 0 100 100" aria-hidden="true"><defs><linearGradient id="prayerGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#deab65"/><stop offset="100%" stopColor="#9a6f3a"/></linearGradient></defs><circle className="prayer-ring-bg" cx="50" cy="50" r="42"/><circle className="prayer-ring-fill" cx="50" cy="50" r="42" strokeDasharray="264" strokeDashoffset="92" /></svg>
                <div className="prayer-ring-content"><span className="prayer-ring-time">3:45 <small>م</small></span><span className="prayer-ring-label">باقي</span></div>
              </div>
            </div>

            <div className="prayer-schedule-head"><span>المواقيت القادمة</span><span>اليوم</span></div>
            <div className="prayer-schedule" role="list">
              {prayers.map((prayer) => <div className="prayer-schedule-row" role="listitem" key={prayer.name}><div className="prayer-schedule-name"><span className="prayer-schedule-icon"><PrayerIcon type={prayer.icon} /></span><strong>{prayer.name}</strong></div><time>{prayer.time} <small>{prayer.period}</small></time></div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
