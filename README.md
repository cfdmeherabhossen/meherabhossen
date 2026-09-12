# Md. Meherab Hossen — portfolio

A static portfolio site built from the Google Sites version. Plain HTML, CSS and
JavaScript, so it runs on GitHub Pages with no build step.

```
index.html
assets/
  css/style.css
  js/main.js
  img/        ← your photos, logos, certificates, plots
  files/      ← your CV and project reports (PDF)
.nojekyll
```

---

## 1. Put it on GitHub

1. Create a repository named **`meherabhossen.github.io`** (replace with your own
   GitHub username). A repo with that exact name publishes at the root of your
   Pages URL.
2. Upload the contents of this folder to the repository. On github.com:
   **Add file → Upload files**, drag everything in, then **Commit changes**.
3. Go to **Settings → Pages**. Under *Build and deployment*, set
   **Source: Deploy from a branch**, **Branch: `main` / `(root)`**, then **Save**.
4. Wait a minute or two. The site is live at
   `https://meherabhossen.github.io`.

If you prefer a repo with a different name, say `portfolio`, the same steps work
and the URL becomes `https://meherabhossen.github.io/portfolio/`.

### With Git on your machine

```bash
git init
git add .
git commit -m "Portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo>.git
git push -u origin main
```

---

## 2. Add your images

Save the files from your Google Sites pages into `assets/img/` with these exact
names. Anything missing shows a hatched placeholder instead of a broken icon, so
you can add them one at a time.

| File | What it is |
| --- | --- |
| `profile.jpg` | Your portrait (the one on the About Me section) |
| `hero-campus.jpg` | The AUST campus photo behind your name |
| `favicon.png` | Small square icon for the browser tab |
| `logo-aust.png`, `logo-milestone.png`, `logo-alhelal.png` | Institution logos |
| `cert-matlab.jpg`, `cert-award.jpg`, `cert-bitac.jpg` | Certificates |
| `award-photo.jpg`, `team-1.jpg`, `team-2.jpg` | Achievement and team photos |
| `sim-solid-pcm.jpg`, `sim-charging.jpg`, `sim-discharging.jpg` | Video thumbnails |
| `showcase-1.jpg` … `showcase-6.jpg` | Contour plots, meshes, validation charts |

Keep photos under about 500 KB each so pages load quickly. Any JPG or PNG works;
if you use a different extension, update the `src` in `index.html`.

## 3. Add your PDFs

Drop your CV and reports into `assets/files/` as
`Meherab_Hossen_CV.pdf`, `gear-train.pdf`, `belt-drive.pdf`,
`water-quality-report.pdf` and `bitac-report.pdf`. The buttons that point to them
are already in place.

## 4. Link the simulation videos

In the **Research** section of `index.html`, each video has a line like:

```html
<a class="doclink" href="#" data-video>Watch</a>
```

Replace `#` with the YouTube or Google Drive link. Until you do, the link hides
itself so visitors never hit a dead end.

## 5. Fill in the remaining details

- **Contact**: replace the LinkedIn and Google Scholar placeholder URLs in the
  *Reach me* section.
- **Skills**: a commented-out *Graphing* block sits in the Skills section. Add
  the tools you actually use and remove the comment markers.
- **Publications**: the page shows an empty state. A commented-out list template
  is right below it, ready for your first paper.

---

## How it works

- One HTML file holds every section. Clicking the sidebar swaps which section is
  visible and updates the address bar, so `#research` and the back button both
  work and every section is linkable.
- The colour ramp used on the hero and each page heading is a thermal colormap,
  the same blue-to-red scale your Fluent contours use.
- Dark mode follows the visitor's system setting and the toggle at the bottom of
  the sidebar remembers their choice.
- Everything reflows for phones, keyboard focus stays visible, and printing the
  page prints all sections.

## Custom domain (optional)

Buy a domain, add a file named `CNAME` at the repository root containing just
the domain, then point a CNAME DNS record at `<your-username>.github.io`.
