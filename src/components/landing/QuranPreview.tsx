'use client'

import { useEffect } from 'react'

const audioUrls = [
  'https://everyayah.com/data/Alafasy_128kbps/001001.mp3',
  'https://everyayah.com/data/Alafasy_128kbps/001002.mp3',
  'https://everyayah.com/data/Alafasy_128kbps/001003.mp3',
  'https://everyayah.com/data/Alafasy_128kbps/001004.mp3',
  'https://everyayah.com/data/Alafasy_128kbps/001005.mp3',
  'https://everyayah.com/data/Alafasy_128kbps/001006.mp3',
  'https://everyayah.com/data/Alafasy_128kbps/001007.mp3',
]

const mushafLines = [
  {
    line: 2,
    ariaLabel: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ',
    glyphs: ['ﱁ', 'ﱂ', 'ﱃ', 'ﱄ', 'ﱅ'],
    ayah: 1,
  },
  {
    line: 3,
    ariaLabel: 'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ',
    glyphs: ['ﱆ', 'ﱇ', 'ﱈ', 'ﱉ', 'ﱊ'],
    ayah: 2,
  },
  {
    line: 4,
    ariaLabel: 'ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ ۝ مَـٰلِكِ يَوْمِ ٱلدِّينِ',
    glyphs: ['ﱋ', 'ﱌ', 'ﱍ', 'ﱎ', 'ﱏ', 'ﱐ', 'ﱑ'],
    ayah: 3,
  },
  {
    line: 5,
    ariaLabel: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
    glyphs: ['ﱒ', 'ﱓ', 'ﱔ', 'ﱕ', 'ﱖ'],
    ayah: 5,
  },
  {
    line: 6,
    ariaLabel: 'ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ ۝ صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ',
    glyphs: ['ﱗ', 'ﱘ', 'ﱙ', 'ﱚ', 'ﱛ', 'ﱜ', 'ﱝ'],
    ayah: 6,
  },
  {
    line: 7,
    ariaLabel: 'عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ',
    glyphs: ['ﱞ', 'ﱟ', 'ﱠ', 'ﱡ', 'ﱢ'],
    ayah: 7,
  },
  {
    line: 8,
    ariaLabel: 'وَلَا ٱلضَّآلِّينَ',
    glyphs: ['ﱣ', 'ﱤ'],
    ayah: 7,
  },
]

export default function QuranPreview() {
  useEffect(() => {
    const playButton = document.getElementById('mushafPlay')
    const progressFill = document.getElementById('mushafProgress')
    const timeDisplay = document.getElementById('mushafTime')
    const ayahs = document.querySelectorAll<HTMLElement>('.qcf-preview-ayah')

    if (!playButton || !progressFill || !timeDisplay) return

    let currentAyah = 0
    let isPlaying = false
    const audio = new Audio()
    audio.preload = 'none'

    const playIcon = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>'
    const pauseIcon = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>'

    const highlightAyah = (ayah: number) => {
      ayahs.forEach((element) => element.classList.toggle('playing', Number(element.dataset.ayah) === ayah))
    }

    const stopPlayback = () => {
      isPlaying = false
      audio.pause()
      audio.removeAttribute('src')
      progressFill.style.width = '0%'
      timeDisplay.textContent = 'رواية حفص · اضغط للتشغيل'
      playButton.innerHTML = playIcon
      highlightAyah(0)
    }

    const playAyah = (ayah: number) => {
      if (ayah >= audioUrls.length) {
        stopPlayback()
        return
      }
      currentAyah = ayah
      highlightAyah(ayah + 1)
      audio.src = audioUrls[ayah]
      void audio.play().catch(() => {
        timeDisplay.textContent = 'اضغط للتشغيل مرة أخرى'
      })
    }

    const onEnded = () => playAyah(currentAyah + 1)
    const onTimeUpdate = () => {
      if (!audio.duration) return
      const overall = ((currentAyah + audio.currentTime / audio.duration) / audioUrls.length) * 100
      progressFill.style.width = `${overall}%`
      const totalSeconds = Math.floor(audio.currentTime)
      timeDisplay.textContent = `آية ${currentAyah + 1} من 7 · ${Math.floor(totalSeconds / 60)}:${String(totalSeconds % 60).padStart(2, '0')}`
    }
    const onPlayClick = () => {
      if (isPlaying) {
        audio.pause()
        isPlaying = false
        playButton.innerHTML = playIcon
        timeDisplay.textContent = 'متوقف · اضغط للاستئناف'
        return
      }
      if (audio.src && audio.currentTime > 0) {
        void audio.play().catch(() => {})
      } else {
        playAyah(0)
      }
      isPlaying = true
      playButton.innerHTML = pauseIcon
    }

    const ayahHandlers: Array<[Element, EventListener]> = []
    ayahs.forEach((ayah) => {
      const handler = () => {
        stopPlayback()
        playAyah(Math.max(Number(ayah.dataset.ayah ?? 1) - 1, 0))
        isPlaying = true
        playButton.innerHTML = pauseIcon
      }
      ayah.addEventListener('click', handler)
      ayahHandlers.push([ayah, handler])
    })

    playButton.addEventListener('click', onPlayClick)
    audio.addEventListener('ended', onEnded)
    audio.addEventListener('timeupdate', onTimeUpdate)

    return () => {
      stopPlayback()
      playButton.removeEventListener('click', onPlayClick)
      audio.removeEventListener('ended', onEnded)
      audio.removeEventListener('timeupdate', onTimeUpdate)
      ayahHandlers.forEach(([element, handler]) => element.removeEventListener('click', handler))
    }
  }, [])

  return (
    <section className="quran-section" id="quran" aria-labelledby="quran-title">
      <div className="quran-inner">
        <div className="quran-content">
          <div className="quran-eyebrow reveal">القرآن الكريم</div>
          <h2 className="quran-title reveal" id="quran-title">خشوع <span className="accent">القرآن</span><br />في كل لحظة</h2>
          <p className="quran-body reveal">
            عرض مصحف المدينة بصفحة مطابقة للمصدر، مع خط QCF الرسمي، تلاوات لأكثر من 50 قارئًا، وتحكم هادئ في التشغيل.
          </p>
          <div className="quran-features reveal-stagger">
            <div className="quran-feature"><div className="quran-feature-check"><span aria-hidden="true">✓</span></div><span>خط QCF v2 مطابق لتخطيط صفحة المصحف</span></div>
            <div className="quran-feature"><div className="quran-feature-check"><span aria-hidden="true">✓</span></div><span>توزيع الأسطر والآيات كما في مصحف المدينة</span></div>
            <div className="quran-feature"><div className="quran-feature-check"><span aria-hidden="true">✓</span></div><span>تشغيل اختياري يبدأ عند تفاعل المستخدم فقط</span></div>
            <div className="quran-feature"><div className="quran-feature-check"><span aria-hidden="true">✓</span></div><span>علامات الآيات مرسومة من Glyph المصحف الرسمي</span></div>
          </div>
        </div>

        <div className="quran-visual reveal">
          <div className="mushaf" id="mushaf" aria-label="صفحة سورة الفاتحة من مصحف المدينة">
            <div className="mushaf-nav" aria-hidden="true">
              <span className="mushaf-nav-link">السابق</span>
              <span className="mushaf-nav-link">التالي</span>
            </div>

            <div className="mushaf-surah-frame">
              <span className="mushaf-ornament-word" aria-hidden="true">001surah</span>
              <div className="mushaf-surah-frame-inner">
                <span className="mushaf-surah-name">سورة الفاتحة</span>
              </div>
              <span className="mushaf-ornament-word" aria-hidden="true">001surah</span>
            </div>

            <div className="qcf-preview-page" dir="rtl" lang="ar" aria-label="الصفحة الأولى من المصحف">
              {mushafLines.map((line) => (
                <div className="qcf-preview-line-wrap" key={line.line}>
                  <div className="qcf-preview-line" data-line={line.line} aria-label={line.ariaLabel}>
                    {line.glyphs.map((glyph, index) => (
                      <span
                        className="qcf-preview-glyph qcf-preview-ayah"
                        data-ayah={line.ayah}
                        aria-hidden="true"
                        key={`${line.line}-${index}`}
                      >
                        {glyph}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              <span className="qcf-preview-accessible-text">سورة الفاتحة: بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ، ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ، ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ، مَـٰلِكِ يَوْمِ ٱلدِّينِ، إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ، ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ، صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّالِّينَ.</span>
            </div>

            <div className="mushaf-footer"><span className="mushaf-page-num">صفحة ١</span><span className="mushaf-divider" aria-hidden="true" /></div>
            <div className="mushaf-player" aria-label="مشغل تلاوة سورة الفاتحة">
              <button className="mushaf-play" id="mushafPlay" type="button" aria-label="تشغيل تلاوة سورة الفاتحة">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
              </button>
              <div className="mushaf-reciter"><div className="mushaf-reciter-name">الشيخ مشاري راشد العفاسي</div><div className="mushaf-reciter-meta" id="mushafTime">رواية حفص · اضغط للتشغيل</div><div className="mushaf-progress"><div className="mushaf-progress-fill" id="mushafProgress" /></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
