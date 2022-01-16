import Faker from 'faker';

const mount = htmlElement => {
    const cartText = document.createElement('div');
    cartText.append(`You have ${Faker.random.number(10)} items in your cart`);
    htmlElement.appendChild(cartText);
};

if (process.env.NODE_ENV === 'development') {
    const element = document.querySelector('#dev-cart-isolation');
    if (element) {
        mount(element);
    }
}

export { mount };
