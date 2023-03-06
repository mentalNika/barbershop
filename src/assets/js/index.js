import "swiper/swiper.min.css";
import "../styles/reset.scss";
import "../styles/styles.scss";

import Swiper, { Navigation } from "swiper";
import { languages } from "./languages";
Swiper.use([Navigation]);

// <Open and close menu
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
	if (navMain.classList.contains('main-nav--closed')) {
		navMain.classList.remove('main-nav--closed');
		navMain.classList.add('main-nav--opened');
	} else {
		navMain.classList.add('main-nav--closed');
		navMain.classList.remove('main-nav--opened');
	}
});
//  Open and close menu>