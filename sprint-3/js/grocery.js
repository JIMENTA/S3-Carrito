// Exercise 10
// Move this letiable to a json file and load the data in this js
let products = [{
        id: 1,
        name: "cooking oil",
        price: 10.5,
        type: "grocery",
    },
    {
        id: 2,
        name: "Pasta",
        price: 6.25,
        type: "grocery",
    },
    {
        id: 3,
        name: "Instant cupcake mixture",
        price: 5,
        type: "grocery",
    },
    {
        id: 4,
        name: "All-in-one",
        price: 260,
        type: "beauty",
    },
    {
        id: 5,
        name: "Zero Make-up Kit",
        price: 20.5,
        type: "beauty",
    },
    {
        id: 6,
        name: "Lip Tints",
        price: 12.75,
        type: "beauty",
    },
    {
        id: 7,
        name: "Lawn Dress",
        price: 15,
        type: "clothes",
    },
    {
        id: 8,
        name: "Lawn-Chiffon Combo",
        price: 19.99,
        type: "clothes",

    },
    {
        id: 9,
        name: "Toddler Frock",
        price: 9.99,
        type: "clothes",
    },
];
let cartList = [];
let cart = [];
let subtotal = {
    grocery: {
        value: 0,
    },
    beauty: {
        value: 0,
    },
    clothes: {
        value: 0,
    },
};
let total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            // 2. Add found product to the cartList array
            return cartList.push(products[i]);
        }
    }
}

// Exercise 2
function cleanCart() {
    cartList.length = 0;
    return cartList;
}

// Exercise 3
function calculateSubtotals() {
    let subtotalGrocery = 0;
    let subtotalBeauty = 0;
    let subtotalClothes = 0;

    // 1. Create a for loop on the "cartList" array
    for (let i = 0; i < cartList.length; i++) {
        // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes
        const currentProduct = cartList[i];
        if (currentProduct.type === "grocery") {
            subtotalGrocery += currentProduct.price;
        }
        if (currentProduct.type === "beauty") {
            subtotalBeauty += currentProduct.price;
        }
        if (currentProduct.type === "clothes") {
            subtotalClothes += currentProduct.price;
        }
    }
    subtotal.grocery.value = subtotalGrocery;
    subtotal.beauty.value = subtotalBeauty;
    subtotal.clothes.value = subtotalClothes;

    // for (const product of cartList){
    //     subtotal[product.type].value += product.price
    // }

    return subtotal;
}

// Exercise 4
function calculateTotal() {
    // Calculate total price of the cart either using the "cartList" array
    for (category in subtotal) {
        total += subtotal[category].value;
    }
    return total;
}

// Exercise 5
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart,
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    let inCart = {};
    for (let index in cartList) {
        const product = cartList[index];
        let productInCart = inCart[product.id];

        if (!productInCart) {
            inCart[product.id] = {
                ...product,
                quantity: 0,
                subtotal: 0,
                subtotalWithDiscount: 0,
            };
        }

        if (productInCart) {
            inCart[product.id] = {
                ...productInCart,
                quantity: productInCart.quantity + 1,
                subtotal: productInCart.subtotal + product.price,
                subtotalWithDiscount: productInCart.subtotalWithDiscount + product.price,
            }
        };
    }
    cart = Object.values(inCart);
    return cart;
}

// //Exercise 6
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    for (let item of cart) {
        if (item.id === 1 && item.quantity >= 3) {
            // cooking oil
            item.subtotalWithDiscount = item.quantity * 10;
        } else if (item.id === 3 && item.quantity >= 10) {
            //instant cupcake mixture
            item.subtotalWithDiscount = (item.quantity * 2) / 3;
        } else {
            item.subtotalWithDiscount = item.quantity * item.price;
        }
    }
    return cart;
}

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    let selectedProduct;

    for (let indexInList in products) {
        if (products[indexInList].id == id) {
            selectedProduct = products[indexInList];
            break
        }
    }

    let isInCart = false;
    let indexInCart;
    for (const productIndexInCart in cart) {
        if (cart[productIndexInCart].id == id) {
            isInCart = true
            indexInCart = productIndexInCart
        }
    }

    if (isInCart) {
        const addedProduct = cart[indexInCart]
        cart[indexInCart] = {
            ...addedProduct,
            quantity: addedProduct.quantity + 1,
            subtotal: addedProduct.subtotal + selectedProduct.price,
            subtotalWithDiscount: addedProduct.subtotalWithDiscount + selectedProduct.price
        }
    } else {
        const productToAdd = {
            ...selectedProduct,
            quantity: 1,
            subtotal: selectedProduct.price,
            subtotalWithDiscount: selectedProduct.price,
        }
        cart.push(productToAdd)
    }

    applyPromotionsCart()

    return cart
}



// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 10
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}