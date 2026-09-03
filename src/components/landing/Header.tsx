'use client'

import { useEffect, useState } from 'react'

const links = [
  { href: '#features', label: 'المميزات' },
  { href: '#quran', label: 'القرآن' },
  { href: '#azkar', label: 'الأذكار' },
  { href: '#prayer', label: 'الصلاة' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    /* Nav scrolled state — نفس المنطق الأصلي */
    const nav = document.getElementById('nav')
    if (!nav) return
    let ticking = false

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          nav.classList.toggle('scrolled', window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <nav
      className={`nav cut-crystal-capsule${open ? ' menu-open' : ''}`}
      id="nav"
      aria-label="التنقل الرئيسي"
    >
      <a href="#" className="nav-brand">
        <span className="nav-brand-mark">س</span>
        <span>سَكِينَة</span>
      </a>
      <div className="nav-links">
        {links.map((link) => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
      </div>
      <div className="nav-actions">
        <a href="#download" className="nav-cta">
          <span>حمّل التطبيق</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </a>
        <button
          type="button"
          className="nav-menu-btn"
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="nav-menu" id="nav-menu">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
          ))}
          <a href="#download" onClick={() => setOpen(false)}>حمّل التطبيق</a>
        </div>
      )}
    </nav>
  )
}
