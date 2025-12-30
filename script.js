const nav = document.querySelector("nav");
const menu = document.querySelector(".navigation");
const linkNav = document.querySelectorAll(".navigation a");
const sections = document.querySelectorAll("section");
const btnBurger = document.querySelector("#burger-menu");
const SERVICE_ID = "service_j21e9by";
const TEMPLATE_ID = "template_633h0jr";
const PUBLIC_KEY = "DTxd8NIDLxUGeM72c";

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
/********Formulaire*****/
emailjs.init(PUBLIC_KEY);

const form = document.getElementById("ContactUs");
const btn = form.querySelector("button");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Désactiver bouton + changer texte
  btn.disabled = true;
  btn.textContent = "En cours d'envoi...";

  const params = {
    user_name: document.getElementById("fullName").value,
    user_email: document.getElementById("email").value,
    user_message: document.getElementById("message").value,
  };

  emailjs
    .send(SERVICE_ID, TEMPLATE_ID, params)
    .then(() => {
      btn.textContent = "Envoyé ✔️";
      form.reset();

      // Remettre le bouton à l’état normal après 3s
      setTimeout(() => {
        btn.disabled = false;
        btn.textContent = "Envoyer";
      }, 3000);
    })
    .catch(() => {
      btn.textContent = "Réessayer ❌";
      btn.disabled = false;
    });
});
/******
 * Public Key: "DTxd8NIDLxUGeM72c"
 * Service ID: "service_znpdwc3"
 * Template ID:  "template_633h0jr"
 */
