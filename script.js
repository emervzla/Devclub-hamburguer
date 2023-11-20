const list = document.querySelector("ul")
let button = document.querySelector("button")

function formatCurrency(value){
    const newValue = value.toLocaleString("pt-BR", {
        style: "currency", 
        currency: "BRL"})

        return newValue
    }

function showAll (productsArray){

    let myLi = ""

    productsArray.forEach(product => {
        myLi = myLi +
        // myLi +=
        `
            <li>
                <img src=${product.src}>
                <p> ${product.name}</p>
                <p class="item-price">${formatCurrency(product.price)}</p>
            </li>
        `
    })
    
    list.innerHTML = myLi
}

function descontAll(){
    const newValueHamburguer = menuOptions.map (hamburguer => {
        return {

        ...hamburguer,
        price: hamburguer.price * 0.9, // dar 10% de desconto


        // name: hamburguer.name,
        // price: hamburguer.price = hamburguer.price - (hamburguer.price / 10),
        // vegan: hamburguer.vegan,
        // src: hamburguer.src,
        }
    })

    showAll(newValueHamburguer)

   }

function valueAll(){

    const totalValue = menuOptions.reduce ((acc, hamburguer) => acc + hamburguer.price, 0)

    list.innerHTML =

     `
        <li>
            <p>O valor total dos item é: ${formatCurrency(totalValue)}</p>
        </li>
    `    

    }

function filterAll (){
    
    const veganHamburger = menuOptions.filter(hamburguer => hamburguer.vegan)
//         {
//     if (hamburguer.vegan === true) return true
//     else return false
// })

showAll(veganHamburger)

}