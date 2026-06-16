const burgerBtn = document.getElementById("burgerBtn");
const menuOverlay = document.getElementById("menuOverlay");
const menuClose = document.getElementById("menuClose");
const menuLinks = document.querySelectorAll(".menu-nav__link, .menu-footer-links a");

function openMenu() {
  menuOverlay.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  menuOverlay.classList.remove("is-open");
  document.body.style.overflow = "";
}

burgerBtn?.addEventListener("click", openMenu);
menuClose?.addEventListener("click", closeMenu);
menuOverlay?.querySelector(".menu-overlay__backdrop")?.addEventListener("click", closeMenu);

menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menuOverlay?.classList.contains("is-open")) {
    closeMenu();
  }
});
