/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/front.js":
/*!*************************!*\
  !*** ./blocks/front.js ***!
  \*************************/
/***/ (() => {

eval("//frontend js functionality\nwindow.addEventListener('DOMContentLoaded', function () {\n   var displayedVideos = document.querySelector('.displayed-video video');\n   var videos = document.querySelectorAll('.thumb-bar-video .thumb-container .thumb-video-item video');\n   var individualTexts = document.querySelectorAll('.thumb-bar-video .thumb-container .texts');\n   var text = document.querySelector('.text');\n   var overlay = document.querySelector('.overlay');\n\n   //set video describtion functionality\n   function setText() {\n      var setTextArray = [];\n      for (var i = 0; i < individualTexts.length; i++) {\n         var individualText = individualTexts[i];\n         setTextArray.push(individualText.innerHTML);\n      }\n      return setTextArray;\n   }\n   //save individual text inside result\n   var result = setText();\n\n   //loop through viddeo, controls all click activity\n\n   var _loop = function _loop(i) {\n      var video = videos[i];\n      video.controls = false;\n\n      video.setAttribute('text', result[i]);\n      text.textContent = video.getAttribute('text', result[0]);\n      video.addEventListener('click', function (e) {\n         text.textContent = video.getAttribute('text', result[i]);\n         displayedVideos.src = e.target.src;\n         displayedVideos.poster = video.poster;\n\n         if (text.classList.contains(\"none\")) {\n            text.classList.remove(\"none\");\n            text.classList.add(\"text\");\n         }\n         if (overlay.classList.contains(\"none\")) {\n            overlay.classList.remove(\"none\");\n            overlay.classList.add(\"overlay\");\n         }\n      });\n\n      text.addEventListener('click', function (e) {\n         displayedVideos.play();\n         text.classList.add(\"none\");\n         overlay.classList.add(\"none\");\n      });\n   };\n\n   for (var i = 0; i < videos.length; i++) {\n      _loop(i);\n   }\n\n   //pause podcast when another is clicked\n   var tracks = Array.from(document.querySelectorAll('audio'));\n   tracks.forEach(function (track) {\n      track.addEventListener('play', function (event) {\n         tracks.forEach(function (track) {\n            if (track !== event.target) track.pause();\n         });\n      });\n   });\n});\n\n//# sourceURL=webpack://ray/./blocks/front.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.scss */ \"./src/css/main.scss\");\n/* harmony import */ var _blocks_front_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../blocks/front.js */ \"./blocks/front.js\");\n/* harmony import */ var _blocks_front_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blocks_front_js__WEBPACK_IMPORTED_MODULE_1__);\n// import '../css/main.scss';\n\n\n// import '/blocks/blocks.js';\n\n// const {registerBlockStyle, unregisterBlockStyle } = wp.blocks; \n// wp.domReady( () => {\n// _.forEach(wp.blocks.getBlockTypes(), function(blockType){\n//    let blockStyles = wp.data.select('core/blocks').getBlockStyles(blockType.name);\n//    if(!_.isEmpty(blockStyles)){\n//        _.forEach(_.pluck(blockStyles, 'name'), function(blockStyle){\n//                wp.blocks.unregisterBlockStyle(blockType.name, blockStyle);\n//        });        \n//    }\n//  });\n// })\n(function ($) {\n   $(document).ready(function () {\n      $(window).scroll(function () {\n         var scroll = $(window).scrollTop();\n         if (scroll > 200) {\n            $(\".site-header\").css(\"background\", \"#fff\");\n         } else {\n            $(\".site-header\").css(\"background\", \"transparent\");\n         }\n      });\n   });\n\n   $('.js-nav-toggle').click(function (e) {\n      e.preventDefault();\n      $('.js-nav-toggle').toggleClass('active');\n      $('.js-menu-toggle, html, body, header').toggleClass('menu-open');\n   });\n})(jQuery);\n\n//# sourceURL=webpack://ray/./src/js/main.js?");

/***/ }),

/***/ "./src/css/main.scss":
/*!***************************!*\
  !*** ./src/css/main.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ray/./src/css/main.scss?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;