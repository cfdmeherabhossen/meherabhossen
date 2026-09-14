# FINAL-PORTFOLIO - latest merged website

Use this folder for the latest update. Your pasted edits are merged with the CV-based education and thesis information, existing images and reports, and video support. The missing closing Contact list tag is fixed.

## Add your video

One MP4 video is already configured with this exact filename:

    meherab.mp4

Copy your actual video into:

    assets/videos/meherab.mp4

Keep the spelling and lowercase extension exactly as shown. The video file was not supplied, so it is not included in this folder yet. The Videos menu will display the configured player; it can play once the actual file has been added.

The following code is already included near the bottom of index.html:

    window.PORTFOLIO_VIDEOS = [
      {
        type: "mp4",
        title: "Meherab video",
        src: "assets/videos/meherab.mp4"
      }
    ];

You do not need to paste it again. All video styles and player code are included in index.html. Keep assets/css/style.css and assets/js/main.js, which provide the rest of the website's appearance and navigation. Do not use the separate videos.js from earlier versions.

## Publish your update

1. Open FINAL-PORTFOLIO and add your meherab.mp4 file as described above.
2. Upload index.html, the complete assets folder and .nojekyll from INSIDE FINAL-PORTFOLIO to the root of your GitHub repository. Replace matching files. README.md is optional on the website.
3. Keep index.html at the repository root, not inside a nested FINAL-PORTFOLIO folder. Upload extracted files, not the ZIP itself.
4. For your new account, use the repository meherabhossen3085-dotcom.github.io.
5. If Pages is not already enabled, choose Settings > Pages > Deploy from a branch > main > / (root) > Save.
6. After deployment, open https://meherabhossen3085-dotcom.github.io/, select Videos, and play the clip.

This folder has not been published online. Your public email remains meherabhossen3085@gmail.com.

## If the video does not play

Check that assets/videos/meherab.mp4 exists, the filename matches exactly, and the file is encoded in a format supported by your browser. Actual media playback must be checked after your file is added.

## CV note

The supplied PDF is included unchanged at assets/files/Meherab_Hossen_CV.pdf. Its summary still says undergraduate and its header uses the old portfolio URL. Change undergraduate to graduate and update the URL when revising the source CV, then replace the PDF at the same location.