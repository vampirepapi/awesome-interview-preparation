// Toggle node function
function toggleNode(el) {
  if (el.querySelector('.children')) {
    el.classList.toggle('expanded');
    event.stopPropagation();
  }
}

// Starry Night Background
const canvas = document.getElementById('starry-bg');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const numStars = 200;

class Star {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 1.5;
    this.opacity = Math.random();
    this.speed = Math.random() * 0.02 + 0.01;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.fill();
    ctx.closePath();
  }

  update() {
    this.opacity += this.speed;
    if (this.opacity >= 1 || this.opacity <= 0) {
      this.speed = -this.speed;
    }
    this.draw();
  }
}

// Initialize stars
for (let i = 0; i < numStars; i++) {
  stars.push(new Star());
}

// Animation loop
function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(star => star.update());
  requestAnimationFrame(animateStars);
}

animateStars();

// Resize canvas on window resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // Reinitialize stars to fit new dimensions
  stars.length = 0;
  for (let i = 0; i < numStars; i++) {
    stars.push(new Star());
  }
});
