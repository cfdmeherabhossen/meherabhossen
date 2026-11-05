# Meherab Hossen portfolio

Static portfolio for https://meherabhossen.pages.dev/.
Updated 5 November 2026. No installation or build step is needed for the website.

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
- Editable CV source: [Meherab_Hossen_CV.tex](assets/files/Meherab_Hossen_CV.tex)
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
The Al Siyabi media subsection stays hidden until its real media files are configured.
Media filenames:

- Alnakeeb: assets/img/sl_opi_1.png and assets/videos/sl_opi_1.mp4
- Al Siyabi: assets/img/sl_opi_2.png and assets/videos/sl_opi_2.mp4

Set the matching image/video values in assets/js/pcm-media.js once the files exist.
JPG image extensions also work when configured. Empty entries hide their media
subsection and load no missing files. The two droplet-video cards are also present
in index.html so HTML readers can discover them without executing JavaScript.
Keep those initial cards aligned with PORTFOLIO_VIDEOS when changing the video list.


## Research evidence

See [RESEARCH_EVIDENCE.md](RESEARCH_EVIDENCE.md) for the validation figures, compared quantities, benchmark references, public-material inventory, and manuscript author lists. The repository currently hosts the portfolio source and public results; it does not contain a reproducible CFD-case release.
