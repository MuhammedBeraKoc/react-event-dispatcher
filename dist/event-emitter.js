(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["EventEmitter"] = factory();
	else
		root["EventEmitter"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
    function EventEmitter() {
        _classCallCheck(this, EventEmitter);
    }

    _createClass(EventEmitter, [{
        key: 'emit',


        /**
         * Dispatches the given function set to the __$.
         * @param {string} key The string representation of the components name
         * @param {Function[]} $functionSet A set of functions which is to be dispatched
         * @return {void}
         */
        value: function emit(key) {
            for (var _len = arguments.length, $functionSet = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                $functionSet[_key - 1] = arguments[_key];
            }

            if (EventEmitter.__$.set(key, EventEmitter.__$.get(key) ? EventEmitter.__$.get(key).concat($functionSet) : [].concat(_toConsumableArray($functionSet)))) return;else {
                throw new Error('Cannot add the new function set to the EventEmitter.');
            }
        }

        /**
         * Gets a function with the given key an index.
         * When failed returns a function which throws and error.
         * @param {string} key The string representation of the components name
         * @param {number} index The index of the function to be got
         * @return {Function} The function with the given index and key
         */

        /**
         * A static variable for storing events
         * It is shared across all components
         * Yet it is hidden from them
         * So this variable is private
         */

    }, {
        key: 'getOne',
        value: function getOne(key) {
            var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            if (EventEmitter.__$.has(key)) {
                return EventEmitter.__$.get(key)[index];
            } else {
                console.error('Key has not been found');
                return function () {
                    throw new Error('Key has not been found');
                };
            }
        }

        /**
         * Gets the function set of the given key.
         * When failed returns a function which throws and error.
         * @param {string} key The string representation of the components name
         * @return {Function[] | Function} Function set for the given key
         */

    }, {
        key: 'getAll',
        value: function getAll(key) {
            if (EventEmitter.__$.has(key)) {
                return EventEmitter.__$.get(key);
            } else {
                console.error('Key has not been found');
                return function () {
                    throw new Error('Key has not been found');
                };
            }
        }

        /**
         * Instead of getOne, runs the function with given key and index.
         * @param {string} key The string representation of the components name
         * @param {number} index The index of the function to be executed
         * @param {any[]} args The arguments to be injected in the target function as parameters
         * @return {void}
         */

    }, {
        key: 'triggerOne',
        value: function triggerOne(key, index) {
            for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
                args[_key2 - 2] = arguments[_key2];
            }

            this.getOne(key, index).apply(undefined, _toConsumableArray(args));
        }

        /**
         * Instead of getAll, runs the function set with given key.
         * @param {string} key The string representation of the components name
         * @param {any[][]} argsSet A set of arguments to be injected in the target function set as parameters
         * @return {void}
         */

    }, {
        key: 'triggerAll',
        value: function triggerAll(key, argsSet) {
            var functionSet = this.getAll(key);
            for (var i = 0; i < functionSet.length; ++i) {
                functionSet[i].apply(functionSet, _toConsumableArray(argsSet[i]));
            }
        }

        /**
         * Clears the event map __$.
         * @return {void}
         */

    }, {
        key: 'clear',
        value: function clear() {
            EventEmitter.__$.clear();
        }
    }]);

    return EventEmitter;
}();

EventEmitter.__$ = new Map();


var eventEmitter = new EventEmitter();
exports.default = eventEmitter;
module.exports = exports.default;

/***/ })
/******/ ]);
});