let h1 = document.createElement("h1");
h1.innerText = "Home Page";

fetch("https://dummyjson.com/products").then((resolve) => {
    return resolve.json();
}).then((data) => {
    console.log(data);
    console.log(data.products);

}).catch((error) => {
    console.log(error);
});

document.body.append(h1);