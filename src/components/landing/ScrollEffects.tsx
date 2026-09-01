'use client'

import { useEffect } from 'react'

export default function ScrollEffects() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const revealElements = document.querySelectorAll('.reveal, .reveal-stagger')

    if (prefersReducedMotion) {
      revealElements.forEach((element) => element.classList.add('visible'))
    } else {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' })

      revealElements.forEach((element) => observer.observe(element))

      return () => observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const handlers: Array<[Element, EventListener]> = []
    const behavior: ScrollBehavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      const handler = (event: Event) => {
        const href = link.getAttribute('href')
        if (!href || href.length <= 1) return

        const target = document.querySelector(href)
        if (!target) return

        event.preventDefault()
        const top = target.getBoundingClientRect().top + window.scrollY - 80
        window.scrollTo({ top, behavior })
      }

      link.addEventListener('click', handler)
      handlers.push([link, handler])
    })

    return () => {
      handlers.forEach(([element, handler]) => element.removeEventListener('click', handler))
    }
  }, [])

  return null
}
