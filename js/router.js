const routes = {
  "/": "../pages/home.html",
  "/universe": "../pages/universe.html",
  "/explorer": "../pages/explorer.html",
  "/404": "../pages/404.html"
}

export default class Router {

  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, '', event.target.href) //coloca no histórico do navegador o href

    this.handle()
  }

  handle() {
    const { pathname } = window.location
    const route = routes[pathname] || routes["/404"]

    fetch(route) //busca os dados da rota
    .then((data) => data.text()) //transforma os dados em texto
    .then(html => {
      document.querySelector('#page').innerHTML = html
    }) //retorna o html e coloca dentro da página
    console.log(route)
  }
}