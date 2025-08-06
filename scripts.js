document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav__toggle");
  const menu = document.querySelector(".nav__menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  // Optional: close menu on link click
  document.querySelectorAll(".nav__link").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });
});
