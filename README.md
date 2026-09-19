# Daily Logger — support site

Trang hỗ trợ và chính sách quyền riêng tư của app **Daily Logger** trên App
Store. Trang tĩnh thuần HTML/CSS, không build, phục vụ qua GitHub Pages.

| File | Nội dung |
|---|---|
| `index.html` | Trang hỗ trợ: câu hỏi thường gặp và email liên hệ (Support URL nộp cho Apple) |
| `privacy.html` | Chính sách quyền riêng tư (Privacy Policy URL nộp cho Apple) |
| `style.css` | Bộ màu và kiểu chữ lấy theo app, có sẵn giao diện tối |
| `lang.js` | Đổi Việt/Anh; mặc định đi theo ngôn ngữ trình duyệt |
| `icon.png` | Icon app, dùng làm logo và favicon |

Sửa nội dung thì sửa thẳng hai file HTML rồi push — GitHub Pages tự cập nhật sau
khoảng một phút. Mỗi phần nội dung có hai bản, `data-lang="vi"` và
`data-lang="en"`; sửa bản này nhớ sửa luôn bản kia.

Xem thử tại máy:

```sh
python3 -m http.server 8765
```

Đổi email liên hệ thì sửa cả `mailto:` lẫn chữ hiển thị trong `index.html` và
`privacy.html`. Đổi nội dung chính sách thì nhớ sửa luôn ngày cập nhật ở đầu
`privacy.html`.
