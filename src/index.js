import './style.css';
import post from './modules/post';
import get from './modules/get';

const submit = document.querySelector('.submit-btn');
const refresh = document.querySelector('.refresh-btn');
submit.addEventListener('click', post);
refresh.addEventListener('click', get);
