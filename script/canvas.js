setTimeout(() => {

const canvas = document.getElementById("canvas1")
const canvas2 = document.getElementById("canvas2")
const ctx = canvas.getContext("2d")
const canvasWidth = canvas.width = window.innerWidth
const canvasHeight = canvas.height = 400
ctx.fillStyle = "silver"
ctx.strokeStyle = "white"
const gradient = ctx.createLinearGradient(0,0,canvas.width,canvas.height)
gradient.addColorStop(0,"magenta")
gradient.addColorStop(.5,"white")
gradient.addColorStop(1,"#33a3af")
ctx.fillStyle = gradient
ctx.strokeStyle = gradient
let amount = 0

class Particle {
  constructor(effect) {
    this.effect = effect
    this.radius = 3
    this.x = this.radius + Math.random() * (this.effect.width - this.radius * 2)
    this.y = this.radius + Math.random() * (this.effect.height - this.radius * 2)
    this.vx = Math.random() * 1.5 - .5
    this.vy = Math.random() * 1.5 - .5
  }

  draw(context) {
    context.beginPath()
    context.arc(this.x,this.y,this.radius,0,Math.PI * 2)
    context.fill()
  }

  update() {
    this.x+= this.vx
    if(this.x + this.radius > this.effect.width || this.x - this.radius < 0) this.vx *= -1
    this.y+= this.vy
    if(this.y + this.radius > this.effect.height || this.y - this.radius < 0) this.vy *= -1
  }
}

class Effect {
  constructor(canvas) {
    this.canvas = canvas
    this.width = this.canvas.width
    this.height = this.canvas.height
    this.particles = []
    this.numberOfparticles = 80
    this.createParticles()
  }

  createParticles() {
    for(let i = 0;i < this.numberOfparticles;i++) {
      this.particles.push(new Particle(this))
    }
  }

  handleParticles(context) {
    this.connectParticles(context)
    this.particles.forEach((particle) => {
      particle.draw(context)
      particle.update()
    })
  }

  connectParticles(context) {
    const maxDistance = 100
    for(let a = 0;a < this.particles.length;a++){
      for(let b = a;b < this.particles.length;b++){
        const dx = this.particles[a].x - this.particles[b].x
        const dy = this.particles[a].y - this.particles[b].y
        const distance = Math.hypot(dx, dy)
        if(distance < maxDistance){
          const opacity = 1 - (distance/maxDistance)
          context.globalAlpha = opacity
          context.beginPath()
          context.moveTo(this.particles[a].x,this.particles[a].y)
          context.lineTo(this.particles[b].x,this.particles[b].y)
          context.stroke()
        }
      }
    }
  }
}

const effect = new Effect(canvas)

const animate = () => {
  ctx.clearRect(0,0,canvasWidth,canvasHeight)
  effect.handleParticles(ctx)
  ctx.globalAlpha = amount
  if(amount < 1){
     amount+= .2
  }
  requestAnimationFrame(animate)
}

animate()


},490)
