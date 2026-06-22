// ===================================================
// quiz1.js — Bài 1: Vai trò JS, biến, toán tử
// ===================================================

// Đáp án đúng và giải thích cho từng câu
const answers = {
  q1: {
    correct: "b",
    explanation: {
      correct: "✅ Đúng! JavaScript xử lý tương tác và hành vi của người dùng.",
      wrong: "❌ Sai! Đáp án đúng: Xử lý tương tác và hành vi (HTML tạo cấu trúc, CSS tạo giao diện)."
    }
  },
  q2: {
    correct: "c",
    explanation: {
      correct: "✅ Đúng! const dùng khi giá trị không muốn gán lại.",
      wrong: "❌ Sai! Đáp án đúng: const — dùng cho giá trị không thay đổi. (var: cũ và có vấn đề scope; let: dùng khi giá trị có thể thay đổi)"
    }
  },
  q3: {
    correct: "a",
    explanation: {
      correct: "✅ Đúng! === so sánh nghiêm ngặt cả giá trị lẫn kiểu dữ liệu.",
      wrong: "❌ Sai! Đáp án đúng: === — so sánh nghiêm ngặt. (== tự ép kiểu, = là toán tử gán)"
    }
  }
};

// Lấy các phần tử DOM
const btnSubmit = document.getElementById("btnSubmit");
const btnReset = document.getElementById("btnReset");
const resultBox = document.getElementById("resultBox");
const resultText = document.getElementById("resultText");

// Xử lý khi nhấn "Chấm quiz"
btnSubmit.addEventListener("click", function () {
  let score = 0;
  let allAnswered = true;

  // Duyệt qua từng câu hỏi
  for (const questionName in answers) {
    const selected = document.querySelector(`input[name="${questionName}"]:checked`);
    const card = document.getElementById(`${questionName}-card`);
    const feedback = document.getElementById(`${questionName}-feedback`);
    const correctValue = answers[questionName].correct;

    if (!selected) {
      allAnswered = false;
      feedback.textContent = "⚠️ Bạn chưa chọn đáp án cho câu này.";
      feedback.className = "feedback show fail";
      card.className = "question-card wrong";
      continue;
    }

    const userAnswer = selected.value;

    if (userAnswer === correctValue) {
      score++;
      feedback.textContent = answers[questionName].explanation.correct;
      feedback.className = "feedback show ok";
      card.className = "question-card correct";
    } else {
      feedback.textContent = answers[questionName].explanation.wrong;
      feedback.className = "feedback show fail";
      card.className = "question-card wrong";
    }
  }

  // Hiển thị kết quả
  resultBox.style.display = "block";

  const total = Object.keys(answers).length;

  if (!allAnswered) {
    resultText.textContent = `Bạn chưa trả lời đủ ${total} câu. Hãy chọn đáp án còn thiếu!`;
    resultText.style.color = "#e74c3c";
  } else if (score === total) {
    resultText.textContent = `🎉 Xuất sắc! Bạn đúng ${score}/${total} câu. Hoàn hảo!`;
    resultText.style.color = "#27ae60";
  } else if (score >= 2) {
    resultText.textContent = `👍 Tốt! Bạn đúng ${score}/${total} câu. Xem lại câu sai nhé.`;
    resultText.style.color = "#f39c12";
  } else {
    resultText.textContent = `💪 Bạn đúng ${score}/${total} câu. Ôn lại bài và thử lại!`;
    resultText.style.color = "#e74c3c";
  }

  // Disable nút chấm sau khi đã chấm
  btnSubmit.disabled = true;
  btnSubmit.style.opacity = "0.5";
});

// Xử lý khi nhấn "Chưa chấm" — reset toàn bộ
btnReset.addEventListener("click", function () {
  // Bỏ chọn tất cả radio
  const allRadios = document.querySelectorAll('input[type="radio"]');
  allRadios.forEach(function (radio) {
    radio.checked = false;
  });

  // Xóa feedback và reset class card
  for (const questionName in answers) {
    const card = document.getElementById(`${questionName}-card`);
    const feedback = document.getElementById(`${questionName}-feedback`);
    card.className = "question-card";
    feedback.className = "feedback";
    feedback.textContent = "";
  }

  // Ẩn kết quả
  resultBox.style.display = "none";
  resultText.textContent = "";

  // Bật lại nút chấm
  btnSubmit.disabled = false;
  btnSubmit.style.opacity = "1";
});
