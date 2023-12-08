const navAbout = document.getElementById("navAbout")
const navWork = document.getElementById("navWork")
const body = document.getElementById("body");
const hero = document.querySelector(".hero");
const about = document.getElementById("about");
const scrollPrompt = document.querySelector(".scrolling");
// projects is the whole section that contains the projects
const allProjects = document.getElementById("projects")
// project is the Individual project inside the projects section
const project = Array.from(document.getElementsByClassName("project"))


const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1,1.001 - Math.pow(2, -10 * t))
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


const aboutObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.id = "inbound";
      navAbout.style.background = "rgba(51,163,175,0.4)"
      // navAbout.children[0].style.color = "#33a3af"
      navWork.style.background = "none"
      // navWork.children[0].style.color = "#eee"

      // when I go back and forth the background is misbehaving. but now when I scroll to work dustpart
      // goes up
    } else {
      navAbout.style.background = "none"
      // navAbout.children[0].style.color = "#eee"

    }
  });
}, {
  threshold: .8,
});

aboutObserver.observe(about);


// THE PROJECT SECTION OBSERVER

const projectsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      navAbout.style.background = "none"
      // navAbout.children[0].style.color = "#eee"
      navWork.style.background = "rgba(51,163,175,0.4)"
      // navWork.children[0].style.color = "#333"
    }
  })
},{
    threshold: .3
})

projectsObserver.observe(allProjects)

// INDIVIDUAL PROJECTS OBSERVER
//
const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      // add a className to it to animate with gsap
      entry.target.classList.add("projectActive")
      openProjectItem(entry.target.id)
      // console.log(entry.target.id)
      // lets also get the title and send it to openProjectItem
      projectObserver.unobserve(entry.target)
    }
  })
}, {
    threshold: 1,
})

project.forEach((projectItem) => {
  projectObserver.observe(projectItem)
})
