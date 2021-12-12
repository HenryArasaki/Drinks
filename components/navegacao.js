const navItens = document.getElementsByClassName("nav-item")
import mostrarDrinks from "./mostrarDrinks.js"

for (let i=0; i<5;i++){
    console.log(navItens[i])
    navItens[i].addEventListener('click',pesquisarNav);
}


async function pesquisarNav(){
    let ingrediente = event.target.innerText
    console.log(ingrediente)
    const pesquisa = await fetch(`https:www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}`)
    const data = await pesquisa.json()

    resultados.innerHTML=''
    const resultado = data.drinks
    mostrarDrinks(resultado)
}

export default pesquisarNav