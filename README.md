# Coventina AI - Luxury Houseboat Experience Platform

Coventina AI is a next-generation digital platform designed for the luxury hospitality sector in Kerala. It serves as the digital front desk for **Coventina Luxury Houseboats**, offering seamless booking experiences, AI-driven content management, and robust administrative controls.

## 🚀 Key Features

### 1. **Public Experience**

- **Immersive Landing Page:** High-performance, visually stunning UI built with **Tailwind CSS v4** and **Framer Motion**.
- **Consultation Booking System:** Integrated connection form enabling potential clients to schedule consultations directly.
- **Video Showcases:** Optimized video modalities to display the houseboat experience without compromising performance.
- **Marquee Announcements:** Dynamic news ticker for real-time booking updates.

### 2. **Administrative Powerhouse**

- **Dashboard:** Centralized control center for managing the platform.
- **Consultation Management (CRUD):** Full lifecycle management of booking requests (View, Status Updates, Archive, Delete).
- **Content Studio:** (In Development) AI-powered tools for generating marketing copy and social media posts.

### 3. **AI Core (Coventina Intelligence)**

- **SEO Engine:** Built-in metadata optimization and sitemap generation.
- **Analytics:** (Planned) Intelligent insights into user behavior and booking trends.

---

## 🛠 Tech Stack

This project leverages the bleeding edge of the React ecosystem:

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + Shadcn/UI
- **Database:** PostgreSQL (via Neon DB)
- **ORM:** Prisma
- **Validation:** Zod + React Hook Form
- **Icons:** Lucide React

---

## 🏁 Getting Started

### Prerequisites

- Node.js 18+
- npm / pnpm

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-repo/coventina.git
    cd coventina
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    pnpm install
    ```

3.  **Set up Environment Variables:**
    Create a `.env` file in the root directory and add your database connection string:

    ```env
    DATABASE_URL="postgresql://user:password@host:port/database?sslmode=require"
    ```

4.  **Initialize Database:**

    ```bash
    npx prisma generate
    npx prisma db push
    ```

5.  **Run Development Server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📂 Project Structure

```
src/
├── app/
│   ├── (public)/       # Public-facing routes (Landing, About, Contact)
│   ├── admin/          # Protected Admin Dashboard routes
│   ├── api/            # API Route Handlers
│   └── layout.tsx      # Root Layout
├── components/
│   ├── admin/          # Admin-specific components (Tables, Charts)
│   ├── public/         # Public-facing components (Hero, Forms)
│   └── ui/             # Reusable Shadcn UI primitives
├── actions/            # Server Actions for backend logic
├── lib/                # Utility functions and DB clients
└── styles/             # Global styles
```

---

## 📄 License

This project is proprietary software belonging to **Coventina Luxury Houseboats**. All rights reserved.
