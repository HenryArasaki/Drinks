const resultados = document.getElementById("resultados")

function mostrarDrinks(data){
    data.forEach(element => {
        const link = document.createElement("a")
        link.classList.add('a')
        link.setAttribute("href","receita.html")
        link.setAttribute("data-id",element.idDrink)
        link.addEventListener("click", function (e) {
            localStorage.setItem("receitaID",e.target.parentElement.parentElement.dataset.id)
        })
        const receita = document.createElement("section")
        receita.classList.add("card")
        resultados.append(link)
        link.append(receita)
    
        const imagem = document.createElement("img")
        imagem.src = element.strDrinkThumb
        imagem.classList.add("imagem")
        receita.append(imagem)
    
        const nome = document.createElement("h2")
        nome.innerText = element.strDrink
        nome.classList.add("nome")
        receita.append(nome)
    });
}

export default mostrarDrinks