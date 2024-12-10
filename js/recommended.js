// META DATA - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Developer details:
//     Name: Khushboo Mittal and Harshita Jangde
//     Role: Architect

// Version:
//     Version: V 1.0 (26 November 2024)
//     Developers: Khushboo Mittal and Harshita Jangde
//     Unit test: Pass
//     Integration test: Pass

// Description:
//     This JavaScript file handles the dynamic functionality for the "Recommended Products" section of the e-commerce homepage.
//     It includes features like the carousel functionality for displaying product recommendations, event listeners for navigation 
//     (such as next/previous buttons), and interactive zoom effect for product images. 
//     It dynamically fetches user-specific recommendations based on the username and updates the carousel content.

// Dependencies:
//     - No external JavaScript libraries are used.
//     - Vanilla JavaScript used to handle interactions, DOM manipulation, and event handling.

// To use: Include this JavaScript file in the "recommended.html" to enable carousel scrolling,
//        zoom effects, and dynamic content updates for a personalized and interactive user experience.
// Import product images from a JSON file
import productImages from '../json/productImages.js';

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // --- Navbar Functionality ---
    // Select all navbar links
    const navbarLinks = document.querySelectorAll(".navbar a");

    // Add click event listeners to each navbar link
    navbarLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default link behavior (page reload)
            navbarLinks.forEach((link) => link.classList.remove("active")); // Remove 'active' class from all links
            link.classList.add("active"); // Add 'active' class to the clicked link
            const targetPage = link.getAttribute("href"); // Get the href attribute value
            window.location.href = targetPage; // Navigate to the target page
        });
    });

    // --- Carousel Setup ---
    // Select carousel and its navigation arrows
    const carousel = document.querySelector(".carousel");
    const rightArrow = document.querySelector(".carousel-arrow.right");
    const leftArrow = document.querySelector(".carousel-arrow.left");

    // Initialize the current index for carousel items
    let currentIndex = 0;

    // Function to scroll carousel to a specific index
    function scrollToIndex(index) {
        const items = document.querySelectorAll(".carousel-item"); // Get all carousel items
        if (items.length) {
            const offset = items[index]?.offsetLeft || 0; // Get the offset position of the item
            carousel.scrollTo({ left: offset, behavior: "smooth" }); // Smoothly scroll to the item's position
        }
    }

    // Add click event listener for the right arrow
    rightArrow.addEventListener("click", () => {
        const totalItems = document.querySelectorAll(".carousel-item").length; // Get total number of items
        currentIndex = (currentIndex + 1) % totalItems; // Increment index and wrap around if needed
        scrollToIndex(currentIndex); // Scroll to the updated index
    });

    // Add click event listener for the left arrow
    leftArrow.addEventListener("click", () => {
        const totalItems = document.querySelectorAll(".carousel-item").length; // Get total number of items
        currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Decrement index and wrap around if needed
        scrollToIndex(currentIndex); // Scroll to the updated index
    });

    // --- Automatic Carousel Movement ---
    // Set up an interval to automatically move the carousel
    setInterval(() => {
        const totalItems = document.querySelectorAll(".carousel-item").length; // Get total number of items
        currentIndex = (currentIndex + 1) % totalItems; // Increment index and wrap around if needed
        if (currentIndex === 0) {
            // Reset to the first item without animation
            carousel.scrollTo({
                left: 0, // Scroll to the start
                behavior: "instant", // Instantly reset
            });
        } else {
            scrollToIndex(currentIndex); // Scroll to the updated index
        }
    }, 3000); // Change items every 3 seconds

    // --- Recommendations Functionality ---
    // Fetch the users.json file
    fetch('../json/users.json')
    .then(response => response.json()) // Parse the JSON response
    .then(users => {
        console.log(localStorage.getItem("username")); // Log the current username from local storage
        const cleanedUsername = username.replace(/\s+/g, '').toLowerCase(); // Normalize the username
        const UID = users[cleanedUsername]; // Get the UID for the normalized username
        console.log("Normalized Username:", cleanedUsername);

        if (!UID) {
            console.error("User not found"); // Log error if UID is not found
            return;
        }

        // Fetch the recommendations.json file
        fetch('../json/recommendations.json')
        .then(response => response.json()) // Parse the JSON response
        .then(recommendations => {
            const userRecommendations = recommendations[UID]?.Recommendations; // Get recommendations for the UID

            if (!userRecommendations) {
                console.error("No recommendations found for this user"); // Log error if no recommendations are found
                return;
            }

            console.log("User Recommendations:", userRecommendations); // Log user recommendations
            carousel.innerHTML = ''; // Clear the carousel

            // Loop through the recommendations and add items to the carousel
            userRecommendations.forEach(recommendation => {
                const product = productImages[recommendation.PID]; // Get product details by PID
                if (product) {
                    const productImageElement = document.createElement("div"); // Create a new carousel item
                    productImageElement.classList.add("carousel-item");

                    const img = document.createElement("img"); // Create an image element
                    img.src = product.imagePath; // Set the image source
                    img.alt = `${product.category} image`; // Set the alt text
                    productImageElement.appendChild(img);

                    const rating = document.createElement("p"); // Create a paragraph for the rating
                    rating.textContent = `Rating: ${recommendation.rating}`; // Set the rating text
                    productImageElement.appendChild(rating);

                    carousel.appendChild(productImageElement); // Append the item to the carousel
                }
            });
        })
        .catch(error => console.error("Error fetching recommendations:", error)); // Handle errors
    })
    .catch(error => console.error("Error fetching users:", error)); // Handle errors

    // --- Carousel Zooming Functionality ---
    carousel.addEventListener("mousemove", (e) => {
        const target = e.target.closest(".carousel-item img"); // Check if mouse is over an image
        if (target) {
            const rect = target.getBoundingClientRect(); // Get the image's bounding rectangle
            const offsetX = e.clientX - rect.left; // Calculate X offset of the mouse
            const offsetY = e.clientY - rect.top; // Calculate Y offset of the mouse
            target.style.transformOrigin = `${(offsetX / rect.width) * 100}% ${(offsetY / rect.height) * 100}%`; // Adjust transform origin
            target.style.transform = "scale(1.05)"; // Scale the image slightly
            target.style.transition = "transform 0.2s ease-in-out"; // Add smooth transition effect
        }
    });

    // Reset zoom effect when the mouse leaves the carousel
    carousel.addEventListener("mouseleave", () => {
        document.querySelectorAll(".carousel-item img").forEach((img) => {
            img.style.transform = "scale(1)"; // Reset scale
        });
    });
});

// --- Navbar Username Update ---
// Get username from local storage or use a default value
const username = localStorage.getItem("username") || "Chris Dave";
// Split the username into first and last name
const nameParts = username.split(" ");
const firstName = nameParts.slice(0, -1).join(" ") || "Chris"; // Get first name or default to "Chris"
const lastName = nameParts.slice(-1).join(" ") || "DAVE"; // Get last name or default to "DAVE"

// Update the navbar with the first and last name
document.querySelector(".first-name").textContent = firstName;
document.querySelector(".last-name").textContent = lastName;

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const cartCount = localStorage.getItem("cartCount") || 0; // Get the cart count from local storage or default to 0
    const cartLink = document.getElementById("cart-link"); // Select the cart link element
    if (cartLink) {
        cartLink.textContent = `Cart (${cartCount})`; // Update the cart text with the count
    }
});
