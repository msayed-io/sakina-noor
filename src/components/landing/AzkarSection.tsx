'use client'

/*
 * ملاحظة توثيقية: في الملف الأصلي لا يوجد أي JavaScript لعداد الأذكار —
 * شبكة الأذكار ثابتة تمامًا (البطاقات تعرض عدد الأذكار كنص فقط)،
 * والحركات الوحيدة هي reveal-stagger (تُدار مركزيًا عبر ScrollEffects)
 * وتأثيرات hover في CSS. النقل هنا حرفي 100% بنفس المظهر والسلوك.
 *
 * الأيقونات: مكتبة lucide-react بنفس أيقونات تبويب الأذكار في تطبيق
 * سَكِينَة الأصلي (AzkarTabScreen.tsx): Sun / Moon / MoonStar / Bell /
 * Home / Utensils / Car / Shield — بمقاسات صغيرة دقيقة ولون العلامة.
 */
import {
  Sun,
  Moon,
  MoonStar,
  Bell,
  Home,
  Utensils,
  Car,
  Shield,
} from 'lucide-react'

const iconProps = { size: 18, strokeWidth: 2, 'aria-hidden': true } as const

export default function AzkarSection() {
  return (
    <section className="azkar-section" id="azkar">
      <div className="azkar-header">
        <div className="azkar-eyebrow reveal">الأذكار والحصن</div>
        <h2 className="azkar-title reveal">أذكارك <span className="accent">يومياً</span></h2>
        <p className="azkar-subtitle reveal">أذكار الصباح والمساء، حصن المسلم كاملاً، أسماء الله الحسنى، وعدّاد ذكي يرافق عبادتك في كل وقت.</p>
      </div>

      <div className="azkar-grid reveal-stagger">

        <div className="azkar-card cut-crystal-panel">
          <div className="azkar-icon">
            <Sun {...iconProps} />
          </div>
          <div className="azkar-name">أذكار الصباح</div>
          <div className="azkar-count">23 ذكر</div>
        </div>

        <div className="azkar-card cut-crystal-panel">
          <div className="azkar-icon">
            <Moon {...iconProps} />
          </div>
          <div className="azkar-name">أذكار المساء</div>
          <div className="azkar-count">23 ذكر</div>
        </div>

        <div className="azkar-card cut-crystal-panel">
          <div className="azkar-icon">
            <MoonStar {...iconProps} />
          </div>
          <div className="azkar-name">أذكار النوم</div>
          <div className="azkar-count">15 ذكر</div>
        </div>

        <div className="azkar-card cut-crystal-panel">
          <div className="azkar-icon">
            <Bell {...iconProps} />
          </div>
          <div className="azkar-name">بعد الصلاة</div>
          <div className="azkar-count">12 ذكر</div>
        </div>

        <div className="azkar-card cut-crystal-panel">
          <div className="azkar-icon">
            <Home {...iconProps} />
          </div>
          <div className="azkar-name">دخول المنزل</div>
          <div className="azkar-count">3 ذكر</div>
        </div>

        <div className="azkar-card cut-crystal-panel">
          <div className="azkar-icon">
            <Utensils {...iconProps} />
          </div>
          <div className="azkar-name">الطعام والشراب</div>
          <div className="azkar-count">5 ذكر</div>
        </div>

        <div className="azkar-card cut-crystal-panel">
          <div className="azkar-icon">
            <Car {...iconProps} />
          </div>
          <div className="azkar-name">السفر والركوب</div>
          <div className="azkar-count">8 ذكر</div>
        </div>

        <div className="azkar-card cut-crystal-panel">
          <div className="azkar-icon">
            <Shield {...iconProps} />
          </div>
          <div className="azkar-name">الحفظ والتحصين</div>
          <div className="azkar-count">10 ذكر</div>
        </div>

      </div>
    </section>
  )
}
