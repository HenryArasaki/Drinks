import mostrarDrinks from "./mostrarDrinks.js"


async function procurar(event) {
    event.preventDefault()
    const str = input.value
    const resultadosDaBusca = await fetch(`https:www.thecocktaildb.com/api/json/v1/1/search.php?s=${str}`)
    const data = await resultadosDaBusca.json()

    resultados.innerHTML=''
    const resultadoss = data.drinks
    mostrarDrinks(resultadoss)
}

export default procurar