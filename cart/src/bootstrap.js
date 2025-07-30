import { faker } from '@faker-js/faker';



const productName = faker.commerce.product(); // Generates one random product name
const cartItem = `<div>${productName} has been added to your cart!</div>`;
document.querySelector('#dev-cart').innerHTML = cartItem
