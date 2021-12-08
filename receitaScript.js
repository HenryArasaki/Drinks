const resultado = document.getElementById("resultado")
const nome = document.getElementById("nome-drink")
const imagem = document.getElementById("imagem")
const ingredientes = document.getElementById("ingredientes")



async function mostrarDrink(){
    const id = localStorage.getItem('receitaID')
    const dados = await fetch (`https:www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    const data = await dados.json()
    const drink = data.drinks[0]
    nome.innerText = drink.strDrink
    imagem.src = drink.strDrinkThumb

    console.log(drink)

    while(aindaTemIngredientes==true){
        if(drink.strIngredient1!=null){
            
        }
        const ingrediente = document.createElement("li")

    }

}

mostrarDrink()
