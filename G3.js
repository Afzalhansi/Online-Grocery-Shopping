// Function to add item to cart
function addToCart(item) {
    alert(item + ' added to cart.');
    // Implement cart functionality as per your requirement (e.g., store in localStorage)
}

// Function to handle "Buy Now" button click
function buyNow(sectionId) {
    window.location.href = window.location.pathname + sectionId;
    // This will scroll to the section with the given ID (e.g., #vegetables or #fruits)
}
