# NEVZ Official Artist Page

Single-page, evidence-focused artist identity website for **NEVZ**.

## Run locally

No build step is required.

Serve with a basic static server (recommended for embeds):

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Replace links, embeds, and images

Edit [config.js](/Users/sevogumusboga/Desktop/nevz_net_website/config.js) and update the `window.NEVZ_LINKS` values.

Update these groups:
- Profile links: `spotifyArtist`, `youtubeChannel`, `instagramProfile`
- Release images: `komodoCover`, `teslaCover`, `productionCover`
- Release embeds: `komodoSpotifyEmbed`, `komodoYoutubeEmbed`, `teslaSpotifyEmbed`, `teslaYoutubeEmbed`, `productionSpotifyEmbed`

## Recommended embed sources

- Spotify embed format: `https://open.spotify.com/embed/track/<TRACK_ID>`
- YouTube embed format: `https://www.youtube-nocookie.com/embed/<VIDEO_ID>`

## Quick deploy

1. Netlify: drag-and-drop folder into Netlify Drop
2. Vercel: import as static project
3. GitHub Pages: push repo and enable Pages from root

## Files

- [index.html](/Users/sevogumusboga/Desktop/nevz_net_website/index.html): full page markup
- [styles.css](/Users/sevogumusboga/Desktop/nevz_net_website/styles.css): black/white visual design
- [config.js](/Users/sevogumusboga/Desktop/nevz_net_website/config.js): editable URLs, embeds, and images
- [favicon.svg](/Users/sevogumusboga/Desktop/nevz_net_website/favicon.svg): favicon placeholder
