# Tanmay Pachpande - Personal Portfolio Website

## Project Title

Personal Portfolio Website

## Overview

A modern, responsive single-page portfolio application showcasing professional experience, technical skills, projects, and education as a Data Scientist and Software Developer. Built with vanilla JavaScript, CSS3, and HTML5 with zero external JavaScript dependencies. The site features dynamic content rendering, theme switching, and interactive animations.

**Audience**: Recruiters, professional networks, and collaborators seeking information about technical background and experience.

**Technology Stack**: HTML5, CSS3 (with CSS custom properties), Vanilla JavaScript (ES6+)

## Architecture Overview

The application uses a modular JavaScript architecture with clear separation of concerns:

```
┌──────────────────────────────────────┐
│  HTML Entry Point (index.html)       │
│  Structure: 6 sections + canvas      │
└────────────────┬─────────────────────┘
                 │
        ┌────────┴────────┐
        │                 │
┌───────▼──────┐  ┌──────▼───────┐
│  Data Layer  │  │  Styling     │
│ content.js   │  │ (CSS files)   │
└───────┬──────┘  └──────────────┘
        │
        ├─→ render.js (Presentation Layer)
        │   - renderAbout()
        │   - renderExperience()
        │   - renderSkills()
        │   - renderProjects()
        │   - renderEducation()
        │   - renderContact()
        │   - initializeContent()
        │
        ├─→ main.js (Interaction Layer)
        │   - Scroll event handlers
        │   - Navigation highlighting
        │   - Smooth scrolling
        │   - Intersection Observer setup
        │
        ├─→ animations.js (Effects Layer)
        │   - Matrix rain canvas effect
        │   - Binary stream animation
        │   - initAnimations()
        │
        └─→ theme.js (Styling Layer)
            - Theme persistence (localStorage)
            - Theme toggle handler
            - Color scheme switching

Execution Flow:
1. DOMContentLoaded event triggered
2. Load and parse data (content.js)
3. Render all sections from data
4. Initialize animations
5. Set up event listeners (scroll, intersection)
6. Apply stored theme preference
```

**Component Responsibilities**:
- **content.js**: Centralized data store (about, experience, skills, projects, education, contact)
- **render.js**: Template rendering engine generating HTML from data
- **main.js**: Page interactivity, scroll listeners, navigation updates
- **animations.js**: Visual effects (Matrix rain, binary stream)
- **theme.js**: Dark/light theme management with localStorage persistence
- **CSS files**: Styling with custom properties, responsive design, transitions

## Installation and Setup

### Prerequisites

- Modern web browser (Chrome 51+, Firefox 55+, Safari 9.1+, Edge 15+)
- Optional: Local HTTP server (recommended for Canvas and CORS testing)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/ptanmay143/ptanmay143.github.io.git
   cd ptanmay143.github.io
   ```

2. Open in browser (no server required):
   ```bash
   # Windows
   start index.html

   # macOS
   open index.html

   # Linux
   xdg-open index.html
   ```

3. Optional: Run local HTTP server for development:
   ```bash
   # Python 3
   python -m http.server 8000

   # Python 2
   python -m SimpleHTTPServer 8000

   # Node.js
   npm install -g http-server
   http-server

   # Then open: http://localhost:8000 or http://127.0.0.1:8080
   ```

### Verification Checklist

- [ ] Page loads without 404 errors in browser console
- [ ] Navigation links scroll smoothly to sections
- [ ] Light and dark theme toggle works
- [ ] Theme preference persists after browser refresh
- [ ] Matrix rain animation visible in top-right (desktop)
- [ ] Scroll navigation highlighting works
- [ ] Mobile responsive on smaller viewports

## Configuration

### Theme Customization

Theme colors defined in [styles/theme.css](styles/theme.css) using CSS custom properties. No build step required.

**Light Mode** (`:root` selector):
```css
--primary: #2563eb          /* Blue for headings, links */
--secondary: #1e40af        /* Darker blue for emphasis */
--accent: #3b82f6           /* Bright blue for highlights */
--bg-primary: #ffffff       /* Main background */
--bg-secondary: #f8fafc     /* Secondary background */
--text-primary: #1e293b     /* Main text color */
--text-secondary: #475569   /* Secondary text */
--border: #cbd5e1           /* Border color */
--shadow: rgba(0,0,0,0.1)   /* Shadow color */
```

**Dark Mode** (`[data-theme="dark"]` selector):
All variables adjusted for contrast and readability (darker backgrounds, lighter text).

**To customize**:
1. Open [styles/theme.css](styles/theme.css)
2. Update CSS variables in `:root` or `[data-theme="dark"]`
3. Save and refresh browser (no build required)
4. Theme toggle button reflects changes immediately

### Canvas Animation Performance

Matrix rain animation uses hidden canvas element. To adjust:
- **Animation speed**: Edit `INTERVAL` value in [scripts/animations.js](scripts/animations.js)
- **Character density**: Modify `MAX_COLUMNS` or `MAX_ROWS`
- **Colors**: Edit in `drawMatrix()` function or use CSS variables

### Navigation Offset Configuration

Hard-coded scroll offset for smooth scrolling: `80px` (sticky header height).

To change:
1. Update offset in [scripts/main.js](scripts/main.js) in `smoothScrollToSection()` function
2. Ensure offset matches header height in [styles/main.css](styles/main.css)

## Usage

### For Visitors

1. **Navigate Sections**: Click navigation links or scroll to explore About, Experience, Skills, Projects, Education, and Contact
2. **Toggle Theme**: Click sun/moon button in top-right to switch light/dark modes
3. **View Projects**: Click "View on GitHub" links to explore repositories
4. **Contact**: Use contact information for email, phone, or location

### For Content Updates

To add or update portfolio information:

1. Open [data/content.js](data/content.js)
2. Edit the `portfolioData` object:
   - **About**: Update `about.intro` (HTML allowed in `<span class="highlight">`)
   - **Experience**: Add/edit entries in `experience` array
   - **Skills**: Modify skill categories in `skills` object
   - **Projects**: Add/edit in `projects` array (set `link: null` if no GitHub)
   - **Education**: Update `education` array
   - **Contact**: Modify `contact` array

3. Save file - changes appear immediately on reload (no build step)

**Example: Adding a new project**:
```javascript
{
  title: "AI Chat Bot",
  description: "Conversational AI built with NLP and Python",
  link: "https://github.com/ptanmay143/project-name"
}
```

## Dependencies

### Frontend (Vanilla JavaScript)

- No external JavaScript libraries required
- All functionality implemented with vanilla ES6+
- Zero build process needed

### CSS Framework

- Pure CSS3 with custom properties (CSS variables)
- No CSS preprocessor required (SASS, LESS)
- Responsive design via media queries

### CDN Resources (Optional - Graceful Degradation)

| Resource | Purpose | Fallback |
|----------|---------|----------|
| jsDelivr (devicons) | Technology icons | Icons gracefully degrade if unavailable |
| shields.io | Social badges | Static image fallback possible |

## Development and Testing

### Best Practices Demonstrated

1. **Semantic HTML5**: Proper heading hierarchy and structure
2. **Responsive Design**: SVG and CSS scale across device sizes
3. **Performance Optimization**: Embedded fonts reduce external dependencies
4. **Accessibility**: Alt text on images, semantic structure
5. **Cross-Platform**: Works on Windows, macOS, Linux, and mobile

### Testing

1. Test in multiple browsers (Chrome, Firefox, Safari, Edge)
2. Validate HTML5 with W3C validator
3. Test CSS responsiveness at breakpoints: 1024px, 768px, 480px, 360px
4. Check accessibility with screen readers
5. Test theme toggle persistence
6. Verify Canvas animation works/disabled on mobile

## Deployment

Deployment via GitHub Pages (automatic):

1. Repository must be named `<username>.github.io`
2. Push changes to main branch
3. GitHub automatically builds and deploys
4. Portfolio accessible at: `https://<username>.github.io`

### Alternative Hosting

Can be hosted on any static web server:
- Vercel, Netlify, AWS S3, CloudFlare Pages
- Traditional servers: Apache, Nginx
- No server-side processing required

## Limitations and Future Improvements

### Limitations

| Issue | Impact |
|-------|--------|
| Static HTML with no backend | No dynamic data updates from APIs |
| Canvas animation not mobile-optimized | Animation disabled on mobile to save resources |
| No database integration | Cannot persist user interactions |
| No authentication | Portfolio is public-facing |
| Limited interactivity | One-way information display |
| No form submission | Contact requires external links |

### Future Improvements

1. Add dynamic project showcase (pull from GitHub API)
2. Implement contact form with email backend
3. Add portfolio analytics (visitor tracking, engagement)
4. Create interactive project filter/search
5. Add downloadable resume/CV
6. Implement blog section with recent posts
7. Create dark/light theme toggle animation
8. Add skill proficiency visualization charts
9. Implement multilingual support
10. Add video testimonials or case studies

## Contribution Guidelines

1. Fork the repository on GitHub
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make changes to content or styling
4. Test across multiple browsers and devices
5. Commit with clear messages
6. Submit pull request

## License

MIT License - See [LICENSE](LICENSE) file for complete terms.

**Copyright**: Tanmay Pachpande

**Permissions**: Commercial use, modification, distribution, private use

**Conditions**: License and copyright notice must be included

**Limitations**: No liability or warranty
