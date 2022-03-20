export function getLanguage() {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith("lang="))
    .split("=")[1];
}
