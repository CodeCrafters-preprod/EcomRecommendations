/* <!-- META DATA -->
<!--
Developer Details:
    Name: Tanisha Priya
    Role: Frontend Developer

Version:
    Version: V 1.0 (2 December 2024)
    Developers: Tanisha Priya
    Unit Test: Pass
    Integration Test: Pass

Description:
    This is the order history page for the Peoplely Fashion e-commerce platform.
    It displays previously purchased items with a visually appealing gallery.
    Users can navigate to other pages like Personal Details, Recommendations, and Shop.
    The site provides a user-friendly interface for seamless browsing and order management.

Dependencies:
    - Environment:
        - HTML5
        - CSS3
        - JavaScript (ES6+)

To Run:
    Open the `order_history.html` file in a modern web browser.
--> */

// --- Navbar Username Update ---
// Retrieve the username from localStorage
const username = localStorage.getItem("username") || "Chris Dave";

// Split the username into first and last names
const nameParts = username.split(" ");
const firstName = nameParts.slice(0, -1).join(" ") || "Chris"; // Everything except the last word
const lastName = nameParts.slice(-1).join(" ") || "DAVE"; // The last word

// Update the DOM elements with the names
document.querySelector(".first-name").textContent = firstName;
document.querySelector(".last-name").textContent = lastName;

document.addEventListener('DOMContentLoaded', function () {
    // Load cart count from localStorage
    const cartCount = localStorage.getItem('cartCount') || 0;

    // Update the cart link on the navbar
    const cartLink = document.getElementById('cart-link');
    if (cartLink) {
        cartLink.textContent = `Cart (${cartCount})`;
    }
});