const modal = document.getElementById("modal");

function openModal(title, desc, live, github) {
  document.getElementById("projectTitle").innerText = title;

  document.getElementById("projectDesc").innerText = desc;

  document.getElementById("liveLink").href = live;

  document.getElementById("githubLink").href = github;

  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

window.onclick = function (e) {
  if (e.target == modal) {
    closeModal();
  }
};

// ======================
// BACKGROUND SLIDER
// ======================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.remove("active");

  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  slides[currentSlide].classList.add("active");
}, 5000);

// ======================
// TYPEWRITER EFFECT
// ======================

const text = "Hi, I'm Chaithanyan 👋";

const typing = document.getElementById("typing");

let i = 0;

function typeWriter() {
  if (i < text.length) {
    typing.innerHTML += text.charAt(i);

    i++;

    setTimeout(typeWriter, 100);
  }
}

typeWriter();

// ======================
// SMOOTH SCROLL
// ======================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// ======================
// CURSOR GLOW
// ======================

const glow = document.createElement("div");

glow.classList.add("cursor-glow");

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";

  glow.style.top = e.clientY + "px";
});
const projects = [
  {
    name: "E-Commerce Website",

    image: "images/ecommerce.jpg",

    description: "Complete online shopping application.",

    live: "https://your-live-site.com",

    github: "https://github.com/chaithanya/ecommerce",
  },

  {
    name: "Employee Management",

    image: "images/employee.jpg",

    description: "Spring Boot CRUD application.",

    live: "https://employee-demo.com",

    github: "https://github.com/chaithanya/employee",
  },
];
