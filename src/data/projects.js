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
            image: "/images/HomePage_LowFi.png",
            description:
              "My initial homepage design focused on creating a simple entry point for users to begin exploring Black history. The layout featured a search bar, a Start Exploring button, and navigation options for the timeline, map, and historical themes. I wanted users to immediately understand that the website was designed to help them explore how historical events relate to the present.",
            changes:
              "This first concept established the basic navigation and search functionality that would guide users through the website. However, the design relied heavily on the search bar and provided little information about what users could discover. The large amount of empty space also presented an opportunity to better communicate the website's purpose and introduce its main features.",
            reason:
              "I wanted the homepage to be straightforward and easy to navigate, especially for users who might not be familiar with the historical topics being covered. By emphasizing search and providing a clear starting point, my goal was to make exploring the website feel approachable rather than overwhelming. This initial concept also helped me recognize the importance of giving users more context before asking them to begin exploring.",
          },
          {
            version: "02",
            title: "Revised Homepage Design",
            image: "/images/BHL_HomePage_2.png",
            description:
              "My second homepage design focused on communicating the purpose of Black History Linked more clearly while giving users multiple ways to begin exploring. I kept the search functionality from my original concept but introduced a stronger headline, supporting information, and dedicated sections for historical events, modern issues, and connections. I also added a visual example of how historical developments can be connected to present-day issues, along with a section encouraging users to explore the timeline.",
            changes:
              "Compared to my original homepage, this version uses the available space more intentionally and provides more context before asking users to explore. The first design relied heavily on a search bar and a single button, while the revised design introduces three exploration cards that highlight the website's main features. I also added a historical pathway example connecting Reconstruction, Jim Crow, redlining, and wealth inequality. The typography, navigation, and overall layout were refined to create a clearer hierarchy between the website's purpose and its interactive features.",
            reason:
              "One of the main limitations of my original homepage was that users had little guidance about what they could actually do on the website. I wanted the second iteration to introduce the platform's purpose before directing users toward specific features. Providing separate entry points for historical events, modern issues, and connections was intended to support different ways of exploring the content. I also included the historical pathway example to demonstrate the central idea behind Black History Linked: understanding history through relationships across time rather than viewing events in isolation.",
          },
          {
            version: "03",
            title: "Current Homepage Design",
            image: "/images/BHL_Full_Homepage.png",
            description:
              "My current homepage design focuses on immediately communicating the purpose of Black History Linked and directing users toward its main features. I introduced a more prominent hero section with the statement Black history is connected, followed by a brief explanation of how the website explores relationships between historical events, people, policies, movements, and modern societal issues. Two clear calls to action allow users to explore historical connections or view the timeline.",
            changes:
              "Compared to the previous iterations, I moved away from making the search bar the main focus of the homepage. Instead, I placed greater emphasis on explaining the website's purpose and highlighting its most important features. I also introduced a darker hero section, larger typography, and more prominent action buttons to establish a stronger visual hierarchy. The navigation was simplified to make it easier for visitors to access the different parts of the website.",
            reason:
              "I wanted users to understand what makes Black History Linked different from a traditional history website as soon as they arrive. Earlier designs provided several exploration options, but I felt the homepage needed a clearer introduction to the website's central concept. By emphasizing historical connections in the headline and making the Connections page a primary destination, I intended to guide users toward the feature that best represents the project's purpose. The stronger visual hierarchy was also intended to make the homepage easier to understand and navigate.",
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
            image: "/images/Connections_LowFi.png",
            description:
              "My initial Connections page design focused on visually demonstrating how different periods of Black history are connected. I used historical images and a dashed connecting line to represent a relationship between the transatlantic slave trade and Reconstruction. The goal was to introduce users to the bigger picture of Black history by encouraging them to look beyond individual events and recognize relationships across different time periods.",
            changes:
              "This first concept introduced the idea of displaying historical relationships visually instead of relying entirely on written explanations. However, the design only showed two historical topics connected by a line, without explaining the relationship between them. It also lacked supporting information and a clear way for users to explore additional connections. These limitations highlighted the need for a more informative and interactive approach.",
            reason:
              "I wanted users to recognize that Black history consists of interconnected events and developments rather than isolated moments. Using images and a visual connection was intended to make that concept easier to recognize at a glance. However, the initial design helped me understand that showing a connection is not enough on its own. Users also need historical context, explanations, and supporting sources to understand why a relationship matters.",
          },
          {
            version: "02",
            title: "Revised Connections Design",
            image: "/images/BHL_Connections_2.png",
            description:
              "My second Connections page design focused on developing the original idea of visually connecting historical events into a more structured exploration experience. Instead of showing only two historical images joined by a dashed line, I introduced a network-style visualization containing multiple historical events and modern issues. I also added pathway filtering, search functionality, and an information panel that provides context about a selected historical event and its related topics.",
            changes:
              "The biggest improvement was moving away from the original two-image concept toward an interface designed to support multiple historical relationships. I replaced the large historical images with labeled nodes representing different events and issues, allowing more information to fit within the visualization. I also introduced a distinction between historical events and modern issues, along with a panel that displays information about a selected topic. The addition of search and pathway controls gives users more ways to narrow their exploration instead of relying entirely on the visual layout.",
            reason:
              "Although my original design introduced the idea of historical connections, it did not provide enough information for users to understand why the events were related. I wanted this iteration to move closer to an interactive experience where users could select a historical event and discover related developments. The information panel was intended to provide context without requiring users to leave the visualization. I also introduced filtering and search controls because I recognized that displaying more historical events would make the graph increasingly difficult to navigate without ways to focus on specific topics.",
          },
          {
            version: "03",
            title: "Current Connections Design",
            image: "/images/BHL_Connections.png",
            description:
              "My current Connections page centers around an interactive network graph that allows users to explore documented relationships between Black historical events and modern societal issues. Historical events and modern issues are represented by different colored nodes, while connecting lines represent relationships between them. Users can search for topics, filter by historical pathways, and navigate the graph using zoom and reset controls. An information panel provides additional context when users explore the network.",
            changes:
              "The biggest improvement from the second iteration was developing the network visualization into a more detailed and interactive experience. The previous design introduced multiple historical nodes and a contextual information panel, but it did not clearly communicate all the relationships between those topics. In the current design, I added visible connecting lines, expanded the number of historical events and modern issues, and introduced graph navigation controls. I also refined the instructions and legend to help users understand how to interact with the visualization. The interface now provides more opportunities to explore specific historical relationships rather than simply viewing an overview of connected topics.",
            reason:
              "One of the main challenges of this project has been finding a way to present historical relationships without overwhelming users with information. I wanted the Connections page to encourage exploration while still providing enough guidance to make the graph understandable. Distinguishing historical events from modern issues helps users recognize the different types of information being presented, while search and pathway filtering allow them to narrow their focus. I also designed the information panel to provide context without requiring users to leave the graph. Together, these decisions were intended to create a more informative and engaging way to understand how historical developments relate to present-day issues.",
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
            image: "/images/BHL_Issues_1.png",
            description:
              "My initial Modern Issues page design focused on introducing users to contemporary societal issues and their connections to Black history. I organized four issues into a simple list that included a title, brief description, and an option to explore each topic further. I wanted users to have a straightforward way to discover the issues covered by the website without overwhelming them with information.",
            changes:
              "This first concept established the basic structure for presenting modern societal issues. Instead of displaying everything in one large section, I separated each issue into its own row to make the information easier to scan. However, the design offered limited ways to search or filter issues, and it did not clearly show the historical pathways associated with each topic. These limitations became areas I wanted to address in the next iteration.",
            reason:
              "My main priority was making the Modern Issues page approachable for users who might not already understand the historical context behind these topics. I kept the layout simple so users could focus on the issues themselves. However, I also recognized that providing a list of issues was only part of the solution. The page needed to do more to help users discover the historical relationships that make Black History Linked different from a traditional informational website.",
          },
          {
            version: "02",
            title: "Revised Modern Issues Design",
            image: "/images/BHL_Issues_2.png",
            description:
              "For the second iteration, I focused on making the Modern Issues page more organized and interactive. I replaced the original list layout with a grid of issue cards and introduced search and historical pathway filtering options. Each card now includes a brief description, a related pathway, and an option to follow historical connections. I also expanded the design to include additional issues, giving users more topics to explore.",
            changes:
              "The biggest change was moving from a basic list to a card-based layout that provides more information without making the page difficult to navigate. I added a search bar and pathway filter to give users more control over how they find issues. The cards also introduce labels for historical pathways and space for connection counts, making the relationship between modern issues and historical events more visible. I also simplified the navigation and improved the spacing between sections to create a more consistent visual hierarchy.",
            reason:
              "I wanted users to be able to explore modern issues based on their interests rather than having to browse through every topic individually. Adding search and filtering options was intended to make the page easier to navigate as more issues are added to the website. I also wanted the issue cards to communicate more than just a title and description. By introducing historical pathways and connection information, the design begins showing users how each modern issue fits into the larger purpose of Black History Linked.",
          },
          {
            version: "03",
            title: "Current Modern Issues Design",
            image: "/images/BHL_Issues_Current.png",
            description:
              "My current Modern Issues page provides a more structured way for users to explore contemporary societal issues and the historical developments connected to them. The page features six issues displayed in a three-column card layout, with each card containing a title, description, related historical pathways, and the number of documented historical connections. I also retained the search and pathway filtering options introduced in the second iteration, allowing users to find issues based on their interests.",
            changes:
              "Compared to the second iteration, I refined the layout to display three issue cards per row instead of two, making better use of the available screen space. I also updated the issue titles and descriptions to more accurately represent the topics covered by Black History Linked, including anti-Black violence, incarceration disparities, housing inequality, educational opportunity, and voting access. The historical pathway labels were expanded to reflect the project's more specific thematic categories. I also simplified the cards' visual presentation and adjusted the typography and spacing to create a more consistent appearance across the page.",
            reason:
              "My goal was to make it easier for users to understand the range of modern issues covered by Black History Linked while recognizing that each issue has historical context worth exploring. The card-based layout allows visitors to compare topics without reading lengthy explanations, while the pathway labels help communicate how those issues relate to broader historical themes. I also wanted the page to remain manageable as more issues and connections are added to the database. Keeping search and filtering available was intended to support that growth while allowing users to focus on topics that interest them.",
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
