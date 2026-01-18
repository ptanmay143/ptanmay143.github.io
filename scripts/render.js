// Render functions for content sections

function renderAbout() {
  const aboutContent = document.getElementById("aboutContent");
  aboutContent.innerHTML = `
        <div class="work-rights">
            <p class="intro">${portfolioData.about.intro}</p>
        </div>
        <div class="work-rights">
            <strong>${portfolioData.about.workRights.title}</strong> ${portfolioData.about.workRights.description}
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
  if (!nonTechContent) return;

  const html = `
    <h3 class="subsection-title">Non-Technical Experience</h3>
    ${portfolioData.nonTechnicalExperience
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
              ${job.responsibilities.map((resp) => `<li>${resp}</li>`).join("")}
          </ul>
      </div>
  `,
      )
      .join("")}
  `;
  nonTechContent.innerHTML = html;
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

function renderExtracurricular() {
  const extContent = document.getElementById("extracurricularContent");
  if (!extContent) return;

  const html = `
    <div class="extracurricular-list">
      ${portfolioData.extracurricular
        .map(
          (item) => `
        <div class="extracurr-item">
          <h3>${item.title}</h3>
          <p class="extracurr-org">${item.organization}</p>
          <p class="extracurr-date">${item.date}</p>
          <p class="extracurr-desc">${item.description}</p>
        </div>
      `,
        )
        .join("")}
    </div>
  `;
  extContent.innerHTML = html;
}

function renderContact() {
  const contactContent = document.getElementById("contactContent");
  const html = `
        <div class="contact-grid">
            ${portfolioData.contactLinks
              .map(
                (item) => `
                <div class="contact-item">
                    <span>${item.label}</span>
                    ${
                      item.link
                        ? `<a href="${item.link}">${item.value}</a>`
                        : `<div>${item.value}</div>`
                    }
                </div>
            `,
              )
              .join("")}
        </div>
    `;
  contactContent.innerHTML = html;
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
  renderExtracurricular();
  renderContact();
}
