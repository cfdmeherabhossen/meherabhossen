/* Fill the two entries when the owner's PCM image/video files are supplied.
   Alnakeeb: assets/img/sl_opi_1.png and assets/videos/sl_opi_1.mp4
   Al Siyabi: assets/img/sl_opi_2.png and assets/videos/sl_opi_2.mp4
   Keep empty values until the real files exist; no placeholder results are generated. */
window.PORTFOLIO_PCM_MEDIA = window.PORTFOLIO_PCM_MEDIA || {
  alnakeeb: { image: '', video: '' },
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
      image.src = item.image; image.alt = 'Solid–liquid PCM liquid-fraction contours: ' + study + ' benchmark';
      image.loading = 'lazy'; image.decoding = 'async';
      link.appendChild(image); figure.appendChild(link);
      var caption = document.createElement('figcaption');
      caption.textContent = item.caption || 'Liquid-fraction contour from the ' + study + ' validation simulation.';
      figure.appendChild(caption); grid.appendChild(figure);
    }
    if (item.video) {
      var videoFigure = document.createElement('figure');
      var video = document.createElement('video');
      video.controls = true; video.playsInline = true; video.preload = 'none';
      video.src = item.video; if (item.image) video.poster = item.image;
      video.setAttribute('aria-label', 'Solid–liquid PCM melting animation: ' + study + ' benchmark');
      var text = document.createElement('figcaption');
      text.textContent = 'PCM melting evolution · ' + study + ' validation case';
      videoFigure.appendChild(video); videoFigure.appendChild(text); grid.appendChild(videoFigure);
    }
    pending.hidden = true;
  });
})();
