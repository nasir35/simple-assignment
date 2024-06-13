const cart = JSON.parse(localStorage.getItem("cart")) || {
  count: 0,
  cartProductsId: [],
};
if (cart.count > 0) {
  const p = document.createElement("p");
  p.innerHTML = `YAY!! You have ${cart.count} items in your cart! `;
  document.querySelector(".root").appendChild(p);
} else {
  const p = document.createElement("p");
  p.innerHTML = "Your cart is Empty !!! ";
  document.querySelector(".root").appendChild(p);
}
