// Resume Export Functionality: PDF, HTML, Markdown (.md), and Plain Text (.txt)

// Strip HTML tags helper with robust fallback
function stripHTML(html) {
  if (!html) return "";
  try {
    const temp = document.createElement("div");
    temp.innerHTML = html;
    const text = temp.textContent || temp.innerText;
    if (text) return text;
  } catch (e) {}
  return html.replace(/<[^>]*>/g, "");
}

// Generic file download helper
function downloadFile(content, fileName, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const element = document.createElement("a");
  element.href = url;
  element.download = fileName;
  document.body.appendChild(element);
  element.click();
  setTimeout(() => {
    document.body.removeChild(element);
    URL.revokeObjectURL(url);
  }, 150);
}

// 1. Plain Text Resume (.txt) - Optimized for ATS
function generateATSResume() {
  const data = portfolioData;
  const contact = data.contact;

  let resume = `${contact.name.toUpperCase()}
${contact.location} | Phone: ${contact.phone} | Email: ${contact.email}
Website: https://${contact.website} | GitHub: https://${contact.github} | LinkedIn: https://${contact.linkedin}

================================================================================
PROFESSIONAL SUMMARY
================================================================================
${stripHTML(data.about.intro)}

${data.about.workRights.title} ${data.about.workRights.description}

================================================================================
TECHNICAL SKILLS
================================================================================
`;

  Object.entries(data.skills).forEach(([category, skills]) => {
    resume += `${category}: ${skills.join(", ")}\n`;
  });

  resume += `
================================================================================
PROFESSIONAL EXPERIENCE
================================================================================
`;

  data.experience.forEach((job) => {
    resume += `\n${job.title.toUpperCase()}
${job.company} | ${job.location} | ${job.date}
`;
    job.responsibilities.forEach((resp) => {
      resume += `• ${resp}\n`;
    });
  });

  if (data.nonTechnicalExperience && data.nonTechnicalExperience.length > 0) {
    resume += `
================================================================================
ADDITIONAL PROFESSIONAL EXPERIENCE
================================================================================
`;
    data.nonTechnicalExperience.forEach((job) => {
      resume += `\n${job.title}
${job.company} | ${job.location} | ${job.date}
`;
      job.responsibilities.forEach((resp) => {
        resume += `• ${resp}\n`;
      });
    });
  }

  resume += `
================================================================================
EDUCATION
================================================================================
`;
  data.education.forEach((edu) => {
    resume += `${edu.degree}
${edu.university} | ${edu.location} | ${edu.date}`;
    if (edu.gpa) {
      resume += ` | ${edu.gpa}`;
    }
    resume += "\n\n";
  });

  if (data.certifications && data.certifications.length > 0) {
    resume += `================================================================================
CERTIFICATIONS
================================================================================
`;
    data.certifications.forEach((cert) => {
      resume += `• ${cert.title} - ${cert.issuer} (${cert.date})\n`;
    });
    resume += "\n";
  }

  if (data.publications && data.publications.length > 0) {
    resume += `================================================================================
PUBLICATIONS
================================================================================
`;
    data.publications.forEach((pub) => {
      resume += `${pub.title}
${pub.journal} | ${pub.date}
${stripHTML(pub.description)}
\n`;
    });
  }

  if (data.projects && data.projects.length > 0) {
    resume += `================================================================================
KEY PROJECTS
================================================================================
`;
    data.projects
      .filter((p) => p.link || p.details)
      .slice(0, 6)
      .forEach((project) => {
        resume += `\n${project.title} (${project.date || "Featured Project"})
${stripHTML(project.description)}`;
        if (project.details) {
          resume += `\nDetails: ${stripHTML(project.details)}`;
        }
        if (project.link) {
          resume += `\nLink: ${project.link}`;
        }
        resume += "\n";
      });
  }

  if (data.extracurricular && data.extracurricular.length > 0) {
    resume += `
================================================================================
LEADERSHIP & COMMUNITY
================================================================================
`;
    data.extracurricular.forEach((item) => {
      resume += `\n${item.title} - ${item.organization} (${item.date})
${item.description}\n`;
    });
  }

  return resume;
}

// 2. Markdown Resume (.md)
function generateMarkdownResume() {
  const data = portfolioData;
  const contact = data.contact;

  let md = `# ${contact.name}
**${contact.location}** | **${contact.phone}** | [${contact.email}](mailto:${contact.email})  
[Website](https://${contact.website}) | [GitHub](https://${contact.github}) | [LinkedIn](https://${contact.linkedin})

---

## 🎯 Professional Summary
${stripHTML(data.about.intro)}

> **Work Rights:** ${data.about.workRights.description}

---

## 🛠️ Technical Skills
`;

  Object.entries(data.skills).forEach(([category, skills]) => {
    md += `- **${category}:** ${skills.join(", ")}\n`;
  });

  md += `\n---\n\n## 💼 Professional Experience\n`;

  data.experience.forEach((job) => {
    md += `\n### ${job.title}\n`;
    md += `**${job.company}** | *${job.location}* | \`${job.date}\`\n\n`;
    job.responsibilities.forEach((resp) => {
      md += `- ${resp}\n`;
    });
  });

  if (data.nonTechnicalExperience && data.nonTechnicalExperience.length > 0) {
    md += `\n---\n\n## 🏢 Additional Experience\n`;
    data.nonTechnicalExperience.forEach((job) => {
      md += `\n### ${job.title}\n`;
      md += `**${job.company}** | *${job.location}* | \`${job.date}\`\n\n`;
      job.responsibilities.forEach((resp) => {
        md += `- ${resp}\n`;
      });
    });
  }

  md += `\n---\n\n## 🎓 Education\n`;
  data.education.forEach((edu) => {
    md += `\n### ${edu.degree}\n`;
    md += `**${edu.university}** | *${edu.location}* | \`${edu.date}\``;
    if (edu.gpa) {
      md += ` | **${edu.gpa}**`;
    }
    md += "\n";
  });

  if (data.certifications && data.certifications.length > 0) {
    md += `\n---\n\n## 📜 Certifications\n`;
    data.certifications.forEach((cert) => {
      if (cert.link) {
        md += `- [${cert.title}](${cert.link}) — **${cert.issuer}** (${cert.date})\n`;
      } else {
        md += `- **${cert.title}** — ${cert.issuer} (${cert.date})\n`;
      }
    });
  }

  if (data.publications && data.publications.length > 0) {
    md += `\n---\n\n## 📚 Publications\n`;
    data.publications.forEach((pub) => {
      md += `\n### [${pub.title}](${pub.link || "#"})\n`;
      md += `*${pub.journal}* | \`${pub.date}\`\n\n`;
      md += `${stripHTML(pub.description)}\n`;
    });
  }

  if (data.projects && data.projects.length > 0) {
    md += `\n---\n\n## 🚀 Key Projects\n`;
    data.projects
      .filter((p) => p.link || p.details)
      .slice(0, 6)
      .forEach((project) => {
        const linkStr = project.link ? ` [View Repository](${project.link})` : "";
        md += `\n### ${project.title}${linkStr}\n`;
        if (project.date) md += `*${project.date}*\n\n`;
        md += `${stripHTML(project.description)}\n\n`;
        if (project.details) {
          md += `> ${stripHTML(project.details)}\n\n`;
        }
      });
  }

  if (data.extracurricular && data.extracurricular.length > 0) {
    md += `\n---\n\n## 🤝 Leadership & Community\n`;
    data.extracurricular.forEach((item) => {
      md += `\n### ${item.title} — ${item.organization}\n`;
      md += `*${item.date}*\n\n`;
      md += `${item.description}\n`;
    });
  }

  return md;
}

// 3. Single-Page HTML Resume (.html)
function generateHTMLResume(options = {}) {
  const forPrint = options.forPrint || false;
  const autoPrint = options.autoPrint || false;
  const data = portfolioData;
  const contact = data.contact;

  const skillsHtml = Object.entries(data.skills)
    .map(
      ([cat, skills]) => `
      <div class="skill-row">
        <span class="skill-label">${cat}:</span>
        <span class="skill-values">${skills.join(", ")}</span>
      </div>
    `,
    )
    .join("");

  const experienceHtml = data.experience
    .map(
      (job) => `
      <div class="experience-item avoid-break">
        <div class="item-header">
          <div class="item-title-group">
            <h3 class="item-title">${job.title}</h3>
            <div class="item-company">${job.company} · ${job.location}</div>
          </div>
          <div class="item-date">${job.date}</div>
        </div>
        <ul class="item-bullets">
          ${job.responsibilities.map((r) => `<li>${r}</li>`).join("")}
        </ul>
      </div>
    `,
    )
    .join("");

  const educationHtml = data.education
    .map(
      (edu) => `
      <div class="education-item avoid-break">
        <div class="item-header">
          <div>
            <h3 class="item-title">${edu.degree}</h3>
            <div class="item-company">${edu.university} · ${edu.location}</div>
          </div>
          <div class="item-date">${edu.date}${edu.gpa ? ` | <strong>${edu.gpa}</strong>` : ""}</div>
        </div>
      </div>
    `,
    )
    .join("");

  const certificationsHtml = (data.certifications || [])
    .map(
      (cert) => `
      <li class="cert-item avoid-break">
        <strong>${cert.title}</strong> — ${cert.issuer} <span class="cert-date">(${cert.date})</span>
      </li>
    `,
    )
    .join("");

  const publicationsHtml = (data.publications || [])
    .map(
      (pub) => `
      <div class="pub-item avoid-break">
        <h4 class="pub-title">${pub.title}</h4>
        <div class="pub-meta">${pub.journal} · ${pub.date}</div>
        <p class="pub-desc">${stripHTML(pub.description)}</p>
      </div>
    `,
    )
    .join("");

  const projectsHtml = (data.projects || [])
    .filter((p) => p.link || p.details)
    .slice(0, 4)
    .map(
      (proj) => `
      <div class="project-item avoid-break">
        <div class="item-header">
          <h4 class="project-title">${proj.title}</h4>
          ${proj.date ? `<span class="item-date">${proj.date}</span>` : ""}
        </div>
        <p class="project-desc">${stripHTML(proj.description)} ${
          proj.details ? stripHTML(proj.details) : ""
        }</p>
        ${proj.link ? `<div class="project-link"><a href="${proj.link}" target="_blank" rel="noopener">${proj.link}</a></div>` : ""}
      </div>
    `,
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${contact.name} - Resume</title>
  <style>
    :root {
      --primary: #1e40af;
      --primary-dark: #1e3a8a;
      --text: #1e293b;
      --text-muted: #475569;
      --border: #cbd5e1;
      --bg: #f8fafc;
      --card-bg: #ffffff;
      --highlight: #eff6ff;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      color: var(--text);
      background-color: var(--bg);
      line-height: 1.5;
      font-size: 13.5px;
      padding: 24px;
    }

    .top-actions {
      max-width: 840px;
      margin: 0 auto 16px auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #ffffff;
      padding: 12px 20px;
      border-radius: 8px;
      border: 1px solid var(--border);
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    }

    .top-actions-title {
      font-weight: 600;
      color: var(--primary);
    }

    .top-actions-btns {
      display: flex;
      gap: 10px;
    }

    .action-btn {
      background: var(--primary);
      color: #ffffff;
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 600;
      font-size: 13px;
      transition: background 0.2s;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .action-btn:hover {
      background: var(--primary-dark);
    }

    .action-btn.secondary {
      background: #e2e8f0;
      color: #334155;
    }

    .action-btn.secondary:hover {
      background: #cbd5e1;
    }

    .resume-wrapper {
      max-width: 840px;
      margin: 0 auto;
      background: var(--card-bg);
      padding: 44px 48px;
      border-radius: 10px;
      border: 1px solid var(--border);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    }

    header {
      border-bottom: 2px solid var(--primary);
      padding-bottom: 16px;
      margin-bottom: 18px;
    }

    h1 {
      font-size: 26px;
      font-weight: 800;
      letter-spacing: -0.5px;
      color: #0f172a;
      text-transform: uppercase;
      margin-bottom: 4px;
    }

    .headline {
      font-size: 15px;
      font-weight: 600;
      color: var(--primary);
      margin-bottom: 10px;
    }

    .contact-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px 18px;
      font-size: 12.5px;
      color: var(--text-muted);
    }

    .contact-row a {
      color: var(--primary);
      text-decoration: none;
    }

    .contact-row a:hover {
      text-decoration: underline;
    }

    .work-rights-callout {
      margin-top: 10px;
      font-size: 12.5px;
      background: var(--highlight);
      border-left: 3px solid var(--primary);
      padding: 6px 12px;
      border-radius: 0 4px 4px 0;
      color: #1e3a8a;
    }

    .section {
      margin-top: 20px;
    }

    .section-title {
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: var(--primary);
      border-bottom: 1.5px solid #e2e8f0;
      padding-bottom: 4px;
      margin-bottom: 12px;
    }

    .summary-text {
      color: #334155;
      line-height: 1.6;
      font-size: 13.5px;
    }

    .skill-row {
      display: flex;
      margin-bottom: 6px;
      font-size: 13px;
      line-height: 1.5;
    }

    .skill-label {
      font-weight: 700;
      width: 145px;
      flex-shrink: 0;
      color: #1e293b;
    }

    .skill-values {
      color: #334155;
    }

    .experience-item, .education-item, .project-item, .pub-item {
      margin-bottom: 16px;
    }

    .item-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 4px;
    }

    .item-title {
      font-size: 14px;
      font-weight: 700;
      color: #0f172a;
    }

    .item-company {
      font-size: 13px;
      font-weight: 600;
      color: #475569;
    }

    .item-date {
      font-size: 12px;
      color: #64748b;
      white-space: nowrap;
    }

    .item-bullets {
      margin-left: 18px;
      color: #334155;
    }

    .item-bullets li {
      margin-bottom: 4px;
      line-height: 1.5;
    }

    .cert-list {
      list-style-type: square;
      margin-left: 18px;
      color: #334155;
    }

    .cert-item {
      margin-bottom: 5px;
    }

    .cert-date {
      color: #64748b;
      font-size: 12px;
    }

    .pub-title {
      font-size: 13.5px;
      font-weight: 700;
      color: #0f172a;
    }

    .pub-meta {
      font-size: 12px;
      color: #64748b;
      font-style: italic;
      margin-bottom: 4px;
    }

    .pub-desc, .project-desc {
      color: #334155;
      font-size: 13px;
      line-height: 1.5;
    }

    .project-title {
      font-size: 13.5px;
      font-weight: 700;
      color: #0f172a;
    }

    .project-link a {
      font-size: 12px;
      color: var(--primary);
      text-decoration: none;
    }

    .project-link a:hover {
      text-decoration: underline;
    }

    /* Print Styles */
    @page {
      size: A4;
      margin: 12mm 15mm;
    }

    @media print {
      body {
        background: #ffffff !important;
        color: #000000 !important;
        padding: 0 !important;
        font-size: 11pt !important;
      }

      .no-print {
        display: none !important;
      }

      .resume-wrapper {
        border: none !important;
        box-shadow: none !important;
        padding: 0 !important;
        max-width: 100% !important;
      }

      .avoid-break {
        break-inside: avoid !important;
        page-break-inside: avoid !important;
      }

      a {
        color: inherit !important;
        text-decoration: none !important;
      }

      .work-rights-callout {
        background: #f1f5f9 !important;
        border-left-color: #334155 !important;
        color: #0f172a !important;
      }
    }
  </style>
</head>
<body>
  <div class="top-actions no-print">
    <div class="top-actions-title">Tanmay Pachpande — Standalone Resume</div>
    <div class="top-actions-btns">
      <button class="action-btn" onclick="window.print()">🖨️ Print / Save as PDF</button>
      <button class="action-btn secondary" onclick="downloadCurrentHtml()">💾 Download HTML</button>
    </div>
  </div>

  <div class="resume-wrapper">
    <header>
      <h1>${contact.name}</h1>
      <div class="headline">Data Engineer | Cloud Data & Automation Engineering</div>
      <div class="contact-row">
        <span>📍 ${contact.location}</span>
        <span>📱 ${contact.phone}</span>
        <span>✉️ <a href="mailto:${contact.email}">${contact.email}</a></span>
        <span>🌐 <a href="https://${contact.website}" target="_blank" rel="noopener">${contact.website}</a></span>
        <span>🐙 <a href="https://${contact.github}" target="_blank" rel="noopener">GitHub</a></span>
        <span>💼 <a href="https://${contact.linkedin}" target="_blank" rel="noopener">LinkedIn</a></span>
      </div>
      <div class="work-rights-callout">
        <strong>${data.about.workRights.title}</strong> ${data.about.workRights.description}
      </div>
    </header>

    <section class="section avoid-break">
      <h2 class="section-title">Professional Summary</h2>
      <p class="summary-text">${stripHTML(data.about.intro)}</p>
    </section>

    <section class="section avoid-break">
      <h2 class="section-title">Skills & Competencies</h2>
      <div class="skills-container">
        ${skillsHtml}
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">Professional Experience</h2>
      ${experienceHtml}
    </section>

    <section class="section avoid-break">
      <h2 class="section-title">Education</h2>
      ${educationHtml}
    </section>

    <section class="section avoid-break">
      <h2 class="section-title">Certifications</h2>
      <ul class="cert-list">
        ${certificationsHtml}
      </ul>
    </section>

    <section class="section avoid-break">
      <h2 class="section-title">Selected Projects</h2>
      ${projectsHtml}
    </section>

    ${
      publicationsHtml
        ? `
    <section class="section avoid-break">
      <h2 class="section-title">Publications</h2>
      ${publicationsHtml}
    </section>
    `
        : ""
    }
  </div>

  <script class="no-print">
    function downloadCurrentHtml() {
      const blob = new Blob([document.documentElement.outerHTML], { type: "text/html;charset=utf-8" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "Tanmay_Pachpande_Resume.html";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
    ${autoPrint ? "window.addEventListener('load', () => setTimeout(() => window.print(), 250));" : ""}
  </script>
</body>
</html>`;
}

// 4. PDF Export Functionality (Print to PDF via hidden iframe)
function exportAsPDF() {
  const resumeHtml = generateHTMLResume({ forPrint: true, autoPrint: false });

  let iframe = document.getElementById("resumePrintFrame");
  if (iframe) iframe.remove();

  iframe = document.createElement("iframe");
  iframe.id = "resumePrintFrame";
  iframe.style.position = "fixed";
  iframe.style.right = "0";
  iframe.style.bottom = "0";
  iframe.style.width = "0";
  iframe.style.height = "0";
  iframe.style.border = "0";
  iframe.style.visibility = "hidden";
  document.body.appendChild(iframe);

  const iframeDoc = iframe.contentWindow.document;
  iframeDoc.open();
  iframeDoc.write(resumeHtml);
  iframeDoc.close();

  iframe.contentWindow.focus();
  setTimeout(() => {
    try {
      iframe.contentWindow.print();
    } catch (err) {
      // Fallback: open in new tab if iframe print is restricted
      const printWindow = window.open("", "_blank");
      if (printWindow) {
        printWindow.document.open();
        printWindow.document.write(resumeHtml);
        printWindow.document.close();
        printWindow.focus();
        setTimeout(() => printWindow.print(), 300);
      }
    }
  }, 350);
}

// Format-specific triggers
function exportAsSinglePageHTML() {
  const html = generateHTMLResume({ forPrint: false, autoPrint: false });
  downloadFile(html, "Tanmay_Pachpande_Resume.html", "text/html;charset=utf-8");
}

function exportAsMarkdown() {
  const md = generateMarkdownResume();
  downloadFile(md, "Tanmay_Pachpande_Resume.md", "text/markdown;charset=utf-8");
}

function exportAsPlainText() {
  const txt = generateATSResume();
  downloadFile(txt, "Tanmay_Pachpande_Resume_ATS.txt", "text/plain;charset=utf-8");
}

function copyATSResumeToClipboard(btnElement) {
  const resume = generateATSResume();
  navigator.clipboard.writeText(resume).then(
    () => {
      if (btnElement) {
        const originalText = btnElement.innerText;
        btnElement.innerText = "✓ Copied Plain Text!";
        btnElement.style.color = "var(--primary)";
        setTimeout(() => {
          btnElement.innerText = originalText;
          btnElement.style.color = "";
        }, 2000);
      } else {
        alert("Resume copied to clipboard!");
      }
    },
    () => {
      alert("Failed to copy. Please try downloading instead.");
    },
  );
}

function copyMarkdownResumeToClipboard(btnElement) {
  const resume = generateMarkdownResume();
  navigator.clipboard.writeText(resume).then(
    () => {
      if (btnElement) {
        const originalText = btnElement.innerText;
        btnElement.innerText = "✓ Copied Markdown!";
        btnElement.style.color = "var(--primary)";
        setTimeout(() => {
          btnElement.innerText = originalText;
          btnElement.style.color = "";
        }, 2000);
      } else {
        alert("Markdown resume copied to clipboard!");
      }
    },
    () => {
      alert("Failed to copy. Please try downloading instead.");
    },
  );
}

// 5. Main Export Modal UI
function showExportOptions() {
  // Order requested by user: PDF (default), single page HTML, MD, then TXT
  const options = [
    {
      format: "pdf",
      icon: "📑",
      title: "PDF Document (.pdf)",
      badge: "DEFAULT",
      desc: "High-resolution vector PDF via system print preview (Save as PDF)",
      action: exportAsPDF,
      isDefault: true,
    },
    {
      format: "html",
      icon: "🌐",
      title: "Single-Page HTML (.html)",
      badge: "STANDALONE",
      desc: "Self-contained responsive web resume with embedded styling",
      action: exportAsSinglePageHTML,
      isDefault: false,
    },
    {
      format: "md",
      icon: "📝",
      title: "Markdown (.md)",
      badge: "DEV / DOCS",
      desc: "Clean GitHub-flavored markdown with structured tables & links",
      action: exportAsMarkdown,
      isDefault: false,
    },
    {
      format: "txt",
      icon: "📄",
      title: "Plain Text (.txt)",
      badge: "ATS SCANNER",
      desc: "Standardized plain text format optimized for applicant tracking systems",
      action: exportAsPlainText,
      isDefault: false,
    },
  ];

  const existing = document.getElementById("exportModal");
  if (existing) existing.remove();

  const modal = document.createElement("div");
  modal.id = "exportModal";
  modal.className = "export-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-labelledby", "exportModalTitle");

  modal.innerHTML = `
    <div class="export-modal-content">
      <div class="export-modal-header">
        <h3 id="exportModalTitle">Export Resume</h3>
        <button class="modal-close-icon" aria-label="Close export dialog">✕</button>
      </div>
      <p>Select your desired format. PDF is the default format for job applications.</p>
      
      <div class="export-options">
        ${options
          .map(
            (opt, idx) => `
          <button class="export-option-btn ${opt.isDefault ? "default-option" : ""}" data-idx="${idx}" type="button">
            <span class="export-option-icon" aria-hidden="true">${opt.icon}</span>
            <div class="export-option-info">
              <div class="export-option-title">
                ${opt.title}
                ${opt.badge ? `<span class="export-badge ${opt.isDefault ? "default-badge" : ""}">${opt.badge}</span>` : ""}
              </div>
              <div class="export-option-desc">${opt.desc}</div>
            </div>
          </button>
        `,
          )
          .join("")}
      </div>

      <div class="export-modal-footer">
        <button class="copy-btn" id="copyTxtBtn" type="button">📋 Copy Text</button>
        <button class="copy-btn" id="copyMdBtn" type="button">📝 Copy Markdown</button>
        <button class="close-modal-btn" type="button">Close</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Focus default option
  const defaultBtn = modal.querySelector(".export-option-btn.default-option");
  if (defaultBtn) {
    setTimeout(() => defaultBtn.focus(), 50);
  }

  // Bind export clicks
  modal.querySelectorAll(".export-option-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.getAttribute("data-idx"), 10);
      options[idx].action();
      modal.remove();
    });
  });

  // Bind copy clicks
  const copyTxtBtn = modal.querySelector("#copyTxtBtn");
  if (copyTxtBtn) {
    copyTxtBtn.addEventListener("click", () => copyATSResumeToClipboard(copyTxtBtn));
  }

  const copyMdBtn = modal.querySelector("#copyMdBtn");
  if (copyMdBtn) {
    copyMdBtn.addEventListener("click", () => copyMarkdownResumeToClipboard(copyMdBtn));
  }

  // Close handlers
  const closeBtn = modal.querySelector(".close-modal-btn");
  if (closeBtn) closeBtn.addEventListener("click", () => modal.remove());

  const closeIcon = modal.querySelector(".modal-close-icon");
  if (closeIcon) closeIcon.addEventListener("click", () => modal.remove());

  // Close on outside click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.remove();
  });

  // Close on Escape key
  const handleKeydown = (e) => {
    if (e.key === "Escape") {
      modal.remove();
      document.removeEventListener("keydown", handleKeydown);
    }
  };
  document.addEventListener("keydown", handleKeydown);
}

// Initialize export button listener (bottom footer)
document.addEventListener("DOMContentLoaded", () => {
  const exportBtn = document.getElementById("exportResume");
  if (exportBtn) {
    exportBtn.addEventListener("click", () => {
      showExportOptions();
    });
  }
});
