const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "portfolio.png",
    canOpen: true,
  },
  {
    id: "projects",
    name: "Recent Works", // was "finder"
    icon: "projects.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "gallery.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "skills.png",
    canOpen: true,
  },
];

const recentWorks = [
  {
    id: 1,
    date: "Feb 16, 2026",
    title: "67 lingo: Turn boring english into the new gen alpha brainrot.",
    image: "/images/67.png",
    link: "https://67lingo.vercel.app/",
  },
  {
    id: 2,
    date: "Feb 19, 2026",
    title:
      "Lexly: Your go-to personal dictionary powered by AI as a chrome extension.",
    image: "/images/lexly.png",
    link: "https://github.com/rudranshgoel1/lexly/releases/tag/v1.0.0",
  },
  {
    id: 3,
    date: "Feb 22, 2026",
    title:
      "PetPet GIF Generator: An API for generating the petpet GIF with just an image url.",
    image: "/images/slack.webp",
    link: "https://github.com/rudranshgoel1/patpatgifmakerapi",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "HTML"],
  },
  {
    category: "Mobile",
    items: ["React Native"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Flask", "DJango"],
  },
  {
    category: "Database",
    items: ["SQL", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Vercel"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#a84448",
    link: "https://github.com/rudranshgoel1/",
  },
  {
    id: 2,
    text: "X/Twitter",
    icon: "/icons/twitter.svg",
    bg: "#2f8f45",
    link: "http://x.com/_rudranshgoel",
  },
  {
    id: 3,
    text: "Instagram",
    icon: "/icons/instagram.svg",
    bg: "#cc6b55",
    link: "http://instagram.com/rudranshgoel01",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#025777",
    link: "https://www.linkedin.com/in/rudranshgoel/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  recentWorks,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "67lingo",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[8vh] left-130", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "67lingo.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "67 Lingo is a Gen Z slang translator that turns plain English into the internet language kids are actually speaking.",
            "Think of it like having a bilingual friend who's chronically on the internet",
          ],
        },
        {
          id: 2,
          name: "67lingo.vercel.app",
          icon: "/images/projects.png",
          kind: "file",
          fileType: "url",
          href: "https://67lingo.vercel.app/",
          position: "top-10 right-40",
        },
        {
          id: 4,
          name: "67lingo.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-44 right-80",
          imageUrl: "/images/67.png",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Lexly",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-44 right-60",
      windowPosition: "top-[30vh] right-70",
      children: [
        {
          id: 1,
          name: "Lexly.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Your personal AI-powered dictionary as a Chrome extension.",
            "Instead of guessing what words mean, you get AI-powered insights on words, type of word, and overall usage.",
            "Think of it like having a career coach—pointing out strengths, fixing weaknesses, and boosting your chances of landing interviews.",
            "It's built with Next.js and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
          ],
        },
        {
          id: 2,
          name: "lexly.extension",
          icon: "/images/projects.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/rudranshgoel1/lexly/releases/tag/v1.0.0",
          position: "top-10 left-40",
        },
        {
          id: 4,
          name: "lexly.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-44 right-30",
          imageUrl: "/images/lexly.png",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Petpheus",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[70vh] left-90",
      children: [
        {
          id: 1,
          name: "Petpheus.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A Slack bot that generates the petpet GIF from any image URL.",
            "Petpheus is a fun Slack bot that takes any image URL and turns it into the iconic petpet GIF you see all over the internet.",
            "Instead of making gifs using online tools, then uploading that emoji to your workspace, you can upload the image and it does all the work for you",
            "Think of it like having your personal assistant pocket—ready to make emoijs anytime, anywhere.",
          ],
        },
        {
          id: 2,
          name: "petpheus.bot",
          icon: "/images/projects.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/rudranshgoel1/petpheus",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "petpheus.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-44 right-80",
          imageUrl: "/images/petpheus.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/rudransh.png",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/rudransh-2.jpg",
    },
    {
      id: 3,
      name: "another-casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-44 left-80",
      imageUrl: "/images/rudransh-3.JPG",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-10 left-65",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/rudranshabt.jpg",
      description: [
        "Hey! I’m Rudransh 👋, a developer who loves turning random ideas into clean, interactive things on the internet.",
        "I spend most of my time working with JavaScript, Flask, and modern web tech, building projects that are fast, smooth, and actually pleasant to use.",
        "I care a lot about good UI, thoughtful UX, and writing code that future me won’t hate debugging.",
        "When I’m not coding, I’m usually experimenting with new tech, building weird side projects, or staying up way too late fixing something that was *almost* working.",
      ],
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  projects: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
