const socialIcons = document.querySelector(".socials")

const socials = Array.from(socialIcons.children)

socials.forEach((social) => {
  gsap.fromTo(`.${social.className}`,{
    skewY: 0,
    // delay: 2,
  },{
    skewY: 10,
    duration: .5
  })
})


