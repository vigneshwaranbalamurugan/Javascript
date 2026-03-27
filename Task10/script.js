function loadCart(filterName="") {
    try {
        document.getElementById("cart").style.display = "block";
        const container = document.getElementById("cart-container");
        container.innerHTML = ""; 

        let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        
        if (cartItems.length === 0) {
            container.innerHTML = "<p>Your cart is empty</p>";
            return;
        }
        if (filterName) {
            cartItems = cartItems.filter(item => item.name.toLowerCase().includes(filterName.toLowerCase()));
        }
        cartItems.forEach((product, index) => {
            if (!product.qty) {
                product.qty = 1; 
            }
            let basePrice = parseInt(product.price);
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p class="price" id="price-${index}">Rs ${basePrice * product.qty}</p>
                <div class="qty-container">
                    <button class="btn" onclick="decreaseQty(${index}, ${basePrice})">-</button>
                    <p class="qty" id="qty-${index}">${product.qty}</p>
                    <button class="btn" onclick="increaseQty(${index}, ${basePrice})">+</button>
                    <button class="btn" onclick="buy(${index})">Buy</button>
                </div>
            `;

            container.appendChild(productCard);
        });
    } catch (error) {
        console.error("Error loading cart:", error);
    }
}

function decreaseQty(index, basePrice) {
    try {
        let cart = JSON.parse(localStorage.getItem('cart'));
        if (cart[index].qty > 1) {
            cart[index].qty--;
            cart[index].qtyprice = basePrice * cart[index].qty;
            localStorage.setItem('cart', JSON.stringify(cart));
            document.getElementById(`qty-${index}`).innerText = cart[index].qty;
            document.getElementById(`price-${index}`).innerText = 'Rs ' + cart[index].qtyprice;
        }
    } catch (error) {
        console.error("Error decreasing quantity:", error);
    }
}

function increaseQty(index, basePrice) {
    try {
        let cart = JSON.parse(localStorage.getItem('cart'));
        cart[index].qty++;
        cart[index].qtyprice = basePrice * cart[index].qty;
        localStorage.setItem('cart', JSON.stringify(cart));
        document.getElementById(`qty-${index}`).innerText = cart[index].qty;
        document.getElementById(`price-${index}`).innerText = 'Rs ' + cart[index].qtyprice;
    } catch (error) {
        console.error("Error increasing quantity:", error);
    }
}

function buy(index) { 
    try {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let item = cart[index];

        document.getElementById("itemName").innerHTML = item.name;
        document.getElementById("itemQty").innerHTML = "Quantity ordered: " + item.qty;
        document.getElementById("itemPrice").innerHTML = "Price: " + item.price;
        document.getElementById("TotalPrice").innerHTML = "Total Price: " + item.qtyprice;
        document.getElementById("Model").style.display = "block";

        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
        console.error("Error processing order:", error);
    }
}

function dispatch() {  
    try {
        document.getElementById("itemName").innerHTML = "Thank You!!";
        document.getElementById("itemQty").innerHTML = "We will notify you once your order is shipped";
        document.getElementById("itemPrice").style.display = "none";
        document.getElementById("TotalPrice").style.display = "none";
        document.getElementById("dispatch").style.display = "none";

        setTimeout(() => {
            document.getElementById("Model").style.display = "none";
            window.location.reload();
        }, 3000);
    } catch (error) {
        console.error("Error dispatching order:", error);
    }
}


document.addEventListener("DOMContentLoaded", () => {
    try {
        document.querySelectorAll(".page").forEach(page => {
            page.style.display = "none";
        });

        const currentHash = window.location.hash;

        if (currentHash === "#cart") {
            document.getElementById("cart").style.display = "block";
            loadCart(); 
        } else {
            document.getElementById("home").style.display = "block";
            loadProducts();
        }
    } catch (error) {
        console.error("Error initializing page:", error);
    }
});

window.onhashchange = () => {
    try {
        document.querySelectorAll(".page").forEach(page => {
            page.style.display = "none";
        });

        if (window.location.hash === "#home") {
            document.getElementById("home").style.display = "block";
            loadProducts();
        }
        if (window.location.hash === "#cart") {
            document.getElementById("cart").style.display = "block";
            loadCart();
        }
    } catch (error) {
        console.error("Error handling hash change:", error);
    }
};

const products = [
    {
        name: "Wireless Headphones",
        price: 1200,
        id:0,
        description: "High-quality sound with noise cancellation.",
        image: "https://cdns3.thecosmicbyte.com/wp-content/uploads/White-BG.jpg.webp"
    },
    {
        name: "Smartwatch",
        price: 2800,
        id:1,
        description: "Track your fitness and receive notifications.",
        image: "https://rukminim2.flixcart.com/image/480/640/xif0q/smartwatch/l/b/t/-original-imagxp8tn3vjjdbz.jpeg?q=90"
    },
    {
        name: "Laptop",
        price: 80000,
        id:2,
        description: "Ergonomic laptops.",
        image: "https://cdn.mos.cms.futurecdn.net/pyL3b8cis5dcmUvgbe9ygV-2000-80.jpg"
    }
];

function loadProducts(filterName ="") {
    try {

        document.getElementById("home").style.display = "block";
        const container = document.getElementById("product-container");
        let filters=products;
        container.innerHTML = ""; 
        if (filterName) {
            filters = products.filter(item => item.name.toLowerCase().includes(filterName.toLowerCase()));
        }
        filters.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p class="price"> Rs ${product.price}</p>
                <button onclick="addToCart('${product.image}', '${product.name}', '${product.price}',${product.id} )">Add</button>
            `;

            container.appendChild(productCard);
        });
    } catch (error) {
        console.error("Error loading products:", error);
    }
}

function addToCart(image, name, price,id) {   
    try {
        let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        let existingItem = cartItems.find(item => item.id === id);
         if(existingItem)
         {
            window.alert("Item already in Cart");
            return;
         }
        cartItems.push({
            name: name,
            price: price,
            id:id,
            qtyprice: price,
            image: image,
            qty: 1
        });

        localStorage.setItem("cart", JSON.stringify(cartItems));
    } catch (error) {
        console.error("Error adding to cart:", error);
    }
}