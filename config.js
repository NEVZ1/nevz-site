// Replace these URLs with your official links and embeds.
window.NEVZ_LINKS = {
  // Profile links
  spotifyArtist: "https://open.spotify.com/artist/68ZSp2e6oJ6qGWtdWhMbSF",
  youtubeChannel: "https://youtube.com/@nevzatxaras?si=AM0rXXlLPay5DhQH",
  instagramProfile: "https://www.instagram.com/nevzatxaras",
  tiktokProfile: "https://www.tiktok.com/@nevzatxaras",
  musoProfile: "https://credits.muso.ai/profile/493f2299-1357-4929-9ad0-b6d4db379a82",

  // Release cover images
  komodoCover: "./assets/komodo-cover.jpg",
  teslaCover: "./assets/tesla-cover.png",
  productionCover: "./assets/production-cover.jpg",
  teslaKeychainVideo: "./assets/tesla-keychain-3d.mp4",
  upcomingCover: "./assets/upcoming-i-dont-want-it-cover.jpg",

  // Embeds
  komodoSpotifyEmbed: "https://open.spotify.com/embed/track/3ZVQgHkj3Jz6kMc9GkTdq3?utm_source=generator",
  komodoYoutubeWatch: "https://www.youtube.com/watch?v=nh8hDoHRF-A",
  komodoYoutubeThumb: "https://i.ytimg.com/vi/nh8hDoHRF-A/hqdefault.jpg",
  teslaSpotifyEmbed: "https://open.spotify.com/embed/track/4C7yO8LLGjUN93rQWfs9qB?utm_source=generator",
  teslaYoutubeWatch: "https://www.youtube.com/watch?v=Cgj3VZUqi5A",
  teslaYoutubeThumb: "https://i.ytimg.com/vi/Cgj3VZUqi5A/hqdefault.jpg",
  productionSpotifyEmbed: "https://open.spotify.com/embed/playlist/4yMKEI6v6SNE9oUv9NsnMr?utm_source=generator"
};

(() => {
  const links = window.NEVZ_LINKS || {};

  document.querySelectorAll("[data-link]").forEach((el) => {
    const key = el.getAttribute("data-link");
    const value = key ? links[key] : undefined;

    if (!value) return;

    if (el.tagName === "IFRAME" || el.tagName === "IMG" || el.tagName === "VIDEO" || el.tagName === "SOURCE") {
      el.setAttribute("src", value);
      return;
    }

    el.setAttribute("href", value);
  });
})();
