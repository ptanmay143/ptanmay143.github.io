<h1 align="center">
  <a href="https://github.com/ptanmay143/ptanmay143.github.io">
    <img src="docs/images/logo.svg" alt="Logo" width="100" height="100">
  </a>
</h1>

<div align="center">
  ptanmay143.github.io
  <br />
  <a href="#about"><strong>Explore the screenshots »</strong></a>
  <br />
  <br />
  <a href="https://github.com/ptanmay143/ptanmay143.github.io/issues/new?assignees=&labels=bug&template=01_BUG_REPORT.md&title=bug%3A+">Report a Bug</a>
  ·
  <a href="https://github.com/ptanmay143/ptanmay143.github.io/issues/new?assignees=&labels=enhancement&template=02_FEATURE_REQUEST.md&title=feat%3A+">Request a Feature</a>
  ·
  <a href="https://github.com/ptanmay143/ptanmay143.github.io/issues/new?assignees=&labels=question&template=04_SUPPORT_QUESTION.md&title=support%3A+">Ask a Question</a>
</div>

<div align="center">
<br />

[![Project license](https://img.shields.io/github/license/ptanmay143/ptanmay143.github.io.svg?style=flat-square)](LICENSE)
[![Pull Requests welcome](https://img.shields.io/badge/PRs-welcome-ff69b4.svg?style=flat-square)](https://github.com/ptanmay143/ptanmay143.github.io/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22)
[![code with love by ptanmay143](https://img.shields.io/badge/%3C%2F%3E%20with%20%E2%99%A5%20by-ptanmay143-ff1414.svg?style=flat-square)](https://github.com/ptanmay143)

</div>

<details open="open">
<summary>Table of Contents</summary>

- [About](#about)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Support](#support)
- [Project Assistance](#project-assistance)
- [Contributing](#contributing)
- [Authors & contributors](#authors--contributors)
- [Security](#security)
- [License](#license)
- [Acknowledgements](#acknowledgements)

</details>

---

## About

This repository powers a personal portfolio website that runs as a static, no-build single-page application. It presents profile, work experience, projects, education, certifications, publications, and contact data by rendering a structured `portfolioData` object from `data/content.js` into semantic sections of `index.html`.

The project is intended for developers who want a professional profile site with minimal operational overhead. No framework, package install, or build pipeline is required for local use: open `index.html` and the site loads immediately.

Feature behavior is implemented through small focused script modules. `scripts/render.js` maps data fields into section HTML, `scripts/theme.js` provides dark/light toggling with `localStorage` persistence, `scripts/main.js` handles smooth scrolling and viewport interactions, `scripts/animations.js` drives the matrix background and binary animation, and `scripts/ats-export.js` generates ATS-friendly plain-text resume output.

The design philosophy is straightforward maintainability through content-first updates. Instead of editing HTML blocks manually, most portfolio updates happen in one place (`data/content.js`). Styling remains split across theme tokens and responsive layout files, making visual changes predictable and low risk.

<details>
<summary>Screenshots</summary>
<br>

Add screenshots under `docs/images/` and update this table if you want visual previews in the README.

|                               Home Page                               |                               Projects Section                               |
| :-------------------------------------------------------------------: | :--------------------------------------------------------------------------: |
| <img src="docs/images/screenshot.png" title="Home Page" width="100%"> | <img src="docs/images/screenshot.png" title="Projects Section" width="100%"> |

</details>

### Built With

- **HTML5** — semantic page structure in `index.html`.
- **CSS3** — base styles, responsive behavior, and theme tokens via `styles/main.css`, `styles/responsive.css`, and `styles/theme.css`.
- **Vanilla JavaScript (ES6+)** — content rendering, UI state, animations, and resume export.
- **Browser Local Storage** — persistence for selected theme (`light`/`dark`).
- **Rasa Webchat CDN not used here** — this repo is fully static and dependency-light with no runtime package manager.

---

## Getting Started

Local setup is immediate: clone and open. If you prefer local serving for stricter browser policies or deployment parity, run a static file server.

### Prerequisites

- **Modern web browser** — Chrome, Edge, Firefox, or Safari current versions.
- **Git** (optional) — for cloning and version control.
- **Python 3** (optional) — only if you want to run a local static server.

### Installation

1. Clone the repository.

```bash
git clone https://github.com/ptanmay143/ptanmay143.github.io.git
```

2. Enter the project directory.

```bash
cd ptanmay143.github.io
```

3. Open directly in a browser.

```bash
start index.html
```

4. Optional: run with a local static server.

```bash
python -m http.server 8000
```

5. Verify successful launch.

```text
Open http://localhost:8000 and confirm sections render with content,
theme toggle works, and navigation scroll links jump smoothly.
```

### Environment Variables

This project does not read environment variables.

| Variable | Required | Default | Description                                       | Example Value |
| -------- | -------- | ------- | ------------------------------------------------- | ------------- |
| None     | No       | N/A     | Static front-end site uses in-repo content files. | N/A           |

---

## Usage

Primary run mode:

```bash
start index.html
```

Content editing workflow:

1. Update `data/content.js` (`portfolioData` sections like `experience`, `projects`, `skills`, `contactLinks`).
2. Reload the page.
3. Confirm rendered cards and sections reflect your changes.

Theme and animation features:

- Click the moon/sun button to toggle themes.
- Theme state is stored under `localStorage` key `theme`.
- Matrix canvas and binary side animation start at load and react to resize.

Resume export flow:

1. Click **Export Resume**.
2. Choose either **Download as TXT (ATS Optimized)** or **Copy to Clipboard**.
3. Exported file is generated from `portfolioData` and named `Tanmay_Pachpande_Resume_ATS.txt`.

Significant script entry points:

- `scripts/main.js` — startup (`DOMContentLoaded`), smooth scroll, active nav state, section fade-ins.
- `scripts/render.js` — maps data to HTML blocks for all sections.
- `scripts/theme.js` — theme switching and icon updates.
- `scripts/animations.js` — matrix and binary effects.
- `scripts/ats-export.js` — plain-text ATS resume generation, modal actions.

---

## Roadmap

See the [open issues](https://github.com/ptanmay143/ptanmay143.github.io/issues) for a full list of proposed features and known bugs.

- [Top Feature Requests](https://github.com/ptanmay143/ptanmay143.github.io/issues?q=label%3Aenhancement+is%3Aopen+sort%3Areactions-%2B1-desc) (Add your votes using the 👍 reaction)
- [Top Bugs](https://github.com/ptanmay143/ptanmay143.github.io/issues?q=is%3Aissue+is%3Aopen+label%3Abug+sort%3Areactions-%2B1-desc) (Add your votes using the 👍 reaction)
- [Newest Bugs](https://github.com/ptanmay143/ptanmay143.github.io/issues?q=is%3Aopen+is%3Aissue+label%3Abug)

Current code suggests future work around richer accessibility checks, optional print/PDF resume output, and further componentization while preserving the no-build static workflow.

---

## Support

Reach out to the maintainer at one of the following places:

- [GitHub issues](https://github.com/ptanmay143/ptanmay143.github.io/issues/new?assignees=&labels=question&template=04_SUPPORT_QUESTION.md&title=support%3A+)
- Contact options listed on [this GitHub profile](https://github.com/ptanmay143)

---

## Project Assistance

If you want to say **thank you** or support active development of ptanmay143.github.io:

- Add a [GitHub Star](https://github.com/ptanmay143/ptanmay143.github.io) to the project.
- Share the live portfolio link with your network.
- Publish adaptation examples and improvements for other developers.

Together, we can make ptanmay143.github.io **better**!

---

## Contributing

First off, thanks for taking the time to contribute! Contributions are what make the open-source community such an amazing place to learn, inspire, and create.

Suggested workflow:

1. Fork the repository and branch from `master`.
2. Make focused changes (data, scripts, styles, or accessibility updates).
3. Validate in a browser at desktop and mobile widths.
4. Submit a pull request with before/after notes.

No dedicated `docs/CONTRIBUTING.md` is present, so repository conventions are lightweight and PR-driven.

---

## Authors & Contributors

The original setup of this repository is by [Tanmay Pachpande](https://github.com/ptanmay143).

For a full list of all authors and contributors, see [the contributors page](https://github.com/ptanmay143/ptanmay143.github.io/contributors).

---

## Security

ptanmay143.github.io follows good practices of security, but 100% security cannot be assured. ptanmay143.github.io is provided **"as is"** without any **warranty**. Use at your own risk.

Because this is a static front-end project, key operational security concerns are third-party script integrity, content-link safety, and browser-side data handling. No dedicated `docs/SECURITY.md` exists currently.

---

## License

This project is licensed under the **MIT License**.

See [LICENSE](LICENSE) for more information.

---

## Acknowledgements

- Open web platform standards (HTML/CSS/JavaScript).
- Browser tooling community for performance and accessibility guidance.
- Portfolio and resume communities influencing content-first static-site patterns.

<!-- Generated by README_GENERATOR_PROMPT v0.1 -->
