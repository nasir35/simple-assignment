const products = [
  {
    id: 1,
    name: "Gyro Sandwich",
    image: "assets/images/food-1.png",
    price: "$15.00",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Enchilade",
    image: "assets/images/food-2.png",
    price: "$25.50",
    rating: 5.0,
  },
  {
    id: 3,
    name: "Green Beans",
    image: "assets/images/food-3.png",
    price: "$12.00",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Pizza",
    image: "assets/images/food-4.png",
    price: "$18.50",
    rating: 5.0,
  },
  {
    id: 5,
    name: "Chicken Pot Pie",
    image: "assets/images/food-5.png",
    price: "$25.00",
    rating: 4.9,
  },
  {
    id: 6,
    name: "Green Salad",
    image: "assets/images/food-6.png",
    price: "$15.00",
    rating: 4.8,
  },
  {
    id: 7,
    name: "Beef Burger",
    image: "assets/images/food-7.jpg",
    price: "$17.00",
    rating: 4.7,
  },
  {
    id: 8,
    name: "Pasta Primavera",
    image: "assets/images/food-8.jpg",
    price: "$19.99",
    rating: 4.8,
  },
  {
    id: 9,
    name: "Sushi Set",
    image: "assets/images/food-9.jpg",
    price: "$22.50",
    rating: 4.9,
  },
  {
    id: 10,
    name: "French Fries",
    image: "assets/images/food-10.jpg",
    price: "$8.00",
    rating: 4.6,
  },
  {
    id: 11,
    name: "Grilled Chicken",
    image: "assets/images/food-11.jpg",
    price: "$16.50",
    rating: 4.8,
  },
  {
    id: 12,
    name: "Chocolate Cake",
    image: "assets/images/food-12.jpg",
    price: "$10.00",
    rating: 5.0,
  },
];

const cart = JSON.parse(localStorage.getItem("cart")) || {
  count: 0,
  cartProductsId: [],
};

const cartSummaryCount = document.getElementById("cart-summary-count");
const cartSummaryTotal = document.getElementById("cart-summary-total");
if (cart.count > 0) {
  let total = 0;
  cart.cartProductsId.forEach((p) => {
    const div = document.createElement("div");
    const product = products.find((pr) => pr.id === p.productId);
    total += product.price.split("$")[1] * p.quantity;
    div.classList.add("cart-item");
    div.innerHTML = `
      <img src="${product.image}" alt="Product 1" />
      <div class="item-details">
        <h2>${product.name}</h2>
        <p>Quantity: ${p.quantity}</p>
        <p>Price: ${product.price}</p>
      </div>
      <button class="remove-btn">Remove</button>
    `;
    document.querySelector(".cart-items").appendChild(div);
  });
  cartSummaryTotal.innerHTML = `$${total}`;
  cartSummaryCount.innerHTML = cart.count;
} else {
  const p = document.createElement("p");
  p.innerHTML = "Your cart is Empty !!! ";
  document.querySelector(".cart-items").appendChild(p);
}

function updateCount() {
  const navCartCount = document.querySelector(".cart-count");
  const cartCount = JSON.parse(localStorage.getItem("cart"))?.count || 0;
  if (cartCount === 0) {
    navCartCount.style.display = "none";
  } else {
    if (navCartCount.style.display == "none") {
      navCartCount.style.display = "flex";
    }
    navCartCount.innerHTML = cartCount;
  }
}
updateCount();
