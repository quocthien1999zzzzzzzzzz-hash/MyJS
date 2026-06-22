// ─────────────────────────────────────────
// 1. CLICK — bấm nút → đổi chữ / thông báo
// ─────────────────────────────────────────
const btnClick  = document.getElementById("btnClick");
const clickText = document.getElementById("clickText");
let clicked = 0;

btnClick.addEventListener("click", function () {
  clicked++;
  clickText.textContent = `Đã bấm ${clicked} lần! 🎉`;
  clickText.style.color = "#4ade80";
});

// ─────────────────────────────────────────
// 2. CHANGE — chọn màu → đổi văn bản kết quả
// ─────────────────────────────────────────
const colorSelect   = document.getElementById("colorSelect");
const changeResult  = document.getElementById("changeResult");

colorSelect.addEventListener("change", function () {
  const val = colorSelect.value;
  if (val) {
    changeResult.textContent = `Bạn đã chọn màu: ${colorSelect.options[colorSelect.selectedIndex].text}`;
    changeResult.style.color = val;
  } else {
    changeResult.textContent = "Hãy chọn một màu bên trên.";
    changeResult.style.color = "#94a3b8";
  }
});

// ─────────────────────────────────────────
// 3. KEYUP — gõ tên → hiển thị xem trước
// ─────────────────────────────────────────
const nameInput    = document.getElementById("nameInput");
const previewSpan  = document.getElementById("previewSpan");

nameInput.addEventListener("keyup", function () {
  const val = nameInput.value.trim();
  previewSpan.textContent = val ? `Xin chào, ${val}!` : "...";
});

// ─────────────────────────────────────────
// 4. SUBMIT — gửi form → chặn mặc định bằng preventDefault()
// ─────────────────────────────────────────
const myForm       = document.getElementById("myForm");
const formName     = document.getElementById("formName");
const submitResult = document.getElementById("submitResult");

myForm.addEventListener("submit", function (event) {
  event.preventDefault(); // chặn trang reload mặc định

  const name = formName.value.trim();
  if (name) {
    submitResult.textContent = `✅ Form đã gửi! Xin chào, ${name}!`;
    submitResult.classList.remove("hidden");
    formName.value = "";
  }
});
