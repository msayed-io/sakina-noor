# Exact Mushaf Page Review

The original `surah-header-frame.webp` from Sakina Pro was copied byte-for-byte into Sakina Noor; its SHA-256 matches the source asset. The local rendered preview confirms that the exact ornate frame image is present.

The visual review also exposed a layout issue in the first implementation of the exact page: the QCF page is currently too wide relative to the two-column landing section, which makes the 17em × 27.75em page ratio collapse visually and places the Arabic lines below the frame instead of inside the intended page shell. The next fix must preserve the source renderer's structure and aspect ratio, but constrain the landing preview to a portrait page width so the eight opening rows remain inside the same white page beneath the original frame/title row.

The source renderer's authoritative values are: `.qcf-page` width `17em`, height `27.75em`, `font-size: 18px`; opening content uses eight grid rows of `1.85em` and height `14.8em`; the surah frame image uses source dimensions `2400 × 775` and is positioned inside the first page row. The landing implementation should use these values without inventing a separate cartouche or manually drawing a replacement frame.

## Corrected visual review

After the boundary fix, the local screenshot shows a portrait QCF page with the original ornate surah-frame image inside the page, the vocalized title centered inside that frame, and all Fatiha glyph rows contained within the same page surface. The player remains outside the page as an independent landing-page control. The source frame asset and source title font remain byte-for-byte identical to Sakina Pro.
