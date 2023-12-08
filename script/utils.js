gsap.registerPlugin(ScrollTrigger)
const projects = document.querySelector(".project");

let tl = gsap.timeline()

const changeUnderLine = (classNameOfItem) => {
  console.log()
  gsap.fromTo(classNameOfItem,{
    // x: 300
    // x: -300,
    width: 0,
    opacity: 0,
    height: 0,
    background: "black",
    position: "absolute",
    top: -25,
  },{
    // x: 100,
    height: 1,
    width: 200,
    background: "black",
    opacity: 0.3,
    duration: .4,
    delay: .2,
    // y: 10,
    scrollTrigger: {
    trigger: classNameOfItem
    }
  })

  gsap.to(classNameOfItem,{
    delay: .8,
    height: 50,
    scrollTrigger: "#projects"
  })
}

changeUnderLine(".workHeaderUnderLine")


const openProjectItem = (projectName) => {
  let idName = `#${projectName}`
  gsap.fromTo(idName,{
    // height: "40vh",
    duration: 1,
  },{
    height: "45vh",
    duration: 1,
    // border: "solid red",
    scrollTrigger: {
      trigger: ".description",
      scrub: true,
      // markers: true,
      start: "top 70%",
      end: "bottom 50%",

    },
    // delay:.5,
    // ease: Power2,
  })

  // gsap.fromTo(".title",{
  //   y: 20,
  //   opacity: 0
  // },{
  //   y: -35,
  //   duration: 1,
  //   opacity: 1
  //   // delay: .5
  // })

  gsap.fromTo(".description",{
    opacity: 0,
    y: -30,
    ease: "linear"
  },{
    opacity: 1,
    y: 10,
    // border: "solid red",
    duration: 1,
    ease: "linear"
  })
}

// and here I add an argument so that each project can only react when its called up
