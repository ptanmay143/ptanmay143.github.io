// Render functions for content sections

function renderAbout() {
    const aboutContent = document.getElementById('aboutContent');
    aboutContent.innerHTML = `
        <p class="intro">${portfolioData.about.intro}</p>
        <div class="work-rights">
            <strong>${portfolioData.about.workRights.title}</strong> ${portfolioData.about.workRights.description}
        </div>
    `;
}

function renderExperience() {
    const experienceContent = document.getElementById('experienceContent');
    const html = portfolioData.experience.map(job => `
        <div class="timeline-item">
            <div class="job-header">
                <div>
                    <div class="job-title">${job.title}</div>
                    <div class="job-company">${job.company}</div>
                </div>
                <div class="job-date">${job.date}</div>
            </div>
            <ul>
                ${job.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
            </ul>
        </div>
    `).join('');
    experienceContent.innerHTML = html;
}

function renderSkills() {
    const skillsContent = document.getElementById('skillsContent');
    const html = `
        <div class="skills-grid">
            ${Object.entries(portfolioData.skills).map(([category, skills]) => `
                <div class="skill-category">
                    <h3>${category}</h3>
                    <div class="skill-tags">
                        ${skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    skillsContent.innerHTML = html;
}

function renderProjects() {
    const projectsContent = document.getElementById('projectsContent');
    const html = `
        <div class="project-grid">
            ${portfolioData.projects.map(project => `
                <div class="project-card">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    ${project.link ? `<a href="${project.link}" class="project-link" target="_blank" rel="noopener noreferrer">View on GitHub</a>` : ''}
                </div>
            `).join('')}
        </div>
    `;
    projectsContent.innerHTML = html;
}

function renderEducation() {
    const educationContent = document.getElementById('educationContent');
    const html = portfolioData.education.map(edu => `
        <div class="education-item">
            <div class="degree">${edu.degree}</div>
            <div class="university">${edu.university}</div>
            <div class="grade">${edu.grade} | ${edu.graduation}</div>
        </div>
    `).join('');
    educationContent.innerHTML = html;
}

function renderContact() {
    const contactContent = document.getElementById('contactContent');
    const html = `
        <div class="contact-grid">
            ${portfolioData.contact.map(item => `
                <div class="contact-item">
                    <span>${item.label}</span>
                    ${item.link ? `<a href="${item.link}">${item.value}</a>` : `<div>${item.value}</div>`}
                </div>
            `).join('')}
        </div>
    `;
    contactContent.innerHTML = html;
}

// Initialize all content
function initializeContent() {
    renderAbout();
    renderExperience();
    renderSkills();
    renderProjects();
    renderEducation();
    renderContact();
}