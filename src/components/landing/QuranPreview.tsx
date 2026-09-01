'use client'

import { useEffect } from 'react'

export default function QuranPreview() {
  useEffect(() => {
    /* ================================================================
       MUSHAF AUDIO PLAYER — Surah Al-Fatiha
       Plays ayah-by-ayah with Sheikh Mishary Alafasy
       (منطق الملف الأصلي حرفيًا داخل useEffect)
       ================================================================ */
    const playBtn = document.getElementById('mushafPlay');
    const progressFill = document.getElementById('mushafProgress');
    const timeDisplay = document.getElementById('mushafTime');
    const ayahs = document.querySelectorAll('.mushaf-ayah');

    if(!playBtn || !progressFill || !timeDisplay) return;

    // Audio URLs (everyayah.com — Alafasy 128kbps)
    const audioUrls = [
      'https://everyayah.com/data/Alafasy_128kbps/001001.mp3',
      'https://everyayah.com/data/Alafasy_128kbps/001002.mp3',
      'https://everyayah.com/data/Alafasy_128kbps/001003.mp3',
      'https://everyayah.com/data/Alafasy_128kbps/001004.mp3',
      'https://everyayah.com/data/Alafasy_128kbps/001005.mp3',
      'https://everyayah.com/data/Alafasy_128kbps/001006.mp3',
      'https://everyayah.com/data/Alafasy_128kbps/001007.mp3'
    ];

    // ================================================================
    // التحسين الوحيد المطلوب: تحميل صامت مسبق لكل ملفات الآيات السبع
    // في الخلفية فور تحميل المكوّن (كاش المتصفح) — الانتقال بين الآيات
    // أثناء التشغيل يصبح فوريًا بدون أي انتظار تحميل. لا يغيّر أي سلوك
    // مرئي أو صوتي آخر.
    // ================================================================
    const prefetched = audioUrls.map((url) => {
      const el = new Audio();
      el.preload = 'auto';
      el.src = url;
      el.load();
      return el;
    });

    let currentAyah = 0;
    let isPlaying = false;
    let audio = new Audio();
    audio.preload = 'metadata';

    // Play icon SVG
    const playIcon = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
    const pauseIcon = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>';

    function highlightAyah(num: number){
      ayahs.forEach(a => a.classList.remove('playing'));
      if(ayahs[num-1]) ayahs[num-1].classList.add('playing');
    }

    function playAyah(num: number){
      if(num >= audioUrls.length){
        // Finished all ayahs
        stopPlayback();
        return;
      }
      currentAyah = num;
      highlightAyah(num + 1);
      audio.src = audioUrls[num];
      audio.play().catch(() => {});
    }

    function stopPlayback(){
      isPlaying = false;
      audio.pause();
      audio.currentTime = 0;
      playBtn!.innerHTML = playIcon;
      progressFill!.style.width = '0%';
      timeDisplay!.textContent = 'رواية حفص · اضغط للتشغيل';
      ayahs.forEach(a => a.classList.remove('playing'));
    }

    const onEnded = () => {
      playAyah(currentAyah + 1);
    };

    const onTimeUpdate = () => {
      if(audio.duration){
        const pct = (audio.currentTime / audio.duration) * 100;
        // Overall progress = (current ayah + progress within ayah) / total
        const overallPct = ((currentAyah + audio.currentTime / audio.duration) / audioUrls.length) * 100;
        progressFill!.style.width = overallPct + '%';

        const totalSec = Math.floor(audio.currentTime);
        const min = Math.floor(totalSec / 60);
        const sec = totalSec % 60;
        timeDisplay!.textContent = `آية ${currentAyah + 1} من 7 · ${min}:${sec.toString().padStart(2,'0')}`;
      }
    };

    const onPlayClick = () => {
      if(isPlaying){
        audio.pause();
        isPlaying = false;
        playBtn!.innerHTML = playIcon;
        timeDisplay!.textContent = 'متوقف · اضغط للاستئناف';
      } else {
        if(audio.paused && audio.currentTime > 0){
          audio.play().catch(() => {});
        } else {
          playAyah(0);
        }
        isPlaying = true;
        playBtn!.innerHTML = pauseIcon;
      }
    };

    // Click on ayah to play it
    const ayahClickHandlers: Array<[Element, () => void]> = [];
    ayahs.forEach((ayah, idx) => {
      const handler = () => {
        stopPlayback();
        playAyah(idx);
        isPlaying = true;
        playBtn!.innerHTML = pauseIcon;
      };
      ayah.addEventListener('click', handler);
      ayahClickHandlers.push([ayah, handler]);
    });

    audio.addEventListener('ended', onEnded);
    audio.addEventListener('timeupdate', onTimeUpdate);
    playBtn.addEventListener('click', onPlayClick);

    return () => {
      audio.pause();
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('timeupdate', onTimeUpdate);
      playBtn.removeEventListener('click', onPlayClick);
      ayahClickHandlers.forEach(([el, handler]) => el.removeEventListener('click', handler));
      prefetched.forEach(p => { p.src = ''; });
      audio.src = '';
      audio = new Audio();
    };
  }, [])

  return (
    <section className="quran-section" id="quran">
      <div className="quran-inner">
        <div className="quran-content">
          <div className="quran-eyebrow reveal">القرآن الكريم</div>
          <h2 className="quran-title reveal">خشوع <span className="accent">القرآن</span><br />في كل لحظة</h2>
          <p className="quran-body reveal">
            نص عثماني أصلي بخط المصحف، تلاوات لأكثر من 50 قارئ عالمي، تحكم كامل في التشغيل، تكرار الآيات، ومؤقت النوم. كل ما تحتاجه لخشوع تام مع كتاب الله.
          </p>
          <div className="quran-features reveal-stagger">
            <div className="quran-feature">
              <div className="quran-feature-check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12l5 5L20 7"/></svg>
              </div>
              <span>نص عثماني أصلي (KFGQPC Uthmanic Script)</span>
            </div>
            <div className="quran-feature">
              <div className="quran-feature-check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12l5 5L20 7"/></svg>
              </div>
              <span>أكثر من 50 قارئ عالمي بروايات متعددة</span>
            </div>
            <div className="quran-feature">
              <div className="quran-feature-check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12l5 5L20 7"/></svg>
              </div>
              <span>تحكم كامل في التشغيل من شاشة القفل</span>
            </div>
            <div className="quran-feature">
              <div className="quran-feature-check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12l5 5L20 7"/></svg>
              </div>
              <span>تكرار الآيات + مؤقت النوم + روائع المنشاوي</span>
            </div>
          </div>
        </div>

        <div className="quran-visual reveal">
          <div className="mushaf" id="mushaf">
            {/* Top navigation */}
            <div className="mushaf-nav">
              <span className="mushaf-nav-link">السابق</span>
              <span className="mushaf-nav-link">التالي</span>
            </div>

            {/* Surah name decorative frame */}
            <div className="mushaf-surah-frame">
              <div className="mushaf-surah-frame-inner">
                <span className="mushaf-surah-name">سورة الفاتحة</span>
              </div>
              {/* Arabesque ornaments */}
              <svg className="mushaf-ornament left" viewBox="0 0 60 30" fill="none">
                <path d="M55 15 Q45 5, 35 15 T15 15 Q10 12, 5 15" stroke="#bf994d" strokeWidth="1" fill="none"/>
                <circle cx="50" cy="15" r="2" fill="#bf994d"/>
                <circle cx="35" cy="15" r="1.5" fill="#bf994d"/>
                <circle cx="20" cy="15" r="1.5" fill="#bf994d"/>
                <path d="M45 10 Q40 5, 35 10" stroke="#bf994d" strokeWidth="0.8" fill="none"/>
                <path d="M45 20 Q40 25, 35 20" stroke="#bf994d" strokeWidth="0.8" fill="none"/>
              </svg>
              <svg className="mushaf-ornament right" viewBox="0 0 60 30" fill="none">
                <path d="M5 15 Q15 5, 25 15 T45 15 Q50 12, 55 15" stroke="#bf994d" strokeWidth="1" fill="none"/>
                <circle cx="10" cy="15" r="2" fill="#bf994d"/>
                <circle cx="25" cy="15" r="1.5" fill="#bf994d"/>
                <circle cx="40" cy="15" r="1.5" fill="#bf994d"/>
                <path d="M15 10 Q20 5, 25 10" stroke="#bf994d" strokeWidth="0.8" fill="none"/>
                <path d="M15 20 Q20 25, 25 20" stroke="#bf994d" strokeWidth="0.8" fill="none"/>
              </svg>
            </div>

            {/* Verses — each on its own line */}
            <div className="mushaf-verses" id="mushafText">
              <div className="mushaf-verse" data-ayah="1">
                <span className="mushaf-ayah-text mushaf-ayah" data-ayah="1">بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ</span>
                <span className="mushaf-ayah-num">١</span>
              </div>
              <div className="mushaf-verse" data-ayah="2">
                <span className="mushaf-ayah-text mushaf-ayah" data-ayah="2">ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ</span>
                <span className="mushaf-ayah-num">٢</span>
              </div>
              <div className="mushaf-verse" data-ayah="3">
                <span className="mushaf-ayah-text mushaf-ayah" data-ayah="3">ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ</span>
                <span className="mushaf-ayah-num">٣</span>
              </div>
              <div className="mushaf-verse" data-ayah="4">
                <span className="mushaf-ayah-text mushaf-ayah" data-ayah="4">مَـٰلِكِ يَوْمِ ٱلدِّينِ</span>
                <span className="mushaf-ayah-num">٤</span>
              </div>
              <div className="mushaf-verse" data-ayah="5">
                <span className="mushaf-ayah-text mushaf-ayah" data-ayah="5">إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ</span>
                <span className="mushaf-ayah-num">٥</span>
              </div>
              <div className="mushaf-verse" data-ayah="6">
                <span className="mushaf-ayah-text mushaf-ayah" data-ayah="6">ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ</span>
                <span className="mushaf-ayah-num">٦</span>
              </div>
              <div className="mushaf-verse" data-ayah="7">
                <span className="mushaf-ayah-text mushaf-ayah" data-ayah="7">صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّالِّينَ</span>
                <span className="mushaf-ayah-num">٧</span>
              </div>
            </div>

            {/* Page number footer */}
            <div className="mushaf-footer">
              <span className="mushaf-page-num">صفحة ١</span>
              <span className="mushaf-divider">|</span>
            </div>

            {/* Audio player */}
            <div className="mushaf-player">
              <div className="mushaf-play" id="mushafPlay">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </div>
              <div className="mushaf-reciter">
                <div className="mushaf-reciter-name">الشيخ مشاري راشد العفاسي</div>
                <div className="mushaf-reciter-meta" id="mushafTime">رواية حفص · اضغط للتشغيل</div>
                <div className="mushaf-progress"><div className="mushaf-progress-fill" id="mushafProgress"></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
