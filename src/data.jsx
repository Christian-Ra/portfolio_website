import norsman from "./assets/norsman3.png";
import logo from "./assets/mobile-dev.png";
import synesthesia from "./assets/synesthesia.png";

const projects = [
  {
    id: 1,
    title: "Norsman Architecture Website",
    icon: logo,
    desc: "A modern, responsive website for Norsman Architecture showcasing their portfolio and services.",
    img: norsman,
    linkTag: "Live Site",
    link: "https://norsmanarchitecture.com",
    repo: "https://github.com/Christian-Ra/norsman-site",
  },
  {
    id: 2,
    title: "Synesthesia",
    icon: logo,
    desc: "A web app that provides panera meal recommendations based on user spotify data to create a unique and enhanced dining experience.",
    img: synesthesia,
    linkTag: "Devpost Page",
    link: "https://devpost.com/software/synesthesia-3notaf#updates",
    repo: "https://github.com/AlirpJ/ChewyTunes",
  },
  {
    id: 3,
    title: "Blog API",
    icon: logo,
    desc: "A RESTful API for a blogging platform, allowing users to create, read, update, and delete blog posts and comments.",
    img: norsman,
    linkTag: "Live Site",
    link: "https://blog-api-chrisra.vercel.app",
    repo: "https://github.com/Christian-Ra/blog-api",
  },
];

export default projects;
