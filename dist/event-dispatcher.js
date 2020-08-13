module.exports =
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EventDispatcher = /*#__PURE__*/function () {
  /**
   * A static variable for storing events
   * It is shared across all components
   * Yet it is hidden from them
   * So this variable is private
   */
  function EventDispatcher() {
    _classCallCheck(this, EventDispatcher);

    _defineProperty(this, "KeyNotFoundError", void 0);

    this.KeyNotFoundError = /*#__PURE__*/function (_Error) {
      _inherits(_class, _Error);

      var _super = _createSuper(_class);

      function _class(message) {
        var _this;

        _classCallCheck(this, _class);

        _this = _super.call(this, message);
        _this.name = 'KeyNotFoundError';
        return _this;
      }

      return _class;
    }( /*#__PURE__*/_wrapNativeSuper(Error));
  }
  /**
   * Dispatches the given function set to the __$.
   * @param {string} key The string representation of the components name
   * @param {Function[]} functionSet A set of functions which is to be dispatched
   * @return {void}
   */


  _createClass(EventDispatcher, [{
    key: "dispatch",
    value: function dispatch(key) {
      var currentFunctionSet = EventDispatcher.__$.get(key);

      for (var _len = arguments.length, functionSet = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        functionSet[_key - 1] = arguments[_key];
      }

      if (!EventDispatcher.__$.set(key, currentFunctionSet ? currentFunctionSet.concat(functionSet) : [].concat(functionSet))) throw new Error('Cannot add the new function set to the EventDispatcher.');
    }
    /**
     * Gets a function with the given key an index.
     * When failed returns a function which throws an error.
     * @param {string} key The string representation of the components name
     * @param {number} index The index of the function to be got
     * @return {Function} The function with the given index and key
     */

  }, {
    key: "getOne",
    value: function getOne(key) {
      var _this2 = this;

      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var errorFunction = function errorFunction() {
        throw new _this2.KeyNotFoundError('Key has not been found.');
      };

      var functionSet = EventDispatcher.__$.get(key);

      return functionSet ? functionSet[index] : errorFunction;
    }
    /**
     * Gets the function set of the given key.
     * When failed returns a function which throws an error.
     * @param {string} key The string representation of the components name
     * @return {Function[] | Function} Function set for the given key
     */

  }, {
    key: "getAll",
    value: function getAll(key) {
      var _this3 = this;

      var errorFunction = function errorFunction() {
        throw new _this3.KeyNotFoundError('Key has not been found.');
      };

      var functionSet = EventDispatcher.__$.get(key);

      return functionSet ? functionSet : errorFunction;
    }
    /**
     * @deprecated
     * Instead of getOne, runs the function with given key and index and args.
     * Use runOne instead of this method since it is likely to be removed in newer versions.
     * @template T
     * @param {string} key The string representation of the components name
     * @param {number} index The index of the function to be executed
     * @param {any[]} args The arguments to be injected in the target function as parameters
     * @return {T|unknown} Returns the return value of the executed function
     */

  }, {
    key: "triggerOne",
    value: function triggerOne(key) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      return this.getOne(key, index).apply(void 0, args);
    }
    /**
     * @deprecated
     * Instead of getAll, runs the function set with given key.
     * Use runAll instead of this method since it is likely to be removed in newer versions.
     * @param {string} key The string representation of the components name
     * @param {any[][]} argsSet A set of arguments to be injected in the target function set as parameters
     * @return {any[]} Returns the return value set of the executed function set
     */

  }, {
    key: "triggerAll",
    value: function triggerAll(key, argsSet) {
      var functionSet = this.getAll(key);
      var returnValues = [];

      for (var i = 0; i < functionSet.length; ++i) {
        returnValues.push(functionSet[i].apply(functionSet, _toConsumableArray(argsSet[i])));
      }

      return returnValues;
    }
    /**
     * Instead of getOne, runs the function with given key and index and args.
     * @template T
     * @param {string} key The string representation of the components name
     * @param {number} index The index of the function to be executed
     * @param {any[]} args The arguments to be injected in the target function as parameters
     * @return {T|unknown} Returns the return value of the executed function
     */

  }, {
    key: "runOne",
    value: function runOne(key) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        args[_key3 - 2] = arguments[_key3];
      }

      return this.getOne(key, index).apply(void 0, args);
    }
    /**
     * Instead of getAll, runs the function set with given key and argument set.
     * @param {string} key The string representation of the components name
     * @param {any[][]} argsSet A set of arguments to be injected in the target function set as parameters
     * @return {any[]} Returns the return value set of the executed function set
     */

  }, {
    key: "runAll",
    value: function runAll(key, argsSet) {
      var functionSet = this.getAll(key);
      var returnValues = [];

      for (var i = 0; i < functionSet.length; ++i) {
        returnValues.push(functionSet[i].apply(functionSet, _toConsumableArray(argsSet[i])));
      }

      return returnValues;
    }
    /**
     * Resolves the result then returns it as a promise
     * @template T
     * @param key {string} The string representation of the components name
     * @param index {number} The index of the function to be executed
     * @param args {any[]} The arguments to be injected in the target function as parameters
     * @return {Promise<T>|Promise<unknown>}
     */

  }, {
    key: "resolveOne",
    value: function resolveOne(key) {
      var _this4 = this;

      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      for (var _len4 = arguments.length, args = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        args[_key4 - 2] = arguments[_key4];
      }

      return new Promise(function (resolve) {
        resolve(_this4.runOne.apply(_this4, [key, index].concat(args)));
      });
    }
    /**
     * Resolves the result set then returns it as a promise
     * @param key {string} The string representation of the components name
     * @param {any[][]} argsSet A set of arguments to be injected in the target function set as parameters
     * @return {Promise<any[]>|Promise<unknown>}
     */

  }, {
    key: "resolveAll",
    value: function resolveAll(key, argsSet) {
      var promiseSet = [];
      var functionSet = this.getAll(key);

      for (var i = 0; i < functionSet.length; ++i) {
        promiseSet.push(Promise.resolve(functionSet[i].apply(functionSet, _toConsumableArray(argsSet[i]))));
      }

      return Promise.all(promiseSet);
    }
    /**
     * Removes the given key from key map.
     * Warning: This method is meant to be used only in componentWillUnmount
     * @param {string} key The string representation of the components name
     */

  }, {
    key: "deleteKey",
    value: function deleteKey(key) {
      if (!EventDispatcher.__$["delete"](key)) {
        throw new this.KeyNotFoundError('Key has not been found.');
      }
    }
    /**
     * Prints the key map as a visual tree
     * @param {boolean} isTest Returns the output string if it is true, otherwise prints the output to the console
     */

  }, {
    key: "print",
    value: function print() {
      var isTest = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var outputString = '';
      outputString += '*\n';
      var keys = Array.from(EventDispatcher.__$.keys());

      for (var i = 0; i < keys.length; ++i) {
        var lineToken = i === keys.length - 1 ? ' ' : '|';
        var keyToken = i === keys.length - 1 ? '└──' : '├──';
        var key = keys[i];
        var functionSet = this.getAll(key);
        outputString += "".concat(keyToken, " ").concat(key, "\n");

        for (var j = 0; j < functionSet.length; ++j) {
          outputString += "".concat(lineToken, "   ").concat(j === functionSet.length - 1 ? '└──' : '├──', " ").concat(functionSet[j].name, "\n");
        }
      }

      if (isTest) {
        return outputString;
      }

      console.log(outputString);
    }
    /**
     * Clears the event map __$.
     * @return {void}
     */

  }, {
    key: "clear",
    value: function clear() {
      EventDispatcher.__$.clear();
    }
  }]);

  return EventDispatcher;
}();
/**
 * @brief Singleton object of EventDispatcher
 * @const {EventDispatcher}
 */


_defineProperty(EventDispatcher, "__$", new Map());

var eventEmitter = new EventDispatcher();
/* harmony default export */ __webpack_exports__["default"] = (eventEmitter);

/***/ })
/******/ ])["default"];