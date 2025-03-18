hemburger = document.querySelector(".hemburger");
navbar = document.querySelector(".navbar");
navList = document.querySelector(".nav-list");
rightNav = document.querySelector(".rightNav");

hemburger.addEventListener("click", () => {
  rightNav.classlist.toggle("v-nav-resp");
  navList.classlist.toggle("v-nav-resp");
  navbar.classlist.toggle("h-nav-resp");
});

function searchFood() {
  let input = document.getElementById("searchBar").value.toLowerCase();
  let foodCategories = document.querySelectorAll(".cat-menu > div");

  foodCategories.forEach((category) => {
    let foodItems = category.querySelectorAll(".catfood-item");
    let matchFound = false;

    foodItems.forEach((item) => {
      let foodName = item.querySelector(".cat-h").textContent.toLowerCase();
      if (foodName.includes(input)) {
        item.style.display = "block"; 
        matchFound = true;
      } else {
        item.style.display = "none"; 
      }
    });

    
    if (matchFound) {
      category.style.display = "block";
    } else {
      category.style.display = "none";
    }
  });
}

// menu js
let cart = [];

function addToCart(item, price) {
  cart.push({ item, price });
  updateCart();
  document.getElementById("cartModal").style.display = "block";
  document.getElementById("foodList").classList.add("disabled");
}

function updateCart() {
  let cartList = document.getElementById("cartItems");
  let totalPrice = document.getElementById("totalPrice");
  cartList.innerHTML = "";
  let total = 0;
  cart.forEach((cartItem, index) => {
    let li = document.createElement("li");
    li.innerHTML = `${cartItem.item} - ₹${cartItem.price} 
            <button class="close-btn" onclick="removeFromCart(${index})">Remove</button>`;
    cartList.appendChild(li);
    total += cartItem.price;
  });
  totalPrice.textContent = total.toFixed(2);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
  if (cart.length === 0) {
    closeCart(); 
  }
}

function closeCart() {
  document.getElementById("cartModal").style.display = "none"; 
  document.getElementById("foodList").classList.remove("disabled"); 
}

function openPayment() {
  document.getElementById("payAmount").textContent =
    document.getElementById("totalPrice").textContent;
  document.getElementById("paymentModal").style.display = "block"; 
  document.getElementById("cartModal").style.display = "none"; 
}

function closePayment() {
  document.getElementById("paymentModal").style.display = "none"; 
  document.getElementById("cartModal").style.display = "block"; 
}

function processPayment() {
  alert("Payment Successful! Redirecting to Home Page...");
  window.location.href = "index.html"; 
}
