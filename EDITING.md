# Adding your content later

The site works with nothing filled in. Everything below is optional and can be
done one piece at a time. Edit `index.html` on github.com (open the file, click
the pencil, commit) and the live site updates in about a minute.

---

## 1. Pictures

**The easy way:** name your file exactly as the README table says and drop it in
`assets/img/`. No code change at all.

`assets/img/profile.jpg` → appears on Home
`assets/img/hero-campus.jpg` → the banner behind your name
`assets/img/cert-matlab.jpg` → Credentials

**If you want a different name**, change the `src`:

```html
<img src="assets/img/whatever-you-named-it.jpg" alt="Short description">
```

The `alt` text is what a placeholder shows before the image exists, and what a
screen reader reads out. Keep it short and literal.

**Adding one more picture to the Showcase gallery** — paste inside
`<div class="gallery">`:

```html
<figure>
  <div class="shot"><img src="assets/img/showcase-7.jpg" alt=""></div>
  <figcaption>What the plot shows.</figcaption>
</figure>
```

---

## 2. Videos

Find these lines in the Research section:

```html
<a class="doclink" href="#" data-video>Watch</a>
```

Replace `#` with your link:

```html
<a class="doclink" href="https://youtu.be/abc123" data-video target="_blank" rel="noopener">Watch</a>
```

YouTube, Google Drive and OneDrive links all work. While the `#` is still there
the link hides itself, so visitors never see a dead button.

**To play the video on the page instead of linking out**, swap the whole
`<figure class="film">` block for this:

```html
<figure class="film">
  <div class="film__box">
    <iframe src="https://www.youtube.com/embed/abc123"
            title="Charging cycle" frameborder="0" allowfullscreen
            style="width:100%;height:100%"></iframe>
  </div>
  <figcaption>Charging cycle: liquid fraction against flow time.</figcaption>
</figure>
```

The embed ID is the part after `youtu.be/` or after `watch?v=`. For Google
Drive, open the file → Share → anyone with the link, then use
`https://drive.google.com/file/d/FILE_ID/preview` as the `src`.

---

## 3. PDFs

Put the file in `assets/files/`. Links pointing at a file that is not there yet
stay hidden, so you can upload them whenever.

To link a PDF that lives on Google Drive instead of in the repo, point the href
straight at it and drop `data-optional`:

```html
<a class="doclink" href="https://drive.google.com/file/d/FILE_ID/view" target="_blank" rel="noopener">Open the report</a>
```

---

## 4. A new project or research entry

Paste this inside the `<div class="wrap">` of the Projects or Research section.
Delete any line you do not need.

```html
<article class="work">
  <h2>Title of the work</h2>
  <p class="work__spec"><b>ME 0000</b> Course name &nbsp;·&nbsp; Tools used</p>
  <p>Two or three sentences on what you did and what came out of it.</p>
  <ul class="ticks">
    <li>A specific result or method.</li>
    <li>Another one.</li>
  </ul>
  <a class="doclink" href="assets/files/report.pdf" data-optional target="_blank" rel="noopener">Open the report</a>
</article>
```

---

## 5. A publication

In the Publications section, delete the `<div class="empty">…</div>` block once
you have a paper, then uncomment the list and fill it in:

```html
<ol class="pubs">
  <li>
    <p class="pub__title">Title of the paper</p>
    <p class="pub__meta">Authors · Journal or conference, year</p>
    <a class="doclink" href="https://doi.org/10.xxxx/xxxxx" target="_blank" rel="noopener">Read the paper</a>
  </li>
</ol>
```

---

## 6. A new entry under Academics or Credentials

Academics, inside `<ol class="edu">`:

```html
<li class="edu__item">
  <div class="edu__logo"><img src="assets/img/logo-name.png" alt="Institution"></div>
  <div class="edu__body">
    <p class="edu__degree">Degree or certificate</p>
    <h2>Institution name</h2>
    <p class="edu__where">City, Country</p>
    <dl class="facts">
      <dt>Group</dt><dd>Science</dd>
      <dt>GPA</dt><dd>5.00 out of 5.00</dd>
    </dl>
  </div>
</li>
```

Credentials:

```html
<article class="cert">
  <div class="cert__body">
    <h2>Course or award name</h2>
    <p class="cert__by">Issuing organisation · Month Year</p>
    <p>What you learned or what it recognises.</p>
  </div>
  <div class="cert__shot"><img src="assets/img/cert-name.jpg" alt="Certificate"></div>
</article>
```

---

## 7. A brand new page

Two edits. First, a nav link in the sidebar list:

```html
<li><a href="#teaching" data-page="teaching">Teaching</a></li>
```

Then the page itself, anywhere among the other `<section class="page">` blocks:

```html
<section class="page" id="teaching">
  <header class="banner">
    <h1>Teaching</h1>
    <div class="scale" aria-hidden="true"></div>
  </header>
  <div class="wrap">
    <p class="lead">One line introducing the page.</p>
  </div>
</section>
```

The `id` and the `data-page` value must match. Routing, the active highlight in
the sidebar and the `#teaching` URL all start working on their own.

---

## Pieces you can reuse anywhere

| Paste this | You get |
| --- | --- |
| `<p class="lead">…</p>` | Larger intro paragraph under a heading |
| `<ul class="ticks"><li>…</li></ul>` | Bulleted list with the right spacing |
| `<ul class="tags"><li>…</li></ul>` | Row of rounded keyword pills |
| `<a class="btn btn--solid" href="…">…</a>` | Filled button |
| `<a class="doclink" href="…">…</a>" ` | Underlined inline link |
| `<div class="scale" aria-hidden="true"></div>` | The thermal colour bar |
| `<section class="block"><h2 class="block__title">…</h2>…</section>` | Sub-section with a ruled heading |

## Before you commit

- Every `<article>`, `<section>`, `<div>` and `<li>` you open must be closed.
- Use straight quotes in attributes, not curly ones from Word.
- Check the page on your phone; the layout stacks on its own.
