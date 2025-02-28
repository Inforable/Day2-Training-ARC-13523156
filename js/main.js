const apiUrl = 'https://dummyjson.com/products';

// Event listener untuk mengeksekusi fetchProducts() ketika DOM sudah selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();
});

// Mengambil data produk dari API
async function fetchProducts() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json(); // Konversi dulu ke JSON 
        displayProducts(data.products.slice(0, 10)); // Batesin untuk 10 ae
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Menampilkan product ke web
function displayProducts(products) {
    const productContainer = document.getElementById('product-container');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // Nampilin data sama sesuain dengan style
        productCard.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}" />
            <h2>${product.title}</h2>
            <div class="separator"></div>
            <p class="description">${product.description}</p>
            <div class="info-row">
                <span class="label">Category</span>
                <span class="value">${product.category}</span>
            </div>
            <div class="info-row">
                <span class="label">Price</span>
                <span class="value price">$${product.price}</span>
            </div>
            <div class="info-row">
                <span class="label">Discount</span>
                <span class="value">${product.discountPercentage}%</span>
            </div>
            <div class="info-row">
                <span class="label">Rating</span>
                <span class="value rating">${product.rating}</span>
            </div>
            <div class="info-row">
                <span class="label">Stock</span>
                <span class="value">${product.stock}</span>
            </div>
            <div class="info-row">
                <span class="label">Brand</span>
                <span class="value">${product.brand}</span>
            </div>
        `;

        productContainer.appendChild(productCard);
    });
}