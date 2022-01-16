import faker from 'faker';

const mount = htmlElement => {
    for (let i = 0; i < 5; i += 1) {
        const name = faker.commerce.productName();
        const newElement = document.createElement('div');
        newElement.append(name);
        htmlElement.appendChild(newElement);
    }
};

if (process.env.NODE_ENV === 'development') {
    const element = document.querySelector('#dev-products-isolation');
    if (element) {
        mount(element);
    }
}

export { mount };
