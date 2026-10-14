// Helper function for contact icons
function getContactIcon(label) {
  const normalized = (label || "").toUpperCase();
  if (normalized.includes("EMAIL")) return "✉️";
  if (normalized.includes("PHONE")) return "📱";
  if (normalized.includes("LOCATION")) return "📍";
  if (normalized.includes("GITHUB")) return "🐙";
  if (normalized.includes("LINKEDIN")) return "💼";
  if (normalized.includes("WEBSITE")) return "🌐";
  return "🔗";
}

function renderAbout() {
  const aboutContent = document.getElementById("aboutContent");
  if (!aboutContent) return;

  const quickLinksHtml = (portfolioData.contactLinks || [])
    .map((item) => {
      const icon = getContactIcon(item.label);
      if (item.link) {
        return `<a href="${item.link}" class="contact-pill" ${
          item.link.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""
        } aria-label="${item.label}: ${item.value}">
          <span class="pill-icon" aria-hidden="true">${icon}</span>
          <span class="pill-text">${item.value}</span>
        </a>`;
      }
      return `<div class="contact-pill">
        <span class="pill-icon" aria-hidden="true">${icon}</span>
        <span class="pill-text">${item.value}</span>
      </div>`;
    })
    .join("");

  aboutContent.innerHTML = `
    <div class="about-hero-card">
      <p class="intro">${portfolioData.about.intro}</p>
      <div class="hero-contact-pills">
        ${quickLinksHtml}
      </div>
    </div>
  `;
}

function renderExperience() {
  const experienceContent = document.getElementById("experienceContent");
  const html = portfolioData.experience
    .map(
      (job) => `
        <div class="timeline-item">
            <div class="job-header">
                <div>
                    <div class="job-title">${job.title}</div>
                    <div class="job-company">${job.company}</div>
                </div>
                <div class="job-date">${job.date}</div>
            </div>
            <div class="job-location">${job.location || ""}</div>
            <ul>
                ${job.responsibilities
                  .map((resp) => `<li>${resp}</li>`)
                  .join("")}
            </ul>
        </div>
    `,
    )
    .join("");
  experienceContent.innerHTML = html;
}

function renderNonTechnicalExperience() {
  const nonTechContent = document.getElementById("nonTechExperienceContent");
  if (
    !nonTechContent ||
    !portfolioData.nonTechnicalExperience ||
    portfolioData.nonTechnicalExperience.length === 0
  )
    return;

  const count = portfolioData.nonTechnicalExperience.length;
  const itemsHtml = portfolioData.nonTechnicalExperience
    .map(
      (job) => `
      <div class="timeline-item non-tech-timeline-item">
          <div class="job-header">
              <div>
                  <div class="job-title">${job.title}</div>
                  <div class="job-company">${job.company}</div>
              </div>
              <div class="job-date">${job.date}</div>
          </div>
          <div class="job-location">${job.location || ""}</div>
          <ul>
              ${job.responsibilities.map((resp) => `<li>${resp}</li>`).join("")}
          </ul>
      </div>
  `,
    )
    .join("");

  const html = `
    <details class="non-tech-details" id="nonTechDetails">
      <summary class="non-tech-summary">
        <div class="summary-left">
          <span class="summary-arrow" aria-hidden="true">▶</span>
          <span class="summary-title">Additional Work Experience</span>
          <span class="summary-note">(Customer Service & Operations)</span>
        </div>
        <div class="summary-right">
          <span class="summary-badge">${count} roles</span>
          <span class="summary-action-text">Click to expand</span>
        </div>
      </summary>
      <div class="non-tech-body">
        ${itemsHtml}
      </div>
    </details>
  `;
  nonTechContent.innerHTML = html;

  const details = document.getElementById("nonTechDetails");
  if (details) {
    details.addEventListener("toggle", () => {
      const actionText = details.querySelector(".summary-action-text");
      if (actionText) {
        actionText.textContent = details.open
          ? "Click to collapse"
          : "Click to expand";
      }
    });
  }
}

function renderSkills() {
  const skillsContent = document.getElementById("skillsContent");
  const html = `
        <div class="skills-grid">
            ${Object.entries(portfolioData.skills)
              .map(
                ([category, skills]) => `
                <div class="skill-category">
                    <h3>${category}</h3>
                    <div class="skill-tags">
                        ${skills
                          .map(
                            (skill) =>
                              `<span class="skill-tag">${skill}</span>`,
                          )
                          .join("")}
                    </div>
                </div>
            `,
              )
              .join("")}
        </div>
    `;
  skillsContent.innerHTML = html;
}

function renderProjects() {
  const projectsContent = document.getElementById("projectsContent");
  const html = `
        <div class="project-grid">
            ${portfolioData.projects
              .map(
                (project) => `
                <div class="project-card">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    ${project.details ? `<p class="project-details">${project.details}</p>` : ""}
                    ${project.date ? `<div class="project-date">${project.date}</div>` : ""}
                    ${
                      project.link
                        ? `<a href="${project.link}" class="project-link" target="_blank" rel="noopener noreferrer">View on GitHub</a>`
                        : ""
                    }
                </div>
            `,
              )
              .join("")}
        </div>
    `;
  projectsContent.innerHTML = html;
}

function renderEducation() {
  const educationContent = document.getElementById("educationContent");
  const html = portfolioData.education
    .map(
      (edu) => `
        <div class="education-item">
            <div class="degree">${edu.degree}</div>
            <div class="university">${edu.university}</div>
            <div class="grade">${edu.gpa ? edu.gpa + " | " : ""}${edu.date}</div>
            <div class="edu-location">${edu.location || ""}</div>
        </div>
    `,
    )
    .join("");
  educationContent.innerHTML = html;
}

function renderCertifications() {
  const certsContent = document.getElementById("certificationsContent");
  if (!certsContent) return;

  const html = `
    <div class="certifications-list">
      ${portfolioData.certifications
        .map(
          (cert) => `
        <div class="cert-item">
          <h3>${cert.title}</h3>
          <p class="cert-issuer">${cert.issuer}</p>
          <p class="cert-date">${cert.date}</p>
          ${
            cert.link
              ? `<a href="${cert.link}" target="_blank" rel="noopener noreferrer" class="cert-link">View Credential</a>`
              : ""
          }
        </div>
      `,
        )
        .join("")}
    </div>
  `;
  certsContent.innerHTML = html;
}

function renderPublications() {
  const pubContent = document.getElementById("publicationsContent");
  if (!pubContent) return;

  const html = `
    <div class="publications-list">
      ${portfolioData.publications
        .map(
          (pub) => `
        <div class="pub-item">
          <h3>${pub.title}</h3>
          <p class="pub-journal"><strong>${pub.journal}</strong></p>
          <p class="pub-date">${pub.date}</p>
          <p class="pub-description">${pub.description}</p>
          ${
            pub.link
              ? `<a href="${pub.link}" target="_blank" rel="noopener noreferrer" class="pub-link">View Publication</a>`
              : ""
          }
        </div>
      `,
        )
        .join("")}
    </div>
  `;
  pubContent.innerHTML = html;
}

function renderCommunity() {
  const commContent =
    document.getElementById("communityContent") ||
    document.getElementById("extracurricularContent");
  if (!commContent) return;

  const items =
    portfolioData.community || portfolioData.extracurricular || [];
  const html = `
    <div class="community-list extracurricular-list">
      ${items
        .map(
          (item) => `
        <div class="community-item extracurr-item">
          <h3>${item.title}</h3>
          <p class="community-org extracurr-org">${item.organization}</p>
          <p class="community-date extracurr-date">${item.date}</p>
          <p class="community-desc extracurr-desc">${item.description}</p>
        </div>
      `,
        )
        .join("")}
    </div>
  `;
  commContent.innerHTML = html;
}

// Backward compatibility alias
function renderExtracurricular() {
  renderCommunity();
}

function renderContact() {
  const contactContent = document.getElementById("contactContent");
  if (!contactContent) return;

  const html = `
        <div class="contact-grid">
            ${portfolioData.contactLinks
              .map((item) => {
                const icon = getContactIcon(item.label);
                return `
                <div class="contact-item">
                    <span class="contact-item-label">${icon} ${item.label}</span>
                    ${
                      item.link
                        ? `<a href="${item.link}" ${item.link.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""}>${item.value}</a>`
                        : `<div>${item.value}</div>`
                    }
                </div>
            `;
              })
              .join("")}
        </div>
    `;
  contactContent.innerHTML = html;
}

function renderWorkRights() {
  const footerWorkRights = document.getElementById("footerWorkRights");
  if (footerWorkRights && portfolioData.about && portfolioData.about.workRights) {
    footerWorkRights.innerHTML = `
      <span class="status-indicator" aria-hidden="true"></span>
      <span class="work-rights-title">${portfolioData.about.workRights.title}</span>
      <span class="work-rights-desc">${portfolioData.about.workRights.description}</span>
    `;
  }
}

// Initialize all content
function initializeContent() {
  renderAbout();
  renderExperience();
  renderNonTechnicalExperience();
  renderSkills();
  renderProjects();
  renderEducation();
  renderCertifications();
  renderPublications();
  renderCommunity();
  renderContact();
  renderWorkRights();
}
