const langs = [
  "az",
  "hy",
  "be",
  "ka",
  "kk",
  "ky",
  "lv",
  "lt",
  "mo",
  "ru",
  "tk",
  "uk",
  "et"
];
const userLang =
  navigator.language.substring(0, 2) || navigator.userLanguage.substring(0, 2);
const isRu = l => userLang === l;

if (!localStorage.getItem("lang")) {
  if (!langs.some(isRu)) {
    window.location = `${window.location}en.html`;
  }
} else if (localStorage.getItem("lang") === "en") {
  const currentURL = window.location.pathname.split(".");
  window.location = `${currentURL[0]}en.html`;
}

const setLanguage = e => {
  const langLinks = document.querySelectorAll("[data-lang]");
  langLinks.forEach(l => {
    if (e.target === l) {
      localStorage.setItem("lang", l.dataset.lang);
    }
  });
};

document.addEventListener("click", setLanguage);
