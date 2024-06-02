import './style.css';
import Icon from './icons/drop-down-icon.png';
import { showDropdown } from './modules/dropdown.js';

const dropdownBtn = document.querySelector('#drop-down-btn');
const dropdownDiv = document.querySelector('.drop-down-content');

// Add the image to our existing div.
const myIcon = new Image();
myIcon.src = Icon;

dropdownBtn.appendChild(myIcon);

dropdownBtn.addEventListener('click', () => {
  showDropdown(dropdownDiv);
});
