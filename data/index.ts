export const navItems = [
  { name: "Home", link: "#" },
  { name: "Experience", link: "#experience" },
  { name: "Skillset", link: "#skill" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 3,
    title: "My Skill Set",
    className: "lg:col-span-6 md:col-span-6 md:row-span-12",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Bootcamp Candidate Interview API",
    des: "The bootcamp candidate interview application is a collaborative project designed to assist both HR professionals and interviewers in the candidate recruitment process. With the help of Gin Gonic, our application can be executed using both Postman and a Frontend interface.",
    img: "/bootcamp_interview_api.jpg",
    iconLists: ["/go-svgrepo-com.png", "/postgresql-svgrepo-com.png"],
    link: "https://github.com/nesngenes/Bootcamp-Candidate-Interview-Application",
  },
  {
    id: 2,
    title: "Enigma Laundry Console App",
    des: "Enigma Laundry Console App is a Go-based application designed to simplify laundry business operations. It utilizes PostgreSQL as its backend database for efficient data storage.",
    img: "/agnes-laundry.png",
    iconLists: ["/go-svgrepo-com.png", "/postgresql-svgrepo-com.png"],
    link: "https://github.com/nesngenes/enigmalaundry-console-app",
  },
  {
    id: 4,
    title: "Aone",
    des: "Aone is an e-commerce website or online shop that sells volleyball sports equipment. Aone is built using the MERN Stack and utilizes the Stripe API to enable users to make payments.",
    img: "/aone.png",
    iconLists: ["/re.svg", "/node-js-svgrepo-com.png", "/mongo-svgrepo-com.png", "/icons8-express-js-80.png"],
    link: "https://github.com/nesngenes/aone",
  },
  {
    id: 3,
    title: "LaBuena Cafe",
    des: "LaBuena is a cafe website that I created using MongoDB, Express.js, React, Node.js (MERN Stack). Within this website, there are also APIs such as MapBox to view the cafe branch locations on a map and the Google OAuth API for users to log in with their Google accounts.",
    img: "/labuena-ver-2.png",
    iconLists: ["/re.svg", "/node-js-svgrepo-com.png", "/mongo-svgrepo-com.png", "/icons8-express-js-80.png"],
    link: "https://github.com/nesngenes/labuenacafeMERN",
  },
];

export const certificates = [
  {
    id: 1,
    title: "Batch #7 Enigma 2.0 at Enigma Camp IT Bootcamp",
    img: "/enigma-certif.png",
    href: "https://drive.google.com/file/d/1y66iYwefafwGv_Rc2L89K1JSXs2yWFeO/view?usp=sharing",
  },
  {
    id: 2,
    title: "Udemy The Web Developer Bootcamp 2021",
    img: "/udemy-certif.jpg",
    href: "https://udemy-certificate.s3.amazonaws.com/image/UC-20eb5f53-a87f-4bd6-a0ea-a614fb5619da.jpg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Application Developer at PT. BANK NEGARA INDONESIA (PERSERO) TBK",
    desc: "Participated in the development of Card Systems, ATM and EDC transactional.",
    className: "md:col-span-2",
    thumbnail: "/credit-card.png",
  },
  {
    id: 2,
    title: "Lead Backend Developer at Bootcamp Candidate Interview API Project",
    desc: "Added advanced features, including email sending using Go Mail and seamless file uploads to Cloudinary.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/lead.png",
  },
  {
    id: 3,
    title: "Back End Developer in Website Sidang Project",
    desc: "Added Create, Read, Update, and Delete (CRUD) functionality using PHP Native, Used MySQL to store data, and Added Authentication & Authorization.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/database.png",
  }
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
