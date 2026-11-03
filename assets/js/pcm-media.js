/* Alnakeeb image and animation supplied; add Al Siyabi media when available.
   Alnakeeb: assets/img/sl_opi_1.png and assets/videos/sl_opi_1.mp4
   Al Siyabi: assets/img/sl_opi_2.png and assets/videos/sl_opi_2.mp4
   Keep empty values until the real files exist; no placeholder results are generated. */
window.PORTFOLIO_PCM_MEDIA = window.PORTFOLIO_PCM_MEDIA || {
  alnakeeb: {
    image: 'assets/img/sl_opi_1.png',
    video: 'assets/videos/sl_opi_1.mp4',
    poster: 'assets/img/alnakeeb-melting-poster.jpg',
    videoCaption: 'PCM melting evolution · Alnakeeb et al. benchmark. Animation by Md. Meherab Hossen.',
    alt: 'Alnakeeb PCM melting montage at 2.5, 5, 10, 15, 25 and 35 minutes; melt front and flow on the left of each panel, temperature on the right',
    caption: 'Melt-front evolution at 2.5, 5, 10, 15, 25 and 35 min. Each panel shows melt and flow on the left and temperature on the right. Velocity is in mm/s and temperature in K; liquid-fraction values are labelled in the image.'
  },
  siyabi: { image: '', video: '' }
};
(function () {
  'use strict';
  document.querySelectorAll('[data-pcm-study]').forEach(function (section) {
    var key = section.dataset.pcmStudy;
    var item = window.PORTFOLIO_PCM_MEDIA[key];
    if (!item || (!item.image && !item.video)) return;
    var grid = section.querySelector('.pcm-media__grid');
    var pending = section.querySelector('.pcm-media__pending');
    var study = key === 'alnakeeb' ? 'Alnakeeb et al.' : 'Al Siyabi et al.';
    if (item.image) {
      var figure = document.createElement('figure');
      var link = document.createElement('a');
      var image = document.createElement('img');
      link.href = item.image; link.target = '_blank'; link.rel = 'noopener';
      image.src = item.image; image.alt = item.alt || ('Solid–liquid PCM liquid-fraction contours: ' + study + ' benchmark');
      image.loading = 'lazy'; image.decoding = 'async';
      link.appendChild(image); figure.appendChild(link);
      var caption = document.createElement('figcaption');
      caption.textContent = item.caption || 'Liquid-fraction contour from the ' + study + ' validation simulation.';
      figure.appendChild(caption); grid.appendChild(figure);
    }
    if (item.video) {
      var videoFigure = document.createElement('figure');
      videoFigure.id = 'pcm-animation-' + key;
      var video = document.createElement('video');
      video.controls = true; video.playsInline = true; video.preload = 'none';
      video.src = item.video; if (item.poster || item.image) video.poster = item.poster || item.image;
      video.setAttribute('aria-label', 'Solid–liquid PCM melting animation: ' + study + ' benchmark');
      var text = document.createElement('figcaption');
      text.textContent = item.videoCaption || ('PCM melting evolution · ' + study + ' validation case');
      videoFigure.appendChild(video); videoFigure.appendChild(text); grid.appendChild(videoFigure);
    }
    pending.hidden = true;
  });
})();
