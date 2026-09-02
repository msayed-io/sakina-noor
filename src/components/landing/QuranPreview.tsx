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

const pageLines = [
  {
    line: 1,
    type: 'surah-header' as const,
    text: 'سُورَةُ الفَاتِحَةِ',
    ariaLabel: 'سورة الفاتحة',
  },
  {
    line: 2,
    type: 'text' as const,
    words: [
      ['بِسْمِ', 'ﱁ', '1'], ['ٱللَّهِ', 'ﱂ', '1'], ['ٱلرَّحْمَـٰنِ', 'ﱃ', '1'], ['ٱلرَّحِيمِ', 'ﱄ', '1'], ['١', 'ﱅ', '1'],
    ],
    ariaLabel: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ، الآية الأولى',
  },
  {
    line: 3,
    type: 'text' as const,
    words: [
      ['ٱلْحَمْدُ', 'ﱆ', '2'], ['لِلَّهِ', 'ﱇ', '2'], ['رَبِّ', 'ﱈ', '2'], ['ٱلْعَـٰلَمِينَ', 'ﱉ', '2'], ['٢', 'ﱊ', '2'],
    ],
    ariaLabel: 'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ، الآية الثانية',
  },
  {
    line: 4,
    type: 'text' as const,
    words: [
      ['ٱلرَّحْمَـٰنِ', 'ﱋ', '3'], ['ٱلرَّحِيمِ', 'ﱌ', '3'], ['٣', 'ﱍ', '3'], ['مَـٰلِكِ', 'ﱎ', '4'], ['يَوْمِ', 'ﱏ', '4'], ['ٱلدِّينِ', 'ﱐ', '4'], ['٤', 'ﱑ', '4'],
    ],
    ariaLabel: 'ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ، مَـٰلِكِ يَوْمِ ٱلدِّينِ، الآيتان الثالثة والرابعة',
  },
  {
    line: 5,
    type: 'text' as const,
    words: [
      ['إِيَّاكَ', 'ﱒ', '5'], ['نَعْبُدُ', 'ﱓ', '5'], ['وَإِيَّاكَ', 'ﱔ', '5'], ['نَسْتَعِينُ', 'ﱕ', '5'], ['٥', 'ﱖ', '5'], ['ٱهْدِنَا', 'ﱗ', '6'],
    ],
    ariaLabel: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ، ٱهْدِنَا',
  },
  {
    line: 6,
    type: 'text' as const,
    words: [
      ['ٱلصِّرَٰطَ', 'ﱘ', '6'], ['ٱلْمُسْتَقِيمَ', 'ﱙ', '6'], ['٦', 'ﱚ', '6'], ['صِرَٰطَ', 'ﱛ', '7'], ['ٱلَّذِينَ', 'ﱜ', '7'], ['أَنْعَمْتَ', 'ﱝ', '7'],
    ],
    ariaLabel: 'ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ، صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ',
  },
  {
    line: 7,
    type: 'text' as const,
    words: [
      ['عَلَيْهِمْ', 'ﱞ', '7'], ['غَيْرِ', 'ﱟ', '7'], ['ٱلْمَغْضُوبِ', 'ﱠ', '7'], ['عَلَيْهِمْ', 'ﱡ', '7'],
    ],
    ariaLabel: 'عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ',
  },
  {
    line: 8,
    type: 'text' as const,
    words: [
      ['وَلَا', 'ﱢ', '7'], ['ٱلضَّآلِّينَ', 'ﱣ', '7'], ['٧', 'ﱤ', '7'],
    ],
    ariaLabel: 'وَلَا ٱلضَّآلِّينَ، الآية السابعة',
  },
]

export default function QuranPreview() {
  useEffect(() => {
    const playButton = document.getElementById('mushafPlay')
    const progressFill = document.getElementById('mushafProgress')
    const timeDisplay = document.getElementById('mushafTime')
    const words = document.querySelectorAll<HTMLElement>('.qcf-preview-word')

    if (!playButton || !progressFill || !timeDisplay) return

    let currentAyah = 0
    let isPlaying = false
    const audio = new Audio()
    audio.preload = 'none'

    const playIcon = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>'
    const pauseIcon = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>'

    const highlightAyah = (ayah: number) => {
      words.forEach((word) => word.classList.toggle('qcf-preview-playing', Number(word.dataset.ayah) === ayah))
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
      void audio.play().catch(() => { timeDisplay.textContent = 'اضغط للتشغيل مرة أخرى' })
    }

    const onEnded = () => playAyah(currentAyah + 1)
    const onTimeUpdate = () => {
      if (!audio.duration) return
      const overall = ((currentAyah + audio.currentTime / audio.duration) / audioUrls.length) * 100
      progressFill.style.width = `${overall}%`
      const seconds = Math.floor(audio.currentTime)
      timeDisplay.textContent = `آية ${currentAyah + 1} من 7 · ${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`
    }
    const onPlayClick = () => {
      if (isPlaying) {
        audio.pause()
        isPlaying = false
        playButton.innerHTML = playIcon
        timeDisplay.textContent = 'متوقف · اضغط للاستئناف'
        return
      }
      if (audio.src && audio.currentTime > 0) void audio.play().catch(() => {})
      else playAyah(0)
      isPlaying = true
      playButton.innerHTML = pauseIcon
    }

    const wordHandlers: Array<[Element, EventListener]> = []
    words.forEach((word) => {
      const handler = () => {
        stopPlayback()
        playAyah(Math.max(Number(word.dataset.ayah ?? 1) - 1, 0))
        isPlaying = true
        playButton.innerHTML = pauseIcon
      }
      word.addEventListener('click', handler)
      wordHandlers.push([word, handler])
    })

    playButton.addEventListener('click', onPlayClick)
    audio.addEventListener('ended', onEnded)
    audio.addEventListener('timeupdate', onTimeUpdate)

    return () => {
      stopPlayback()
      playButton.removeEventListener('click', onPlayClick)
      audio.removeEventListener('ended', onEnded)
      audio.removeEventListener('timeupdate', onTimeUpdate)
      wordHandlers.forEach(([word, handler]) => word.removeEventListener('click', handler))
    }
  }, [])

  return (
    <section className="quran-section" id="quran" aria-labelledby="quran-title">
      <div className="quran-inner">
        <div className="quran-content">
          <div className="quran-eyebrow reveal">القرآن الكريم</div>
          <h2 className="quran-title reveal" id="quran-title">خشوع <span className="accent">القرآن</span><br />في كل لحظة</h2>
          <p className="quran-body reveal">صفحة المصحف كما هي في سَكِينَة: خط عثماني أصلي، تخطيط مضبوط، وتلاوة تبدأ عندما تختارها.</p>
          <div className="quran-features reveal-stagger">
            <div className="quran-feature"><div className="quran-feature-check"><span aria-hidden="true">✓</span></div><span>صفحة أصلية من مصحف المدينة</span></div>
            <div className="quran-feature"><div className="quran-feature-check"><span aria-hidden="true">✓</span></div><span>برواز السورة الأصلي من التطبيق</span></div>
            <div className="quran-feature"><div className="quran-feature-check"><span aria-hidden="true">✓</span></div><span>خط QCF v2 لكل كلمة في موضعها</span></div>
            <div className="quran-feature"><div className="quran-feature-check"><span aria-hidden="true">✓</span></div><span>تلاوة اختيارية بلا تحميل مسبق</span></div>
          </div>
        </div>

        <div className="quran-visual reveal">
          <div className="mushaf-preview-shell" aria-label="صفحة المصحف الأصلية لسورة الفاتحة">
            <div className="qcf-page qcf-opening-page" data-mushaf-page="1" dir="rtl" style={{ fontFamily: 'QCF_P001', ['--qcf-font-size' as string]: '18px' }}>
              <div className="qcf-opening-content">
                {pageLines.map((line) => line.type === 'surah-header' ? (
                  <div key={line.line} className="surah-header-line">
                    <div className="surah-frame" aria-label={line.ariaLabel}>
                      <img className="surah-frame__art" src="/images/quran/surah-header-frame.webp" width="2400" height="775" alt="" aria-hidden="true" loading="eager" decoding="sync" fetchPriority="high" draggable={false} />
                      <span className="surah-frame__title" dir="rtl">{line.text}</span>
                    </div>
                  </div>
                ) : (
                  <div key={line.line} className="qcf-line qcf-centered" aria-label={line.ariaLabel}>
                    {line.words.map(([word, glyph, ayah], index) => (
                      <span key={`${line.line}-${index}`} className={`qcf-preview-word qcf-word ${index === line.words.length - 1 && (word.length === 1 || /[٠-٩]$/.test(word)) ? 'qcf-end-mark' : ''}`} data-ayah={ayah} aria-hidden="true">{glyph}</span>
                    ))}
                  </div>
                ))}
              </div>
              <div className="qcf-opening-folio" aria-label="رقم الصفحة ١">١</div>
            </div>
            <p className="qcf-preview-accessible-text">سورة الفاتحة: بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ، ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ، ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ، مَـٰلِكِ يَوْمِ ٱلدِّينِ، إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ، ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ، صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ.</p>
            <div className="mushaf-player" aria-label="مشغل تلاوة سورة الفاتحة">
              <button className="mushaf-play" id="mushafPlay" type="button" aria-label="تشغيل تلاوة سورة الفاتحة"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg></button>
              <div className="mushaf-reciter"><div className="mushaf-reciter-name">الشيخ مشاري راشد العفاسي</div><div className="mushaf-reciter-meta" id="mushafTime">رواية حفص · اضغط للتشغيل</div><div className="mushaf-progress"><div className="mushaf-progress-fill" id="mushafProgress" /></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
