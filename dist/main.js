/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact(){\n    const contact = document.createElement('div');\n    contact.classList.add('contact-container');\n\n    const phoneImage = document.createElement('img');\n    phoneImage.src = 'assets/phone.png';\n    phoneImage.alt = 'phone image';\n\n    const phoneNumber = document.createElement('p');\n    phoneNumber.textContent = '111-222-333';\n\n    const addressImage = document.createElement('img');\n    addressImage.src = 'assets/map-marker.png';\n    addressImage.alt = 'address image';\n\n    const address = document.createElement('p');\n    address.textContent = 'Northern Siberia Street 123, Siberia';\n\n    const location = document.createElement('img');\n    location.src = 'assets/siberia.jpg';\n    location.alt = 'map of siberia';\n\n    contact.appendChild(phoneImage);\n    contact.appendChild(phoneNumber);\n    contact.appendChild(addressImage);\n    contact.appendChild(address);\n    contact.appendChild(location);\n\n    return contact;\n}\n\nfunction loadContact(){\n    const main = document.getElementById('main');\n    main.textContent = '';\n    main.appendChild(createContact());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHome(){\n    const home = document.createElement('div');\n    home.classList.add('home-container');\n\n    const huskyImage = document.createElement('img');\n    huskyImage.src = 'assets/husky1.jpeg';\n    huskyImage.alt = 'husky image';\n\n    const description1 = document.createElement('p');\n    description1.textContent = 'Such Cuisine Much Wow';\n    description1.classList.add('home-description');\n\n    const description2 = document.createElement('p');\n    description2.textContent = 'Come And Visit Us Hooman!';\n    description2.classList.add('home-description');\n\n    home.appendChild(huskyImage);\n    home.appendChild(description1);\n    home.appendChild(description2);\n\n    return home;\n}\n\nfunction loadHome(){\n    const main = document.getElementById('main');\n    main.textContent = '';\n    main.appendChild(createHome());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n\n\n(0,_website__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenu(){\n    const menu = document.createElement('div');\n    menu.classList.add('menu-container');\n\n    const tomYum = document.createElement('div');\n    tomYum.classList.add('food-container');\n    const tomYumImage = document.createElement('img');\n    tomYumImage.src = 'assets/tomyum.jpg';\n    tomYumImage.alt = 'tom yum image';\n    const tomYumTitle = document.createElement('h2');\n    tomYumTitle.textContent = 'Tom Yum';\n    const tomYumDescription = document.createElement('p');\n    tomYumDescription.textContent = 'Hot and sour flavours, with fragrant spices and herbs generously used in the broth.';\n    tomYum.appendChild(tomYumImage);\n    tomYum.appendChild(tomYumTitle);\n    tomYum.appendChild(tomYumDescription);\n\n    const curry = document.createElement('div');\n    curry.classList.add('food-container');\n    const curryImage = document.createElement('img');\n    curryImage.src = 'assets/curry.png';\n    curryImage.alt = 'curry image';\n    const curryTitle = document.createElement('h2');\n    curryTitle.textContent = 'Curry';\n    const curryDescription = document.createElement('p');\n    curryDescription.textContent = 'Roux thickened stew that includes meat, onions, carrots, and potatoes. It comes in various levels of spiciness as well!';\n    curry.appendChild(curryImage);\n    curry.appendChild(curryTitle);\n    curry.appendChild(curryDescription);\n\n    const salad = document.createElement('div');\n    salad.classList.add('food-container');\n    const saladImage = document.createElement('img');\n    saladImage.src = 'assets/salad.png';\n    saladImage.alt = 'salad image';\n    const saladTitle = document.createElement('h2');\n    saladTitle.textContent = 'Salad';\n    const saladDescription = document.createElement('p');\n    saladDescription.textContent = 'Consists of mixed, mostly natural ingredients that are dressed. Served either cold, or warm.';\n    salad.appendChild(saladImage);\n    salad.appendChild(saladTitle);\n    salad.appendChild(saladDescription);\n\n    const sandwich = document.createElement('div');\n    sandwich.classList.add('food-container');\n    const sandwichImage = document.createElement('img');\n    sandwichImage.src = 'assets/sandwich.png';\n    sandwichImage.alt = 'sandwich image';\n    const sandwichTitle = document.createElement('h2');\n    sandwichTitle.textContent = 'Sandwich';\n    const sandwichDescription = document.createElement('p');\n    sandwichDescription.textContent = 'A sandwich which contains cabbage, lettuce, sliced ham and cheese, placed between breads that serve as a container or wrapper.';\n    sandwich.appendChild(sandwichImage);\n    sandwich.appendChild(sandwichTitle);\n    sandwich.appendChild(sandwichDescription);\n\n    menu.appendChild(tomYum);\n    menu.appendChild(curry);\n    menu.appendChild(salad);\n    menu.appendChild(sandwich);\n\n    return menu;\n}\n\nfunction loadMenu(){\n    const main = document.getElementById('main');\n    main.textContent = '';\n    main.appendChild(createMenu());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nfunction createHeader(){\n    const header = document.createElement('header');\n    header.classList.add('header');\n\n    const headerImageLeft = document.createElement('img');\n    headerImageLeft.src = 'assets/husky2.jpg';\n    headerImageLeft.alt = 'husky image';\n\n    const restaurantTitle = document.createElement('h1');\n    restaurantTitle.textContent = \"Hiberian Susky's\";\n\n    const headerImageRight = document.createElement('img');\n    headerImageRight.src = 'assets/husky3.jpg';\n    headerImageRight.alt = 'husky image';\n\n    header.appendChild(headerImageLeft);\n    header.appendChild(restaurantTitle);\n    header.appendChild(headerImageRight);\n    header.appendChild(createNav());\n\n    return header;\n}\n\nfunction createNav(){\n    const nav = document.createElement('nav');\n\n    const homeButton = document.createElement('button');\n    homeButton.textContent = 'Home';\n    homeButton.classList.add('home-button');\n    homeButton.addEventListener('click',function(e){\n        if(e.target.classList.contains('active')) return;\n        setActiveButton(homeButton);\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    })\n\n    const menuButton = document.createElement('button');\n    menuButton.textContent = 'Menu';\n    menuButton.classList.add('menu-button');\n    menuButton.addEventListener('click',function(e){\n        if(e.target.classList.contains('active')) return;\n        setActiveButton(menuButton);\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    })\n\n    const contactButton = document.createElement('button');\n    contactButton.textContent = 'Contact';\n    contactButton.classList.add('contact-button');\n    contactButton.addEventListener('click',function(e){\n        if(e.target.classList.contains('active')) return;\n        setActiveButton(contactButton);\n        (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    })\n\n    nav.appendChild(homeButton);\n    nav.appendChild(menuButton);\n    nav.appendChild(contactButton);\n\n    return nav;\n}\n\nfunction setActiveButton(button){\n    const buttons = document.querySelectorAll('button');\n    buttons.forEach((button) => {\n        button.classList.remove('active');\n    })\n    button.classList.add('active');\n}\n\nfunction createMain(){\n    const main = document.createElement('main');\n    main.setAttribute('id','main');\n    return main;\n}\n\nfunction loadWebsite(){\n    const content = document.getElementById('content');\n\n    content.appendChild(createHeader());\n    content.appendChild(createMain());\n\n    setActiveButton(document.querySelector('button'));\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadWebsite);\n\n//# sourceURL=webpack://restaurant-page/./src/website.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;