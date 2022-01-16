import { mount as productsMount } from 'products/ProductBootstrap';
import { mount as cartMount } from 'cart/CartShow';

console.log('container');

productsMount(document.querySelector('#render-products'));
cartMount(document.querySelector('#render-cart'));
