
const resultados = document.getElementById("resultados")
const input = document.getElementById("input")
const botao = document.getElementById("botao")

async function teste() {
    const bebidaAleatoria = await fetch("https:www.thecocktaildb.com/api/json/v1/1/random.php")
    const bebidaAleatoria2 = await fetch("https:www.thecocktaildb.com/api/json/v1/1/random.php")
    const bebidaAleatoria3 = await fetch("https:www.thecocktaildb.com/api/json/v1/1/random.php")
    const bebidaAleatoria4 = await fetch("https:www.thecocktaildb.com/api/json/v1/1/random.php")
    const bebidaAleatoria5 = await fetch("https:www.thecocktaildb.com/api/json/v1/1/random.php")
    const bebidaAleatoria6 = await fetch("https:www.thecocktaildb.com/api/json/v1/1/random.php")
    const bebidaAleatoria7 = await fetch("https:www.thecocktaildb.com/api/json/v1/1/random.php")
    const bebidaAleatoria8 = await fetch("https:www.thecocktaildb.com/api/json/v1/1/random.php")

    const data = await bebidaAleatoria.json()
    const data2 = await bebidaAleatoria2.json()
    const data3 = await bebidaAleatoria3.json()
    const data4 = await bebidaAleatoria4.json()
    const data5 = await bebidaAleatoria5.json()
    const data6 = await bebidaAleatoria6.json()
    const data7 = await bebidaAleatoria7.json()
    const data8 = await bebidaAleatoria8.json()
    let datas = data.drinks.concat(data2.drinks,data3.drinks,data4.drinks,data5.drinks,data6.drinks,data7.drinks,data8.drinks)
    console.log(datas)
    datas.forEach(element => {
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