# Font verification

The production preview on port 3001 was checked after removing `next/font/google` from `src/app/layout.tsx`.

- No `next/font`, `fonts.google`, `googleapis`, `gstatic`, or old Cairo/Amiri references remain in `src` or `public`.
- Official local UI font files are served from `/fonts/sakina/`.
- `Thmanyah Sans` and `Thmanyah Serif Text` are loaded successfully in the browser.
- `Thmanyah Serif Display` is requested from the local Bold/Black files and is used by the brand and headings; a generic `document.fonts.check` with an unspecified weight can report false when the requested weight is not the declared face, so weight-specific loading should be used for validation.
- `QCF_P001` remains loaded from `/fonts/qcf/p001.woff2` and remains scoped to `.qcf-page`, `.qcf-line`, and `.qcf-word`; it was not replaced by any UI font.
- The browser resource list contains only localhost font URLs and no Google font URL.
