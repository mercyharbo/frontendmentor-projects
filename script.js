// Shopping Cart 
const product = []
const addCart = document.querySelector('.add_cart_btn')
const cart = document.querySelector('.cart_btn')
const list = document.querySelector('.list')


// Event 
addCart.addEventListener('click', addToCart)
cart.addEventListener('click', showCartToggle)

// Show Cart List 
function showCartToggle() {
    const navs = document.querySelectorAll('.list')
    navs.forEach(nav => nav.classList.toggle('showCart'));

    const cartMessage = document.createElement('p')
    cartMessage.classList.add('cartMessage')

    // Empty cart message 
    cartMessage.innerText = 'Your cart is empty'

    if (list.style.display === 'none') {
      cartMessage.style.display = 'block' 
    } else {
      cartMessage.style.display = 'none'
    }
}

// Add To Cart 
function addToCart() {
    // Create a new 
    const orderWrapper = document.createElement('div')
    orderWrapper.classList.add('order')
    list.appendChild(orderWrapper)

    //Create thumbnail image 
    const thumbnail = document.querySelector('img')
    thumbnail.setAttribute('src', './images/image-product-1-thumbnail.jpg')
    thumbnail.classList.add('active')
    orderWrapper.appendChild(thumbnail)

    // Create new details div 
    const detailsDiv = document.createElement('div')
    detailsDiv.classList.add('details')
    orderWrapper.appendChild(detailsDiv)

    // Span append inside the details div 
    const span1 = document.createElement('span')
    span1.classList.add('product_name')
    detailsDiv.appendChild(span1)

    span1.innerHTML = 'Fall Limited Edition Sneakers'

    const span2 = document.createElement('span')
    span2.classList.add('product_price')
    detailsDiv.appendChild(span2)

    span2.innerText = `$125`

    // Delete button
    const deleteBtn = document.createElement('img')
    deleteBtn.classList.add('delete_btn')
    deleteBtn.setAttribute('src', './images/icon-delete.svg')
    orderWrapper.appendChild(deleteBtn)

    //Checkout btn 
    const checkout = document.createElement('button')
    checkout.classList.add('checkout')
    checkout.innerText = 'Checkout'
    list.appendChild(checkout)

  console.log(list)
}

let slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".product");
    let dots = document.querySelectorAll(".demo");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}

