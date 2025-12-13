// Portfolio Content Data
const portfolioData = {
    about: {
        intro: `Highly skilled <span class="highlight">data scientist</span> and <span class="highlight">software developer</span> with proven ability to lead teams and develop complex AI, machine learning, and data-driven solutions. Experienced in building and managing <span class="highlight">data pipelines</span>, leveraging <span class="highlight">full-stack development</span>, and providing technical leadership in diverse project environments.`,
        workRights: {
            title: 'Work Rights:',
            description: '485 Graduate VISA with Australian unrestricted full working rights, valid until October 21, 2029'
        }
    },

    experience: [
        {
            title: 'Capstone Team Lead (Engine Team)',
            company: 'DataBytes (Project Echo)',
            date: 'Jul 2023 – Jun 2024',
            responsibilities: [
                'Led a 50-member team to develop an AI solution for classifying Otway rainforest animals based on their sounds',
                'Built a data pipeline to convert audio recordings into mel spectrograms for computer vision-based classification',
                'Developed 19 TensorFlow models using ResNet and InceptionNet architectures with 89% accuracy',
                'Managed versioned training data storage on Google Cloud Storage and offloaded training to Google Cloud Compute',
                'Acted as Git PR reviewer and implemented CI pipelines for build validation',
                'Maintained Trello board and organized weekly team stand-up meetings on Teams'
            ]
        },
        {
            title: 'Chatbot Developer Intern',
            company: 'Chic Infotech',
            date: 'Nov 2019 – Jan 2020',
            responsibilities: [
                'Created a chatbot for an online banking portal client to answer common user queries',
                'Scraped multiple banking FAQ pages to generate a dataset, cleaning and formatting for training',
                'Used Rasa NLU framework to recognize different user intents and variations',
                'Deployed the chatbot on remote Windows Server with port forwarding for website integration'
            ]
        },
        {
            title: 'Data Science Intern',
            company: 'Bennett University',
            date: 'Jun 2019 – Aug 2019',
            responsibilities: [
                'Implemented HP PointNet neural network architecture for 3D point cloud classification using Keras and HDF5',
                'Earned NVIDIA Computer Vision certification through rigorous training',
                'Worked in weekly sprints, participated in hackathon as final sprint',
                'Presented project findings to panel of six evaluators demonstrating model accuracy and performance'
            ]
        }
    ],

    skills: {
        'Languages': ['Python', 'R', 'C#', 'JavaScript', 'HTML', 'CSS', 'C', 'C++'],
        'Frameworks & Libraries': ['TensorFlow', 'Keras', 'NLTK', 'Rasa NLU', 'Express', 'Bootstrap 5', 'Matplotlib', 'Seaborn'],
        'Databases': ['MySQL', 'SQLite', 'MongoDB', 'Firebase', 'PostgreSQL'],
        'Cloud & DevOps': ['Google Cloud', 'Docker', 'DevOps', 'Git', 'GitHub'],
        'Tools & Platforms': ['Power BI', 'Tableau', 'Power Automate', 'BeautifulSoup', 'Selenium', 'Node.js'],
        'Concepts': ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'Data Pipelines', 'System Admin']
    },

    projects: [
        {
            title: 'Recipe Net',
            description: 'Built a recipe recommendation system that suggests recipes based on user-inputted ingredients. Scraped 7,918 recipes and used cosine similarity for matching.',
            link: 'https://github.com/ptanmay143/recipe-net'
        },
        {
            title: 'Virtual Therapist',
            description: 'Developed an AI-driven chatbot trained on therapist responses from well-being forums. Implemented JavaScript web widget for seamless integration.',
            link: 'https://github.com/ptanmay143/virtual-therapist'
        },
        {
            title: 'AWS Honeypot Dashboard',
            description: 'Analyzed AWS honeypot cyberattacks dataset to identify major sources of malicious activity. Built 3 Power BI dashboards for stakeholders.',
            link: null
        },
        {
            title: 'NHANES Interactive Dashboard',
            description: 'Designed an interactive health data dashboard in Seaborn analyzing BMI, physical activity, and nutrient correlations with demographic filters.',
            link: null
        },
        {
            title: 'Rummy with Friends',
            description: 'Built a multiplayer rummy game with real-time synchronization using client-server model, network sockets, and RPC for player interactions.',
            link: 'https://github.com/ptanmay143/rummy-with-friends'
        },
        {
            title: 'Hotel Booking Website',
            description: 'Developed a responsive hotel booking website with Bootstrap 5, client-side validation, and MySQL database managed by Node.js connector.',
            link: null
        }
    ],

    education: [
        {
            degree: 'Master of Data Science',
            university: 'Deakin University',
            grade: 'Score: 78.5/100',
            graduation: 'Graduated: Jun 2024'
        },
        {
            degree: 'Bachelor of Computer Engineering',
            university: 'University of Mumbai',
            grade: 'GPA: 7.46/10',
            graduation: 'Graduated: Jul 2021'
        }
    ],

    contact: [
        {
            label: 'EMAIL',
            value: 'ptanmay143@gmail.com',
            link: 'mailto:ptanmay143@gmail.com'
        },
        {
            label: 'PHONE (AU)',
            value: '+61 410 707 906',
            link: 'tel:+61410707906'
        },
        {
            label: 'PHONE (IN)',
            value: '+91 98679 95323',
            link: 'tel:+919867995323'
        },
        {
            label: 'LOCATION',
            value: 'VIC 3125, Australia',
            link: null
        },
        {
            label: 'GITHUB',
            value: 'github.com/ptanmay143',
            link: 'https://github.com/ptanmay143'
        }
    ]
};