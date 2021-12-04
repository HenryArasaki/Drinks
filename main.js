
const resultados = document.getElementById("resultados")
const input = document.getElementById("input")
const botao = document.getElementById("botao")

async function teste() {
    const bebidaAleatoria = await fetch("https:www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    const data = await bebidaAleatoria.json()
    data.drinks.forEach(element => {
        const receita = document.createElement("section")
        receita.classList.add("card")
        resultados.append(receita)

        const nome = document.createElement("h2")
        nome.innerText = element.strDrink
        nome.classList.add("nome")
        receita.append(nome)

        const imagem = document.createElement("img")
        imagem.src = element.strDrinkThumb
        imagem.classList.add("imagem")
        receita.append(imagem)

    });

    //console.log(data.drinks[0])
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
        const receita = document.createElement("section")
        receita.classList.add("card")
        resultados.append(receita)

        const nome = document.createElement("h2")
        nome.innerText = element.strDrink
        nome.classList.add("nome")
        receita.append(nome)

        const imagem = document.createElement("img")
        imagem.src = element.strDrinkThumb
        imagem.classList.add("imagem")
        receita.append(imagem)
    })
}