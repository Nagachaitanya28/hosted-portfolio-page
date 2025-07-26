# Portfolio Website - Naga Chaitanya Chandavolu

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional black/white/grey aesthetic
- **Responsive**: Works perfectly on all devices
- **Animated**: Smooth animations and transitions throughout
- **Interactive**: Engaging hover effects and animations
- **Optimized**: Fast loading and performance optimized

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **UI Components**: Radix UI (shadcn/ui)
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser.

## 🚀 Deployment

This website is configured for automatic deployment to GitHub Pages:

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Your site will be available at `https://yourusername.github.io/repository-name`

### Manual Deployment

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills section
│   ├── Projects.tsx    # Projects showcase
│   ├── Certifications.tsx # Certifications
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── assets/             # Images and static assets
├── pages/              # Page components
├── hooks/              # Custom React hooks
└── lib/                # Utility functions
```

## ✨ Customization

### Adding Your Resume
1. Replace `public/resume.pdf` with your actual resume
2. The download button will automatically serve your file

### Updating Content
- Edit component files in `src/components/`
- Update personal information in each section
- Replace placeholder images in `src/assets/`

### Styling
- Colors and design tokens: `src/index.css`
- Component styles: Individual component files
- Animations: `src/index.css` (custom animations section)

## 🎨 Design System

- **Primary Colors**: Black (#000000)
- **Background**: White (#FFFFFF)
- **Accents**: Various grey shades
- **Typography**: Inter font family
- **Animations**: Custom CSS animations with smooth transitions

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interactions

## 🔧 Configuration

- **Vite Config**: `vite.config.ts`
- **Tailwind Config**: `tailwind.config.ts`
- **TypeScript Config**: `tsconfig.json`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

Naga Chaitanya Chandavolu - [chandavoluchaitanya@gmail.com](mailto:chandavoluchaitanya@gmail.com)

Project Link: [https://github.com/yourusername/portfolio-website](https://github.com/yourusername/portfolio-website)
