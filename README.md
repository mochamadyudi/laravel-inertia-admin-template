# 🎨 Laravel + Ant Design + Inertia + React + Redux Theme Starter

Halo! 👋
Ini adalah **starter theme** buat kamu yang lagi ngebangun project Laravel pakai kombinasi stack modern:
Ant Design + React (dengan TypeScript) + Inertia.js + Redux + SCSS + Tailwind CSS. Cocok banget buat bikin dashboard/admin panel dengan UI yang fleksibel dan clean.

## 🚀 Stack Utama

- **Laravel** – Backend dan routing
- **Inertia.js** – Bridge antara Laravel dan React
- **React.js** + **TypeScript** – Frontend SPA
- **Ant Design (antd)** – UI component library
- **Redux** – State management
- **SCSS** – Buat styling custom yang lebih fleksibel
- **Tailwind CSS** – Utility-first CSS untuk layout cepat

---

## 🛠 Cara Setup

1. **Clone project-nya:**

```bash
git clone https://github.com/username/laravel-inertia-theme.git
cd laravel-inertia-theme
```

2. **Install Dependency**
```bash
composer install
npm install

```

3. **Copy ```.env``` dan generate key**
```bash
cp .env.example .env
php artisan key:generate
```

4. **Setup Database dan jalankan migration:**
```bash
php artisan migrate
```

5. **Jalankan dev Server**
```bash
npm run dev
php artisan serve
```

## ✨ Fitur
- Sudah include layout dasar (sidebar, header, dll)
- Integrasi form antd + validasi
- SCSS dan Tailwind jalan bareng tanpa konflik
- Struktur folder rapi untuk components, pages, dan layout
- Siap pakai Redux (dengan TypeScript setup)
- Inertia.js udah disetel dengan baik, tinggal gas!

## 🧩 Custom Theme Ant Design
Ant Design sudah di-custom lewat ```config/themes/theme.php```. Kamu bisa override warna dan style di sini:
```php
return [
  "antd" => [
    "cssVar" => true,
    "token" => [
      "colorPrimary" => "#FFA100",
      "colorInfo" => "#FFA100",
      "colorSuccess" => "#4eb71a",
      "colorWarning" => "#eca619",
      "colorError" => "#ec373a",
    ],
    "components" => [
      "Input" => [
        "colorBorder" => "rgba(210,210,210,0.4)",
        "inputFontSizeLG" => 14,
        "inputFontSize" => 14,
        "colorText" => "rgba(6,6,6,0.88)",
        "paddingBlock" => 7,
        "paddingBlockSM" => 7,
        "paddingBlockLG" => 7,
        "controlHeight" => 40,
        "controlHeightLG" => 50,
        "controlHeightSM" => 35,
      ],
      // ...
    ],
  ]
];


```

## 🤝 Kontribusi
Feel free buat forking, PR, atau kasih ide. Ini masih basic starter, jadi bisa banget dikembangkan bareng.

## 📬 Kontak
Punya pertanyaan atau butuh bantuan?
DM aja di [LinkedIn](https://www.linkedin.com/in/mochamadyudi) atau kirim email ke myudisobari12@gmail.com.
