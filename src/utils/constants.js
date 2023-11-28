export const LOGO =
  "https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456";

export const USER_AVATAR =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w500/";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/8caf0391-7d3c-46a5-b911-2e4eb1721385/GE-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "geo", name: "geo" },
  { identifier: "en", name: "en" },

  { identifier: "rus", name: "rus" },
];

export const GPTKEY = import.meta.env.VITE_REACT_APP_GPTKEY;
