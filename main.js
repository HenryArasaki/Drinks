
const resultados = document.getElementById("resultados")
const input = document.getElementById("input")
const botao = document.getElementById("botao")
const loadingImg = document.getElementById("loadingImg")

async function teste() {
    const bebidaAleatoria = await fetch("https:www.thecocktaildb.com/api/json/v1/1/random.php")


    const data = await bebidaAleatoria.json()

    console.log(loadingImg)
    loadingImg.remove()
    data.drinks.forEach(element => {
        const link = document.createElement("a")

        link.setAttribute("href","receita.html")
        link.setAttribute("data-id",element.idDrink)
        link.addEventListener("click", function (e) {
            localStorage.setItem("receitaID",e.target.parentElement.parentElement.dataset.id)
        })
        const receita = document.createElement("section")
        receita.classList.add("card")
        resultados.append(link)
        link.append(receita)

        const nome = document.createElement("h2")
        nome.innerText = element.strDrink
        nome.classList.add("nome")
        receita.append(nome)

        const imagem = document.createElement("img")
        imagem.src = element.strDrinkThumb
        imagem.classList.add("imagem")
        receita.append(imagem)

    });

}

teste()

botao.addEventListener("click", procurar)

async function procurar(event) {
    event.preventDefault()
    const str = input.value
    const resultadosDaBusca = await fetch(`https:www.thecocktaildb.com/api/json/v1/1/search.php?s=${str}`)
    const data = await resultadosDaBusca.json()

    resultados.innerHTML=''

    data.drinks.forEach(element => {
        const link = document.createElement("a")

        link.setAttribute("href","receita.html")
        link.setAttribute("data-id",element.idDrink)
        link.addEventListener("click", function (e) {
            localStorage.setItem("receitaID",e.target.parentElement.parentElement.dataset.id)
        })
        const receita = document.createElement("section")
        receita.classList.add("card")
        resultados.append(link)
        link.append(receita)

        const nome = document.createElement("h2")
        nome.innerText = element.strDrink
        nome.classList.add("nome")
        receita.append(nome)

        const imagem = document.createElement("img")
        imagem.src = element.strDrinkThumb
        imagem.classList.add("imagem")
        receita.append(imagem)

    });
}
