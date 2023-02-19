// const productsContainer = document.querySelector("#products");

// const fetchProducts = async () => {
//   // need to find an api: https://api.example.com/products
//   const response = await fetch("src/products.json/products");
//   const products = await response.json();

//   products.forEach(product => {
//     const productElement = document.createElement("div");
//     productElement.classList.add("product");

//     const productImage = document.createElement("img");
//     productImage.src = product.image;
//     productElement.appendChild(productImage);

//     const productTitle = document.createElement("h3");
//     productTitle.textContent = product.title;
//     productElement.appendChild(productTitle);

//     const productDescription = document.createElement("p");
//     productDescription.textContent = product.description;
//     productElement.appendChild(productDescription);

//     productsContainer.appendChild(productElement);
//   });
// };

// fetchProducts();


// Option 2

fetch("src/products.json")
  .then(response => response.json())
  .then(data => {
    let output = "";
    data.forEach(function(item) {
      output += `
        <div class="product">
          <img src="${item.image}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>${item.price}</p>
          <p>${item.description}</p>
        </div>
      `;
    });
    document.querySelector("#products").innerHTML = output;
  })
  .catch(error => {
    console.error("Error fetching products", error);
  });