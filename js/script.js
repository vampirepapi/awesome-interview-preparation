// Function to toggle the node's expanded state
function toggleNode(event) {
  const el = event.currentTarget; // The node that was clicked
  if (el.querySelector('.children')) { // Check if it has child nodes
    el.classList.toggle('expanded'); // Toggle the 'expanded' class
    event.stopPropagation(); // Prevent the click from affecting parent nodes
  }
}

// Attach the click event listener to all .node elements
document.querySelectorAll('.node').forEach(node => {
  node.addEventListener('click', toggleNode);
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

  // Get Grogu's current position to make fireball launch from there
  const groguRect = grogu.getBoundingClientRect();
  // Calculate center of Grogu as the spawn point for the fireball's center
  const initialX = groguRect.left + (groguRect.width / 2);
  const initialY = groguRect.top + (groguRect.height * 0.2); // Approx 20% from Grogu's top

  // Note: .fireball CSS class should set position:fixed and appropriate z-index.
  // JS sets initial coordinates and transform to center the fireball.
  fireball.style.left = `${initialX}px`;
  fireball.style.top = `${initialY}px`;
  fireball.style.transform = 'translate(-50%, -50%)'; 

  document.body.appendChild(fireball); // Append to body for stable positioning context

  const angle = (Math.random() - 0.5) * 30;
  // xOffset and yOffset define the travel distance and direction from its starting point
  const xOffset = -100 + (Math.random() - 0.5) * 40; 
  const yOffset = -60 + (Math.random() - 0.5) * 20;

  fireball.style.setProperty('--x-end', `${xOffset}px`);
  fireball.style.setProperty('--y-end', `${yOffset}px`);
  fireball.style.setProperty('--rotate-end', `${360 + angle}deg`);

  if (isClick) {
    // Apply click animation using a class to avoid direct style manipulation conflicts
    grogu.classList.add('grogu-animating-click');
    setTimeout(() => {
      grogu.classList.remove('grogu-animating-click');
    }, 150); // Duration of click animation
  }

  fireball.addEventListener('animationend', (e) => {
    // Ensure we only remove it after the main 'shootFireball' animation
    // and check if it's still a child of document.body
    if (e.animationName === 'shootFireball' && fireball.parentNode === document.body) {
      document.body.removeChild(fireball);
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

// Dark Mode Toggle Functionality
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Function to apply dark mode based on stored preference or system setting
function applyDarkModePreference() {
  const darkModeState = localStorage.getItem('darkMode');
  if (darkModeState === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = 'Light Mode';
  } else {
    // Default to light mode if no preference or disabled
    body.classList.remove('dark-mode');
    darkModeToggle.textContent = 'Dark Mode';
  }
}

// Event listener for the dark mode toggle button
darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
    darkModeToggle.textContent = 'Light Mode';
  } else {
    localStorage.setItem('darkMode', 'disabled');
    darkModeToggle.textContent = 'Dark Mode';
  }
});

// Apply dark mode preference when the script loads
document.addEventListener('DOMContentLoaded', applyDarkModePreference);
