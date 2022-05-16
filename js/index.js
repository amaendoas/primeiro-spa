import Router from "./router.js";

const router = new Router()

window.route = () => router.route()
router.handle()

const buttonHome = document.querySelector('#home')
const buttonUniverse = document.querySelector('#universe')
const buttonExplorer = document.querySelector('#explorer')

buttonHome.addEventListener('click', () => {
  bold(buttonHome)
  notBold(buttonExplorer)
  notBold(buttonUniverse)
})

buttonUniverse.addEventListener('click', () => {
  bold(buttonUniverse)
  notBold(buttonHome)
  notBold(buttonExplorer)
})

buttonExplorer.addEventListener('click', () => {
  bold(buttonExplorer)
  notBold(buttonUniverse)
  notBold(buttonHome)
})


function bold(button) {
  button.classList.add('bold')
}

function notBold(button) {
  button.classList.remove('bold')
}

bold(buttonHome)