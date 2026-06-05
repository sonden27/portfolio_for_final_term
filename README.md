# Bùi Ngọc Sơn | Portfolio Kỹ thuật số

Portfolio kỹ thuật số tổng hợp 6 bài tập của học phần Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo.

## Chạy trên máy

```bash
npm start
```

Mặc định website chạy tại `http://localhost:5173`. Nếu cổng này đang bận, `server.js` sẽ tự chuyển sang cổng tiếp theo.

## Cấu trúc

- `index.html`: nội dung portfolio và liên kết tới các PDF.
- `styles.css`: giao diện responsive.
- `script.js`: menu mobile, bộ lọc dự án và trình xem PDF.
- `server.js`: static server bằng Node.js, không cần cài package ngoài.
- `*.pdf`: minh chứng bài tập theo từng tuần.
- `bai-tap-du-an-ca-nhan-portfolio.png`: ảnh yêu cầu bài tập được lưu nội bộ để đối chiếu.

## Đưa lên GitHub Pages

1. Tạo repository trên GitHub.
2. Push toàn bộ thư mục này lên branch `main`.
3. Vào `Settings > Pages`.
4. Chọn `Deploy from a branch`, branch `main`, folder `/root`.
5. Mở URL GitHub Pages được cấp sau khi deploy xong.

Vì website là static site, GitHub Pages có thể serve trực tiếp từ `index.html` mà không cần build step.
