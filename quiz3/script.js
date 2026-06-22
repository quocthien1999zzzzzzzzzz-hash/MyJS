// External JavaScript — file độc lập, tái sử dụng cho nhiều trang HTML

document.getElementById('btn').addEventListener('click', function () {
  alert('Xin chào từ External JS! 🔗');
});

/*
  So sánh 3 cách chèn JavaScript:

  1. Inline JS   → onclick="..." ngay trong thẻ HTML
     - Nhanh minh hoạ nhất, không cần file riêng
     - Khó bảo trì, trộn lẫn HTML và JS

  2. Internal JS → <script>...</script> trong cùng file HTML
     - Tổ chức hơn inline, phù hợp trang đơn giản
     - Không tái sử dụng được khi có nhiều trang

  3. External JS → <script src="script.js"></script>
     - Tách biệt hoàn toàn HTML và JS
     - Tái sử dụng, dễ bảo trì, trình duyệt cache → ưu tiên dùng trong dự án thực tế
*/
