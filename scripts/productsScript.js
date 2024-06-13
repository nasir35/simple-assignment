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

const productGrid = document.getElementById("product-grid");
const loadMoreButton = document.getElementById("load-more");

function renderProducts(productsToRender) {
  productGrid.innerHTML = "";
  productsToRender.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.classList.add("product-item");

    productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <div class="product-title">
                    <h3>${product.name}</h3>
                    <small><img src="./assets/icons/star.svg"/> ${product.rating}</small>
                </div>
                <div class="price-action">
                    <button class="add-to-cart" onclick="handleAddToCart(${product.id})">Add To Cart</button>
                    <p class="price">${product.price}</p>
                </div>
            </div>
        `;

    productGrid.appendChild(productItem);
  });
}

let btnStatus = false;

function loadMoreProducts() {
  btnStatus = !btnStatus;
  let innerBtnHtml = `See ${btnStatus ? "Less" : "More"} Products
              <img src="./assets/icons/Arrow-right.svg" alt="arrow-icon" />`;
  loadMoreButton.innerHTML = innerBtnHtml;
  if (btnStatus) {
    renderProducts(products);
  } else {
    renderProducts(products.slice(0, 6));
    scrollToContainer();
  }
}

function scrollToContainer() {
  const container = document.getElementById("product-grid");
  container.scrollIntoView({ behavior: "smooth" });
}
loadMoreButton.addEventListener("click", loadMoreProducts);

renderProducts(products.slice(0, 6));

const productExist = (id) => {
  const cartDetails = JSON.parse(localStorage.getItem("cart")) || {
    count: 0,
    cartProductsId: [],
  };
  if (cartDetails?.count > 0) {
    const res = cartDetails.cartProductsId.find((p) => p.productId === id);
    const index = cartDetails.cartProductsId.indexOf(res);
    return index;
  }
  return -1;
};

const handleAddToCart = (id) => {
  const cartDetails = JSON.parse(localStorage.getItem("cart")) || {
    count: 0,
    cartProductsId: [],
  };
  const index = productExist(id);
  if (index != -1) {
    cartDetails.count = cartDetails.count + 1;
    cartDetails.cartProductsId[index].quantity =
      cartDetails.cartProductsId[index].quantity + 1;
    localStorage.setItem("cart", JSON.stringify(cartDetails));
  } else {
    cartDetails.count = cartDetails.count + 1;
    cartDetails.cartProductsId.push({ productId: id, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cartDetails));
  }
  updateCount();
};

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
