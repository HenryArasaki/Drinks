const resultado = document.getElementById("resultado")
const nome = document.getElementById("nome-drink")
const imagem = document.getElementById("imagem")
const ingredientes = document.getElementById("ingredientes")
const instrucoes = document.getElementById("instrucoes")


async function mostrarDrink() {
    const id = localStorage.getItem('receitaID')
    const dados = await fetch(`https:www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    const data = await dados.json()
    const drink = data.drinks[0]
    nome.innerText = drink.strDrink
    imagem.src = drink.strDrinkThumb

    console.log(drink)
    let numeroIngrediente = 1
    //console.log(drink[`strIngredient${numeroIngrediente}`])
    aindaTemIngredientes = true
    while (aindaTemIngredientes == true) {
        if (drink[`strIngredient${numeroIngrediente}`] == null) {
            aindaTemIngredientes = false
        }
        else {
            const ingrediente = document.createElement("li")
            const ingredienteAtual = drink[`strIngredient${numeroIngrediente}`]
            let quantidade = drink[`strMeasure${numeroIngrediente}`] + ' -'
            if (quantidade == 'null -') {
                quantidade = ""
            }
            ingrediente.innerText = quantidade + ingredienteAtual
            numeroIngrediente++
            ingredientes.append(ingrediente)
        }

    }
    instrucoes.innerText = drink.strInstructions

}

mostrarDrink()
