'use client'

/*
 * بطاقات الأذكار اليومية — نفس فلسفة بطاقات «كل ما تحتاجه روحك» (البنتو):
 * سطح زجاجي cut-crystal-panel، رأس فيه أيقونة + العنوان في صف واحد،
 * ثم السطر الوصفي (العدد) تحته. لا قُبّة محراب ولا فجوات.
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
  type LucideIcon,
} from 'lucide-react'

type AzkarCard = {
  name: string
  count: string
  icon: LucideIcon
}

const cards: AzkarCard[] = [
  { name: 'أذكار الصباح', count: '23 ذكر', icon: Sun },
  { name: 'أذكار المساء', count: '23 ذكر', icon: Moon },
  { name: 'أذكار النوم', count: '15 ذكر', icon: MoonStar },
  { name: 'بعد الصلاة', count: '12 ذكر', icon: Bell },
  { name: 'دخول المنزل', count: '3 ذكر', icon: Home },
  { name: 'الطعام والشراب', count: '5 ذكر', icon: Utensils },
  { name: 'السفر والركوب', count: '8 ذكر', icon: Car },
  { name: 'الحفظ والتحصين', count: '10 ذكر', icon: Shield },
]

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
        {cards.map(({ name, count, icon: Icon }) => (
          <div className="azkar-card cut-crystal-panel" key={name}>
            <div className="azkar-card-head">
              <div className="azkar-icon">
                <Icon {...iconProps} />
              </div>
              <div className="azkar-name">{name}</div>
            </div>
            <div className="azkar-count">{count}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
