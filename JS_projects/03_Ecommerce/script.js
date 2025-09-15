document.addEventListener("DOMContentLoaded", () => {
  const product = [
    { id: 1, name: "product 1", price: 29.99 },
    { id: 2, name: "product 2", price: 49.99 },
    { id: 3, name: "product 3", price: 39.99 },
  ];

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-card");
  const cartTotalMessage = document.getElementById("cart-total");
  const totalpriceDisplay = document.getElementById("total-price");
  const checkOutBtn = document.getElementById("checkout-btn");

  product.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product-card");
    productDiv.innerHTML = `
        <span>${product.name} - ${product.price.toFixed(2)}</span>
        <button data-id="${product.id}">Add to cart</button>
        `;
    productList.appendChild(productDiv);
  });

  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const products = product.find((p) => p.id === productId);
      addToCart(products);
    }
  });

  function addToCart(products) {
    cart.push(products);
    console.log(cart);
    saveTasks();
    renderCart();
  }

  function renderCart() {
    cartItems.innerHTML = "";
    let totalPrice = 0;

    if (cart.length > 0) {
      emptyCartMessage.classList.add("hidden");
      cartTotalMessage.classList.remove("hidden");
      cart.forEach((item, index) => {
        totalPrice += item.price;
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `
                ${item.name} - $${item.price.toFixed(2)}
                <button>remove</button>
                `;

        cartItem.addEventListener("click", (e) => {
          if (e.target.tagName === "BUTTON") return;
          saveTasks();
        });

        cartItem.querySelector("button").addEventListener("click", (e) => {
          e.stopPropagation(); //prevent toggle from firing
          cart.splice(index, 1); // remove the item from array
          renderCart(); // re-render cart
          saveTasks();
        });
        cartItems.appendChild(cartItem);
        totalpriceDisplay.textContent = `${totalPrice.toFixed(2)}`;
      });
    } else {
      emptyCartMessage.classList.remove("hidden");
      cartTotalMessage.classList.add("hidden");
      totalpriceDisplay.textContent = `$0.00`;
    }
  }

  checkOutBtn.addEventListener("click", () => {
    cart.length = 0;
    alert("checkout successfully");
    renderCart();
    saveTasks();
  });

  function saveTasks() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  renderCart();
});
