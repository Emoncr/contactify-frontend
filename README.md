# 🚀 Contactify

Contactify is a production-grade SaaS platform designed to streamline lead management and contact form creation. Built with the latest web technologies, it offers a high-performance, accessible, and stunning user experience for managing your business growth.

![Contactify Dashboard](https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop)

## ✨ Features

- **Dynamic Form Builder**: Create custom contact forms with built-in validation.
- **Lead Management Dashboard**: Track and manage your leads with advanced filtering and insights.
- **Real-time Analytics**: Visualize your conversion rates and lead growth.
- **Automated Notifications**: Receive instant updates when a new lead is captured.
- **Modern UI/UX**: Dark mode support, glassmorphism effects, and smooth animations.
- **Production-Ready CI/CD**: Automated testing, linting, and deployment workflows.

## 🛠️ Tech Stack

- **Core**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Data Fetching**: [TanStack Query v5](https://tanstack.com/query/latest)
- **Forms**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js 20+** installed on your system.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Emoncr/contactify-frontend.git
   ```

2. Install dependencies:

   ```bash
   yarn install
   # or
   npm install
   ```

3. Run the development server:
   ```bash
   yarn dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Project Structure

```text
src/
├── app/              # Next.js App Router (Pages & Layouts)
├── components/       # Reusable UI & Dashboard components
│   ├── ui/           # Shadcn base components
│   └── dashboard/    # Feature-specific dashboard components
├── hooks/            # Custom React hooks
├── lib/              # Utility functions & shared logic
├── store/            # Global state management (Zustand)
└── types/            # TypeScript definitions
```

## 🔄 Workflow & CI/CD

This project follows a strict development workflow to ensure code quality:

- **Conventional Commits**: We use `husky` and `commitlint` to enforce [Conventional Commits](https://www.conventionalcommits.org/).
  - _Example_: `feat: add contact form creation`
- **Linting & Formatting**: `ESLint` and `Prettier` run automatically on staged files via `lint-staged`.
- **CI/CD Pipeline**:
  - Pushing to the `development` branch triggers an automated build check.
  - Upon a successful build, a Pull Request is automatically created and merged into the `main` branch.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ by the Contactify Team.
