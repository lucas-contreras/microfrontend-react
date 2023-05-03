import { mount } from 'products/ProductIndex'
import { mount as cartMount } from 'cart/CartShow'

const productEl = document.querySelector('#my-products');
const cartEl = document.querySelector('#my-carts');

mount(productEl);
cartMount(cartEl);

console.log('container')