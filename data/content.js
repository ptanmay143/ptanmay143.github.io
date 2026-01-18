// Portfolio Content Data
const portfolioData = {
  contact: {
    name: "Tanmay Rohidas Pachpande",
    location: "Sydney, NSW, Australia",
    phone: "+61 410 707 906",
    email: "ptanmay143@gmail.com",
    website: "ptanmay143.github.io",
    github: "github.com/ptanmay143",
    linkedin: "linkedin.com/in/ptanmay143",
  },

  about: {
    intro: `Highly skilled <span class="highlight">data engineer</span>, <span class="highlight">data scientist</span>, and <span class="highlight">computer engineer</span> with a proven ability to lead teams and develop complex AI, machine learning, and data-driven solutions. Currently working in cloud data and automation engineering with experience building and managing <span class="highlight">data pipelines</span>, leveraging <span class="highlight">software development</span> and <span class="highlight">full-stack development</span>, and providing technical leadership in diverse project environments. Possesses a strong foundation in <span class="highlight">project management</span> and a customer-focused mindset gained from professional experience.`,
    workRights: {
      title: "Work Rights:",
      description:
        "485 Graduate VISA with Australian unrestricted full working rights, valid until October 21, 2029",
    },
  },

  experience: [
    {
      title: "Data Engineer: Cloud Data and Automation Engineering",
      company: "Impellam Group",
      location: "Sydney, NSW, Australia (Hybrid)",
      date: "Oct 2025 – Present",
      responsibilities: [
        "Working on cloud data infrastructure and automation engineering solutions",
        "Implementing data engineering best practices in a hybrid work environment",
        "Contributing to cloud-based data systems and automated workflows",
      ],
    },
    {
      title: "Capstone Team Lead (Engine Team)",
      company: "DataBytes (Project Echo)",
      location: "Melbourne, VIC, Australia (Hybrid)",
      date: "Jul 2023 – Jun 2024",
      responsibilities: [
        "Led a 50-member team to develop an AI solution for classifying Otway rainforest animals based on their sounds",
        "Built a data pipeline to convert audio recordings into mel spectrograms for computer vision-based classification",
        "Developed 19 TensorFlow models using architectures like ResNet and InceptionNet with 89% accuracy",
        "Managed versioned training data storage on Google Cloud Storage and offloaded training to Google Cloud Compute",
        "Acted as the Git PR reviewer and implemented CI pipelines for build validation",
        "Maintained the Trello board and organized weekly team stand-up meetings on Teams",
        "Built an unattended Power Automate flow for automated Trello to Planner migration",
      ],
    },
    {
      title: "Chatbot Developer Intern",
      company: "Chic Infotech",
      location: "Navi Mumbai, Maharashtra, India",
      date: "Nov 2019 – Jan 2020",
      responsibilities: [
        "Created a chatbot for an online banking portal client to answer common user queries",
        "Scraped multiple banking FAQ pages to generate a dataset, cleaning and formatting the text for training",
        "Used the Rasa NLU framework to recognize different user intents and variations of similar questions",
        "Deployed the chatbot on a remote Windows Server with port forwarding for seamless integration into websites",
      ],
    },
    {
      title: "Data Science Intern",
      company: "Bennett University",
      location: "Noida, Uttar Pradesh, India",
      date: "Jun 2019 – Aug 2019",
      responsibilities: [
        "Implemented the HP PointNet neural network architecture for 3D point cloud classification using Keras and HDF5",
        "Underwent rigorous training, including earning an NVIDIA Computer Vision certification",
        "Worked in weekly sprints, ensuring consistent progress and deliverables",
        "Participated in a hackathon as the final sprint and applied learned concepts",
        "Presented project findings to a panel of six evaluators to demonstrate the model's accuracy and performance",
      ],
    },
  ],

  nonTechnicalExperience: [
    {
      title: "Food Service Worker",
      company: "San Churro",
      location: "Melbourne, VIC, Australia",
      date: "Oct 2024 – Jul 2025",
      responsibilities: [
        "Prepared churros, sides, and fruit portions with consistent presentation, maintaining product quality during peak service",
        "Managed stock rotation and chocolate refills, ensuring uninterrupted kitchen operations",
        "Delivered friendly customer service by greeting, taking orders, processing payments, and serving both dine-in and delivery customers",
        "Operated commercial dishwasher to maintain hygiene standards and ensure a steady supply of utensils",
      ],
    },
    {
      title: "Team Member",
      company: "Crust Pizza",
      location: "Melbourne, VIC, Australia",
      date: "Jan 2025 – Jun 2025",
      responsibilities: [
        "Delivered pizzas and sides via e-bike, maintaining punctuality and food safety standards",
        "Prepared toppings and rotated bain-marie items to ensure freshness and compliance with food safety guidelines",
        "Made pizza dough, assembled bases, and prepared pizzas while meeting order deadlines during busy hours",
        "Handled customer orders via phone and in-store, accurately processing cash, card, and EFTPOS transactions",
        "Cleaned, sanitized, and closed the store to maintain operational standards",
      ],
    },
    {
      title: "Kitchen Hand",
      company: "Rich Mahal Restaurant",
      location: "Melbourne, VIC, Australia",
      date: "Mar 2023 – Nov 2023",
      responsibilities: [
        "Washed and sanitized kitchen utensils using hand and commercial dishwashing methods",
        "Chopped and portioned vegetables for chefs, supporting meal preparation efficiency",
        "Refilled front displays with ingredients and food to meet customer demand",
        "Maintained a clean and safe kitchen environment by regularly mopping and sanitizing work areas",
        "Prepared simple approved dishes, contributing to faster meal service during busy periods",
      ],
    },
    {
      title: "Store Assistant",
      company: "Amba Bazaar Grocery Store",
      location: "Melbourne, VIC, Australia",
      date: "Feb 2023 – Oct 2023",
      responsibilities: [
        "Opened and closed the store independently, including handling store security",
        "Stocked shelves, rotated inventory, and checked expiry dates to maintain product availability and compliance",
        "Assisted customers with locating items, carrying groceries, and handling inquiries",
        "Operated billing systems to process cash, card, and EFTPOS transactions with accuracy",
        "Prepared daily sales reports in Excel, supporting end-of-day reconciliations",
      ],
    },
  ],

  skills: {
    Languages: ["Python", "R", "C#", "JavaScript", "HTML", "CSS", "C", "C++"],
    Frameworks: [
      "TensorFlow",
      "NLTK",
      "Rasa NLU",
      "Keras",
      "Express",
      "Bootstrap 5",
      "Pug",
      "Matplotlib",
      "Seaborn",
    ],
    Databases: ["MySQL", "SQLite", "MongoDB", "Firebase", "PostgreSQL"],
    "Cloud & DevOps": [
      "Google Cloud (Storage, Compute)",
      "Docker",
      "DevOps",
      "Git",
      "GitHub",
    ],
    "Tools & Libraries": [
      "Power BI",
      "Tableau",
      "Rasa",
      "Power Automate",
      "Trello",
      "BeautifulSoup",
      "Selenium",
      "Node.js",
    ],
    Concepts: [
      "System Administration",
      "Computer Networking",
      "RPC",
      "Business Intelligence (BI)",
      "Business Analytics",
      "Statistical Data Analysis",
      "Computer Information Systems",
      "Point Clouds",
      "Deep Learning",
      "Computer Vision",
    ],
  },

  projects: [
    {
      title: "Recipe Net",
      description:
        "Built a recipe recommendation system that suggests recipes based on user-inputted ingredients. Scraped 7,918 recipes from Cookstr using BeautifulSoup and used stemming to normalize ingredients to 2,294.",
      details:
        "Developed a recommendation engine using cosine similarity to match user inputs to the closest recipe. Integrated a Bootstrap frontend using Pug templating, passing user input to the backend via CLI arguments.",
      link: "https://github.com/ptanmay143/recipe-net",
      date: "Nov 2019 – Mar 2020",
    },
    {
      title: "Virtual Therapist",
      description:
        "Developed an AI-driven chatbot trained on therapist responses from well-being forums. Converted JSON-based therapist Q&A data into YAML format for RASA chatbot compatibility.",
      details:
        "Implemented a JavaScript web widget for seamless chatbot integration on websites.",
      link: "https://github.com/ptanmay143/virtual-therapist",
      date: "Nov 2020 – Mar 2021",
    },
    {
      title: "Rummy with Friends",
      description:
        "Built a multiplayer rummy game with real-time synchronization across multiple devices using a client-server model. Designed a Tkinter-based GUI for clients while the server maintained game state and communication.",
      details:
        "Used network sockets and RPC to handle real-time updates and player interactions. Designed packet validation using end-of-sequence characters and acknowledgments for reliable data transmission.",
      link: "https://github.com/ptanmay143/rummy-with-friends",
    },
    {
      title: "Patient Information System",
      description:
        "Developed an information system for storing and managing patient details. Implemented secure data storage and retrieval functionality.",
      details: "Built using Python with focus on healthcare data management.",
      link: "https://github.com/ptanmay143/patient-information-system",
    },
    {
      title: "AWS Honeypot Power BI Dashboard",
      description:
        "Analyzed an AWS honeypot cyberattacks dataset to identify major sources and trends of malicious activity. Cleaned and standardized data, normalizing timestamps to ISO format, building 3 dashboards for stakeholders.",
      details:
        "Focused on functional attributes distinguishing malicious traffic, providing high-level insights into attack patterns. Created visualizations displaying in-depth network transport layer features for forensic analysis.",
    },
    {
      title: "NHANES Interactive Dashboard",
      description:
        "Designed an interactive health data dashboard in Seaborn analyzing BMI, physical activity, and nutrient correlations. Implemented filters for selecting gender, education, activity type, and sliders for age and BMI for demographic insights.",
    },
    {
      title: "Hotel Booking Website",
      description:
        "Developed a responsive hotel booking website sourcing dynamic content to display from JSON files using Bootstrap 5. Implemented client-side input validation to reduce unnecessary client-server communication.",
      details:
        "Stored user details and bookings in a MySQL database managed by a Node.js connector.",
    },
    {
      title: "Robot Dodge",
      description:
        "Developed a 2D GUI-based game in C# where players control a robot to dodge or destroy flying objects. Implemented movement mechanics, shooting mechanics, a health system, and a score tracker.",
    },
    {
      title: "Polygon Calculator",
      description:
        "Built a WinForms GUI tool to identify shapes and display their area and perimeter based on user input. Used logic based on non-zero and equal dimensions to classify shapes as triangles, rectangles, squares, or circles.",
    },
    {
      title: "Nike Drop Auto-buy Bot",
      description:
        "Created an automated bot to monitor Nike's drop site and quickly purchase limited-release sneakers. Automated login, item selection, and form-filling using Selenium to secure purchases before items sold out.",
    },
  ],

  education: [
    {
      degree: "Master of Data Science",
      university: "Deakin University",
      gpa: "78.5 WAM/100",
      date: "Nov 2022 – Sep 2024",
      location: "Melbourne, VIC, Australia",
    },
    {
      degree: "Certificate in Business Analytics and Data Science",
      university: "IMS Proschool Pvt. Ltd.",
      date: "Jul 2021 – Jul 2022",
      location: "Mumbai, Maharashtra, India",
    },
    {
      degree: "Bachelor of Computer Engineering",
      university: "University of Mumbai",
      gpa: "7.46 CGPA/10",
      date: "Aug 2017 – Jul 2021",
      location: "Mumbai, Maharashtra, India",
    },
  ],

  certifications: [
    {
      title: "PowerBI Essential Training",
      issuer: "LinkedIn Learning",
      date: "May 2023",
      link: "https://www.linkedin.com/learning/certificates/AWiGDUi0e_4UPlHsczYenNWLCQb8",
    },
    {
      title: "Certificate in Business Analytics",
      issuer: "IMS Proschool",
      date: "Jun 2022",
      link: "https://www.linkedin.com/in/ptanmay143/details/certifications/1751678305406/single-media-viewer",
    },
    {
      title: "Certificate in Data Science",
      issuer: "IMS Proschool",
      date: "Jun 2022",
      link: "https://www.linkedin.com/in/ptanmay143/details/certifications/1751678240306/single-media-viewer",
    },
    {
      title: "Fundamentals of Deep Learning for Computer Vision",
      issuer: "NVIDIA Deep Learning Institute",
      date: "Jun 2019",
      link: "https://www.linkedin.com/in/ptanmay143/details/certifications/1751678543435/single-media-viewer",
    },
    {
      title: "Course on Python",
      issuer: "LIVEWIRE India",
      date: "Jan 2019",
      link: "https://www.linkedin.com/in/ptanmay143/details/certifications/1751678481084/single-media-viewer",
    },
  ],

  publications: [
    {
      title: "Virtual Therapist for Psychological Healthcare",
      journal:
        "International Journal of Trend in Scientific Research and Development",
      date: "Jan 20, 2021",
      link: "https://www.ijtsrd.com/papers/ijtsrd38614.pdf",
      description:
        "Published research on developing a virtual assistant chatbot using Machine Learning and NLP to act as a therapist. Demonstrated high accuracy in patient action understanding, error identification, and task recommendation. Proposed system with potential for enabling on-demand virtual care and significantly reducing healthcare costs.",
    },
  ],

  extracurricular: [
    {
      title: "Team Lead, Artificial Intelligence Club",
      organization: "Smt. Indira Gandhi College of Engineering",
      date: "Sep 2019",
      description:
        "Led the AI Club, mentoring students on artificial intelligence. Conducted a seminar for over 20 students covering machine learning fundamentals, key algorithms, and Python.",
    },
    {
      title: "Founder, Full Stack Web Development Club",
      organization: "Smt. Indira Gandhi College of Engineering",
      date: "Aug 2019",
      description:
        "Established the Full Stack Development Club to promote web development skills among students. Organized and conducted two hands-on workshops for 60+ students on front-end technologies (HTML, CSS, JavaScript, Bootstrap) and back-end technologies (Node.js, Express, MongoDB).",
    },
  ],

  contactLinks: [
    {
      label: "EMAIL",
      value: "ptanmay143@gmail.com",
      link: "mailto:ptanmay143@gmail.com",
    },
    {
      label: "PHONE",
      value: "+61 410 707 906",
      link: "tel:+61410707906",
    },
    {
      label: "LOCATION",
      value: "Sydney, NSW, Australia",
      link: null,
    },
    {
      label: "GITHUB",
      value: "github.com/ptanmay143",
      link: "https://github.com/ptanmay143",
    },
    {
      label: "LINKEDIN",
      value: "linkedin.com/in/ptanmay143",
      link: "https://linkedin.com/in/ptanmay143",
    },
  ],
};
