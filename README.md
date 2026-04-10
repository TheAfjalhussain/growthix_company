# Growthix

A modern, responsive company website for Growthix built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Responsive Design** - Mobile-first approach with seamless experience across all devices
- **Modern UI Components** - Built with Radix UI for accessible, unstyled component primitives
- **Dark Mode Support** - Theme switching with next-themes
- **Fast Performance** - Optimized with Vite for lightning-fast development and production builds
- **SEO Optimized** - Clean routing and semantic HTML
- **Form Validation** - Robust form handling with React Hook Form and Zod
- **Smooth Animations** - Framer Motion for delightful user interactions
- **Type-Safe** - Full TypeScript support for better development experience
- **State Management** - React Query for efficient data fetching and caching

## 📋 Pages

- **Home** - Landing page with company overview
- **About** - Company information and mission
- **Services** - Detailed service offerings
- **Divisions** - Business divisions overview
- **Technologies** - Tech stack and capabilities
- **Projects** - Portfolio of past projects
- **Contact** - Contact form and information
- **Privacy Policy** - Privacy protection terms
- **Terms of Service** - Legal terms and conditions

## 🛠️ Tech Stack

### Frontend Framework
- **React** 18.3+ - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing

### UI & Styling
- **Radix UI** - Accessible component library
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Next Themes** - Theme management

### Form & Validation
- **React Hook Form** - Performant form handling
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Form resolver for validation

### Utilities
- **TanStack React Query** - Data fetching and caching
- **date-fns** - Date manipulation
- **Class Variance Authority** - Component styling variants
- **clsx** - Conditional className utility
- **Tailwind Merge** - Merge Tailwind class names

### Development Tools
- **ESLint** - Code quality and linting
- **Playwright** - E2E testing (fixtures included)
- **Vitest** - Unit testing

## 📁 Project Structure

```
src/
├── components/        # Reusable React components
│   └── ui/           # Radix UI based component library
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── pages/            # Page components
│   ├── Index.tsx     # Home page
│   ├── About.tsx     # About page
│   ├── Services.tsx  # Services page
│   ├── Divisions.tsx # Divisions page
│   ├── Technologies.tsx # Technologies page
│   ├── Projects.tsx  # Projects portfolio
│   ├── Contact.tsx   # Contact page
│   ├── Privacy.tsx   # Privacy policy
│   ├── Terms.tsx     # Terms of service
│   └── NotFound.tsx  # 404 page
├── assets/           # Static assets (images, videos, etc.)
├── App.tsx           # Main app component with routing
├── App.css           # Global app styles
├── main.tsx          # React DOM entry point
├── index.css         # Global styles
└── vite-env.d.ts     # Vite environment type definitions
```

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd growthix
   ```

2. **Install dependencies**
   ```bash
   bun install
   # or
   npm install
   ```

### Development Server

Start the development server with hot module replacement (HMR):

```bash
bun dev
# or
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## 📦 Available Scripts

### Development
```bash
bun dev              # Start dev server with HMR
```

### Build
```bash
bun build            # Production build
bun build:dev        # Development build
```

### Preview
```bash
bun preview          # Preview production build locally
```

### Linting
```bash
bun lint             # Run ESLint
bun lint --fix       # Fix linting errors automatically
```

## 🏗️ Building for Production

Create an optimized production build:

```bash
bun build
```

The build output will be in the `dist/` directory, ready for deployment.

### Preview Production Build

To test the production build locally:

```bash
bun preview
```

## 🧪 Testing

### End-to-End Testing
Playwright fixtures are configured. Run E2E tests using:

```bash
bun test:e2e         # If script is configured
```

### Unit Testing
Vitest configuration is included. Run unit tests:

```bash
bun test             # If script is configured
```

## 🎨 Customization

### Theme Configuration
- Edit `tailwind.config.ts` for Tailwind theme customization
- Modify `src/components/ThemeProvider.tsx` for theme switching logic

### Color Scheme
- Primary colors and theme variables are defined in the global CSS files
- Use Tailwind's color palette or customize in the config

### Typography
- Configure fonts and text styles in `tailwind.config.ts`
- Tailwind Typography plugin is installed for rich text styling

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit changes (`git commit -m 'Add amazing feature'`)
3. Push to branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## 📄 License

This project is a proprietary work of Growthix Company. All rights reserved.

## 📞 Support

For support, please contact:
- **Email**: support@growthix.com
- **Website**: https://growthix.com
- **Contact Form**: Available on the website contact page

## 🙏 Acknowledgments

- [Radix UI](https://radix-ui.com/) - Accessible component library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [React Router](https://reactrouter.com/) - Client-side routing
- [Framer Motion](https://www.framer.com/motion/) - Animation library

---

**Last Updated**: April 2026  
**Version**: 0.0.0  
**Status**: In Development
