let navbar = document.querySelector('.nav-coffee-bar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    cart.classList.remove('active');
    searchFrom.classList.remove('active');
}
let searchFrom = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchFrom.classList.toggle('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');

}
let cart = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cart.classList.toggle('active');
    navbar.classList.remove('active');
    searchFrom.classList.remove('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
    cart.classList.remove('active');
    searchFrom.classList.remove('active');
}

async function loadProducts() {
    try {
        const response = await fetch('/api/products');
        const products = await response.json();

        const container = document.querySelector('.menu-coffee .box-container');
        container.innerHTML = ''; // Limpia el contenedor

        products.forEach(product => {
            const box = document.createElement('div');
            box.className = 'box';
            box.innerHTML = `
                <img src="${product.image_path}" alt="${product.name}">
                <h3>${product.name}</h3>
                <div class="price">$${product.price} <span>$${product.discount_price}</span></div>
                <a href="#" class="btn">Añadir al Carro</a>
            `;
            container.appendChild(box);
        });
    } catch (error) {
        console.error('Error al cargar productos:', error);
    }
}

// Llama a la función al cargar la página
document.addEventListener('DOMContentLoaded', loadProducts);
