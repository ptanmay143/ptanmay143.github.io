// ATS Resume Export Functionality

function generateATSResume() {
  const data = portfolioData;
  const contact = data.contact;

  // Build plain text resume optimized for ATS
  let resume = `${contact.name}
${contact.location} | ${contact.phone} | ${contact.email}
${contact.website} | GitHub: ${contact.github} | LinkedIn: ${contact.linkedin}

PROFESSIONAL SUMMARY
${stripHTML(data.about.intro)}

${data.about.workRights.title} ${data.about.workRights.description}

PROFESSIONAL EXPERIENCE

`;

  // Technical Experience
  data.experience.forEach((job) => {
    resume += `${job.title}
${job.company} | ${job.location}
${job.date}
`;
    job.responsibilities.forEach((resp) => {
      resume += `• ${resp}\n`;
    });
    resume += "\n";
  });

  // Non-Technical Experience (optional - for comprehensive resume)
  if (data.nonTechnicalExperience && data.nonTechnicalExperience.length > 0) {
    resume += `ADDITIONAL EXPERIENCE
`;
    data.nonTechnicalExperience.forEach((job) => {
      resume += `${job.title}
${job.company} | ${job.location}
${job.date}
`;
      job.responsibilities.forEach((resp) => {
        resume += `• ${resp}\n`;
      });
      resume += "\n";
    });
  }

  // Skills
  resume += `SKILLS & COMPETENCIES

`;
  Object.entries(data.skills).forEach(([category, skills]) => {
    resume += `${category}: ${skills.join(", ")}\n`;
  });

  // Education
  resume += `

EDUCATION

`;
  data.education.forEach((edu) => {
    resume += `${edu.degree}
${edu.university} | ${edu.location}
${edu.date}`;
    if (edu.gpa) {
      resume += ` | ${edu.gpa}`;
    }
    resume += "\n\n";
  });

  // Certifications
  if (data.certifications && data.certifications.length > 0) {
    resume += `CERTIFICATIONS

`;
    data.certifications.forEach((cert) => {
      resume += `${cert.title} - ${cert.issuer} (${cert.date})\n`;
    });
  }

  // Publications
  if (data.publications && data.publications.length > 0) {
    resume += `

PUBLICATIONS

`;
    data.publications.forEach((pub) => {
      resume += `${pub.title}
${pub.journal} | ${pub.date}
${stripHTML(pub.description)}

`;
    });
  }

  // Projects (selected relevant ones)
  if (data.projects && data.projects.length > 0) {
    resume += `KEY PROJECTS

`;
    // Include only projects with significant descriptions or GitHub links
    data.projects
      .filter((p) => p.link || p.details)
      .slice(0, 6)
      .forEach((project) => {
        resume += `${project.title}
${stripHTML(project.description)}`;
        if (project.details) {
          resume += ` ${stripHTML(project.details)}`;
        }
        if (project.link) {
          resume += `\n${project.link}`;
        }
        resume += "\n\n";
      });
  }

  return resume;
}

function stripHTML(html) {
  const temp = document.createElement("div");
  temp.innerHTML = html;
  return temp.textContent || temp.innerText || "";
}

function downloadATSResume() {
  const resume = generateATSResume();
  const element = document.createElement("a");
  const file = new Blob([resume], { type: "text/plain" });

  element.href = URL.createObjectURL(file);
  element.download = `Tanmay_Pachpande_Resume_ATS.txt`;
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

function copyATSResumeToClipboard() {
  const resume = generateATSResume();
  navigator.clipboard.writeText(resume).then(
    () => {
      alert("Resume copied to clipboard!");
    },
    () => {
      alert("Failed to copy. Please try downloading instead.");
    },
  );
}

// Initialize export button
document.addEventListener("DOMContentLoaded", () => {
  const exportBtn = document.getElementById("exportResume");
  if (exportBtn) {
    exportBtn.addEventListener("click", () => {
      showExportOptions();
    });
  }
});

function showExportOptions() {
  const options = [
    {
      label: "Download as TXT (ATS Optimized)",
      action: downloadATSResume,
    },
    {
      label: "Copy to Clipboard",
      action: copyATSResumeToClipboard,
    },
  ];

  // Create a simple modal or dropdown
  const existing = document.getElementById("exportModal");
  if (existing) existing.remove();

  const modal = document.createElement("div");
  modal.id = "exportModal";
  modal.className = "export-modal";
  modal.innerHTML = `
    <div class="export-modal-content">
      <h3>Export Resume</h3>
      <p>Choose your export format:</p>
      <div class="export-options">
        ${options
          .map(
            (option, idx) => `
          <button class="export-option-btn" data-idx="${idx}">
            ${option.label}
          </button>
        `,
          )
          .join("")}
      </div>
      <button class="close-modal-btn">Close</button>
    </div>
  `;

  document.body.appendChild(modal);

  // Add event listeners
  modal.querySelectorAll(".export-option-btn").forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      options[idx].action();
      modal.remove();
    });
  });

  modal.querySelector(".close-modal-btn").addEventListener("click", () => {
    modal.remove();
  });

  // Close on outside click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });
}
