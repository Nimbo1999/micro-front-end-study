import Faker from 'faker';

const cartText = document.createElement('div');
cartText.append(`You have ${Faker.random.number(10)} items in your cart`);

document.querySelector('#dev-cart').appendChild(cartText);
