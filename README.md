# Meherab Hossen portfolio

Static portfolio for https://meherabhossen.pages.dev/.
Updated 20 November 2026. No installation or build step is needed for the website.

## Preview

Open index.html, or serve this folder with `python -m http.server 4173` and visit
http://localhost:4173. A web server gives the closest match to the deployed site.

## Source files

- Content and video list: index.html
- Base components: assets/css/style.css
- Existing theme: assets/css/theme.css
- Review refinements and mobile layout: assets/css/refinements.css
- Navigation, drawer, theme and email-copy behaviour: assets/js/main.js
- Downloadable CV: assets/files/Meherab Hossen CV.pdf
- CV image previews: assets/resume/cv-1.png and cv-2.png

Light mode starts on each visit; visitors can select the plum/lavender dark theme.
Personal and work email links use mailto:, with a separate copy-address button.
Clipboard access requires a supported secure context; a copy-by-selection fallback is shown otherwise.

## Publishing

The existing Cloudflare Pages project uses Direct Upload. Publish the complete
website contents to the existing `meherabhossen` project, with index.html at the
archive root. No build command or DNS change is required.

GitHub and Cloudflare are separate deployments in the current setup. Updating
GitHub alone does not update the Cloudflare site. For future automatic releases,
configure a CI workflow using an appropriately scoped Cloudflare credential.

## Content maintenance

The conference titles and author lists in the CV and on the website match the
supplied manuscripts. The CV portfolio URL and its hyperlinks use the Cloudflare
address. The university name is written in full throughout the website and CV.

When updating the CV, replace the PDF and regenerate both image previews together.
Keep publication statuses explicit and update them only when the status changes.
See CHANGELOG.md for this update and assets/img/PROJECT-SOURCES.md for figure sources.

## PCM contours and animation

The Alnakeeb subsection now displays the supplied melt-front montage and animation; its
validation plot uses the supplied Fluent/OpenFOAM comparison. The two montage
attachments were identical, so the montage is displayed once.

The Alnakeeb animation is a web-optimized copy of the owner-supplied
PCM_melting_10s.mp4, with the same frames, timing and 1920×1080 resolution,
playback controls and a poster frame from the supplied video.
The caption credits the animation to Md. Meherab Hossen, as confirmed by the owner.
The Al Siyabi subsection displays the supplied PCM melting animation and the updated
Fluent/OpenFOAM 14 liquid-fraction comparison. The reference curve is labeled
extrapolated; its source is the numerical mesh-independence plot in Figure 4 of
Al Siyabi et al. (2019). See the research section for the comparison scope.

Media files:

- Alnakeeb: `assets/img/sl_opi_1.png` and `assets/videos/sl_opi_1.mp4`.
- Al Siyabi graph: `assets/img/siyabi-liquid-fraction.svg`, with `assets/img/k1.png` as the displayed raster copy.
- Al Siyabi animation: `assets/videos/siyabi-pcm-melting.mp4`, with `assets/img/siyabi-melting-poster.jpg` as its poster.

The video list is configured in `index.html`; PCM media is configured in
`assets/js/pcm-media.js`. The Al Siyabi animation also appears directly in the
HTML, and the PCM renderer preserves existing media without duplicating it.
Keep the initial Videos cards aligned with `PORTFOLIO_VIDEOS` when changing the list.

## Research evidence

See [RESEARCH_EVIDENCE.md](RESEARCH_EVIDENCE.md) for the validation figures, compared quantities, benchmark references, public-material inventory, and manuscript author lists. The repository currently hosts the portfolio source and public results; it does not contain a reproducible CFD-case release.


## Particle-settling validation

The research page includes the 0.5% PAC Cross/Carreau benchmark against Awad et al. (2021). The new plot uses the owner-supplied comparison data. The displayed maximum relative deviations refer to ANSYS Fluent versus the corresponding published CFD model values over 2-5 mm particles. See RESEARCH_EVIDENCE.md for the scope and error definition.
