import procurar from "./procurar.js"
import mostrarDrinks from "./mostrarDrinks.js"


const input = document.getElementById("input")
const botao = document.getElementById("botao")
const loadingImg = document.getElementById("loadingImg")

async function bebidasAleatorias() {
    const bebidaAleatoria = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
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
    console.log(loadingImg)
    loadingImg.remove()
    let datas = data.drinks.concat(data2.drinks,data3.drinks,data4.drinks,data5.drinks,data6.drinks,data7.drinks,data8.drinks)
    console.log(datas)

    mostrarDrinks(datas)
    
    botao.addEventListener("click", procurar)
}

export default bebidasAleatorias
