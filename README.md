# ptanmay143.github.io

> A modern, single-page portfolio website showcasing professional experience, technical skills, and projects.

## What is this?

This is a personal portfolio website built with vanilla JavaScript, HTML5, and CSS3—no frameworks, no build process, just clean and simple web technologies. It features dynamic content rendering, a dark/light theme toggle, and smooth animations including a Matrix-style rain effect.

Perfect for developers who want a professional portfolio they can customize by editing a single data file.

## Features

- 📱 **Fully Responsive** - works seamlessly on desktop, tablet, and mobile
- 🎨 **Theme Switching** - toggle between light and dark modes with persistent preference
- ⚡ **Zero Dependencies** - pure vanilla JavaScript, no external libraries
- 🎯 **Easy to Customize** - update your content by editing one JSON-like file
- ✨ **Smooth Animations** - includes Matrix rain effect and smooth scrolling
- 📦 **Zero Build Process** - just clone, edit, and deploy

## Quick Start

```bash
# Clone the repository
git clone https://github.com/ptanmay143/ptanmay143.github.io.git
cd ptanmay143.github.io

# Open in your browser
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

That's it! No dependencies to install, no build process to run.

## Customizing Your Portfolio

The entire portfolio content is stored in a single file. Just edit it and reload:

**1. Update your information:**
```javascript
// Edit data/content.js
const portfolioData = {
  contact: {
    name: "Your Name",
    email: "your.email@example.com",
    phone: "+1 234 567 890",
    // ... other contact info
  },
  about: {
    intro: "Your introduction with <span class=\"highlight\">key skills</span>...",
    workRights: { /* optional */ }
  },
  experience: [
    {
      title: "Software Engineer",
      company: "Tech Company",
      location: "City, Country",
      date: "Jan 2020 - Present",
      responsibilities: [
        "What you did...",
        "Another achievement..."
      ]
    }
  ],
  // ... add your projects, skills, education, etc.
};
```

**2. Change the theme colors:**
```css
/* Edit styles/theme.css */
:root {
  --primary: #2563eb;      /* Your primary color */
  --secondary: #1e40af;    /* Your secondary color */
  /* ... other color variables */
}
```

**3. Refresh your browser** - that's it!

## Deployment

### GitHub Pages (Recommended)

This repository is already set up for GitHub Pages:

1. Ensure your repository is named `<username>.github.io`
2. Push your changes to the `main` branch
3. Your portfolio will be live at `https://<username>.github.io`

### Other Options

Since this is a static site with no build process, you can deploy it anywhere:
- **Netlify/Vercel**: Drag and drop the folder
- **AWS S3**: Upload as a static website
- **Traditional hosting**: Upload via FTP to any web server

## Project Structure

```
ptanmay143.github.io/
├── index.html              # Main HTML file
├── data/
│   └── content.js         # Your portfolio data (edit this!)
├── scripts/
│   ├── main.js            # Page interactions & navigation
│   ├── render.js          # Renders content from data
│   ├── theme.js           # Theme switching logic
│   ├── animations.js      # Matrix rain & animations
│   └── ats-export.js      # Resume export functionality
└── styles/
    ├── main.css           # Main styles
    ├── theme.css          # Color themes
    └── responsive.css     # Mobile responsive styles
```

## Background

This portfolio was built to showcase professional experience while demonstrating clean vanilla JavaScript practices. The goal was to create something that:

- **Loads fast** - no frameworks or dependencies means minimal file size
- **Works everywhere** - vanilla JS works in all modern browsers
- **Easy to maintain** - change your data in one place, no complex build tools
- **Professional appearance** - clean design with smooth animations

The Matrix rain animation is a nod to classic hacker aesthetics while remaining subtle enough for professional use.

## Browser Support

- Chrome 51+
- Firefox 55+
- Safari 9.1+
- Edge 15+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

Contributions are welcome! If you have ideas for improvements:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built by Tanmay Pachpande** | [View Live](https://ptanmay143.github.io)
