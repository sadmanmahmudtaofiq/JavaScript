const audio = document.getElementById("audio");
const progressBar = document.getElementById("progressBar");
const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");

audio.addEventListener("loadedmetadata", () => {
  progressBar.max = Math.floor(audio.duration);
  updateTime();
});

audio.addEventListener("timeupdate", updateTime);

progressBar.addEventListener("input", () => {
  audio.currentTime = progressBar.value;
});

function updateTime() {
  const curr = Math.floor(audio.currentTime);
  const dur = Math.floor(audio.duration);
  progressBar.value = curr;
  currentTime.textContent = formatTime(curr);
  duration.textContent = "-" + formatTime(dur - curr);
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}
