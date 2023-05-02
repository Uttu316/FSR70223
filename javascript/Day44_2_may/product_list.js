// filter for both type of products
const accessories = productList.filter((i)=>i.isAccessory)
const clothings = productList.filter((i)=>!i.isAccessory)


// create list
function createList(products,containerId){
// here loop given products and create card for each product
// put every product in given id container
const container = document.getElementById(containerId)
products.forEach((product)=>{
// create card for each product
const card = createCard(product)

// put this card in container
})

}

function createCard(productInfo){
// create a card according to design and return the card container element
}

createList(accessories,'accesories-container')
createList(clothings,'clothing-container')