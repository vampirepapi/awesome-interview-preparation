// Toggle node function
function toggleNode(el) {
  if (el.querySelector('.children')) {
    el.classList.toggle('expanded');
    event.stopPropagation();
  }
}

document.querySelectorAll('.node').forEach(node => {
  node.addEventListener('click', () => toggleNode(node));
});

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

// Spaceship, Grogu, and Space Battle Elements
const spaceship = document.getElementById('spaceship');
const grogu = document.getElementById('grogu');
const tieFightersContainer = document.getElementById('tie-fighters');
const lasersContainer = document.getElementById('lasers');

function updateBackgroundElements() {
  spaceship.style.left = '-50px';
  spaceship.style.top = `${Math.random() * 20 + 10}%`;
  spaceship.style.display = 'block';
  grogu.style.bottom = `${Math.random() * 10 + 5}%`;
  grogu.style.right = `${Math.random() * 10 + 2}%`;
}

updateBackgroundElements();

// Reset spaceship position after animation
spaceship.addEventListener('animationiteration', () => {
  spaceship.style.left = '-50px';
  spaceship.style.top = `${Math.random() * 20 + 10}%`;
});

// Fireball animation for Grogu
function createFireball(isClick = false) {
  const fireball = document.createElement('div');
  fireball.classList.add('fireball');
  grogu.appendChild(fireball);

  const angle = (Math.random() - 0.5) * 30;
  const xOffset = -100 + (Math.random() - 0.5) * 40;
  const yOffset = -60 + (Math.random() - 0.5) * 20;

  fireball.style.left = '50%';
  fireball.style.top = '20%';
  fireball.style.transform = 'translateX(-50%)';

  fireball.style.setProperty('--x-end', `${xOffset}px`);
  fireball.style.setProperty('--y-end', `${yOffset}px`);
  fireball.style.setProperty('--rotate-end', `${360 + angle}deg`);

  if (isClick) {
    grogu.style.transition = 'transform 0.1s';
    grogu.style.transform = 'scale(1.1)';
    setTimeout(() => {
      grogu.style.transform = 'translateY(0)';
    }, 100);
  }

  fireball.addEventListener('animationend', (e) => {
    if (e.animationName === 'shootFireball' && fireball.parentNode) {
      grogu.removeChild(fireball);
    }
  });
}

setInterval(() => createFireball(false), 3000);
createFireball(false);

grogu.addEventListener('click', () => {
  createFireball(true);
  alert('Go and study stupid, stop playing!');
});

// Space Battle Animations
function createTieFighter() {
  const tieFighter = document.createElement('div');
  tieFighter.classList.add('tie-fighter');
  tieFighter.style.right = '-40px';
  tieFighter.style.top = `${Math.random() * 60 + 20}%`;
  tieFightersContainer.appendChild(tieFighter);

  tieFighter.addEventListener('animationiteration', () => {
    if (tieFighter.parentNode) {
      tieFightersContainer.removeChild(tieFighter);
    }
  });

  if (Math.random() > 0.5) {
    setTimeout(() => createLaser(tieFighter), 500);
  }
}

function createLaser(source) {
  const laser = document.createElement('div');
  laser.classList.add('laser');
  const sourceRect = source.getBoundingClientRect();
  laser.style.left = `${sourceRect.left}px`;
  laser.style.top = `${sourceRect.top + sourceRect.height / 2}px`;
  lasersContainer.appendChild(laser);

  laser.addEventListener('animationend', () => {
    if (laser.parentNode) {
      lasersContainer.removeChild(laser);
      if (Math.random() > 0.7) {
        createExplosion(laser.style.left, laser.style.top);
      }
    }
  });
}

function createExplosion(x, y) {
  const explosion = document.createElement('div');
  explosion.classList.add('explosion');
  explosion.style.left = x;
  explosion.style.top = y;
  lasersContainer.appendChild(explosion);

  explosion.addEventListener('animationend', () => {
    if (explosion.parentNode) {
      lasersContainer.removeChild(explosion);
    }
  });
}

setInterval(() => createTieFighter(), Math.random() * 5000 + 5000);
createTieFighter();

// Music control
const audio = document.getElementById('starwars-music');
const musicToggle = document.getElementById('music-toggle');

audio.volume = 0.3;

audio.play().catch((error) => {
  console.log('Autoplay blocked by browser:', error);
  musicToggle.textContent = 'Play Music';
});

musicToggle.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    musicToggle.textContent = 'Pause Music';
  } else {
    audio.pause();
    musicToggle.textContent = 'Play Music';
  }
});

// Resize canvas and elements
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  stars.length = 0;
  for (let i = 0; i < numStars; i++) {
    stars.push(new Star());
  }
  updateBackgroundElements();
});
