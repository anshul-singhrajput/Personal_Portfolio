// src/assets/projects.js

import LMSImage from './LMS.PNG';
import ForeverImage from './Forever.PNG';
import SpotifyImage from './spotify.png';
import PortfolioImage from './Portfolio.PNG';
import SevaSuvidhaimg from './SevaSuvidha.png';

import html_logo from './html.png';
import css_logo from './css.png';
import js_logo from './js.png';
import react_logo from './react.png';
import angular_logo from './angular.png';
import bootstrap_logo from './bootstrap.png';
import express_logo from './expressjs.png';
import mongodb_logo from './mongodb.png';
import node_logo from './programing.png'; 
import postman_logo from './Postman_logo.png';
import tailwind_logo from './tailwind_css.png';
import vscode_logo from './vs_code.png';
import wp_logo from './wordpress.png';
// import sql_logo from './sql_server.png';
import sql_logo from './sql-server.png';
import git_logo from './git.png';
import github_logo from './github.png';
import Dotnet_logo from './Dotnet.png';
import Vs_logo from './VisualStudio.png';

export const skills = {
  frontend: [
    { name: "HTML5", image: html_logo },
    { name: "CSS", image: css_logo },
    { name: "JavaScript", image: js_logo },
    { name: "React.js", image: react_logo },
    { name: "Angular", image: angular_logo },
    { name: "Bootstrap", image: bootstrap_logo },
    { name: "Tailwind Css", image: tailwind_logo },
  ],
  backend: [
    { name: "Express.js", image: express_logo },
    { name: "Node.js", image: node_logo },
    { name: "Asp.net core", image: Dotnet_logo },
  ],
  Database: [
    { name: "MongoDB", image: mongodb_logo },
    { name: "Sql Server", image: sql_logo },
  ],
  Tools: [
    { name: "Git", image: git_logo },
    { name: "Github", image: github_logo },
    { name: "Postman", image: postman_logo },
    { name: "Vs Code", image: vscode_logo },
    { name: "Wordpress", image: wp_logo },
    { name: "Visual Studio 2022", image: Vs_logo }
  ],
};



export const projects = [
  {
    title: "Leave Management System",
    imageUrl: LMSImage,
    liveLink: "https://example.com/vintage",
    codeLink: "https://github.com/anshul-singhrajput/Leave-Management-System-for-Higher-Education"
  },
  {
    title: "Forever E-Fashion",
    imageUrl: ForeverImage,
    liveLink: "https://e-commerce-frontend-one-theta.vercel.app/",
    codeLink: "https://github.com/anshul-singhrajput/E-Commerce-App"
  },
  {
    title: "Spotify Music Player",
    imageUrl: SpotifyImage,
    liveLink: "https://spotify-clone-fawn-pi.vercel.app/",
    codeLink: "https://github.com/anshul-singhrajput/Spotify-Clone"
  },
  {
    title: "Portfolio",
    imageUrl: PortfolioImage,
    liveLink: "https://portfolioanshul.vercel.app/",
    codeLink: "https://github.com/anshul-singhrajput/Personal_Portfolio"
  },
  {
    title: "Seva Suvidha App",
    imageUrl: SevaSuvidhaimg,
    liveLink: "https://play.google.com/store/search?q=seva%20suvidha&c=apps",
    codeLink: ""
  }
];




