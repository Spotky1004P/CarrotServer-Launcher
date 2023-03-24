const electron = require('electron');

function hrefWorker(el) {
  el.addEventListener("click", () => {
    const link = el.getAttribute("href");
    electron.shell.openExternal(link);
  })
}
// hrefWorker(document.getElementById("landing_minepage"));
hrefWorker(document.getElementById("landing_discord"));


document.getElementById("launch_button").addEventListener("click", () => {
  document.getElementById("launch_before").style.display = "none";
  document.getElementById("launch_after").style.display = "";
});

const loadCarrot = document.getElementById("launch_load_carrot");
const progressLabel = document.getElementById("launch_progress_label");

function setCarrotProgress() {
  const progress = progressLabel.innerText;
  loadCarrot.style.setProperty("--launch-progress", progress);
}
