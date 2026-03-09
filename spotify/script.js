// script.js
const audioData = [
  {
    image: "photos/Lemon Tree.jpeg",
    title: "Lemon Tree",
    name: "Peter Freudenthaler",
    audioLoc: "Audio/lemon tree.mp3",
  },
  {
    image: "photos/blue.jpeg",
    title: "Blue",
    name: "Yung Kai",
    audioLoc: "Audio/Blue Yung Kai.mp3",
  },
  {
    image: "photos/heav-waves.jpeg",
    title: "Heat Waves",
    name: "Glass Animals",
    audioLoc: "Audio/Heat Waves.mp3",
  },
  {
    image: "photos/Intentions.jpg",
    title: "Intentions",
    name: "Justin Bieber",
    audioLoc: "Audio/Intentions.mp3",
  },
  {
    image: "photos/Iraaday.jpg",
    title: "Iraaday",
    name: "Abdul Hannan",
    audioLoc: "Audio/Iraaday.mp3",
  },
  {
    image: "photos/Lost Kitten.jpg",
    title: "Lost Kitten",
    name: "Metric",
    audioLoc: "Audio/Lost Kitten.mp3",
  },
  {
    image: "photos/Sorry.webp",
    title: "Sorry",
    name: "Justin Bieber",
    audioLoc: "Audio/Justin_Bieber Sorry.mp3",
  },
  {
    image: "photos/Kun Anta.jpeg",
    title: "Kun Anta",
    name: "Humood AlKhudher",
    audioLoc: "Audio/Kun Anta.mp3",
  },
];

let audioNum = 0;
let isPlaying = false;
let audio; // will hold the current audio element

const content = document.querySelector(".content"),
  left = document.getElementById("left"),
  right = document.getElementById("right"),
  playBtn = document.querySelector(".playPause button"),
  container = document.querySelector(".container"),
  volumeSlider = document.getElementById("volumeSlider"),
  titleElement = document.querySelector("title");

// Helper: format time in mm:ss
function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
  const min = Math.floor(seconds / 60),
    sec = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
  return `${min}:${sec}`;
}

// Attach event listeners to the current audio element
function attachAudioListeners() {
  const progressBar = document.getElementById("progressBar");
  currentTimeEl = document.getElementById("currentTime");
  durationEl = document.getElementById("duration");

  if (!audio) return;

  audio.addEventListener("loadedmetadata", () => {
    progressBar.max = Math.floor(audio.duration);
    durationEl.textContent = "-" + formatTime(audio.duration);
  });

  audio.addEventListener("timeupdate", () => {
    progressBar.value = audio.currentTime;
    currentTimeEl.textContent = formatTime(audio.currentTime);
    const remaining = audio.duration - audio.currentTime;
    durationEl.textContent = "-" + formatTime(remaining);
  });

  progressBar.addEventListener("input", () => {
    audio.currentTime = progressBar.value;
  });
}

// Update the UI with the selected track
function updateContent(index) {
  titleElement.innerText = `Spotify - ${audioData[index].title}`
  content.innerHTML = `
    <section class="image">
      <img src="${audioData[index].image}" alt="${audioData[index].title}" />
    </section>
    <section class="texts">
      <p class="title">${audioData[index].title}</p>
      <p class="name">${audioData[index].name}</p>
    </section>
    <section class="audios">
      <audio id="audio" src="${audioData[index].audioLoc}"></audio>
      <div class="time">
        <span id="currentTime">0:00</span>
        <input type="range" id="progressBar" value="0" min="0" step="1" />
        <span id="duration">-0:00</span>
      </div>
    </section>
  `;

  // Update global audio reference
  audio = document.getElementById("audio");
  attachAudioListeners();

  // Set volume from slider
  audio.volume = volumeSlider.value / 100;

  // If was playing, play the new track
  if (isPlaying) {
    audio.play();
    playBtn.innerHTML = `<i class="ri-pause-line"></i>`;
  } else {
    playBtn.innerHTML = `<i class="ri-play-large-fill"></i>`;
  }
}

// Toggle play/pause
function togglePlayPause() {
  if (!audio) return;
  if (isPlaying) {
    audio.play();
    playBtn.innerHTML = `<i class="ri-pause-line"></i>`;
  } else {
    audio.pause();
    playBtn.innerHTML = `<i class="ri-play-large-fill"></i>`;
  }
}

// Event Listeners
playBtn.addEventListener("click", () => {
  isPlaying = !isPlaying;
  togglePlayPause();
});

right.addEventListener("click", () => {
  audioNum = (audioNum + 1) % audioData.length;
  container.style.backgroundImage = `url("${audioData[audioNum].image}")`;
  updateContent(audioNum);
});

left.addEventListener("click", () => {
  audioNum = (audioNum - 1 + audioData.length) % audioData.length;
  container.style.backgroundImage = `url("${audioData[audioNum].image}")`;
  updateContent(audioNum);
});

// Volume control
volumeSlider.addEventListener("input", (e) => {
  if (audio) {
    audio.volume = e.target.value / 100;
  }
  // Optional: update gradient (here it's just visual)
});

// Initial setup on page load
document.addEventListener("DOMContentLoaded", () => {
  audio = document.getElementById("audio");
  attachAudioListeners();
  audio.volume = volumeSlider.value / 100;

  // Set initial background
  container.style.backgroundImage = `url("${audioData[0].image}")`;
});

