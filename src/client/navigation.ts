const toggle = document.querySelector<HTMLButtonElement>(".nav-toggle")!;
const nav = document.getElementById("site-nav")!;
toggle.disabled = false;
function setOpen(open: boolean) {
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close menu" : "Menu");
  toggle.querySelector("span")!.textContent = open ? "Close" : "Menu";
  nav.classList.toggle("is-open", open);
}
toggle.addEventListener("click", () =>
  setOpen(!nav.classList.contains("is-open")),
);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && nav.classList.contains("is-open")) {
    setOpen(false);
    toggle.focus();
  }
});
function dismiss(event: Event) {
  if (
    event.target instanceof Node &&
    !nav.contains(event.target) &&
    !toggle.contains(event.target)
  )
    setOpen(false);
}
document.addEventListener("pointerdown", dismiss);
document.addEventListener("focusin", dismiss);
window.addEventListener("pageshow", () => setOpen(false));
matchMedia("(max-width: 61rem)").addEventListener("change", () =>
  setOpen(false),
);
