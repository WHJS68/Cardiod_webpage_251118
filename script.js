// 💖 Your messages here — add as many as you want!
const messages = [
  { title: "Happy Anniversary, my love 💖", text: "Click next to begin our little journey together 💞" },
  { title: "From the moment I met you…", text: "I knew my world had just changed forever 🌷" },
  { title: "Every heartbeat whispers your name", text: "Your smile is my sunrise, your laugh my favorite melody ☀️" },
  { title: "You are my today and all my tomorrows", text: "Each moment with you is my happiest memory 💫" },
  { title: "Forever yours ❤️", text: "No matter where life takes us — my heart will always find you." }
];

// ❤️ Floating hearts background
const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let hearts = [];
function Heart(x, y, s, sp) {
  this.x = x; this.y = y; this.s = s; this.sp = sp; this.a = Math.random() * 0.5 + 0.5;
}
Heart.prototype.draw = function() {
  ctx.save();
  ctx.translate(this.x, this.y);
  ctx.scale(this.s, this.s);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(0, -3, -3, -3, -3, 0);
  ctx.bezierCurveTo(-3, 3, 0, 5, 0, 8);
  ctx.bezierCurveTo(0, 5, 3, 3, 3, 0);
  ctx.bezierCurveTo(3, -3, 0, -3, 0, 0);
  ctx.fillStyle = `rgba(255,105,180,${this.a})`;
  ctx.fill();
  ctx.restore();
};
Heart.prototype.update = function() {
  this.y -= this.sp;
  if (this.y < -10) { this.y = canvas.height + 10; this.x = Math.random() * canvas.width; }
  this.draw();
};

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach(h => h.update());
  requestAnimationFrame(animate);
}

const heartCount = window.innerWidth < 600 ? 40 : 100;
for (let i = 0; i < heartCount; i++) {
  hearts.push(new Heart(
    Math.random() * canvas.width,
    Math.random() * canvas.height,
    Math.random() * 0.8 + 0.2,
    Math.random() * 1 + 0.3
  ));
}
animate();

window.addEventListener("resize", () => {
  canvas.width = innerWidth; canvas.height = innerHeight;
});

// 💌 Scene flow
let index = 0;
const scene = document.getElementById("scene");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");

function typeEffect(element, text, delay = 40) {
  element.innerHTML = "";
  let i = 0;
  const timer = setInterval(() => {
    element.innerHTML += text.charAt(i);
    i++;
    if (i === text.length) clearInterval(timer);
  }, delay);
}

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
