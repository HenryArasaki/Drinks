async function teste(){
    const bebidaAleatoria = await fetch("https:www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    const data = await bebidaAleatoria.json()
    console.log(data)

}

teste()
