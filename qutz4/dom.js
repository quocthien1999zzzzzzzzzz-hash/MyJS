const title     = document.getElementById("title");
const btnChange = document.getElementById("btnChange");
const btnColor  = document.getElementById("btnColor");
const btnReset  = document.getElementById("btnReset");
const log       = document.getElementById("log");

const colors = ["#f97316", "#a855f7", "#22d3ee", "#f43f5e", "#4ade80", "#facc15"];
let colorIndex = 0;

// Trạng thái ban đầu
const defaultText  = "Xin chào";
const defaultColor = "#f8fafc";
const defaultBg    = "#0f1117";

function addLog(msg) {
  log.textContent += `> ${msg}\n`;
}

// TODO 1: đổi title thành "Học DOM thật vui!"
btnChange.addEventListener("click", function () {
  title.textContent = "Học DOM thật vui!";
  title.style.transform = "scale(1.08)";
  setTimeout(() => title.style.transform = "scale(1)", 300);
  addLog('title.textContent = "Học DOM thật vui!"');
});

// TODO 2: đổi màu chữ và màu nền
btnColor.addEventListener("click", function () {
  const color = colors[colorIndex % colors.length];
  title.style.color = color;
  document.body.style.background = color + "22"; // màu nền nhạt
  addLog(`title.style.color = "${color}"`);
  addLog(`body.style.background = "${color}22"`);
  colorIndex++;
});

// Reset về trạng thái ban đầu
btnReset.addEventListener("click", function () {
  title.textContent  = defaultText;
  title.style.color  = defaultColor;
  document.body.style.background = defaultBg;
  colorIndex = 0;
  log.textContent = "";
  addLog("Reset về trạng thái ban đầu.");
});
