# Hero video files go here

The Lovable export only contained cloud-storage *references* to the hero
video (JSON pointers to Lovable's private R2 bucket), not the actual media
files, so they could not be carried over automatically.

Add your own files with these exact names and the hero will pick them up
with no code changes:

- `hero.mp4`      (H.264 video, works everywhere — required)
- `hero.webm`     (VP9/AV1 webm, smaller file size — optional but recommended)
- `hero-poster.jpg` (a single frame, shown while the video loads / on very slow connections)

Until these are added, the hero simply shows the dark gradient background,
so the layout never breaks.
