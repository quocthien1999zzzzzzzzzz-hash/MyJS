// ===================================================
// practice-control.js — UI logic cho practice-control.html
// ===================================================

const btnRun    = document.getElementById("btnRun");
const btnClear  = document.getElementById("btnClear");
const output    = document.getElementById("consoleOutput");
const scoreInput = document.getElementById("scoreInput");

// Checklist items
const cb1 = document.getElementById("cb1");
const cb2 = document.getElementById("cb2");
const cb3 = document.getElementById("cb3");
const checkItems = document.querySelectorAll(".check-item");

// Gắn sự kiện checkbox → đổi style
checkItems.forEach(function (item) {
  const cb = item.querySelector("input[type='checkbox']");
  cb.addEventListener("change", function () {
    item.classList.toggle("done", cb.checked);
  });
});

// Hàm thêm dòng vào console output
function addLine(text, className) {
  const line = document.createElement("div");
  line.className = "console-line " + (className || "");
  line.textContent = text;
  output.appendChild(line);
}

// Nút chạy code
btnRun.addEventListener("click", function () {
  output.innerHTML = "";

  const score = parseFloat(scoreInput.value);

  if (isNaN(score) || score < 0 || score > 10) {
    addLine("⚠️ Vui lòng nhập điểm hợp lệ (0 – 10)", "console-line");
    return;
  }

  // TODO 1: if...else if...else → xếp loại
  let xepLoai;
  if (score >= 9) {
    xepLoai = "Xuất sắc";
  } else if (score >= 8) {
    xepLoai = "Giỏi";
  } else if (score >= 6.5) {
    xepLoai = "Khá";
  } else if (score >= 5) {
    xepLoai = "Trung bình";
  } else {
    xepLoai = "Yếu";
  }

  addLine("Điểm: " + score, "label");
  addLine("Xếp loại: " + xepLoai, "rank");
  addLine("", "");

  // TODO 2: vòng for in 1 → 5
  addLine("In các số từ 1 đến 5 bằng vòng for:", "label");
  for (let i = 1; i <= 5; i++) {
    addLine(String(i), "num");
  }
  addLine("", "");

  // TODO 3: tính tổng 1 → 5
  let total = 0;
  for (let i = 1; i <= 5; i++) {
    total = total + i;
  }
  addLine("Tổng = " + total, "sum");

  // Tự động check các ô checklist
  cb1.checked = true; document.getElementById("check1").classList.add("done");
  cb2.checked = true; document.getElementById("check2").classList.add("done");
  if (total === 15) {
    cb3.checked = true; document.getElementById("check3").classList.add("done");
  }
});

// Nút xóa output
btnClear.addEventListener("click", function () {
  output.innerHTML = '<span class="console-hint">Nhấn "Chạy code" để xem kết quả...</span>';
  [cb1, cb2, cb3].forEach(function (cb) { cb.checked = false; });
  checkItems.forEach(function (item) { item.classList.remove("done"); });
});
