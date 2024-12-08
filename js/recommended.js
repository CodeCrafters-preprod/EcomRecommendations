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
import productImages from '../json/productImages.js';
document.addEventListener("DOMContentLoaded", () => {
    // --- Navbar Functionality ---
    const navbarLinks = document.querySelectorAll(".navbar a");

    navbarLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            navbarLinks.forEach((link) => link.classList.remove("active"));
            link.classList.add("active");
            const targetPage = link.getAttribute("href");
            window.location.href = targetPage;
        });
    });

    const carousel = document.querySelector(".carousel");
    const rightArrow = document.querySelector(".carousel-arrow.right");
    const leftArrow = document.querySelector(".carousel-arrow.left");

    let currentIndex = 0;

    function scrollToIndex(index) {
        const items = document.querySelectorAll(".carousel-item");
        if (items.length) {
            const offset = items[index]?.offsetLeft || 0;
            carousel.scrollTo({ left: offset, behavior: "smooth" });
        }
    }

    rightArrow.addEventListener("click", () => {
        const totalItems = document.querySelectorAll(".carousel-item").length;
        currentIndex = (currentIndex + 1) % totalItems; // Wrap to the start if at the end
        scrollToIndex(currentIndex);
    });

    leftArrow.addEventListener("click", () => {
        const totalItems = document.querySelectorAll(".carousel-item").length;
        currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Wrap to the end if at the start
        scrollToIndex(currentIndex);
    });

    // Automatic Carousel Movement
    setInterval(() => {
        const totalItems = document.querySelectorAll(".carousel-item").length;
        currentIndex = (currentIndex + 1) % totalItems; // Increment index (loop back to the start if needed)
        if (currentIndex === 0) {
            // Special handling for resetting to the first item
            carousel.scrollTo({
                left: 0, // Scroll to the extreme left (first image)
                behavior: "instant", // Instantly reset without smooth animation
            });
        } else {
            scrollToIndex(currentIndex); // Scroll to the updated index
        }
    }, 3000); // Change items every 3 seconds

    // --- Recommendations Functionality ---
    // Fetch users.json to get UID based on the username
    fetch('../json/users.json')
    .then(response => response.json())
    .then(users => {
        console.log(localStorage.getItem("username"));
        // Fetch the corresponding UID based on username
        // Normalize the username (e.g., remove spaces and convert to lowercase)
        const cleanedUsername = username.replace(/\s+/g, '').toLowerCase();  // Remove space if needed
        
        // Fetch the corresponding UID based on the normalized username
        const UID = users[cleanedUsername];
        console.log("Normalized Username:", cleanedUsername)

        if (!UID) {
            console.error("User not found");
            return;
        }

        // Fetch recommendations.json to get the product recommendations for that UID
        fetch('../json/recommendations.json')
        .then(response => response.json())
        .then(recommendations => {
            // Get recommendations for the user based on UID
            const userRecommendations = recommendations[UID]?.Recommendations;

            if (!userRecommendations) {
                console.error("No recommendations found for this user");
                return;
            }

            console.log("User Recommendations:", userRecommendations);
            // Get the carousel container
            const carousel = document.querySelector(".carousel");

            // Clear the carousel before adding new items
            carousel.innerHTML = '';

            // Loop through the recommendations and add the images to the carousel

            userRecommendations.forEach(recommendation => {
                const product = productImages[recommendation.PID];  // Use the PID from the recommendation
                if (product) {
                    const productImageElement = document.createElement("div");
                    productImageElement.classList.add("carousel-item");

                    const img = document.createElement("img");
                    img.src = product.imagePath;  // Set the image source using the product's image path
                    img.alt = `${product.category} image`;  // Use the category for alt text
                    productImageElement.appendChild(img);

                    // Optionally, add rating to each item
                    const rating = document.createElement("p");
                    rating.textContent = `Rating: ${recommendation.rating}`;
                    productImageElement.appendChild(rating);

                    // Append the carousel item to the carousel
                    carousel.appendChild(productImageElement);
                }
            });
        })
        .catch(error => console.error("Error fetching recommendations:", error));
    })
    .catch(error => console.error("Error fetching users:", error));

    // --- Carousel Zooming Functionality ---
    carousel.addEventListener("mousemove", (e) => {
        const target = e.target.closest(".carousel-item img");
        if (target) {
            const rect = target.getBoundingClientRect();
            const offsetX = e.clientX - rect.left;
            const offsetY = e.clientY - rect.top;

            target.style.transformOrigin = `${(offsetX / rect.width) * 100}% ${(offsetY / rect.height) * 100}%`;
            target.style.transform = "scale(1.05)";
            target.style.transition = "transform 0.2s ease-in-out";
        }
    });

    carousel.addEventListener("mouseleave", () => {
        document.querySelectorAll(".carousel-item img").forEach((img) => {
            img.style.transform = "scale(1)";
        });
    });
});

// --- Navbar Username Update ---
const username = localStorage.getItem("username") || "Chris Dave";
const nameParts = username.split(" ");
const firstName = nameParts.slice(0, -1).join(" ") || "Chris";
const lastName = nameParts.slice(-1).join(" ") || "DAVE";

document.querySelector(".first-name").textContent = firstName;
document.querySelector(".last-name").textContent = lastName;

document.addEventListener("DOMContentLoaded", () => {
    const cartCount = localStorage.getItem("cartCount") || 0;
    const cartLink = document.getElementById("cart-link");
    if (cartLink) {
        cartLink.textContent = `Cart (${cartCount})`;
    }
});
