import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  python,
  php,
  java,
  spring,
  symphony,
  fastapi,
  django,
  bash,
  threejs,
  yandex,
  begear,
  contrader,
  sprizzami,
  agrimetal,
  nabboman,
  simone_servodidio,
  stefano_belli,
  nabboz,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Machine Learning Engineer",
    icon: backend,
  },
  {
    title: "Security Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  //   {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Php",
    icon: php,
  },
  {
    name: "Spring",
    icon: spring,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  // {
  //   name: "git",
  //   icon: git,
  // },
  {
    name: "django",
    icon: django,
  },
  // {
  //   name: "symphony",
  //   icon: symphony,
  // }
];

const experiences = [
  {
    title: "Fullstack Developer",
    company_name: "BeGear SRL",
    icon: begear,
    iconBg: "#383E56",
    date: "July 2022 - present",
    points: [
      "Creating and maintaining backend systems and databases using languages such as Python, Java and PHP (Django, Spring, Symphony) in microservices architecture.",
      "Building responsive and user-friendly web applications using React.js, Typescript, HTML, CSS and other related technologies.",
      "Conducting thorough testing and debugging to indentify and resolve any technical issue or bug.",
      "Collaborating with cross-functional teams including designers, UX/UI teams, product managers, and other developers to ensure seamsless integration of design elements into the applications.",
      "Helped collegues of R&D department to develop deep learning and NLP algorithims.",
      "Participated in code reviews and provided constructive feedback to ensure code improvements.",
    ],
  },
  {
    title: "Computer Consultant - Backend Developer",
    company_name: "Contrader Engineering SRL",
    icon: contrader,
    iconBg: "#E6DEDD",
    date: "March 2022 - July 2022",
    points: [
      "Consultant for Contrader Engineering in LeafSpace (italian aereospacial company), where I worked developing API to download satellites data from ground stations.",
      "Collaborated with cross-functional teams to develop and implement robust Python backend solution, using FastAPI framework",
      "Participated in meetings to discuss database design and implementation.",
      "Conducting thorough testing and debugging to identify and resolve any technical issues or bugs.",
    ],
  },
  {
    title: "Internship - Backend and Web Developer",
    company_name: "Shopify",
    icon: contrader,
    iconBg: "#383E56",
    date: "October 2021 - March 2022",
    points: [
      "Learned how to develop Enterprises apps.",
      "Studied Java, Javascript, HTML and CSS.",
    ],
  },
  {
    title: "Data Science Intensive Bootcamp Remote - 580h Certification",
    company_name: "Practicum by Yandex",
    icon: yandex,
    iconBg: "#E6DEDD",
    date: "December 2019 - August 2020",
    points: [
      "Python and data analysis basis | Data preprocessing | Exploratory Data Analysis (EDA).",
      "Statistical data analysis | Data collection and storage (SQL).",
      "Introduction to machine learning | Supervised learning | Machine learning for business.",
      "Linear algebra | Numerical methods | Time series.",
      "Machine learning for text | Computer vision (Conv Neural Networks) | Unsupervised learning.",
      "+ 15 Portfolio Project on real world data."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "The site Stefano delivered is absolutely stunning beautifull and took only a month. Big up for him.",
    name: "Simone Servodidio",
    designation: "CEO",
    company: "Sprizzami",
    image: simone_servodidio,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Stefano does.",
    name: "Stefano Belli",
    designation: "CEO",
    company: "Agrimetal",
    image: stefano_belli,
  },
  {
    testimonial:
      "Even if the site is still under development, it's already a great job done by Stefano. I highly recommend him.",
    name: "Emanuele Frasca",
    designation: "Gaming streamer",
    company: "Nabboman",
    image: nabboz,
  },
];

const projects = [
  {
    name: "Sprizzami Website",
    description:
      "Responsive website for Sprizzami, italian foodtruck based in Portugal. The website is built with HTML, CSS and Vanilla JavaScript frontend. Express mailer manager backend.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      }
    ],
    image: sprizzami,
    source_code_link: "https://github.com/stefanopedicinogit/Sprizzami_frontend",
  },
  {
    name: "Agrimetal Website",
    description:
      "Responsive website for Agrimetal, italian company based in Italy. The website is built with React.js as for frontend. Express mailer manager as for backend.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      }
    ],
    image: agrimetal,
    source_code_link: "https://github.com/stefanopedicinogit/AgrimetalWebsite",
  },
  {
    name: "Nabboman Website",
    description:
      "Responsive website for Nabboman, italian streamer. The website is built with React.js as for frontend. Express for backend and Stripe for e-commerce payments. Still under development.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "Stripe",
        color: "gray-text-gradient",
      },
    ],
    image: nabboman,
    source_code_link: "https://github.com/stefanopedicinogit/NabbomanWebsite",
  },
];

export { services, technologies, experiences, testimonials, projects };
