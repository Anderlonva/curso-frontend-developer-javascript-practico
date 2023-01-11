const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamburguer = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const shoppingCart = document.querySelector('.navbar-shopping-cart')
const cardsContainer = document.querySelector('.cards-container') 
const productDetail = document.querySelector('#product-detail') 
const productDetailClose = document.querySelector('.product-detail-close') 

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamburguer.addEventListener('click', toggleMenuMobile)
shoppingCart.addEventListener('click', toggleCart)
productDetailClose.addEventListener('click', closeDetailProduct)


function toggleDesktopMenu() {

    if (!shoppingCartContainer.classList.contains('inactive')) {
        shoppingCartContainer.classList.add('inactive')
    }

    if (!productDetail.classList.contains('inactive')) {
        productDetail.classList.add('inactive')
    }    

    desktopMenu.classList.toggle('inactive')
}


function toggleMenuMobile() {

    if (!shoppingCartContainer.classList.contains('inactive')) {
        shoppingCartContainer.classList.add('inactive')
    }

    if (!productDetail.classList.contains('inactive')) {
        productDetail.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')
}


function toggleCart() {

    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive')
    }

    if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive')
    }

    if (!productDetail.classList.contains('inactive')) {
        productDetail.classList.add('inactive')
    }

    shoppingCartContainer.classList.toggle('inactive')
}


function showDetailProduct(){

    if (!shoppingCartContainer.classList.contains('inactive')) {
        shoppingCartContainer.classList.add('inactive')
    }

    if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive')
    }

    productDetail.classList.remove('inactive')
}


function closeDetailProduct(){
    productDetail.classList.add('inactive')
}




const productListHobbies = []

productListHobbies.push({
    name: 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productListHobbies.push({
    name: 'Patineta',
    price: 300,
    img: 'https://images.pexels.com/photos/3671151/pexels-photo-3671151.jpeg?auto=compress&cs=tinysrgb&w=1600'
})

productListHobbies.push({
    name: 'Motocicleta',
    price: 800,
    img: 'https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg?auto=compress&cs=tinysrgb&w=1600'
})

const productListTecnologia = []

productListTecnologia.push({
    name: 'Pantalla',
    price: 400,
    img: 'https://images.pexels.com/photos/5082570/pexels-photo-5082570.jpeg?auto=compress&cs=tinysrgb&w=1600'
})

productListTecnologia.push({
    name: 'Tarjeta Madre',
    price: 800,
    img: 'https://images.pexels.com/photos/3520694/pexels-photo-3520694.jpeg?auto=compress&cs=tinysrgb&w=1600'
})

productListTecnologia.push({
    name: 'Grafica',
    price: 1200,
    img: 'https://images.pexels.com/photos/8622911/pexels-photo-8622911.jpeg?auto=compress&cs=tinysrgb&w=1600'
})




function renderProducts(arreglo) {
    for (const product of arreglo) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img')
        productImg.src = product.img

        productImg.addEventListener('click', showDetailProduct)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div')
    
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price
        const productName = document.createElement('p')
        productName.innerText = product.name
    
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
    
        const productInfoFigure = document.createElement('figure')
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart)
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
    
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    
    }

    /* <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="">
        <div class="product-info">
             <div>
                <p>$120,00</p>
                <p>Bike</p>
            </div>
             <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
        </div>
    </div> */

}

renderProducts(productListHobbies)
//renderProducts(productListTecnologia)

