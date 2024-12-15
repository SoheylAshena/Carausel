const carousel = document.getElementById("carousel");
const indicators = document.getElementById("indicators");

const data = [
  { path: "./images/1.jpg" },
  { path: "./images/2.jpg" },
  { path: "./images/3.png" },
  { path: "./images/4.jpg" },
  { path: "./images/5.jpg" },
];

data.map((item, i) => {
  const img = document.createElement("img");
  img.src = item.path;
  carousel.appendChild(img);
  const dot = document.createElement("div");
  if (i === 0) dot.classList.add("active");
  indicators.appendChild(dot);
});

let index = 0;
const dots = document.querySelectorAll("#indicators div");
let inito;

function updateCarousel() {
  clearInterval(inito);
  const offset = -index * 100;
  carousel.style.transform = `translateX(${offset}%)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });

  inito = setInterval(() => {
    index++;
    if (index >= data.length) {
      index = 0;
    }
    updateCarousel();
  }, 7000);
}

document.getElementById("next").addEventListener("click", () => {
  index++;
  if (index >= data.length) {
    index = 0;
  }
  updateCarousel();
});

document.getElementById("prev").addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = data.length - 1;
  }
  updateCarousel();
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    updateCarousel();
  });
});

inito = setInterval(() => {
  index++;
  if (index >= data.length) {
    index = 0;
  }
  updateCarousel();
}, 7000);
