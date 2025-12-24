const nav = document.querySelector("nav");
const menu = document.querySelector(".navigation");
const linkNav = document.querySelectorAll(".navigation a");
const sections = document.querySelectorAll("section");
const btnBurger = document.querySelector("#burger-menu");

btnBurger.addEventListener("click", () => {
  menu?.classList.toggle("active");
  btnBurger?.classList.toggle("bx-x");
  if (window.scrollY === 0) {
    nav?.classList.toggle("active");
  }
});

linkNav.forEach((link) => {
  link.addEventListener("click", () => {
    menu?.classList.remove("active");
    btnBurger?.classList.remove("bx-x");
  });
});

window.addEventListener("scroll", () => {
  menu?.classList.remove("active");
  btnBurger?.classList.remove("bx-x");
});

window.addEventListener("scroll", () => {
  nav?.classList.toggle("active", window.scrollY > 0);
});

const scrollActive = () => {
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 100;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      linkNav.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(`.navigation a[href*=${id}]`)
          ?.classList.add("active");
      });
    }
  });
};

window.addEventListener("scroll", scrollActive);

const sr = ScrollReveal({
  origin: "top",
  distance: "40px",
  duration: 2000,
  reset: true,
});

sr.reveal(
  ".home-content, .home-img, .about-img, .about-content,.services-box, .menu-box, .contact-form, .btn, .section-heading",
  { interval: 200 }
);
