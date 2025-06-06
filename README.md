# 📘 Book Tracker App - Frontend Contribution

## 🧑‍💻 Role Saya: Frontend Developer

Saya memilih role sebagai **Frontend Developer** dalam tes ini. Fokus saya adalah membangun antarmuka pengguna untuk fitur-fitur berikut:

- 🎨 Halaman Login
- 🎨 Halaman Register
- 🎨 Halaman Forgot Password
- 🎨 Halaman Settings
- 🎨 Halaman Insight (dummy)
- 🎨 (Optional) Fitur tambahan UI

Semua halaman ini dibangun menggunakan komponen React dan Tailwind CSS, serta beberapa menggunakan komponen `shadcn/ui`. Halaman dibuat tanpa koneksi ke backend (dummy).

---

## 📄 Halaman yang Dibuat

| Halaman             | Path                   | Deskripsi                                           |
| ------------------- | ---------------------- | --------------------------------------------------- |
| **Login**           | `/auth/login`          | Form login dengan UI modern                         |
| **Register**        | `/auth/register`       | Form registrasi pengguna baru                       |
| **Forgot Password** | `/auth/forgotpassword` | Form reset password (dummy)                         |
| **Settings**        | `/settings`            | Halaman pengaturan profil pengguna (dummy)          |
| **Insight**         | `/insight`             | Halaman insight data pengguna (dummy / placeholder) |

---

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- ESLint
- PostCSS

---

## Project Structure

```
frontend/
├── bun.lockb
├── components.json
├── Dockerfile
├── env.development
├── env.example
├── env.production
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── public
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── README.md
├── setup.js
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── components
│   │   ├── BookCard.tsx
│   │   ├── BottomNav.tsx
│   │   ├── BrowseLibrary.tsx
│   │   ├── HeaderNav.tsx
│   │   ├── ProgressCard.tsx
│   │   └── ui
│   ├── context
│   │   └── private-context.tsx
│   ├── data
│   │   └── dummyData.ts
│   ├── hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── index.css
│   ├── lib
│   │   └── utils.ts
│   ├── main.tsx
│   ├── pages
│   │   ├── auth
│   │   ├── Index.tsx
│   │   ├── NotFound.tsx
│   │   └── private
│   ├── services
│   │   └── api.ts
│   └── vite-env.d.ts
├── structure.txt
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

13 directories, 40 files

```

---

## Prerequisites

- Node.js 16.x atau lebih baru
- npm atau yarn

---

## Getting Started

1. Install dependencies:

````bash
npm install


2. Start the development server:

```bash
npm run dev
````

The application will be available at [http://localhost:8080](http://localhost:8080)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Future Enhancements

- [ ] Authentication system
- [ ] Search and filtering
- [ ] Sorting options
- [ ] Book categories/tags
- [ ] Reading progress tracking
- [ ] Book ratings and reviews
- [ ] User profiles and personal libraries

## License

This project is licensed under the MIT License - see the LICENSE file for details.
