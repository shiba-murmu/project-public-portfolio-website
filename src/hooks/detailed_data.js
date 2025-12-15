import { resume } from "react-dom/server";

export const portfolioInfo = {
  firstname: "Bhawna",
  lastname: "Choudhary",
  title: "Web Developer",
  birthday: "1998-05-15",
  email: "bhawnachoudhary897@gmail.com",
  resume: "../assets/documents/resume.pdf",
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/bhawna-choudhary-92065a258",
  github: "https://github.com/Bhawna200300",
};

export const projects = [
  {
    id: 1,
    title: "Career Lift System",
    tech: "React, Django, Tailwind CSS",
    description:
      "Career Lift is my full-stack career guidance web app built with React and Django.",
    code: "https://github.com/shiba-murmu/career-lift-system-project",
    link: "https://career-lift-system.vercel.app/",
    image:
      "https://projectsly.com/images/blog/best-project-design.png?v=1686553999071005322",
  },
  {
    id: 2,
    title: "Buy Me",
    tech: "Html, CSS, JavaScript , Php , Bootstrap",
    description:
      "An online store built with HTML, CSS, JavaScript, PHP, and Bootstrap.",
    code: "https://github.com/shiba-murmu/buyme-project",
    link: "#",
    image:
      "https://projectsly.com/images/blog/best-project-design.png?v=1686553999071005322",
  },
];
//   {
//     id: 1,
//     title: "Career Lift System",
//     tech: "React, Django, Tailwind CSS",
//     description:
//       "Career Lift is my full-stack career guidance web app built with React and Django.",
//     code: "https://github.com/shiba-murmu/career-lift-system-project",
//     link: "https://career-lift-system.vercel.app/",
//     image : ""
//   },

//   {
//     id: 2,
//     title: "Buy Me",
//     tech: "Html, CSS, JavaScript , Php , Bootstrap",
//     description:
//       "An online store built with HTML, CSS, JavaScript, PHP, and Bootstrap.",
//     code: "https://github.com/shiba-murmu/buyme-project",
//     link: "#",
//     image: ""
//   },

export const aboutData = {
  working_tech: {
    tech1: "React",
    tech2: "Tailwind CSS",
    tech3: "Git",
    tech4: "Firebase",
  },
  description1: ` — a frontend engineer who loves building clean, fast and intuitive web experiences. I started coding
                                  during my B.Tech in Computer Science, and over time I found myself drawn toward creating polished user
                                  interfaces and solving real user-experience problems.`,
  description2: `and
                                I’m always exploring tools that help create smoother and more human-friendly digital products. My focus is
                                simple: build interfaces that are lightweight, responsive, and visually consistent — without unnecessary
                                complexity.`,
  description3: `  Outside coding, I love drawing, exploring design trends, listening to music, and experimenting with new
                                ideas. I'm a fast learner, detail-oriented, and genuinely enjoy crafting things from scratch. Whether it's tackling a challenging project, collaborating with a team, or finding innovative solutions to complex problems, I'm ready to take it on. Let's work together to create something amazing!`,
  quick_fact: {
    fact1: "B.Tech in Computer Science",
    fact2: "2+ years of experience",
    fact3: "Passionate about UI/UX design",
    fact4: "Based in India",
    fact5: "Open to freelance & full-time work",
  },
};

export const educationDetails = [
  // Only upto three card or may increase the number.
  {
    id: 1,
    course: "Bachelor Of Technology",
    branch: "Computer Science And Engineering - JUT",
    college: "Maryland Institute Of Technology And Management",
    CGPA: 7.03, // that should be string or number
    percentage: "66.79%",
    duration: "2021 - 2025",
    address: "Jharkhand, Jamshedpur",
  },
  {
    id: 2,
    course: "Intermediate",
    branch: "Science (PCM) - JAC Board",
    college: "Jamshedpur Womens College",
    CGPA: "NILL", // that should be string or number
    duration: "2021",
    percentage: "64.6%",
    address: "Jamshedpur , Jharkhand",
  },
  {
    id: 3,
    course: "Matriculation",
    branch: "Secondary Education - JAC Board",
    college: "Pallimangal High School",
    CGPA: "NILL", // That should be string or number
    percentage: "65.6%",
    duration: "2018",
    address: "Shantipur , Jharkhand",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Web Development",
    institute: "Generix Info Tech",
    description: "web development course done in php mysql html css javascript",
    tech_stack: ["Html, CSS ,javascript, Bootstrap, Php, Mysql"],
    timeperiod: "May 2024 to July 2024",
  },
  {
    id: 2,
    title: "Web Development",
    institute: "Naresh Technologies",
    description: "Full stack web development course done",
    tech_stack: ["Html, CSS, Java, Javascript"],
    timeperiod: "Dec 2024 to May 2025",
  },
  //    If any more experience add here
  // then simply add the same content below
];
