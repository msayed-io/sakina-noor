'use client'

import { useEffect } from 'react'

/*
 * السلوكيات العامة للمستند الواحد (نُقلت حرفيًا من <script> الملف الأصلي):
 * 1) Scroll Reveal عبر IntersectionObserver
 * 2) Smooth scroll لكل روابط # مع إزاحة 80px
 */
export default function ScrollEffects() {
  useEffect(() => {
    /* Scroll Reveal */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
      observer.observe(el);
    });

    /* Smooth scroll */
    const smoothHandlers: Array<[Element, EventListener]> = [];
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      const handler = (e: Event) => {
        const href = link.getAttribute('href');
        if(href && href.length > 1){
          const target = document.querySelector(href);
          if(target){
            e.preventDefault();
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
          }
        }
      };
      link.addEventListener('click', handler);
      smoothHandlers.push([link, handler]);
    });

    return () => {
      observer.disconnect();
      smoothHandlers.forEach(([el, handler]) => el.removeEventListener('click', handler));
    };
  }, [])

  return null
}
