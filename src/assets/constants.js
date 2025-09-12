// Skills Section Logo's
import htmlLogo from './tech_logo/html.png';
import cssLogo from './tech_logo/css.png';
import javascriptLogo from './tech_logo/javascript.png';
import reactjsLogo from './tech_logo/reactjs.png';
import nextjsLogo from './tech_logo/nextjs.png';
import tailwindcssLogo from './tech_logo/tailwindcss.png';
import bootstrapLogo from './tech_logo/bootstrap.png';
import nodejsLogo from './tech_logo/nodejs.png';
import expressjsLogo from './tech_logo/express.png';
import mysqlLogo from './tech_logo/mysql.png';
import mongodbLogo from './tech_logo/mongodb.png';
import firebaseLogo from './tech_logo/firebase.png';
import cLogo from './tech_logo/c.png';
import cppLogo from './tech_logo/cpp.png';
import javaLogo from './tech_logo/java.png';
import pythonLogo from './tech_logo/python.png';
import gitLogo from './tech_logo/git.png';
import githubLogo from './tech_logo/github.png';
import vscodeLogo from './tech_logo/vscode.png';
import postmanLogo from './tech_logo/postman.png';
import netlifyLogo from './tech_logo/netlify.png';

// ✅ Experience Section Logo's
import prodigy_infotech_logo from './company_logo/prodigy_infotech_logo.png';
import tecpile from './company_logo/tecpile.png';


// ✅ Education Section Logo's
import rrlogo from './education_logo/rrlogo.png';
import GovtPoly from './education_logo/GovtPoly.png';
import BD from './education_logo/BD.png';

// ✅ Project Section Logo's
import Fooddel from './work_logo/Fooddel.png';
import movierecLogo from './work_logo/movie_rec.png';
import cmLogo from './work_logo/cm.png';
import imagesearchLogo from './work_logo/image_search.png';
import removebgLogo from './work_logo/remove_bg.png';


// ======================= SKILLS =======================
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

// ======================= EXPERIENCE =======================
export const experiences = [
  {
    id: 0,
    img: prodigy_infotech_logo,
    role: "Fullstack Developer",
    company: "Prodigy Infotech",
    date: "November 2024 - December 2024",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      "Next Js",
    ],
  },
  {
    id: 1,
    img: tecpile,
    role: "Android Development",
    company: "Techpile Technology Pvt. Ltd.",
    date: "July 2025 - August 2025",
    desc: "Contributed to innovative projects as a Android Developer, leading both frontend and backend development using technologies such as XML, Java, Firebase, APIs, SQLite. Worked closely with the team to deliver responsive, high-performance Android applications and improve user experience through seamless integration of various technologies.",
    skills: [
      "XML",
      "Java",
      "Firebase",
      "SqLite",
      "APIs",
    ],
  },
];

// ======================= EDUCATION =======================
export const education = [
  {
    id: 0,
    img: rrlogo,
    school: "RR Institute Of Modern Technology",
    date: "Sept 2023 - July 2026",
    grade: "7.5 CGPA",
    desc: "I have completed my Bacheleor's degree (B.Tech) in Information Technology from RR Institute Of Modern Technology , Lucknow. During my time at RRIMT, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at RR Institute Of Modern Technology has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Bachelor of Technology. - B.Tech",
  },
  {
    id: 1,
    img: GovtPoly,
    school: "Govt Polytechnic Mohammadpur, Bahraich",
    date: "Sept 2021 - Aug 2022",
    grade: "65.5%",
    desc: "I completed my Diploma in Mechanical Engineering (M.E.) from Govt. Polytechnic Mohammadpur, Bahraich. Throughout my studies, I gained strong knowledge in core mechanical subjects such as Thermodynamics, Fluid Mechanics, Strength of Materials, Manufacturing Processes, and Machine Design. My academic journey also involved practical training and projects that helped me apply theoretical concepts to real-world mechanical problems, strengthening both my technical and problem-solving skills.",
    degree: "Diploma - M.E (Mechanical Engineering)",
  },
  {
    id: 2,
    img: BD,
    school: "B.D Convent Inter College, Lucknow",
    date: "Apr 2019 - March 2020",
    grade: "60%",
    desc: "I completed my class 12 education from B.D Convent Inter College, Lucknow, under the UP board, where I studied Physics, Chemistry, and Mathematics (PCM).",
    degree: "UPBOARD(XII) - PCM",
  },
  {
    id: 3,
    img: BD,
    school: "B.D Convent Inter College, Lucknow",
    date: "Apr 2017 - March 2018",
    grade: "75.5%",
    desc: "I completed my class 10 education from B.D Convent Inter College, Lucknow, under the UP board.",
    degree: "UPBOARD(X)",
  },
];

// ======================= PROJECTS =======================
export const projects = [
  {
    id: 0,
    title: "Food Delivery Website",
    description:
      "A user-friendly React.js+Vite website designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
    image: Fooddel,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    github: "https://github.com/RitikPandey278/Tomato",
    webapp: "http://venerable-zuccutto-8e6cff.netlify.app",
  },
  {
    id: 2,
    title: "Movie Recommendation App",
    description:
      "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    image: movierecLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/codingmastr/Movie-Recommendation-App",
    webapp: "https://movie-recommendation-app-jet.vercel.app/",
  },
  {
    id: 6,
    title: "Coding Master",
    description:
      "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
    image: cmLogo,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
    github: "https://codingmasterweb.in/",
    webapp: "https://codingmasterweb.in/",
  },
  {
    id: 7,
    title: "Image Search App",
    description:
      "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    image: imagesearchLogo,
    tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    github: "https://github.com/codingmastr/Image-Search-App",
    webapp: "https://imagsearch.netlify.app/",
  },
  {
    id: 8,
    title: "Image Background Remover",
    description:
      "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    image: removebgLogo,
    tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    github: "https://github.com/codingmastr/Image-Background-Remover",
    webapp: "https://removeyourbg.netlify.app/",
  },
];
