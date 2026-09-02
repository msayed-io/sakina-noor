const prayers = [
  { name: 'المغرب', time: '6:15', period: 'م', icon: 'moon' },
  { name: 'العشاء', time: '7:45', period: 'م', icon: 'night' },
  { name: 'الفجر', time: '4:32', period: 'ص', icon: 'sunrise' },
  { name: 'الظهر', time: '12:08', period: 'م', icon: 'sun' },
]

function PrayerIcon({ type }: { type: string }) {
  if (type === 'moon') {
    return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M20.3 15.5A8.5 8.5 0 0 1 8.5 3.7 8.5 8.5 0 1 0 20.3 15.5Z" /></svg>
  }
  if (type === 'sunrise') {
    return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4 18h16M6 14a6 6 0 0 1 12 0M12 3v3m-6.4.6 2.1 2.1m10.6-2.1-2.1 2.1" /></svg>
  }
  if (type === 'sun') {
    return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="12" cy="12" r="3.5" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4m0-14.2-1.4 1.4M6.3 17.7l-1.4 1.4" /></svg>
  }
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M12 3a9 9 0 0 0 0 18 9 9 0 0 0 0-18Z" /><path d="M3 12h18M12 3c2.2 2.5 3.2 5.5 3.2 9S14.2 18.5 12 21c-2.2-2.5-3.2-5.5-3.2-9S9.8 5.5 12 3Z" /></svg>
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
          <div className="prayer-dashboard cut-crystal-panel" aria-label="لوحة مواقيت الصلاة">
            <div className="prayer-dashboard-head">
              <div><span className="prayer-dashboard-kicker">اليوم</span><strong>الأحد، 21 يونيو</strong></div>
              <div className="prayer-location"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>القاهرة</div>
            </div>

            <div className="prayer-current-card cut-crystal-satin">
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
