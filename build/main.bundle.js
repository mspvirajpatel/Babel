/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _lib = __webpack_require__(1);

alert((0, _lib.sqr)(10) + (0, _lib.Add)("3", "5") + (0, _lib.Sub)(34, 5)); //import {} from './second';

// import date from 'second';

// import {calcCircumference} from 'second.js'; alert(calcCircumference(200));

// import * as kam from './second';
//
// console.log(kam);


// let hello = "Hello World";
//
// alert(hello);

// var hello = "Hello World +" +
//     "test +" +
//     "New ";
//
// alert(hello);


//let hello = `Hello World, test, New`; // /n Use ,

// alert(hello);
//
// function closerAfter() {
//     alert(hello);
// }

// setTimeout(closerAfter,4000);


// let helloPrint = (hello) =>
// {
//     alert(hello);
// }
//
// setTimeout(helloPrint("hello"),4000);

// let userInfo = {"name":"Viraj","Password" : "12345","objectsData" : {"Hello" : "World"},"Mobile" : "9722202819"};
// let {name,Password} = userInfo;
// let {objectsData} = userInfo
// let {Hello} = objectsData
//
// alert(name + Password + Hello);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sqr = sqr;
exports.Add = Add;
exports.Div = Div;
exports.Sub = Sub;
function sqr(a) {
    return a * a;
}

function Add(a, b) {
    return a + b;
}

function Div(a, b) {
    return a / b;
}

function Sub(a, b) {
    return a - b;
}

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map