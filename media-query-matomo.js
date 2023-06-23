const events = [
  {
    media: "(prefers-contrast: more)",
    label: "prefers-contrast-more",
  },
  {
    media: "(prefers-contrast: less)",
    label: "prefers-contrast-less",
  },
  {
    media: "screen and (forced-colors: active)",
    label: "forced-colors",
  },
  {
    media: "screen and (forced-colors: active)",
    label: "high-contrast",
  },
  {
    media: "(prefers-color-scheme: light)",
    label: "prefers-color-scheme-light",
  },
  {
    media: "(prefers-color-scheme: dark)",
    label: "prefers-color-scheme-dark",
  },
  {
    media: "(prefers-reduced-motion)",
    label: "prefers-reduced-motion",
  },
  {
    media: "(pointer: fine)",
    label: "pointer-fine",
  },
  {
    media: "(pointer: coarse)",
    label: "pointer-coarse",
  },
];

if (typeof _paq != "undefined") {
  events.forEach((item) => {
    const mediaQueryList = matchMedia(item.media);

    // Log the initial value to Matomo
    _paq.push(["trackEvent", item.label, item.label, mediaQueryList.matches]);

    // Log any changes to the value to Matomo too.
    // For example, when the browser switches to dark mode after sunset.
    mediaQueryList.addEventListener("change", () => {
      _paq.push(["trackEvent", item.label, item.label, mediaQueryList.matches]);
    });
  });
}
