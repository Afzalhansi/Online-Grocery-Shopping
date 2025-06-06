document.addEventListener("DOMContentLoaded", function() {
    // Toggle navigation menu
    const menuBtn = document.getElementById("menu-btn");
    const menu = document.querySelector(".menu");
    menuBtn.addEventListener("change", function() {
      if (this.checked) {
        menu.classList.add("active");
      } else {
        menu.classList.remove("active");
      }
    });
  
    // Like and Cart buttons functionality
    const likeButtons = document.querySelectorAll(".like, .like-btn");
    const cartButtons = document.querySelectorAll(".cart, .cart-btn");
    const likeCount = document.querySelector(".like span");
    const cartCount = document.querySelector(".cart span");
    let likeTotal = 0;
    let cartTotal = 0;
  
    likeButtons.forEach(button => {
      button.addEventListener("click", function(event) {
        event.preventDefault();
        likeTotal++;
        likeCount.textContent = likeTotal;
      });
    });
  
    cartButtons.forEach(button => {
      button.addEventListener("click", function(event) {
        event.preventDefault();
        cartTotal++;
        cartCount.textContent = cartTotal;
      });
    });
  
    // Navigation to subpages (dummy navigation)
    const subpageLinks = document.querySelectorAll(".menu a, .category-box a, .cart-btn, .like-btn");
    subpageLinks.forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        alert("This link would navigate to: " + this.getAttribute("href"));
      });
    });
  });
  