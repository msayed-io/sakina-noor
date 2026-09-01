# QCF v2 research notes

## Official source

- Quran Foundation font-rendering guide: https://api-docs.quran.foundation/docs/tutorials/fonts/font-rendering/
- Official QCF v2 CDN base documented by Quran Foundation: https://verses.quran.foundation/fonts/quran/hafs/v2/woff2/p{PAGE}.woff2
- The guide states that QCF fonts are page-specific, with one font per Mushaf page, and that rendering uses `code_v2` glyph data with `line_number` grouping.
- The guide states that QCF glyph codes should be rendered using the glyph value rather than ordinary `text_uthmani` layout, and that page fonts use `font-display: block` to avoid layout jumps.

## Reference repository findings

- Source repositories inspected read-only: https://github.com/msayed-io/sakina-pro and https://github.com/msayed-io/sakina-qcf
- `sakina-pro` contains QCF v2 page fonts and the `sura_names.woff2` font used for the surah ornament.
- `sakina-qcf` documents 604 page-specific QCF v2 WOFF2 files and SuraNames ligatures.
- The landing page only needs page 1 for the Al-Fatiha preview, so only `p001.woff2` and `sura_names.woff2` are copied into the landing project. The source repositories were not modified.
- Official API response used for Al-Fatiha page 1: `https://api.quran.com/api/v4/verses/by_chapter/1?words=true&word_fields=code_v2,text_uthmani&per_page=7`
- The response grouped Al-Fatiha words on page 1 across QCF lines 2–8 and supplied the glyph sequence used by the preview.

## Local visual review

The local Next.js page rendered successfully with the new QCF glyph sequence and the SuraNames ornament. The page title is `سكينة | رفيقك الروحي اليومي`, the navigation and hero remain intact, and the section exposes the Quran preview with page number, reciter control, and accessible Arabic text. The desktop screenshot showed no visible overflow in the hero; the Quran preview is implemented as a page-like surface inside the existing landing layout rather than as a detached card.

## Card visual review

After the card-system pass, the local page shows the shorter manifesto copy and a more restrained feature-card hierarchy. The featured Quran card keeps the deep ink treatment, the download CTA keeps a controlled honey gradient, and the remaining cards share a consistent glass surface, thin warm border, rounded radius, and lift-on-hover behavior. The layout remains responsive through the existing one-column mobile breakpoint.
