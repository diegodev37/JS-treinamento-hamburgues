const list = document.querySelector("ul")
const buttonShowAll = document.querySelector(".show-all")
const buttonMapAll = document.querySelector(".map-all")
const buttonSumAll = document.querySelector(".sum-all")
const buttonFilterVegan = document.querySelector(".filter-vegan")

function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
    })

    return newValue

}

function showAll(productsArray) {
    let myLi = ``

    productsArray.forEach((product) => {


        myLi += `
                <li>
                        <img src=${product.src}>
                        <p>${product.name}</p>
                        <p class="item-price">R$ ${formatCurrency(product.price)}</p>
                </li>
        `

    })
    list.innerHTML = myLi
}

function mapAllItens() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,

    }))

    showAll(newPrices)

}
function sumAllItens() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = ` <li>
    
                        <p>O valor total dos itens é R$ ${formatCurrency(totalValue)}</p>

                        </li>
                    `

}

function filterVegan() {
    const selectVegan = menuOptions.filter((product) => product.vegan)

    showAll(selectVegan)


}

buttonShowAll.addEventListener("click", () => showAll(menuOptions))
buttonMapAll.addEventListener("click", mapAllItens)
buttonSumAll.addEventListener("click", sumAllItens)
buttonFilterVegan.addEventListener("click", filterVegan)













