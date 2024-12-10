/* 
    META DATA - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Developer details:
        Name: Harshita Jangde, Prachi Tavse
        Role: Architect

    Version:
        Version: V 1.0 (2 December 2024)
        Developers: Harshita Jangde, Prachi Tavse
        Unit test: Pass
        Integration test: Pass

    Description:
        This JavaScript file defines the `productImages` object containing product IDs, categories, and image paths.
        It exports the `productImages` object for use in other modules.

    Dependencies:
        - None

    To use:
        - Import the `productImages` object from this file into other JavaScript files to access product data.
        - Example usage: `import productImages from './path/to/this/file';`

*/
const productImages = {
    "PID001": { "category": "Bag", "imagePath": "../products/Bag.png" },  // Corrected path
    "PID002": { "category": "Shoes", "imagePath": "../products/Shoes.png" },
    "PID003": { "category": "Perfume", "imagePath": "../products/Perfume.png" },
    "PID004": { "category": "Tshirt", "imagePath": "../products/Tshirt.png" },
    "PID005": { "category": "Bottle", "imagePath": "../products/Bottle.png" },
    "PID006": { "category": "Cosmetics", "imagePath": "../products/Cosmetics.png" },
    "PID007": { "category": "Headphones", "imagePath": "../products/Headphones.png" },
    "PID008": { "category": "Speaker", "imagePath": "../products/Speaker.png" },
    "PID009": { "category": "Sunglasses", "imagePath": "../products/Sunglasses.png" },
    "PID0010": { "category": "Watch", "imagePath": "../products/Watch.png" }
};

// Export the productImages object so it can be used in other files
export default productImages;
