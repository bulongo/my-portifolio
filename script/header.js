const header = document.querySelector("header")

window.addEventListener("load",() => {
  setTimeout(() => {
    header.classList.remove("header-off")
    header.classList.add("header")
  },700)
})

// const bulongo = document.getElementById("bulongo")
// const burger = document.querySelector(".burger")
// const burgerMenu = document.querySelector(".burger__menu")
//
// burger.addEventListener("click",(e) => {
//   burger.classList.toggle("active")
//   burgerMenu.classList.toggle("active")
//
// })

// bulongo.addEventListener("mouseenter",() => {
//   bulongo.style.width = "230px"
//   bulongo.style.height = "38px"
//   bulongo.style.fontSize = "1.5rem"
//   setTimeout(() => {
//     bulongo.innerHTML = "Bulongo Mukkuli"
//   },200)
// })
//
// bulongo.addEventListener("mouseleave",() => {
//   bulongo.style.width = "61px"
//   bulongo.style.fontSize = "1.5rem"
//   bulongo.innerHTML = "BM"
// })
//
// console.log(bulongo.clientHeight)

// liked this little feature
