import Router from "./router.js";

const router = new Router()

window.route = () => router.route()
router.handle()

const buttonHome = document.querySelector('#home')
const buttonUniverse = document.querySelector('#universe')
const buttonExplorer = document.querySelector('#explorer')

function bold(button) {
  button.classList.add('bold')
}

function notBold(button) {
  button.classList.remove('bold')
}

function page() {
  if(window.location.pathname === '/') {
    bold(buttonHome)
    notBold(buttonExplorer)
    notBold(buttonUniverse)
    return
  }
  if (window.location.pathname === '/universe') {
    bold(buttonUniverse)
    notBold(buttonHome)
    notBold(buttonExplorer)
    return
  }
  if (window.location.pathname === '/explorer') {
    bold(buttonExplorer)
    notBold(buttonUniverse)
    notBold(buttonHome)
    return
  } else {
    notBold(buttonUniverse)
    notBold(buttonExplorer)
    notBold(buttonHome)
  }
}

page()

buttonHome.addEventListener('click', () => {
  page()
})

buttonUniverse.addEventListener('click', () => {
  page()
})

buttonExplorer.addEventListener('click', () => {
  page()
})
