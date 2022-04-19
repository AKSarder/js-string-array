const products = [
    "yellow color laptop",
    "red color laptop",
    "blue color Laptop",
    "purple color Phone",
    "white color laptop",
    "green color phon",
    "blar color mobile laptop"
];

const searching = "laptop";
const output = [];

for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        // output.push(product);
    }
}

for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        output.push(product);
    }
}

console.log(output);
