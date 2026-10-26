// Remember to replace stuff. Keep slug values unique.

export const designProjects = [
  {
    slug: "black-history-linked",
    title: "Black History Linked",
    type: "UX/UI · Educational Platform",
    category: "UX/UI",
    year: "In progress",
    number: "01",
    featured: true,
    cover: "history",
    image: "/images/BHL_Cover.png",
    summary:
      "Making connections between Black historical events and present-day societal issues easier to explore.",
    role: "UX/UI Design · Front-End Development",
    tools: ["Figma", "Information Architecture", "React"],
    status: "Senior project · In progress",
    heroStatement: "Black History is connected.",
    overview:
      "Black History Linked is an educational website that helps learners trace relationships among historical events, larger thematic pathways, and modern societal issues.",
    problem:
      "When history is taught as isolated events, it can be difficult to see how developments across different eras are connected or why those connections matter now.",
    sources: [
      {
        title: "Teaching Hard History",
        organization: "Southern Poverty Law Center",
        year: "2018",
        url: "https://www.splcenter.org/resources/reports/teaching-hard-history/",
        finding:
          "The report identifies major gaps in how American slavery is taught, including insufficient historical context and a failure to connect slavery to its continuing effects on American society.",
        relevance:
          "This supports my decision to give users historical context and help them trace relationships between events across different time periods.",
      },
      {
        title: "AP African American Studies",
        organization: "College Board",
        year: "Course framework",
        url: "https://apcentral.collegeboard.org/courses/ap-african-american-studies",
        finding:
          "The course framework emphasizes recognizing historical patterns, relationships, causation, and continuity while examining primary and secondary sources.",
        relevance:
          "This influenced my decision to organize historical information into thematic pathways and let users explore documented connections.",
      },
      {
        title: "Teaching Hard History: Grades 6–12 Introduction",
        organization: "Learning for Justice",
        year: "Teaching framework",
        url: "https://www.splcenter.org/learning-for-justice/frameworks/teaching-hard-history/6-12-framework-introduction/",
        finding:
          "The framework emphasizes integrating slavery into broader American history and making explicit connections between historical developments and their continuing consequences.",
        relevance:
          "This reinforces the goal of helping users move beyond isolated events to understand historical relationships and present-day relevance.",
      },
    ],
    approach:
      "Organize content around meaningful historical pathways, use clear navigation and readable event details, and make connections discoverable through interactive exploration.",

    designIterations: [
      {
        id: "homepage",
        title: "Homepage",
        introduction:
          "The homepage introduces visitors to Black History Linked and helps them understand what they can explore throughout the website.",

        evolutions: [
          {
            version: "01",
            title: "Initial Homepage Design",
            image: "",
            description:
              "Describe the original homepage concept and the experience you wanted to create.",
            changes:
              "Describe the design limitations or opportunities you identified.",
            reason: "Explain why you decided to revise this design.",
          },
          {
            version: "02",
            title: "Revised Homepage Design",
            image: "",
            description: "Describe the second version of your homepage.",
            changes:
              "Explain what you changed in the layout, navigation, content, or visual hierarchy.",
            reason:
              "Explain how these changes were intended to improve the user experience.",
          },
          {
            version: "03",
            title: "Current Homepage Design",
            image: "/images/BHL_Full_Homepage.png",
            description:
              "Describe the current homepage and how it introduces the purpose of Black History Linked.",
            changes:
              "Explain the most important improvements compared with your previous designs.",
            reason:
              "Explain how the current design supports the needs of your intended audience.",
          },
        ],
      },

      {
        id: "connections",
        title: "Connections Page",
        introduction:
          "The Connections page is designed to help users explore relationships between historical events and contemporary societal issues.",

        evolutions: [
          {
            version: "01",
            title: "Initial Connections Design",
            image: "",
            description:
              "Describe your first concept for presenting historical connections.",
            changes:
              "Identify the limitations or challenges you noticed in the original design.",
            reason: "Explain why the initial design needed further refinement.",
          },
          {
            version: "02",
            title: "Revised Connections Design",
            image: "",
            description:
              "Describe how the Connections page evolved during development.",
            changes:
              "Explain changes you made to the interface, navigation, or how connections are presented.",
            reason:
              "Explain how these changes were intended to make historical relationships easier to explore.",
          },
          {
            version: "03",
            title: "Current Connections Design",
            image: "/images/BHL_Connections.png",
            description: "Describe the current design of the Connections page.",
            changes:
              "Highlight the improvements made since the original concept.",
            reason:
              "Explain how the current design supports the website’s educational purpose.",
          },
        ],
      },

      {
        id: "modern-issues",
        title: "Modern Issues Page",
        introduction:
          "The Modern Issues page presents contemporary societal issues and helps users discover their documented historical connections.",

        evolutions: [
          {
            version: "01",
            title: "Initial Modern Issues Design",
            image: "",
            description:
              "Describe your first concept for the Modern Issues page.",
            changes:
              "Explain the design limitations or areas that needed improvement.",
            reason: "Explain what motivated your next design iteration.",
          },
          {
            version: "02",
            title: "Revised Modern Issues Design",
            image: "",
            description:
              "Describe the second version of the Modern Issues page.",
            changes:
              "Explain changes to content organization, navigation, or the presentation of issues.",
            reason:
              "Explain how these changes were intended to make the information easier to understand.",
          },
          {
            version: "03",
            title: "Current Modern Issues Design",
            image: "/images/BHL_ModernIssues.png",
            description:
              "Describe the current Modern Issues page and its primary features.",
            changes:
              "Highlight the most important improvements over earlier versions.",
            reason:
              "Explain how the final layout helps users discover and understand contemporary issues.",
          },
        ],
      },
    ],

    decisions: [
      "Organize content around thematic pathways rather than a single enormous timeline.",
      "Give learners context before asking them to explore more complex connections.",
      "Create room for documented sources alongside historical relationships.",
    ],
    outcome:
      "This project is still in development. The next steps include refining the interface and conducting usability checks.",
    processImages: [
      {
        src: "/images/black-history-linked-flowchart.png",
        alt: "Black History Linked user navigation flowchart",
        caption: "User flow and website navigation",
      },
      {
        src: "/images/black-history-linked-stakeholder-matrix.png",
        alt: "Stakeholder Analysis",
        caption: "Stakeholder Analysis",
      },
      {
        src: "/images/black-history-linked-uml-deployment-diagram.png",
        alt: "Black History Linked Deployment Diagram",
        caption: "Deployment Diagram",
      },
      {
        src: "/images/Black-History-Linked-Use-Case-Diagram.png",
        alt: "Black History Linked Use Case Diagram",
        caption: "Use Case Diagram",
      },
    ],
  },

  /*
  {
    slug: 'mobile-experience-concept',
    title: 'Mobile Experience Concept',
    type: 'Mobile UI · Portfolio Placeholder',
    category: 'Mobile',
    year: 'Example slot',
    number: '02',
    cover: 'mobile',
    image: '',
    summary: 'A reserved space for a mobile interface you have designed in Figma.',
    role: 'Replace with your role',
    tools: ['Figma', 'Wireframing', 'Prototyping'],
    status: 'Placeholder — replace with your work',
    heroStatement: 'A space for your next great mobile experience.',
    overview: 'Replace this entry with a real mobile app concept or redesign.',
    problem: 'Describe the user problem your project solves.',
    approach: 'Describe your actual research, sketches, user flows, and iterations.',
    decisions: ['Replace this with your real design decision.', 'Explain why the decision helped the user.'],
    outcome: 'Replace this with your project status, actual findings, and reflections.',
    next: 'Swap in your own project images and narrative in src/data/projects.js.'
  },
  */

  /*
  {
    slug: 'website-redesign-concept',
    title: 'Website Redesign Concept',
    type: 'Web UI · Portfolio Placeholder',
    category: 'Web',
    year: 'Example slot',
    number: '03',
    cover: 'editorial',
    image: '',
    summary: 'A reserved space for a redesign that demonstrates hierarchy, usability, and responsive thinking.',
    role: 'Replace with your role',
    tools: ['Figma', 'Responsive Design'],
    status: 'Placeholder — replace with your work',
    heroStatement: 'Rethink how the web feels to use.',
    overview: 'Replace this entry with a real responsive website redesign.',
    problem: 'Describe what was difficult or unclear about the original experience.',
    approach: 'Show how you investigated the problems and developed a stronger layout.',
    decisions: ['Explain the most meaningful change.', 'Explain how your design improves the experience.'],
    outcome: 'Replace this with your project status and real observations.',
    next: 'Add before-and-after screenshots from your design work.'
  }
  */
];

export const developmentProjects = [
  {
    slug: "black-history-linked",
    title: "Black History Linked",
    type: "React · Express · PostgreSQL",
    category: "Full Stack",
    year: "In progress",
    number: "01",
    featured: true,
    cover: "history",
    image: "",
    summary:
      "An educational platform connecting historical events, documented relationships, and modern issues.",
    status: "Senior project · In progress",
    stack: ["React", "JavaScript", "Express", "PostgreSQL", "D3.js (planned)"],
    role: "Front-End Developer · UX/UI Designer",
    overview:
      "Building a React front end supported by an Express API and a PostgreSQL database for historical content, modern issues, and documented historical relationships.",
    engineering:
      "The application separates presentation, API access, and relational data. Planned interactive connection visualizations will help learners navigate the historical network.",
    challenges: [
      "Model historical events and related modern issues as structured records.",
      "Connect React components to Express endpoints that return actual database data.",
      "Prepare relationships for an interactive D3.js connections graph.",
    ],
    next: "Finish the modern issues API integration, build the interactive connections graph, and test real-world navigation. Update this page as features are completed.",
    github: "",
    live: "",
  },
  {
    slug: "portfolio-website",
    title: "Personal Portfolio Website",
    type: "React · Responsive CSS",
    category: "Front End",
    year: "Starter",
    number: "02",
    cover: "portfolio",
    image: "",
    summary:
      "This customizable portfolio starter with separate design and development experiences.",
    status: "Starter example — personalize it",
    stack: ["React", "React Router", "CSS", "Vite"],
    role: "Front-End Developer",
    overview:
      "A responsive portfolio built as a React single-page application with reusable UI components and separate project galleries.",
    engineering:
      "React Router handles navigation, data objects power reusable project views, and responsive CSS adapts layout across screen sizes.",
    challenges: [
      "Create distinct visual identities within a consistent shared site.",
      "Make filtering and navigation functional without a backend.",
      "Keep content easy to customize through central project data.",
    ],
    next: "Replace the starter metadata with your own implementation notes, screenshots, and deployed URL after you customize and publish it.",
    github: "",
    live: "",
  },
  {
    slug: "next-react-project",
    title: "Your Next React Project",
    type: "React · Portfolio Placeholder",
    category: "Front End",
    year: "Example slot",
    number: "03",
    cover: "components",
    image: "",
    summary:
      "A space for a working project that showcases your JavaScript and front-end skills.",
    status: "Placeholder — replace with your work",
    stack: ["React", "JavaScript", "CSS"],
    role: "Replace with your role",
    overview: "Replace this entry with an app you actually built.",
    engineering:
      "Explain the component structure, state, routing, data flow, or API integration.",
    challenges: [
      "Document a technical challenge.",
      "Explain how you resolved it.",
    ],
    next: "Add real screenshots and links to your source code or deployed project.",
    github: "",
    live: "",
  },
];
