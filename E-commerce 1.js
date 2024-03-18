// Select the list and the cart elements
const list = document.getElementsByClassName('list');
const cart = document.getElementsByClassName("cart-icon1");



// Add mouseover event listener to the list
list1.addEventListener('mouseover', function() {
    // Show the cart when mouse is over the list
    cart.style.opacity = "1";
});

// Add mouseout event listener to the list
list1.addEventListener('mouseout', function() {
    // Hide the cart when mouse leaves the list
    cart.style.opacity = "0";
});



