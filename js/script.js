const CONFIG = {
  STARS: {
    COUNT: 200,
    MAX_RADIUS: 1.5,
    MIN_SPEED: 0.01,
    MAX_SPEED: 0.03,
  },
  GROGU: {
    FIREBALL_INTERVAL: 3000,
    CLICK_ANIMATION_DURATION: 150,
  },
  TIE_FIGHTER: {
    MIN_SPAWN_INTERVAL: 5000,
    MAX_SPAWN_INTERVAL: 10000,
    LASER_DELAY: 500,
    LASER_CHANCE: 0.5,
    EXPLOSION_CHANCE: 0.7,
  },
  AUDIO: {
    DEFAULT_VOLUME: 0.3,
  },
};

class Star {
  constructor(canvas) {
    this.canvas = canvas;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * CONFIG.STARS.MAX_RADIUS;
    this.opacity = Math.random();
    this.speed = Math.random() * (CONFIG.STARS.MAX_SPEED - CONFIG.STARS.MIN_SPEED) + CONFIG.STARS.MIN_SPEED;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.fill();
    ctx.closePath();
  }

  update(ctx) {
    this.opacity += this.speed;
    if (this.opacity >= 1 || this.opacity <= 0) {
      this.speed = -this.speed;
    }
    this.draw(ctx);
  }
}

class StarryBackground {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.stars = [];
    this.init();
    this.animate();
    this.setupResizeHandler();
  }

  init() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.stars = Array.from({ length: CONFIG.STARS.COUNT }, () => new Star(this.canvas));
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.stars.forEach(star => star.update(this.ctx));
    requestAnimationFrame(() => this.animate());
  }

  setupResizeHandler() {
    window.addEventListener('resize', () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.stars = Array.from({ length: CONFIG.STARS.COUNT }, () => new Star(this.canvas));
    });
  }
}

class MindMap {
  constructor() {
    this.nodes = document.querySelectorAll('.node');
    this.init();
  }

  init() {
    this.nodes.forEach(node => {
      const hasChildren = node.querySelector('.children');
      if (hasChildren) {
        node.style.cursor = 'pointer';
        node.addEventListener('click', (e) => this.toggleNode(e, node));
      }
    });
    
    document.addEventListener('keydown', (e) => this.handleKeyboard(e));
  }

  toggleNode(event, node) {
    if (event.target.tagName === 'A') {
      return;
    }
    
    if (node.querySelector('.children')) {
      node.classList.toggle('expanded');
      event.stopPropagation();
    }
  }

  handleKeyboard(event) {
    if (event.key === 'Escape') {
      this.collapseAll();
    }
  }

  collapseAll() {
    this.nodes.forEach(node => node.classList.remove('expanded'));
  }

  expandAll() {
    this.nodes.forEach(node => {
      if (node.querySelector('.children')) {
        node.classList.add('expanded');
      }
    });
  }
}

class Spaceship {
  constructor() {
    this.element = document.getElementById('spaceship');
    this.init();
  }

  init() {
    this.updatePosition();
    this.element.addEventListener('animationiteration', () => this.updatePosition());
  }

  updatePosition() {
    this.element.style.left = '-50px';
    this.element.style.top = `${Math.random() * 20 + 10}%`;
    this.element.style.display = 'block';
  }
}

class Grogu {
  constructor() {
    this.element = document.getElementById('grogu');
    this.init();
  }

  init() {
    this.updatePosition();
    this.startAutoFireballs();
    this.element.addEventListener('click', () => this.handleClick());
  }

  updatePosition() {
    this.element.style.bottom = `${Math.random() * 10 + 5}%`;
    this.element.style.right = `${Math.random() * 10 + 2}%`;
  }

  startAutoFireballs() {
    setInterval(() => this.createFireball(false), CONFIG.GROGU.FIREBALL_INTERVAL);
    this.createFireball(false);
  }

  handleClick() {
    this.createFireball(true);
    this.showMessage();
  }

  showMessage() {
    const messages = [
      '🎯 Focus on your goals!',
      '📚 Time to hit the books!',
      '💪 Keep studying, warrior!',
      '🚀 Launch your career!',
      '⭐ May the Force be with your studies!',
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    const notification = this.createNotification(randomMessage);
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.opacity = '0';
      setTimeout(() => notification.remove(), 300);
    }, 2000);
  }

  createNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0, 0, 0, 0.9);
      color: #ffdd00;
      padding: 1.5rem 2rem;
      border-radius: 10px;
      font-size: 1.2rem;
      font-weight: 600;
      z-index: 1000;
      box-shadow: 0 0 20px rgba(255, 221, 0, 0.5);
      transition: opacity 0.3s ease;
      pointer-events: none;
    `;
    return notification;
  }

  createFireball(isClick = false) {
    const fireball = document.createElement('div');
    fireball.classList.add('fireball');

    const groguRect = this.element.getBoundingClientRect();
    const initialX = groguRect.left + groguRect.width / 2;
    const initialY = groguRect.top + groguRect.height * 0.2;

    fireball.style.left = `${initialX}px`;
    fireball.style.top = `${initialY}px`;
    fireball.style.transform = 'translate(-50%, -50%)';

    document.body.appendChild(fireball);

    const angle = (Math.random() - 0.5) * 30;
    const xOffset = -100 + (Math.random() - 0.5) * 40;
    const yOffset = -60 + (Math.random() - 0.5) * 20;

    fireball.style.setProperty('--x-end', `${xOffset}px`);
    fireball.style.setProperty('--y-end', `${yOffset}px`);
    fireball.style.setProperty('--rotate-end', `${360 + angle}deg`);

    if (isClick) {
      this.element.classList.add('grogu-animating-click');
      setTimeout(() => {
        this.element.classList.remove('grogu-animating-click');
      }, CONFIG.GROGU.CLICK_ANIMATION_DURATION);
    }

    fireball.addEventListener('animationend', (e) => {
      if (e.animationName === 'shootFireball' && fireball.parentNode === document.body) {
        document.body.removeChild(fireball);
      }
    });
  }
}

class SpaceBattle {
  constructor() {
    this.tieFightersContainer = document.getElementById('tie-fighters');
    this.lasersContainer = document.getElementById('lasers');
    this.init();
  }

  init() {
    this.startBattle();
  }

  startBattle() {
    const spawnInterval = Math.random() * 
      (CONFIG.TIE_FIGHTER.MAX_SPAWN_INTERVAL - CONFIG.TIE_FIGHTER.MIN_SPAWN_INTERVAL) + 
      CONFIG.TIE_FIGHTER.MIN_SPAWN_INTERVAL;
    
    setInterval(() => this.createTieFighter(), spawnInterval);
    this.createTieFighter();
  }

  createTieFighter() {
    const tieFighter = document.createElement('div');
    tieFighter.classList.add('tie-fighter');
    tieFighter.style.right = '-40px';
    tieFighter.style.top = `${Math.random() * 60 + 20}%`;
    this.tieFightersContainer.appendChild(tieFighter);

    tieFighter.addEventListener('animationiteration', () => {
      if (tieFighter.parentNode) {
        this.tieFightersContainer.removeChild(tieFighter);
      }
    });

    if (Math.random() > CONFIG.TIE_FIGHTER.LASER_CHANCE) {
      setTimeout(() => this.createLaser(tieFighter), CONFIG.TIE_FIGHTER.LASER_DELAY);
    }
  }

  createLaser(source) {
    if (!source.parentNode) return;

    const laser = document.createElement('div');
    laser.classList.add('laser');
    const sourceRect = source.getBoundingClientRect();
    laser.style.left = `${sourceRect.left}px`;
    laser.style.top = `${sourceRect.top + sourceRect.height / 2}px`;
    this.lasersContainer.appendChild(laser);

    laser.addEventListener('animationend', () => {
      if (laser.parentNode) {
        this.lasersContainer.removeChild(laser);
        if (Math.random() > CONFIG.TIE_FIGHTER.EXPLOSION_CHANCE) {
          this.createExplosion(laser.style.left, laser.style.top);
        }
      }
    });
  }

  createExplosion(x, y) {
    const explosion = document.createElement('div');
    explosion.classList.add('explosion');
    explosion.style.left = x;
    explosion.style.top = y;
    this.lasersContainer.appendChild(explosion);

    explosion.addEventListener('animationend', () => {
      if (explosion.parentNode) {
        this.lasersContainer.removeChild(explosion);
      }
    });
  }
}

class AudioController {
  constructor() {
    this.audio = document.getElementById('starwars-music');
    this.toggleButton = document.getElementById('music-toggle');
    this.init();
  }

  init() {
    this.audio.volume = CONFIG.AUDIO.DEFAULT_VOLUME;
    this.setupToggle();
    this.attemptAutoPlay();
  }

  setupToggle() {
    this.toggleButton.addEventListener('click', () => this.toggle());
  }

  toggle() {
    if (this.audio.paused) {
      this.play();
    } else {
      this.pause();
    }
  }

  play() {
    this.audio.play()
      .then(() => {
        this.toggleButton.textContent = '🔊 Pause Music';
      })
      .catch((error) => {
        console.log('Audio play failed:', error);
        this.toggleButton.textContent = '🔇 Play Music';
      });
  }

  pause() {
    this.audio.pause();
    this.toggleButton.textContent = '🔇 Play Music';
  }

  attemptAutoPlay() {
    this.audio.play()
      .then(() => {
        this.toggleButton.textContent = '🔊 Pause Music';
      })
      .catch((error) => {
        console.log('Autoplay blocked by browser:', error);
        this.toggleButton.textContent = '🔇 Play Music';
      });
  }
}

class DarkModeController {
  constructor() {
    this.toggleButton = document.getElementById('dark-mode-toggle');
    this.body = document.body;
    this.init();
  }

  init() {
    this.applyPreference();
    this.setupToggle();
  }

  applyPreference() {
    const darkModeState = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (darkModeState === 'enabled' || (darkModeState === null && prefersDark)) {
      this.enable();
    } else {
      this.disable();
    }
  }

  setupToggle() {
    this.toggleButton.addEventListener('click', () => this.toggle());
  }

  toggle() {
    if (this.body.classList.contains('dark-mode')) {
      this.disable();
    } else {
      this.enable();
    }
  }

  enable() {
    this.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
    this.toggleButton.textContent = '☀️ Light Mode';
  }

  disable() {
    this.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
    this.toggleButton.textContent = '🌙 Dark Mode';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new StarryBackground('starry-bg');
  new MindMap();
  new Spaceship();
  new Grogu();
  new SpaceBattle();
  new AudioController();
  new DarkModeController();
});
