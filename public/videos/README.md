# Hero video files go here

The hero currently falls back to the original source video, hosted on
Lovable's CDN:

https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4

That works fine for now, but it's tied to a third-party account you don't
control, so it could disappear later. For a permanent, faster-loading setup,
download that file once and drop it in here with these exact names — the
`<video>` element already checks for them first, before falling back to the
CDN link:

- `hero.mp4`      (required for the self-hosted path)
- `hero.webm`     (optional, smaller file size)
- `hero-poster.jpg` (a single frame, shown while the video loads)

No code changes needed either way — the hero always renders correctly,
whichever source ends up being used.
