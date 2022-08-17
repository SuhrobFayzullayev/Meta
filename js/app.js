// SLIDER
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  slidesPerView: 3,
  spaceBetween: 0,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  coverflowEffect: {
    rotate: 40,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    700: {
      slidesPerView: 3,
    },
  },
});

//  RESPONSIVE
let a = screen.width;
const respBtn = document.getElementById("respBtn");
respBtn.addEventListener("click", () => {
  const respMenu1 = document.getElementById("respMenu1");
  const respMenu2 = document.getElementById("respMenu2");
  const bigRespMenu = document.getElementById("bigRespMenu");

  if (a < 480) {
    console.log(a);
    if (respBtn.classList.contains("show")) {
      bigRespMenu.style.display = "flex";
      respBtn.classList.remove("show");
      respBtn.classList.add("hide");
      respBtn.children[0].classList.remove("fa-bars");
      respBtn.children[0].classList.add("fa-xmark");
    } else if (respBtn.classList.contains("hide")) {
      bigRespMenu.style.display = "none";
      respBtn.classList.add("show");
      respBtn.classList.remove("hide");
      respBtn.children[0].classList.add("fa-bars");
      respBtn.children[0].classList.remove("fa-xmark");
    }
  } else if (a > 480 && a <= 850) {
    if (respBtn.classList.contains("show")) {
      respMenu1.style.display = "flex";
      respMenu2.style.display = "flex";
      respBtn.classList.remove("show");
      respBtn.classList.add("hide");
      respBtn.children[0].classList.remove("fa-bars");
      respBtn.children[0].classList.add("fa-xmark");
    } else if (respBtn.classList.contains("hide")) {
      respMenu1.style.display = "none";
      respBtn.classList.add("show");
      respBtn.classList.remove("hide");
      respBtn.children[0].classList.add("fa-bars");
      respBtn.children[0].classList.remove("fa-xmark");
    }
  }
});

