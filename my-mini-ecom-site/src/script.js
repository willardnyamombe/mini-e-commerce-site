// // Select the main content section element
// const mainSection = document.querySelector('section');

// // Function to add new products to the main content
// function addProduct(productName) {
//   const productElement = document.createElement('p');
//   productElement.innerText = productName;
//   mainSection.appendChild(productElement);
// }

// // Add some sample products to the main content
// addProduct('Product 1');
// addProduct('Product 2');
// addProduct('Product 3');


// Using Api

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c9c226f9f5msh93e2ba96d1526f2p1af73ajsn9e3093fde753',
		'X-RapidAPI-Host': 'aliexpress-datahub.p.rapidapi.com'
	}
};

fetch('https://aliexpress-datahub.p.rapidapi.com/item_detail?itemId=3256804591426248', options)
	.then(resp => resp.json())
	.then(data => showItems(data))
	// .catch(err => console.error(err));

function showItems(data) {
    (element => {
        if (typeof element.result.item === 'undefined') element.result.item = ['not listed'];
        if (typeof element.images[0] === 'undefined') element.images[0] = {
            thumbnail: 'images/missingImage.jpg'
        };
    });

    let title = data.result.item.title;
    let image = data.result.images[0];
  
    console.log('Testing...')
    console.log(title)
    addProduct(title, image)

}
const mainSection = document.querySelector('section');

// Function to add new products to the main content
function addProduct(productName, productImage) {
    const productElement = document.createElement('div');
    // const mainSection = document.querySelector('section');
    // const productElement = document.createElement('div');
    productElement.innerHTML = `
        <img src="${productImage}" alt="${productName}" width="100" height="100">
        <p>${productName}</p>
    `;
    mainSection.appendChild(productElement);
}