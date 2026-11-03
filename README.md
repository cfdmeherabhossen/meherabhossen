# Meherab Hossen portfolio

Static portfolio for https://meherabhossen.pages.dev/.
Updated 3 November 2026. No installation or build step is needed for the website.

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
The Gmail button is preserved, alongside a standard email-app link and a copy button.
Clipboard access requires a supported secure context; a copy-by-selection fallback is shown otherwise.

## Publishing

The existing Cloudflare Pages project uses Direct Upload. Publish the complete
website contents to the existing `meherabhossen` project, with index.html at the
archive root. No build command or DNS change is required.

GitHub and Cloudflare are separate deployments in the current setup. Updating
GitHub alone does not update the Cloudflare site. For future automatic releases,
configure a CI workflow using an appropriately scoped Cloudflare credential.

## Content maintenance

The three conference titles on the website match the supplied manuscript titles.
The conference titles in the CV have intentionally been left for the owner's next
revision. The CV portfolio URL and its hyperlinks now use the Cloudflare address.

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
The Al Siyabi image and animation remain available for a later update.
Media filenames:

- Alnakeeb: assets/img/sl_opi_1.png and assets/videos/sl_opi_1.mp4
- Al Siyabi: assets/img/sl_opi_2.png and assets/videos/sl_opi_2.mp4

Set the matching image/video values in assets/js/pcm-media.js once the files exist.
JPG image extensions also work when configured. Empty entries display a forthcoming
media note and load no missing files.
