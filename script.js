const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function Heart(x, y, size, speed) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.speed = speed;
  this.alpha = Math.random() * 0.5 + 0.5;
}

Heart.prototype.draw = function () {
  ctx.save();
  ctx.translate(this.x, this.y);
  ctx.scale(this.size, this.size);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(0, -3, -3, -3, -3, 0);
  ctx.bezierCurveTo(-3, 3, 0, 5, 0, 8);
  ctx.bezierCurveTo(0, 5, 3, 3, 3, 0);
  ctx.bezierCurveTo(3, -3, 0, -3, 0, 0);
  ctx.fillStyle = `rgba(255,105,180,${this.alpha})`;
  ctx.fill();
  ctx.restore();
};

Heart.prototype.update = function () {
  this.y -= this.speed;
  if (this.y < -10) {
    this.y = canvas.height + 10;
    this.x = Math.random() * canvas.width;
  }
  this.draw();
};

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach(h => h.update());
  requestAnimationFrame(animate);
}

for (let i = 0; i < 100; i++) {
  hearts.push(
    new Heart(
      Math.random() * canvas.width,
      Math.random() * canvas.height,
      Math.random() * 0.8 + 0.2,
      Math.random() * 1 + 0.2
    )
  );
}

animate();

// Resize canvas dynamically
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
