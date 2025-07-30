import { faker } from '@faker-js/faker';

const products = Array.from({ length: 15 }).map(() => {
  return {
    id: faker.commerce.isbn(10),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    description:faker.commerce.productDescription()
  };
});

const productsHTML = products.map(product => `
  <div>
    <h2>${product.name}</h2>
    <p>${product.description}</p>
    <p>Price: $${product.price}</p>
  </div>
`).join('');

document.querySelector('#dev-products').innerHTML = productsHTML;