// 💖 Messages — add as many as you want!
const messages = [
  { title: "Happy Anniversary, my love 💖", text: "Click next to begin our little journey together 💞" },
  { title: "From the moment I met you…", text: "I knew my world had just changed forever 🌷" },
  { title: "Every heartbeat whispers your name", text: "Your smile is my sunrise, your laugh my favorite melody ☀️" },
  { title: "You are my today and all my tomorrows", text: "Each moment with you is my happiest memory 💫" },
  { title: "Forever yours ❤️", text: "As night falls, my heart still shines for you under every star 🌌" }
];

// 🌅 Smooth background gradient transition (balanced automatically)
function interpolateColor(start, end, t) {
  const mix = (a, b) => Math.round(a + (b - a) * t);
  return `rgb(${mix(start[0], end[0])}, ${mix(start[1], end[1])}, ${mix(start[2], end[2])})`;
}

function updateBackground(index) {
  const t = index / (messages.length - 1);
  // Start colors (sunrise pinks)
  const startTop = [255, 200, 200];
  const startBottom = [255, 154, 158];
  // End colors (deep night purples)
  const endTop = [15, 20, 40];
  const endBottom = [5, 10, 25];

  const top = interpolateColor(startTop, endTop, t);
  const bottom = interpolateColor(startBottom, endBottom, t);

  document.body.style.background = `linear-gradient(to bottom, ${top}, ${bottom})`;
  document.body.style.transition = "background 2.5s ease-in-out";
}

// 🌠 Stars Canvas (appear gradually & smoothly)
const starsCanvas = document.getElementById("stars");
const sctx = starsCanvas.getContext("2d");
starsCanvas.width = innerWidth;
starsCanvas.height = innerHeight;
let stars = [];
for (let i = 0; i < 150; i++) {
  stars.push({ x: Math.random() * innerWidth, y: Math.random() * innerHeight, r: Math.random() * 1.5 });
}
let starAlpha = 0;

function drawStars(alpha = 0) {
  sctx.clearRect(0, 0, starsCanvas.width, starsCanvas.height);
  sctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
  stars.forEach(st => {
    sctx.beginPath();
    sctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
    sctx.fill();
  });
}

// 🌌 Smooth star fade per page
function updateStars(index) {
  const targetAlpha = index / (messages.length - 1) * 0.8; // up to 80% brightness
  let current = starAlpha;
  const step = (targetAlpha - current) / 40;
  const fade = setInterval(() => {
    current += step;
    starAlpha = Math.max(0, Math.min(1, current));
    drawStars(starAlpha);
    if (Math.abs(current - targetAlpha) < 0.001) clearInterval(fade);
  }, 50);
}

// ❤️ Floating Hearts
const heartsCanvas = document.getElementById("hearts");
const hctx = heartsCanvas.getContext("2d");
heartsCanvas.width = innerWidth;
heartsCanvas.height = innerHeight;

let hearts = [];
function Heart(x, y, s, sp) {
  this.x = x;
  this.y = y;
  this.s = s;
  this.sp = sp;
  this.a = Math.random() * 0.5 + 0.5;
}
Heart.prototype.draw = function () {
  hctx.save();
  hctx.translate(this.x, this.y);
  hctx.scale(this.s, this.s);
  hctx.beginPath();
  hctx.moveTo(0, 0);
  hctx.bezierCurveTo(0, -3, -3, -3, -3, 0);
  hctx.bezierCurveTo(-3, 3, 0, 5, 0, 8);
  hctx.bezierCurveTo(0, 5, 3, 3, 3, 0);
  hctx.bezierCurveTo(3, -3, 0, -3, 0, 0);
  hctx.fillStyle = `rgba(255,105,180,${this.a})`;
  hctx.fill();
  hctx.restore();
};
Heart.prototype.update = function () {
  this.y -= this.sp;
  if (this.y < -10) {
    this.y = heartsCanvas.height + 10;
    this.x = Math.random() * heartsCanvas.width;
  }
  this.draw();
};

function animateHearts() {
  hctx.clearRect(0, 0, heartsCanvas.width, heartsCanvas.height);
  hearts.forEach(h => h.update());
  requestAnimationFrame(animateHearts);
}

const heartCount = window.innerWidth < 600 ? 40 : 100;
for (let i = 0; i < heartCount; i++) {
  hearts.push(
    new Heart(
      Math.random() * heartsCanvas.width,
      Math.random() * heartsCanvas.height,
      Math.random() * 0.8 + 0.2,
      Math.random() * 1 + 0.3
    )
  );
}
animateHearts();

window.addEventListener("resize", () => {
  heartsCanvas.width = innerWidth;
  heartsCanvas.height = innerHeight;
  starsCanvas.width = innerWidth;
  starsCanvas.height = innerHeight;
});

// 💌 Scene logic
let index = 0;
const scene = document.getElementById("scene");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const dotsContainer = document.getElementById("dots");

// Create dots
function createDots() {
  dotsContainer.innerHTML = "";
  for (let i = 0; i < messages.length; i++) {
    const d = document.createElement("div");
    d.classList.add("dot");
    if (i === index) d.classList.add("active");
    dotsContainer.appendChild(d);
  }
}
function updateDots() {
  [...dotsContainer.children].forEach((d, i) => {
    d.classList.toggle("active", i === index);
  });
}

// Typing effect
function typeEffect(element, text, delay = 40) {
  element.innerHTML = "";
  let i = 0;
  const timer = setInterval(() => {
    element.innerHTML += text.charAt(i);
    i++;
    if (i === text.length) clearInterval(timer);
  }, delay);
}

// Update scene
function updateScene() {
  scene.style.opacity = 0;
  setTimeout(() => {
    const msg = messages[index];
    scene.innerHTML = `<h1>${msg.title}</h1><p></p>`;
    const p = scene.querySelector("p");
    scene.style.opacity = 1;
    typeEffect(p, msg.text);
    backBtn.disabled = index === 0;
    nextBtn.disabled = index === messages.length - 1;
    updateDots();
    updateBackground(index);
    updateStars(index);
  }, 400);
}

nextBtn.onclick = () => {
  if (index < messages.length - 1) index++;
  updateScene();
};
backBtn.onclick = () => {
  if (index > 0) index--;
  updateScene();
};

createDots();
updateBackground(0);
drawStars(0);
