// Animal Database
const animals = [
  // Biasa (Common) - 65%
  { id: 'kucing', name: 'Kucing Kampung', emoji: '🐱', rarity: 'biasa', desc: 'Suka tidur di mana saja dan sangat manja. Hewan peliharaan terpopuler di dunia!', height: '25 cm', weight: '4 kg' },
  { id: 'anjing', name: 'Anjing Shiba', emoji: '🐶', rarity: 'biasa', desc: 'Sangat setia dan selalu gembira saat menyambut kedatanganmu kembali.', height: '38 cm', weight: '10 kg' },
  { id: 'kelinci', name: 'Kelinci Anggora', emoji: '🐰', rarity: 'biasa', desc: 'Memiliki bulu super lembut dan suka melompat mencari wortel segar.', height: '20 cm', weight: '2 kg' },
  { id: 'ayam', name: 'Ayam Jago', emoji: '🐔', rarity: 'biasa', desc: 'Alarm alami di pagi hari. Berkokok kencang saat matahari terbit.', height: '40 cm', weight: '3 kg' },
  { id: 'bebek', name: 'Bebek Kuning', emoji: '🦆', rarity: 'biasa', desc: 'Bisa berenang dan berjalan berbaris dengan rapi bersama kawanannya.', height: '30 cm', weight: '2.5 kg' },

  // Langka (Rare) - 24%
  { id: 'panda', name: 'Panda Raksasa', emoji: '🐼', rarity: 'langka', desc: 'Menghabiskan 12 jam sehari hanya untuk mengunyah bambu segar.', height: '1.2 m', weight: '100 kg' },
  { id: 'koala', name: 'Koala Tidur', emoji: '🐨', rarity: 'langka', desc: 'Sangat malas, bisa tidur hingga 20 jam sehari di atas pohon eukaliptus.', height: '60 cm', weight: '8 kg' },
  { id: 'serigala', name: 'Serigala Abu', emoji: '🐺', rarity: 'langka', desc: 'Pemimpin kawanan yang setia dengan lolongan malam yang misterius.', height: '80 cm', weight: '45 kg' },
  { id: 'rubah', name: 'Rubah Merah', emoji: '🦊', rarity: 'langka', desc: 'Sangat cerdik dan memiliki telinga super sensitif untuk berburu.', height: '35 cm', weight: '6 kg' },
  { id: 'burung_hantu', name: 'Burung Hantu Salju', emoji: '🦉', rarity: 'langka', desc: 'Penjaga malam yang tenang dengan mata bulat besar yang mampu melihat kegelapan.', height: '45 cm', weight: '2 kg' },

  // Legendaris (Legendary) - 10%
  { id: 'harimau', name: 'Harimau Sumatra', emoji: '🐯', rarity: 'legendaris', desc: 'Raja hutan sejati yang gagah berani. Salah satu harimau paling langka di bumi.', height: '95 cm', weight: '120 kg' },
  { id: 'cendrawasih', name: 'Burung Cendrawasih', emoji: '🐦', rarity: 'legendaris', desc: 'Burung dari surga dengan tarian indah dan warna bulu yang memukau.', height: '30 cm', weight: '0.5 kg' },
  { id: 'komodo', name: 'Komodo Purba', emoji: '🦎', rarity: 'legendaris', desc: 'Kadal raksasa purba asli Indonesia dengan gigitan berbisa mematikan.', height: '3 m', weight: '70 kg' },
  { id: 'singa_gading', name: 'Singa Gading', emoji: '🦁', rarity: 'legendaris', desc: 'Simbol kepemimpinan dan keberanian yang berwibawa di padang rumput.', height: '1.2 m', weight: '190 kg' },

  // Rahasia (Secret) - 1%
  { id: 'unicorn', name: 'Stardust Unicorn', emoji: '🦄', rarity: 'rahasia', desc: 'Kuda bertanduk mistis yang meninggalkan jejak debu bintang di angkasa.', height: '1.6 m', weight: '350 kg' },
  { id: 'phoenix', name: 'Astral Phoenix', emoji: '🔥', rarity: 'rahasia', desc: 'Burung api abadi yang lahir kembali dari abu pembakarannya sendiri.', height: '1.5 m', weight: '80 kg' },
  { id: 'naga_emas', name: 'Naga Emas Kaisar', emoji: '🐉', rarity: 'rahasia', desc: 'Makhluk mitologi penjaga harta karun suci dengan sisik emas berkilau.', height: '15 m', weight: '2.5 ton' },
  { id: 'pegasus', name: 'Pegasus Angin', emoji: '🐎', rarity: 'rahasia', desc: 'Kuda bersayap putih bersih yang meluncur cepat menembus awan petir.', height: '1.7 m', weight: '400 kg' }
];

// Sound Synthesizer Utility using Web Audio API
const SoundEffect = {
  ctx: null,
  
  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  },

  playClick() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1200, this.ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.08);
  },

  playShake() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(100, this.ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(180, this.ctx.currentTime + 0.15);

    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.15);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.15);
  },

  playPop() {
    this.init();
    // Low pop noise
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.type = 'sine';
    osc.frequency.setValueAtTime(300, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(80, this.ctx.currentTime + 0.3);

    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.3);
  },

  playReveal(rarity) {
    this.init();
    const now = this.ctx.currentTime;
    
    if (rarity === 'biasa') {
      // Short friendly chime
      this.playNote(523.25, 0.1, now); // C5
      this.playNote(659.25, 0.2, now + 0.1); // E5
    } else if (rarity === 'langka') {
      // Dual high chime
      this.playNote(587.33, 0.1, now); // D5
      this.playNote(783.99, 0.15, now + 0.08); // G5
      this.playNote(987.77, 0.25, now + 0.16); // B5
    } else if (rarity === 'legendaris') {
      // Arpeggio chord
      this.playNote(523.25, 0.1, now); // C5
      this.playNote(659.25, 0.1, now + 0.08); // E5
      this.playNote(783.99, 0.1, now + 0.16); // G5
      this.playNote(1046.50, 0.4, now + 0.24); // C6
    } else if (rarity === 'rahasia') {
      // Epic sci-fi shimmer
      const durations = [0.08, 0.08, 0.08, 0.08, 0.08, 0.5];
      const notes = [523.25, 587.33, 659.25, 783.99, 880.00, 1174.66]; // Pentatonic epic scale
      let delay = 0;
      notes.forEach((freq, idx) => {
        this.playNote(freq, durations[idx], now + delay, 'sawtooth', 0.12);
        delay += 0.06;
      });
    }
  },

  playNote(frequency, duration, time, type = 'sine', volume = 0.15) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.type = type;
    osc.frequency.setValueAtTime(frequency, time);
    gain.gain.setValueAtTime(volume, time);
    gain.gain.linearRampToValueAtTime(0.001, time + duration);

    osc.start(time);
    osc.stop(time + duration);
  }
};

// Game State Management
const State = {
  tokens: 10000,
  collection: {}, // id -> count
  history: [], // array of logs
  lastClaimTime: null,
  nextClaimInterval: 3600 * 1000, // 1 hour in ms
  timerInterval: null,

  init() {
    // Load state from localStorage
    if (localStorage.getItem('gacha_tokens') !== null) {
      this.tokens = parseInt(localStorage.getItem('gacha_tokens'));
    } else {
      this.tokens = 10000;
      this.saveTokens();
    }

    if (localStorage.getItem('gacha_collection') !== null) {
      this.collection = JSON.parse(localStorage.getItem('gacha_collection'));
    } else {
      this.collection = {};
      this.saveCollection();
    }

    if (localStorage.getItem('gacha_history') !== null) {
      this.history = JSON.parse(localStorage.getItem('gacha_history'));
    } else {
      this.history = [];
      this.saveHistory();
    }

    const now = Date.now();
    if (localStorage.getItem('gacha_last_claim') !== null) {
      this.lastClaimTime = parseInt(localStorage.getItem('gacha_last_claim'));
    } else {
      this.lastClaimTime = now;
      localStorage.setItem('gacha_last_claim', this.lastClaimTime.toString());
    }

    this.processOfflineEarnings(now);
  },

  saveTokens() {
    localStorage.setItem('gacha_tokens', this.tokens.toString());
  },

  saveCollection() {
    localStorage.setItem('gacha_collection', JSON.stringify(this.collection));
  },

  saveHistory() {
    localStorage.setItem('gacha_history', JSON.stringify(this.history));
  },

  addTokens(amount) {
    this.tokens += amount;
    this.saveTokens();
    UI.updateTokenDisplay(true);
  },

  deductTokens(amount) {
    if (this.tokens >= amount) {
      this.tokens -= amount;
      this.saveTokens();
      UI.updateTokenDisplay(true);
      return true;
    }
    return false;
  },

  addAnimalToCollection(animal) {
    if (this.collection[animal.id]) {
      this.collection[animal.id] += 1;
    } else {
      this.collection[animal.id] = 1;
    }
    this.saveCollection();
    
    // Add to history
    this.history.unshift({
      id: animal.id,
      name: animal.name,
      emoji: animal.emoji,
      rarity: animal.rarity,
      timestamp: Date.now()
    });

    // Limit history length to 100
    if (this.history.length > 100) {
      this.history.pop();
    }
    this.saveHistory();
  },

  processOfflineEarnings(now) {
    const elapsed = now - this.lastClaimTime;
    const hours = Math.floor(elapsed / this.nextClaimInterval);

    if (hours > 0) {
      const earnedTokens = hours * 100;
      this.tokens += earnedTokens;
      this.saveTokens();
      
      // Update last claim time, adjusting for remainder time so we don't reset the fractional progress
      this.lastClaimTime += hours * this.nextClaimInterval;
      localStorage.setItem('gacha_last_claim', this.lastClaimTime.toString());

      setTimeout(() => {
        UI.showToast(`Selamat datang kembali! Kamu mendapatkan +${earnedTokens} Token dari akumulasi offline (${hours} jam).`, 'success');
      }, 800);
    }
  }
};

// UI Manager
const UI = {
  currentTab: 'gacha',
  currentFilter: 'all',
  gachaQueue: [],
  cardsFlippedCount: 0,
  eggShakeCount: 0,
  isEggPopped: false,

  init() {
    this.setupEventListeners();
    this.updateTokenDisplay(false);
    this.startClaimTimer();
    this.renderCollection();
    this.renderHistory();
    this.renderOddsInfo();
  },

  setupEventListeners() {
    // Tabs Navigation
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        SoundEffect.playClick();
        const tab = e.currentTarget.dataset.tab;
        this.switchTab(tab);
      });
    });

    // Gacha buttons
    document.getElementById('btn-gacha-1').addEventListener('click', () => this.handleGacha(1));
    document.getElementById('btn-gacha-10').addEventListener('click', () => this.handleGacha(10));

    // Filter collection buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        SoundEffect.playClick();
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.currentFilter = e.currentTarget.dataset.filter;
        this.renderCollection();
      });
    });

    // Clear history
    const clearHistoryBtn = document.getElementById('btn-clear-history');
    if (clearHistoryBtn) {
      clearHistoryBtn.addEventListener('click', () => {
        SoundEffect.playClick();
        if (confirm('Apakah Anda yakin ingin menghapus semua riwayat gacha?')) {
          State.history = [];
          State.saveHistory();
          this.renderHistory();
          this.showToast('Riwayat gacha telah dibersihkan.', 'info');
        }
      });
    }

    // Modal Close
    document.getElementById('modal-close').addEventListener('click', () => {
      SoundEffect.playClick();
      document.getElementById('details-modal').classList.remove('active');
    });

    // Close modal on background click
    document.getElementById('details-modal').addEventListener('click', (e) => {
      if (e.target.id === 'details-modal') {
        SoundEffect.playClick();
        document.getElementById('details-modal').classList.remove('active');
      }
    });

    // Egg Click interactions
    const egg = document.getElementById('gacha-egg');
    egg.addEventListener('click', () => {
      if (this.isEggPopped) return;
      this.shakeEgg();
    });

    // Reveal All button interaction
    const btnRevealAll = document.getElementById('btn-reveal-all');
    if (btnRevealAll) {
      btnRevealAll.addEventListener('click', () => {
        SoundEffect.playClick();
        btnRevealAll.style.display = 'none';
        const unrevealedCards = document.querySelectorAll('.reveal-card:not(.flipped)');
        unrevealedCards.forEach((card, idx) => {
          setTimeout(() => {
            card.click();
          }, idx * 180);
        });
      });
    }

    // Close reveal screen
    document.getElementById('btn-reveal-close').addEventListener('click', () => {
      SoundEffect.playClick();
      document.getElementById('gacha-animation-overlay').classList.remove('active');
      document.getElementById('reveal-wrapper').classList.remove('active');
      
      // Reset variables
      this.isEggPopped = false;
      egg.classList.remove('pop');
      egg.style.transform = '';
      
      // Update UI displays
      this.renderCollection();
      this.renderHistory();
    });
  },

  switchTab(tab) {
    this.currentTab = tab;
    document.querySelectorAll('.tab-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.tab === tab);
    });
    document.querySelectorAll('.view-content').forEach(view => {
      view.classList.toggle('active', view.id === `view-${tab}`);
    });

    if (tab === 'collection') {
      this.renderCollection();
    } else if (tab === 'history') {
      this.renderHistory();
    }
  },

  updateTokenDisplay(animate) {
    const el = document.getElementById('token-amount');
    if (!el) return;

    if (!animate) {
      el.textContent = State.tokens.toLocaleString();
      this.updateGachaButtonsState();
      return;
    }

    // Smooth counter-up animation
    const currentVal = parseInt(el.textContent.replace(/,/g, '')) || 0;
    const targetVal = State.tokens;
    const duration = 800; // ms
    const startTime = performance.now();

    const animateStep = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      const val = Math.floor(currentVal + (targetVal - currentVal) * ease);
      el.textContent = val.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(animateStep);
      } else {
        el.textContent = targetVal.toLocaleString();
        this.updateGachaButtonsState();
      }
    };
    requestAnimationFrame(animateStep);
  },

  updateGachaButtonsState() {
    const btn1 = document.getElementById('btn-gacha-1');
    const btn10 = document.getElementById('btn-gacha-10');

    if (btn1) btn1.disabled = State.tokens < 100;
    if (btn10) btn10.disabled = State.tokens < 1000;
  },

  startClaimTimer() {
    if (State.timerInterval) {
      clearInterval(State.timerInterval);
    }

    const timerCount = document.getElementById('timer-countdown');
    const progressBar = document.getElementById('timer-progress');

    const updateTimer = () => {
      const now = Date.now();
      const elapsed = now - State.lastClaimTime;
      
      if (elapsed >= State.nextClaimInterval) {
        // Time to claim
        const loops = Math.floor(elapsed / State.nextClaimInterval);
        State.addTokens(loops * 100);
        State.lastClaimTime += loops * State.nextClaimInterval;
        localStorage.setItem('gacha_last_claim', State.lastClaimTime.toString());
        this.showToast(`Hourly Reward! Kamu mendapatkan +${loops * 100} Token secara pasif!`, 'success');
        SoundEffect.playReveal('langka');
      }

      const remaining = State.nextClaimInterval - (elapsed % State.nextClaimInterval);
      const minutes = Math.floor(remaining / 60000);
      const seconds = Math.floor((remaining % 60000) / 1000);
      
      if (timerCount) {
        timerCount.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      }

      if (progressBar) {
        const percentage = ((State.nextClaimInterval - remaining) / State.nextClaimInterval) * 100;
        progressBar.style.width = `${percentage}%`;
      }
    };

    updateTimer(); // Initial call
    State.timerInterval = setInterval(updateTimer, 1000);
  },

  // Perform Gacha Logic
  handleGacha(pullsCount) {
    SoundEffect.playClick();
    const cost = pullsCount * 100;

    if (State.tokens < cost) {
      this.showToast('Token tidak mencukupi untuk melakukan gacha!', 'warning');
      return;
    }

    // Deduct tokens
    State.deductTokens(cost);

    // Generate pulled animals
    const pulledList = [];
    let highestRarity = 'biasa';
    const rarityPrecedence = { biasa: 1, langka: 2, legendaris: 3, rahasia: 4 };

    for (let i = 0; i < pullsCount; i++) {
      const rand = Math.random() * 100;
      let rarity = 'biasa';
      
      if (rand < 1) { // 1%
        rarity = 'rahasia';
      } else if (rand < 11) { // 10%
        rarity = 'legendaris';
      } else if (rand < 35) { // 24%
        rarity = 'langka';
      } else { // 65%
        rarity = 'biasa';
      }

      const availableAnimals = animals.filter(a => a.rarity === rarity);
      const chosen = availableAnimals[Math.floor(Math.random() * availableAnimals.length)];
      pulledList.push(chosen);

      if (rarityPrecedence[rarity] > rarityPrecedence[highestRarity]) {
        highestRarity = rarity;
      }
    }

    // Start gacha animation sequence
    this.runGachaAnimation(pulledList, highestRarity);
  },

  runGachaAnimation(pulledList, highestRarity) {
    const overlay = document.getElementById('gacha-animation-overlay');
    const portal = document.getElementById('gacha-portal');
    const egg = document.getElementById('gacha-egg');
    const reveal = document.getElementById('reveal-wrapper');
    const instruction = document.getElementById('gacha-instruction');

    // Reset overlay elements
    overlay.classList.add('active');
    reveal.classList.remove('active');
    instruction.textContent = 'Ketuk telur berulang kali untuk memecahkannya!';
    egg.classList.remove('pop');
    
    // Choose egg emoji based on highest rarity
    const eggs = {
      biasa: '🥚',
      langka: '🔵',
      legendaris: '🟣',
      rahasia: '✨'
    };
    egg.textContent = eggs[highestRarity] || '🥚';

    // Apply color glow to portal matching highest rarity
    const colors = {
      biasa: 'rgba(16, 185, 129, 0.4)',
      langka: 'rgba(59, 130, 246, 0.5)',
      legendaris: 'rgba(217, 119, 6, 0.6)',
      rahasia: 'rgba(236, 72, 153, 0.8)'
    };
    portal.style.boxShadow = `0 0 60px ${colors[highestRarity]}`;
    portal.style.borderColor = colors[highestRarity];

    this.gachaQueue = pulledList;
    this.eggShakeCount = 0;
    this.isEggPopped = false;
  },

  shakeEgg() {
    const egg = document.getElementById('gacha-egg');
    const beam = document.getElementById('glow-beam');
    this.eggShakeCount++;

    SoundEffect.playShake();
    egg.classList.add('shaking');
    
    // Quick burst of size
    egg.style.transform = `scale(${1 + this.eggShakeCount * 0.05})`;

    setTimeout(() => {
      egg.classList.remove('shaking');
    }, 100);

    if (this.eggShakeCount >= 5) {
      // POP EGG!
      this.isEggPopped = true;
      SoundEffect.playPop();
      egg.classList.add('pop');
      beam.classList.add('active');
      
      document.getElementById('gacha-instruction').textContent = 'Membuka Portal...';

      setTimeout(() => {
        beam.classList.remove('active');
        this.revealCards();
      }, 1000);
    }
  },

  revealCards() {
    const reveal = document.getElementById('reveal-wrapper');
    const container = document.getElementById('reveal-cards-container');
    const closeBtn = document.getElementById('btn-reveal-close');
    const btnRevealAll = document.getElementById('btn-reveal-all');
    
    reveal.classList.add('active');
    container.innerHTML = '';
    closeBtn.style.display = 'none';
    
    if (btnRevealAll) {
      btnRevealAll.style.display = 'block';
    }

    this.cardsFlippedCount = 0;

    // Build card elements
    this.gachaQueue.forEach((animal, index) => {
      // Add to player state
      State.addAnimalToCollection(animal);

      const card = document.createElement('div');
      card.className = `reveal-card ${animal.rarity}`;
      card.innerHTML = `
        <div class="reveal-card-inner">
          <div class="reveal-card-back">
            <div class="card-back-pattern">❓</div>
            <p>Ketuk</p>
          </div>
          <div class="reveal-card-front">
            <div class="animal-avatar-container">
              <span class="animal-emoji">${animal.emoji}</span>
            </div>
            <div class="animal-name">${animal.name}</div>
            <div class="animal-rarity-tag">${animal.rarity}</div>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        if (card.classList.contains('flipped')) return;
        
        card.classList.add('flipped');
        SoundEffect.playReveal(animal.rarity);
        this.cardsFlippedCount++;

        // Show particle or glow effect on reveal
        this.createRarityParticles(card, animal.rarity);

        if (this.cardsFlippedCount === this.gachaQueue.length) {
          if (btnRevealAll) {
            btnRevealAll.style.display = 'none';
          }
          setTimeout(() => {
            closeBtn.style.display = 'block';
            closeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }, 500);
        }
      });

      container.appendChild(card);
    });
  },

  createRarityParticles(card, rarity) {
    const rect = card.getBoundingClientRect();
    const count = rarity === 'rahasia' ? 30 : rarity === 'legendaris' ? 20 : rarity === 'langka' ? 10 : 5;
    const colors = {
      biasa: ['#10b981', '#34d399', '#a7f3d0'],
      langka: ['#3b82f6', '#60a5fa', '#93c5fd'],
      legendaris: ['#d97706', '#fbbf24', '#fef08a'],
      rahasia: ['#ec4899', '#f43f5e', '#a855f7', '#fb7185']
    };

    const palette = colors[rarity];

    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.style.position = 'fixed';
      p.style.width = `${Math.random() * 8 + 4}px`;
      p.style.height = p.style.width;
      p.style.borderRadius = '50%';
      p.style.backgroundColor = palette[Math.floor(Math.random() * palette.length)];
      p.style.zIndex = '3000';
      p.style.pointerEvents = 'none';

      // Centered at card position
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      p.style.left = `${x}px`;
      p.style.top = `${y}px`;

      document.body.appendChild(p);

      // Animate particle explosion
      const angle = Math.random() * Math.PI * 2;
      const velocity = Math.random() * 120 + 30;
      const dx = Math.cos(angle) * velocity;
      const dy = Math.sin(angle) * velocity - 20; // Slight upward bias

      p.animate([
        { transform: 'translate(0, 0) scale(1)', opacity: 1 },
        { transform: `translate(${dx}px, ${dy}px) scale(0)`, opacity: 0 }
      ], {
        duration: Math.random() * 800 + 400,
        easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)',
        fill: 'forwards'
      });

      // Cleanup
      setTimeout(() => p.remove(), 1200);
    }
  },

  // RENDER COLLECTION
  renderCollection() {
    const grid = document.getElementById('collection-grid');
    if (!grid) return;

    grid.innerHTML = '';
    
    // Sort animals: Rahasia -> Legendaris -> Langka -> Biasa
    const rarityOrder = { rahasia: 0, legendaris: 1, langka: 2, biasa: 3 };
    const sortedAnimals = [...animals].sort((a, b) => rarityOrder[a.rarity] - rarityOrder[b.rarity]);

    let unlockedCount = 0;

    sortedAnimals.forEach(animal => {
      const count = State.collection[animal.id] || 0;
      const isUnlocked = count > 0;
      
      if (isUnlocked) unlockedCount++;

      // Filter check
      if (this.currentFilter !== 'all' && animal.rarity !== this.currentFilter) {
        return;
      }

      const card = document.createElement('div');
      card.className = `animal-card ${isUnlocked ? 'unlocked' : 'locked'} ${animal.rarity}`;
      card.innerHTML = `
        ${!isUnlocked ? '<div class="lock-badge">🔒</div>' : ''}
        <div class="animal-avatar-container">
          <span class="animal-emoji">${animal.emoji}</span>
        </div>
        <div class="animal-name">${isUnlocked ? animal.name : '???'}</div>
        <div class="animal-rarity-tag">${animal.rarity}</div>
        ${isUnlocked ? `<div class="animal-count">Dimiliki: x${count}</div>` : ''}
      `;

      if (isUnlocked) {
        card.addEventListener('click', () => this.showAnimalDetails(animal, count));
      }

      grid.appendChild(card);
    });

    // Update statistics
    const statsEl = document.getElementById('collection-stats');
    if (statsEl) {
      statsEl.innerHTML = `Koleksi Terbuka: <span>${unlockedCount}</span> / ${animals.length} (${Math.round((unlockedCount/animals.length)*100)}%)`;
    }
  },

  showAnimalDetails(animal, count) {
    SoundEffect.playClick();
    
    document.getElementById('modal-animal-name').textContent = animal.name;
    document.getElementById('modal-animal-emoji').textContent = animal.emoji;
    document.getElementById('modal-animal-desc').textContent = animal.desc;
    document.getElementById('modal-stat-height').textContent = animal.height;
    document.getElementById('modal-stat-weight').textContent = animal.weight;
    document.getElementById('modal-stat-owned').textContent = count;

    // Rarity tag update
    const rarityTag = document.getElementById('modal-animal-rarity');
    rarityTag.textContent = animal.rarity;
    rarityTag.className = `modal-animal-rarity ${animal.rarity}`;

    // Glow outline update
    const glowBox = document.getElementById('modal-animal-glow');
    glowBox.className = `modal-animal-glow ${animal.rarity}`;

    document.getElementById('details-modal').classList.add('active');
  },

  // RENDER HISTORY
  renderHistory() {
    const list = document.getElementById('history-list');
    if (!list) return;

    list.innerHTML = '';

    if (State.history.length === 0) {
      list.innerHTML = '<div class="no-history">Belum ada riwayat penarikan gacha.</div>';
      return;
    }

    State.history.forEach(item => {
      const date = new Date(item.timestamp);
      const timeStr = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
      
      const row = document.createElement('div');
      row.className = 'history-item';
      row.innerHTML = `
        <div class="history-item-left">
          <span class="history-emoji">${item.emoji}</span>
          <div>
            <span class="history-name">${item.name}</span>
            <span class="history-rarity ${item.rarity}">${item.rarity}</span>
          </div>
        </div>
        <div class="history-time">${timeStr}</div>
      `;
      list.appendChild(row);
    });
  },

  renderOddsInfo() {
    // Fill odds in standard elements
  },

  showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = 'ℹ️';
    if (type === 'success') icon = '✅';
    if (type === 'warning') icon = '⚠️';

    toast.innerHTML = `<span>${icon}</span> <p>${message}</p>`;
    container.appendChild(toast);

    // Slide in
    setTimeout(() => {
      toast.classList.add('active');
    }, 10);

    // Fade out and remove
    setTimeout(() => {
      toast.classList.remove('active');
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }
};

// Initialize app when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  State.init();
  UI.init();
});
