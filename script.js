/* --------------- INTRO MUSIC + START --------------- */
const intro = document.getElementById("intro");
const mainContent = document.getElementById("mainContent");
const startBtn = document.getElementById("startBtn");
const music = document.getElementById("bgMusic");

// 🎵 List of all available songs (add/remove easily)
const playlist = [
  "music/1.mp3",
  "music/2.mp3",
  "music/3.mp3",
  "music/4.mp3"
];

// helper to pick random song
function getRandomSong() {
  const i = Math.floor(Math.random() * playlist.length);
  return playlist[i];
}

// current music state
let isMuted = false;
let currentSong = "";

function playRandomSong() {
  const random = getRandomSong();
  if (random === currentSong && playlist.length > 1) return playRandomSong(); // avoid repeat
  currentSong = random;
  music.src = random;
  music.volume = 0;
  music.play()
    .then(() => {
      // smooth fade-in
      let v = 0;
      const fade = setInterval(() => {
        if (v < 0.7 && !isMuted) {
          v += 0.02;
          music.volume = v;
        } else clearInterval(fade);
      }, 100);
    })
    .catch(err => console.warn("Music play blocked:", err));
}

// intro start
startBtn.addEventListener("click", () => {
  intro.style.opacity = "0";
  setTimeout(() => {
    intro.style.display = "none";
    mainContent.classList.remove("hidden");
  }, 1500);

  playRandomSong();
});

// buttons
const muteBtn = document.getElementById("muteBtn");
const nextSongBtn = document.getElementById("nextSongBtn");

muteBtn.addEventListener("click", () => {
  if (isMuted) {
    music.muted = false;
    isMuted = false;
    muteBtn.textContent = "🔊";
  } else {
    music.muted = true;
    isMuted = true;
    muteBtn.textContent = "🔇";
  }
});

nextSongBtn.addEventListener("click", () => {
  playRandomSong();
});
