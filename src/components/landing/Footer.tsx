export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-brand-mark">
            <span className="mark">س</span>
            <span>سكينة</span>
          </div>
          <p className="footer-brand-desc">رفيقك الروحي اليومي. صلوات، أذكار، قرآن، وحصن المسلم في تطبيق واحد بتصميم هادئ يليق بخشوعك.</p>
        </div>
        <div>
          <div className="footer-col-title">التطبيق</div>
          <div className="footer-links">
            <a href="#features">المميزات</a>
            <a href="#quran">القرآن</a>
            <a href="#azkar">الأذكار</a>
            <a href="#prayer">مواقيت الصلاة</a>
          </div>
        </div>
        <div>
          <div className="footer-col-title">حمّل التطبيق</div>
          <div className="footer-links">
            <a href="#download">App Store</a>
            <a href="#download">Google Play</a>
            <a href="#">سياسة الخصوصية</a>
            <a href="#">تواصل معنا</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copyright">© 2026 سكينة. جميع الحقوق محفوظة.</div>
        <div className="footer-arabic">أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ</div>
      </div>
    </footer>
  )
}
