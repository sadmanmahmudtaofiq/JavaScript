const audioData = [
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
  {
    image: "photos/Lemon Tree.jpeg",
    title: "Lemon Tree",
    name: "Peter Freudenthaler",
    audioLoc: "Audio/lemon tree.mp3",
  },
];

let audioNum = 0;
let isPlaying = false;

const content = document.querySelector(".content");
const left = document.getElementById("left");
const right = document.getElementById("right");
const playBtn = document.querySelector(".playPause button");
const container = document.querySelector(".container");

function audioFunc() {
  const audio = document.getElementById("audio");
  const progressBar = document.getElementById("progressBar");
  const currentTimeEl = document.getElementById("currentTime");
  const durationEl = document.getElementById("duration");

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

  function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${min}:${sec}`;
  }
}

function updateContent(index) {
  content.innerHTML = `
    <section class="image">
      <img src="${audioData[index].image}" alt="image" />
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

  audioFunc();

  const newAudio = document.getElementById("audio");
  if (isPlaying) {
    newAudio.play();
  } else {
    newAudio.pause();
  }
}

function playOrPause() {
  if (isPlaying) {
    playBtn.innerHTML = `<i class="ri-pause-line"></i>`;
    audio.play();
  } else {
    playBtn.innerHTML = `<i class="ri-play-large-fill"></i>`;
    audio.pause();
  }
}

playBtn.addEventListener("click", () => {
  isPlaying = !isPlaying;
  playOrPause();
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

audioFunc();
