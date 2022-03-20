document.addEventListener("DOMContentLoaded", () => {
  // Set Cookie if not there or getLanguage from cookie
  let language = !document.cookie ? "de" : getLanguage();
  let cookie = `lang=${language};max-age=2419200;path=/`;
  document.cookie = cookie;

  // Redirect to correct language according to cookie
  location.replace(`./${language}/index.html`);
});

function getLanguage() {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith("lang="))
    .split("=")[1];
}
