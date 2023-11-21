//  toggel hamburger menu
const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");


menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
})

// toggle lightmode
const body = document.querySelector("body");
const sun_moon = document.querySelector(".box_sun_moon");

sun_moon.addEventListener("click", () => {
  body.classList.toggle("switch");
});

// video update 
const projectsContainer = document.querySelector(".projects-container");
const projectVideo = document.querySelector(".project__video");
const projectName = document.querySelector(".project-name");
const projectLink = document.querySelector(".project-link");


const projects = [
  // normaly from database .... //

{
  name: "die P@rty",
  link: "https://carolaz.app/",
  video: "./videos/dieParty.webm",
},

{
  name: "Caroleni",
  link: "https://carolazapp.github.io/Caroleni_CZ",
  video: "./videos/Caroleni_CZ.webm",
},

{
  name: "ToDo App",
  link: "https://my-to-do-app23.vercel.app/",
  video:"./videos/MyToDoApp23.webm",
},

{
  name: "Fotografie-Meisterklasse",
  link: "https://carolazapp.github.io/Fotografie_Meisterklasse/",
  video:"./videos/Fotografie-Meisterklasse.webm",
},

{
  name: "Escape Landingpage",
  link: "https://carolazapp.github.io/Escape-Landingpage/",
  video:"./videos/Escape-Landingpage.webm",
},

]

let idx = 1

function updateProjects() {
  const { name, link, video} = projects[idx]

  projectVideo.src = video
  projectName.innerHTML = name
  projectLink.href = link

  idx++

  if(idx > projects.length -1) {
    idx= 0
  }

}

setInterval(updateProjects, 20000)

// To check the scroll position on page load

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.15)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});


console.log('A friendly "hello" from Carola here too ... 😃' )