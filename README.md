# E-Commerce Website with Live AI Predictions

This project is an interactive, modern e-commerce website designed to provide a user-friendly experience. The site offers live product recommendations, AI-powered predictions, and a seamless shopping journey for users.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Features](#features)
- [How to Use](#how-to-use)
- [Future Enhancements](#future-enhancements)


---

## Project Overview

This is a full-stack e-commerce website that allows users to browse products, add them to their cart, and make purchases. The website also includes AI-powered recommendations based on user interactions. The project includes:

- A responsive user interface
- Integration of product details and shopping functionalities
- AI-based live predictions to recommend products based on user activity
- Dynamic content loading from a database (JSON-based)
- Integration with images for product display

---

## Technologies Used

- **Frontend**:
  - HTML: For structuring the content of the website.
  - CSS: For styling and making the website visually appealing and responsive.
  - JavaScript: For making the website interactive, handling user input, and integrating with backend services for live predictions and recommendations.

- **Backend**:
  - Python: Used for integrating with the MongoDB database and running AI-powered functionalities.
  - **MongoDB**: Used for storing product information, user data, and AI predictions.

- **Data Format**:
  - **JSON**: Used for storing and serving product data and recommendations.

---

## Project Structure

Here’s the general structure of the project:

```
EcomRecommendations/
├── assets/                              # Folder containing product images and user profile images
│   ├── Bag/                             # Folder with product images for bags
│   ├── Bottle/                          # Folder with product images for bottles
│   ├── Cosmetics/                       # Folder with product images for cosmetics
│   ├── Headphones/                      # Folder with product images for headphones
│   ├── Infographics/                    # Folder containing informational graphics
│   ├── Perfume/                         # Folder with product images for perfumes
│   ├── Shoes/                           # Folder with product images for shoes
│   ├── Speaker/                         # Folder with product images for speakers
│   ├── Sunglasses/                      # Folder with product images for sunglasses
│   ├── Tshirt/                          # Folder with product images for t-shirts
│   ├── Watch/                           # Folder with product images for watches
│   ├── image1.png                       # Image for general use
│   ├── image2.png                       # Image for general use
│   ├── image3.png                       # Image for general use
│   ├── image4.png                       # Image for general use
│   ├── image5.png                       # Image for general use
│   ├── image6.png                       # Image for general use
│   ├── logo.png                         # Project logo
│   └── user-profile.png                 # Default user profile image
├── js/                                  # Folder containing JavaScript files to handle dynamic interactions
│   ├── cart.js                          # JavaScript for handling cart-related functionalities
│   ├── homepage.js                      # JavaScript for homepage functionality
│   ├── order_history.js                 # JavaScript for displaying order history
│   ├── personal_details.js              # JavaScript for managing user personal details
│   ├── recommended.js                   # JavaScript for recommended products functionality
│   └── shop.js                          # JavaScript for shop page and product management
├── json/                                # Folder containing JSON files with product and user data
│   ├── productImages.js                 # JSON with product image data for each item
│   ├── recommendations.js               # JSON with product recommendations based on user preferences
│   └── users.json                       # JSON file containing user data for recommendations
├── pages/                               # Folder containing HTML pages for the website
│   ├── about.html                       # About page HTML
│   ├── cart.html                        # Cart page HTML
│   ├── contact.html                     # Contact page HTML
│   ├── homepage.html                    # Homepage HTML
│   ├── order_history.html               # Order history page HTML
│   ├── personal_details.html            # User personal details page HTML
│   ├── privacy_policy.html              # Privacy policy page HTML
│   ├── recommended.html                 # Recommended products page HTML
│   ├── refund_policy.html               # Refund policy page HTML
│   ├── shop.html                        # Shop page HTML for browsing products
│   ├── terms.html                       # Terms of service page HTML
├── products/                            # Folder containing individual product images
│   ├── Headphones.png                   # Headphones product image
│   ├── Perfume.png                      # Perfume product image
│   ├── Shoes.png                        # Shoes product image
│   ├── Speaker.png                      # Speaker product image
│   ├── Sunglasses.png                   # Sunglasses product image
│   ├── Tshirt.png                       # Tshirt product image
│   └── Watch.png                        # Watch product image
├── styles/                              # Folder containing CSS files for styling each page
│   ├── about.css                        # Styles for the about page
│   ├── cart.css                         # Styles for the cart page
│   ├── contact.css                      # Styles for the contact page
│   ├── homepage.css                     # Styles for the homepage
│   ├── order_history.css                # Styles for the order history page
│   ├── personal_details.css             # Styles for the personal details page
│   ├── privacy_policy.css               # Styles for the privacy policy page
│   ├── recommended.css                  # Styles for the recommended products page
│   ├── refund_policy.css                # Styles for the refund policy page
│   ├── shop.css                         # Styles for the shop page
│   └── terms.css                        # Styles for the terms of service page
├── user/                                # Folder with sample user profile images
│   ├── image1.png                       # Sample user image 1
│   ├── image2.png                       # Sample user image 2
│   ├── image3.png                       # Sample user image 3
│   ├── image4.png                       # Sample user image 4
│   ├── image5.png                       # Sample user image 5
│   ├── image6.png                       # Sample user image 6
├── README.md                            # Project documentation
└── uploadImages.py                      # Python script for uploading images to the database


```

---

## Setup Instructions

To get the project up and running, follow these steps:

### 1. Clone the Repository

Clone the project to your local machine using the following command:

```bash
git clone <repository_url>
```

### 2. Serve Product Images

Navigate to the `products` folder in the terminal:

```bash
cd products
```

Then, run the following command to serve images via `http-server`:

```bash
npx http-server
```

This will start a local server to serve the images from the `products` folder.

### 3. Open the Project in Your Browser

Now, open the `homepage.html` file in your browser. Simply double-click on the file or open it via a browser to view the website.

---

## Features

- **Product Listing**: View a variety of products with images and details.
- **AI-Powered Recommendations**: Get live product recommendations based on user behavior and interactions.
- **User Account Management**: Log in to access order history and personal details.
- **Interactive Cart**: Add/remove products and view the cart.
- **Responsive Design**: The website adjusts to different screen sizes.
- **Privacy and Terms**: Access detailed pages about privacy and refund policies.

---

## How to Use

- Navigate through the homepage to view products.
- Click on a product to view more details.
- Add products to your cart by clicking the "Add to Cart" button.
- View your cart from the cart icon at the top of the page.
- Get live predictions and personalized recommendations while browsing.
- You can sign up, log in, and view order history.

---

## Future Enhancements

### Backend AI/ML Model Integration for Live Predictions
   - Currently, the project uses dummy JSON files to simulate personalized product recommendations based on user preferences. In the future, we plan to integrate a backend AI/ML model to provide live, real-time predictions and recommendations. This model will analyze user behavior and preferences to offer dynamic and personalized product suggestions, enhancing the user experience.

