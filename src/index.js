import './style.css';
import Icon from './icons/drop-down-icon.png';
import { dropdownToggle } from './modules/dropdown.js';
import { next, previous } from './modules/imageCarousel.js';

const dropdownBtn = document.querySelector('#drop-down-btn');
const dropdownDiv = document.querySelector('.drop-down-content');

const nextBtn = document.querySelector('#next');
const previousBtn = document.querySelector('#previous');

// Add the image to our existing div.
const myIcon = new Image();
myIcon.src = Icon;
myIcon.classList.add('dropdown-icon');

dropdownBtn.appendChild(myIcon);

dropdownBtn.addEventListener('click', () => {
  dropdownToggle(dropdownDiv);
});

nextBtn.addEventListener('click', next);
previousBtn.addEventListener('click', previous);
