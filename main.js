/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Api.js":
/*!*******************************!*\
  !*** ./src/components/Api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Api)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _excluded = ["url"];

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _url = /*#__PURE__*/new WeakMap();

var _configApi = /*#__PURE__*/new WeakMap();

var _renderRequest = /*#__PURE__*/new WeakSet();

var Api = /*#__PURE__*/function () {
  function Api(_ref) {
    var url = _ref.url,
        configApi = _objectWithoutProperties(_ref, _excluded);

    _classCallCheck(this, Api);

    _classPrivateMethodInitSpec(this, _renderRequest);

    _classPrivateFieldInitSpec(this, _url, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _configApi, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _url, url);

    _classPrivateFieldSet(this, _configApi, configApi);
  }

  _createClass(Api, [{
    key: "getUser",
    value: function getUser() {
      return _classPrivateMethodGet(this, _renderRequest, _renderRequest2).call(this, "users/me");
    }
  }, {
    key: "getCards",
    value: function getCards() {
      return _classPrivateMethodGet(this, _renderRequest, _renderRequest2).call(this, "cards");
    }
  }, {
    key: "updateUser",
    value: function updateUser(inputValues) {
      return _classPrivateMethodGet(this, _renderRequest, _renderRequest2).call(this, 'users/me', 'PATCH', inputValues);
    }
  }, {
    key: "addCard",
    value: function addCard(inputValues) {
      return _classPrivateMethodGet(this, _renderRequest, _renderRequest2).call(this, "cards", 'POST', inputValues);
    }
  }, {
    key: "setLike",
    value: function setLike(id) {
      return _classPrivateMethodGet(this, _renderRequest, _renderRequest2).call(this, "cards/".concat(id, "/likes"), 'PUT');
    }
  }, {
    key: "removeLike",
    value: function removeLike(id) {
      return _classPrivateMethodGet(this, _renderRequest, _renderRequest2).call(this, "cards/".concat(id, "/likes"), 'DELETE');
    }
  }, {
    key: "deleteCard",
    value: function deleteCard(id) {
      return _classPrivateMethodGet(this, _renderRequest, _renderRequest2).call(this, "cards/".concat(id), "DELETE");
    }
  }, {
    key: "setAvatar",
    value: function setAvatar(data) {
      return _classPrivateMethodGet(this, _renderRequest, _renderRequest2).call(this, 'users/me/avatar', 'PATCH', data);
    }
  }]);

  return Api;
}();

function _renderRequest2(_x) {
  return _renderRequest3.apply(this, arguments);
}

function _renderRequest3() {
  _renderRequest3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(path) {
    var method,
        body,
        options,
        response,
        json,
        _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            method = _args.length > 1 && _args[1] !== undefined ? _args[1] : "GET";
            body = _args.length > 2 ? _args[2] : undefined;
            options = _objectSpread(_objectSpread({}, _classPrivateFieldGet(this, _configApi)), {}, {
              method: method
            });

            if (body) {
              typeof body === "string" ? options.body = body : options.body = JSON.stringify(body);
            }

            _context.next = 6;
            return fetch(_classPrivateFieldGet(this, _url) + path, options);

          case 6:
            response = _context.sent;
            _context.next = 9;
            return response.json();

          case 9:
            json = _context.sent;

            if (!response.ok) {
              _context.next = 12;
              break;
            }

            return _context.abrupt("return", json);

          case 12:
            throw new Error(json.message);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _renderRequest3.apply(this, arguments);
}



/***/ }),

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Card": () => (/* binding */ Card)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _cardsTemplate = /*#__PURE__*/new WeakMap();

var _cardItem = /*#__PURE__*/new WeakMap();

var _name = /*#__PURE__*/new WeakMap();

var _link = /*#__PURE__*/new WeakMap();

var _cardImage = /*#__PURE__*/new WeakMap();

var _handleCardClick = /*#__PURE__*/new WeakMap();

var _handleDeleteClick = /*#__PURE__*/new WeakMap();

var _likesCounter = /*#__PURE__*/new WeakMap();

var _ownerId = /*#__PURE__*/new WeakMap();

var _deleteButton = /*#__PURE__*/new WeakMap();

var _handleLikeClick = /*#__PURE__*/new WeakMap();

var _isLiked = /*#__PURE__*/new WeakMap();

var _likeButton = /*#__PURE__*/new WeakMap();

var _likesAmount = /*#__PURE__*/new WeakMap();

var _userId = /*#__PURE__*/new WeakMap();

var _getTemplate = /*#__PURE__*/new WeakSet();

var _handleLike = /*#__PURE__*/new WeakSet();

var _setLikesAmount = /*#__PURE__*/new WeakSet();

var _deleteHandler = /*#__PURE__*/new WeakSet();

var _setEventListeners = /*#__PURE__*/new WeakSet();

var Card = /*#__PURE__*/function () {
  function Card(cardsData, cardsIdSelector, userId, handleCardClick, handleDeleteClick, handleLikeClick) {
    var _this = this;

    _classCallCheck(this, Card);

    _classPrivateMethodInitSpec(this, _setEventListeners);

    _classPrivateMethodInitSpec(this, _deleteHandler);

    _classPrivateMethodInitSpec(this, _setLikesAmount);

    _classPrivateMethodInitSpec(this, _handleLike);

    _classPrivateMethodInitSpec(this, _getTemplate);

    _classPrivateFieldInitSpec(this, _cardsTemplate, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _cardItem, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _name, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _link, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _cardImage, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _handleCardClick, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _handleDeleteClick, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _likesCounter, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _ownerId, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _deleteButton, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _handleLikeClick, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _isLiked, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _likeButton, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _likesAmount, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _userId, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _cardsTemplate, document.querySelector(cardsIdSelector));

    _classPrivateFieldSet(this, _name, cardsData.name);

    _classPrivateFieldSet(this, _link, cardsData.link);

    _classPrivateFieldSet(this, _ownerId, cardsData.owner._id);

    _classPrivateFieldSet(this, _userId, userId);

    _classPrivateFieldSet(this, _likesAmount, cardsData.likes.length);

    _classPrivateFieldSet(this, _handleCardClick, handleCardClick);

    _classPrivateFieldSet(this, _handleDeleteClick, handleDeleteClick);

    _classPrivateFieldSet(this, _handleLikeClick, handleLikeClick);

    _classPrivateFieldSet(this, _isLiked, !!cardsData.likes.find(function (user) {
      return user._id === _classPrivateFieldGet(_this, _userId);
    }));
  }

  _createClass(Card, [{
    key: "setLike",
    value: function setLike(likes) {
      _classPrivateFieldGet(this, _likeButton).classList.add('places__like-button_active');

      _classPrivateFieldSet(this, _isLiked, true);

      _classPrivateMethodGet(this, _setLikesAmount, _setLikesAmount2).call(this, likes);
    }
  }, {
    key: "removeLike",
    value: function removeLike(likes) {
      _classPrivateFieldGet(this, _likeButton).classList.remove('places__like-button_active');

      _classPrivateFieldSet(this, _isLiked, false);

      _classPrivateMethodGet(this, _setLikesAmount, _setLikesAmount2).call(this, likes);
    }
  }, {
    key: "generateCard",
    value: function generateCard() {
      _classPrivateFieldSet(this, _cardItem, _classPrivateMethodGet(this, _getTemplate, _getTemplate2).call(this));

      _classPrivateFieldSet(this, _cardImage, _classPrivateFieldGet(this, _cardItem).querySelector('.places__image'));

      _classPrivateFieldSet(this, _deleteButton, _classPrivateFieldGet(this, _cardItem).querySelector('.places__delete-button'));

      _classPrivateFieldSet(this, _likeButton, _classPrivateFieldGet(this, _cardItem).querySelector('.places__like-button'));

      _classPrivateFieldSet(this, _likesCounter, _classPrivateFieldGet(this, _cardItem).querySelector('.places__likes-counter'));

      _classPrivateFieldGet(this, _cardItem).querySelector('.places__title').textContent = _classPrivateFieldGet(this, _name);
      _classPrivateFieldGet(this, _cardImage).src = _classPrivateFieldGet(this, _link);
      _classPrivateFieldGet(this, _cardImage).alt = _classPrivateFieldGet(this, _name);

      _classPrivateMethodGet(this, _setEventListeners, _setEventListeners2).call(this);

      if (_classPrivateFieldGet(this, _userId) !== _classPrivateFieldGet(this, _ownerId)) {
        _classPrivateFieldGet(this, _deleteButton).remove();
      }

      if (_classPrivateFieldGet(this, _isLiked)) {
        this.setLike(_classPrivateFieldGet(this, _likesAmount));
      }

      _classPrivateMethodGet(this, _setLikesAmount, _setLikesAmount2).call(this, _classPrivateFieldGet(this, _likesAmount));

      return _classPrivateFieldGet(this, _cardItem);
    }
  }, {
    key: "deleteCard",
    value: function deleteCard() {
      _classPrivateFieldGet(this, _cardItem).remove();

      _classPrivateFieldSet(this, _cardItem, null);
    }
  }]);

  return Card;
}();

function _getTemplate2() {
  return _classPrivateFieldGet(this, _cardsTemplate).content.querySelector('.places__item').cloneNode(true);
}

function _handleLike2() {
  _classPrivateFieldGet(this, _handleLikeClick).call(this, _classPrivateFieldGet(this, _isLiked));
}

function _setLikesAmount2(likes) {
  _classPrivateFieldGet(this, _likesCounter).textContent = likes;
}

function _deleteHandler2() {
  _classPrivateFieldGet(this, _handleDeleteClick).call(this);
}

function _setEventListeners2() {
  var _this2 = this;

  _classPrivateFieldGet(this, _likeButton).addEventListener('click', _classPrivateMethodGet(this, _handleLike, _handleLike2).bind(this));

  _classPrivateFieldGet(this, _deleteButton).addEventListener('click', _classPrivateMethodGet(this, _deleteHandler, _deleteHandler2).bind(this));

  _classPrivateFieldGet(this, _cardImage).addEventListener('click', function () {
    _classPrivateFieldGet(_this2, _handleCardClick).call(_this2, _classPrivateFieldGet(_this2, _name), _classPrivateFieldGet(_this2, _link));
  });
}

/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormValidator": () => (/* binding */ FormValidator)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _inactiveButtonClass = /*#__PURE__*/new WeakMap();

var _inputErrorClass = /*#__PURE__*/new WeakMap();

var _errorClass = /*#__PURE__*/new WeakMap();

var _submitButton = /*#__PURE__*/new WeakMap();

var _inputsList = /*#__PURE__*/new WeakMap();

var _errorElement = /*#__PURE__*/new WeakMap();

var _formElement = /*#__PURE__*/new WeakMap();

var _setButtonInactive = /*#__PURE__*/new WeakSet();

var _setButtonActive = /*#__PURE__*/new WeakSet();

var _hasInputsErrors = /*#__PURE__*/new WeakSet();

var _toggleButtonState = /*#__PURE__*/new WeakSet();

var _showInputError = /*#__PURE__*/new WeakSet();

var _hideInputError = /*#__PURE__*/new WeakSet();

var _checkValidity = /*#__PURE__*/new WeakSet();

var _setEventListeners = /*#__PURE__*/new WeakSet();

var FormValidator = /*#__PURE__*/function () {
  function FormValidator(config, formElement) {
    _classCallCheck(this, FormValidator);

    _classPrivateMethodInitSpec(this, _setEventListeners);

    _classPrivateMethodInitSpec(this, _checkValidity);

    _classPrivateMethodInitSpec(this, _hideInputError);

    _classPrivateMethodInitSpec(this, _showInputError);

    _classPrivateMethodInitSpec(this, _toggleButtonState);

    _classPrivateMethodInitSpec(this, _hasInputsErrors);

    _classPrivateMethodInitSpec(this, _setButtonActive);

    _classPrivateMethodInitSpec(this, _setButtonInactive);

    _classPrivateFieldInitSpec(this, _inactiveButtonClass, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _inputErrorClass, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _errorClass, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _submitButton, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _inputsList, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _errorElement, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _formElement, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _inactiveButtonClass, config.inactiveButtonClass);

    _classPrivateFieldSet(this, _inputErrorClass, config.inputErrorClass);

    _classPrivateFieldSet(this, _errorClass, config.errorClass);

    _classPrivateFieldSet(this, _formElement, formElement);

    _classPrivateFieldSet(this, _inputsList, Array.from(_classPrivateFieldGet(this, _formElement).querySelectorAll(config.inputSelector)));

    _classPrivateFieldSet(this, _submitButton, _classPrivateFieldGet(this, _formElement).querySelector(config.submitButtonSelector));
  }

  _createClass(FormValidator, [{
    key: "resetValidation",
    value: function resetValidation() {
      var _this = this;

      _classPrivateMethodGet(this, _setButtonInactive, _setButtonInactive2).call(this);

      _classPrivateFieldGet(this, _inputsList).forEach(function (input) {
        _classPrivateMethodGet(_this, _hideInputError, _hideInputError2).call(_this, input);
      });
    }
  }, {
    key: "enableValidation",
    value: function enableValidation() {
      _classPrivateMethodGet(this, _setEventListeners, _setEventListeners2).call(this);
    }
  }]);

  return FormValidator;
}();

function _setButtonInactive2() {
  _classPrivateFieldGet(this, _submitButton).classList.add(_classPrivateFieldGet(this, _inactiveButtonClass));

  _classPrivateFieldGet(this, _submitButton).setAttribute('disabled', true);
}

function _setButtonActive2() {
  _classPrivateFieldGet(this, _submitButton).classList.remove(_classPrivateFieldGet(this, _inactiveButtonClass));

  _classPrivateFieldGet(this, _submitButton).removeAttribute('disabled', false);
}

function _hasInputsErrors2() {
  return _classPrivateFieldGet(this, _inputsList).some(function (input) {
    return !input.validity.valid;
  });
}

function _toggleButtonState2() {
  if (_classPrivateMethodGet(this, _hasInputsErrors, _hasInputsErrors2).call(this)) {
    _classPrivateMethodGet(this, _setButtonInactive, _setButtonInactive2).call(this);
  } else {
    _classPrivateMethodGet(this, _setButtonActive, _setButtonActive2).call(this);
  }
}

function _showInputError2(input, errorMessage) {
  _classPrivateFieldSet(this, _errorElement, _classPrivateFieldGet(this, _formElement).querySelector("#".concat(input.id, "-error")));

  input.classList.add(_classPrivateFieldGet(this, _inputErrorClass));
  _classPrivateFieldGet(this, _errorElement).textContent = errorMessage;

  _classPrivateFieldGet(this, _errorElement).classList.add(_classPrivateFieldGet(this, _errorClass));
}

function _hideInputError2(input) {
  _classPrivateFieldSet(this, _errorElement, _classPrivateFieldGet(this, _formElement).querySelector("#".concat(input.id, "-error")));

  input.classList.remove(_classPrivateFieldGet(this, _inputErrorClass));
  _classPrivateFieldGet(this, _errorElement).textContent = '';

  _classPrivateFieldGet(this, _errorElement).classList.remove(_classPrivateFieldGet(this, _errorClass));
}

function _checkValidity2(input) {
  if (!input.validity.valid) {
    _classPrivateMethodGet(this, _showInputError, _showInputError2).call(this, input, input.validationMessage);
  } else {
    _classPrivateMethodGet(this, _hideInputError, _hideInputError2).call(this, input);
  }
}

function _setEventListeners2() {
  var _this2 = this;

  _classPrivateMethodGet(this, _toggleButtonState, _toggleButtonState2).call(this, _classPrivateFieldGet(this, _inputsList));

  _classPrivateFieldGet(this, _inputsList).forEach(function (input) {
    input.addEventListener('input', function () {
      _classPrivateMethodGet(_this2, _checkValidity, _checkValidity2).call(_this2, input);

      _classPrivateMethodGet(_this2, _toggleButtonState, _toggleButtonState2).call(_this2, _classPrivateFieldGet(_this2, _inputsList));
    });
  });
}

/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Popup)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _popup = /*#__PURE__*/new WeakMap();

var _handleEscClosePopup = /*#__PURE__*/new WeakMap();

var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    var _this = this;

    _classCallCheck(this, Popup);

    _classPrivateFieldInitSpec(this, _popup, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _handleEscClosePopup, {
      writable: true,
      value: function value(evt) {
        if (evt.key === 'Escape') {
          _this.closePopup(_classPrivateFieldGet(_this, _popup).querySelector('.popup_opened'));
        }
      }
    });

    _classPrivateFieldSet(this, _popup, document.querySelector(popupSelector));
  }

  _createClass(Popup, [{
    key: "openPopup",
    value: function openPopup() {
      _classPrivateFieldGet(this, _popup).classList.add('popup_opened');

      document.addEventListener('keydown', _classPrivateFieldGet(this, _handleEscClosePopup));
    }
  }, {
    key: "closePopup",
    value: function closePopup() {
      if (_classPrivateFieldGet(this, _popup)) {
        _classPrivateFieldGet(this, _popup).classList.remove('popup_opened');

        document.removeEventListener('keydown', _classPrivateFieldGet(this, _handleEscClosePopup));
      }
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;

      _classPrivateFieldGet(this, _popup).addEventListener('mousedown', function (evt) {
        if (evt.target.classList.contains('popup__modal-window') || evt.target.classList.contains('popup_opened')) {
          _this2.closePopup(_classPrivateFieldGet(_this2, _popup));
        }

        if (evt.target.classList.contains('popup__close-button')) {
          _this2.closePopup(_classPrivateFieldGet(_this2, _popup));
        }
      });
    }
  }]);

  return Popup;
}();



/***/ }),

/***/ "./src/components/PopupWithConfirm.js":
/*!********************************************!*\
  !*** ./src/components/PopupWithConfirm.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithConfirm)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }



var _popup = /*#__PURE__*/new WeakMap();

var _handleConfirm = /*#__PURE__*/new WeakMap();

var _buttonConfirm = /*#__PURE__*/new WeakMap();

var _data = /*#__PURE__*/new WeakMap();

var _customButtonText = /*#__PURE__*/new WeakMap();

var _isLoading = /*#__PURE__*/new WeakMap();

var PopupWithConfirm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithConfirm, _Popup);

  var _super = _createSuper(PopupWithConfirm);

  function PopupWithConfirm(popupSelector, handleConfirm) {
    var _this;

    _classCallCheck(this, PopupWithConfirm);

    _this = _super.call(this, popupSelector);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _popup, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _handleConfirm, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _buttonConfirm, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _data, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _customButtonText, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _isLoading, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(_assertThisInitialized(_this), _popup, document.querySelector(popupSelector));

    _classPrivateFieldSet(_assertThisInitialized(_this), _buttonConfirm, _classPrivateFieldGet(_assertThisInitialized(_this), _popup).querySelector('.popup__button_type_confirm'));

    _classPrivateFieldSet(_assertThisInitialized(_this), _handleConfirm, handleConfirm);

    _classPrivateFieldSet(_assertThisInitialized(_this), _isLoading, false);

    return _this;
  }

  _createClass(PopupWithConfirm, [{
    key: "openPopup",
    value: function openPopup(data) {
      _get(_getPrototypeOf(PopupWithConfirm.prototype), "openPopup", this).call(this);

      _classPrivateFieldSet(this, _data, data);
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;

      _get(_getPrototypeOf(PopupWithConfirm.prototype), "setEventListeners", this).call(this);

      _classPrivateFieldGet(this, _buttonConfirm).addEventListener('click', function () {
        if (!_classPrivateFieldGet(_this2, _isLoading)) {
          _classPrivateFieldSet(_this2, _customButtonText, _classPrivateFieldGet(_this2, _buttonConfirm).textContent);

          _classPrivateFieldGet(_this2, _buttonConfirm).textContent = "Сохранение...";

          _classPrivateFieldSet(_this2, _isLoading, true);
        }

        _classPrivateFieldGet(_this2, _handleConfirm).call(_this2, _classPrivateFieldGet(_this2, _data)).then(function () {
          _this2.closePopup();
        }).catch(function (err) {
          return console.log(err.message);
        }).finally(function () {
          if (_classPrivateFieldGet(_this2, _isLoading)) {
            _classPrivateFieldGet(_this2, _buttonConfirm).textContent = _classPrivateFieldGet(_this2, _customButtonText);

            _classPrivateFieldSet(_this2, _isLoading, false);
          }
        });
      });
    }
  }]);

  return PopupWithConfirm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/components/PopupWithForm.js":
/*!*****************************************!*\
  !*** ./src/components/PopupWithForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithForm)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }



var _handleFormSubmit = /*#__PURE__*/new WeakMap();

var _inputList = /*#__PURE__*/new WeakMap();

var _popup = /*#__PURE__*/new WeakMap();

var _form = /*#__PURE__*/new WeakMap();

var _isLoading = /*#__PURE__*/new WeakMap();

var _customButtonText = /*#__PURE__*/new WeakMap();

var _buttonSubmit = /*#__PURE__*/new WeakMap();

var _inputValues = /*#__PURE__*/new WeakMap();

var _getInputValues = /*#__PURE__*/new WeakSet();

var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);

  var _super = _createSuper(PopupWithForm);

  function PopupWithForm(popupSelector, handleFormSubmit) {
    var _this;

    _classCallCheck(this, PopupWithForm);

    _this = _super.call(this, popupSelector);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _getInputValues);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _handleFormSubmit, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _inputList, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _popup, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _form, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _isLoading, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _customButtonText, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _buttonSubmit, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _inputValues, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(_assertThisInitialized(_this), _popup, document.querySelector(popupSelector));

    _classPrivateFieldSet(_assertThisInitialized(_this), _form, _classPrivateFieldGet(_assertThisInitialized(_this), _popup).querySelector('.popup__form'));

    _classPrivateFieldSet(_assertThisInitialized(_this), _inputList, _toConsumableArray(_classPrivateFieldGet(_assertThisInitialized(_this), _form).querySelectorAll('.popup__input')));

    _classPrivateFieldSet(_assertThisInitialized(_this), _buttonSubmit, _classPrivateFieldGet(_assertThisInitialized(_this), _popup).querySelector('.popup__button'));

    _classPrivateFieldSet(_assertThisInitialized(_this), _handleFormSubmit, handleFormSubmit);

    _classPrivateFieldSet(_assertThisInitialized(_this), _isLoading, false);

    return _this;
  }

  _createClass(PopupWithForm, [{
    key: "setInputValues",
    value: function setInputValues(data) {
      _classPrivateFieldGet(this, _inputList).forEach(function (input) {
        if (data[input.name]) {
          input.value = data[input.name];
        }
      });
    }
  }, {
    key: "getForm",
    value: function getForm() {
      return _classPrivateFieldGet(this, _form);
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;

      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);

      _classPrivateFieldGet(this, _form).addEventListener('submit', function (evt) {
        evt.preventDefault();

        _classPrivateFieldSet(_this2, _inputValues, _classPrivateMethodGet(_this2, _getInputValues, _getInputValues2).call(_this2));

        if (!_classPrivateFieldGet(_this2, _isLoading)) {
          _classPrivateFieldSet(_this2, _customButtonText, _classPrivateFieldGet(_this2, _buttonSubmit).textContent);

          _classPrivateFieldGet(_this2, _buttonSubmit).textContent = "Сохранение...";

          _classPrivateFieldSet(_this2, _isLoading, true);
        }

        _classPrivateFieldGet(_this2, _handleFormSubmit).call(_this2, _classPrivateFieldGet(_this2, _inputValues)).then(function () {
          _this2.closePopup();
        }).catch(function (err) {
          return console.log(err.message);
        }).finally(function () {
          if (_classPrivateFieldGet(_this2, _isLoading)) {
            _classPrivateFieldGet(_this2, _buttonSubmit).textContent = _classPrivateFieldGet(_this2, _customButtonText);

            _classPrivateFieldSet(_this2, _isLoading, false);
          }
        });
      });
    }
  }, {
    key: "closePopup",
    value: function closePopup() {
      _classPrivateFieldGet(this, _form).reset();

      _get(_getPrototypeOf(PopupWithForm.prototype), "closePopup", this).call(this);
    }
  }]);

  return PopupWithForm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

function _getInputValues2() {
  return _classPrivateFieldGet(this, _inputList).reduce(function (inputValue, input) {
    inputValue[input.name] = input.value;
    return inputValue;
  }, {});
}



/***/ }),

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithImage)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }



var _image = /*#__PURE__*/new WeakMap();

var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);

  var _super = _createSuper(PopupWithImage);

  function PopupWithImage(popupSelector, imageSelector) {
    var _this;

    _classCallCheck(this, PopupWithImage);

    _this = _super.call(this, popupSelector);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _image, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(_assertThisInitialized(_this), _image, document.querySelector(imageSelector));

    return _this;
  }

  _createClass(PopupWithImage, [{
    key: "openPopup",
    value: function openPopup(name, link) {
      _get(_getPrototypeOf(PopupWithImage.prototype), "openPopup", this).call(this);

      _classPrivateFieldGet(this, _image).src = link;
      _classPrivateFieldGet(this, _image).alt = name;
      document.querySelector('.popup__image-caption').textContent = name;
    }
  }]);

  return PopupWithImage;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Section)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _renderer = /*#__PURE__*/new WeakMap();

var _container = /*#__PURE__*/new WeakMap();

var _clear = /*#__PURE__*/new WeakSet();

var Section = /*#__PURE__*/function () {
  function Section(_ref) {
    var renderer = _ref.renderer,
        cardsContainer = _ref.cardsContainer;

    _classCallCheck(this, Section);

    _classPrivateMethodInitSpec(this, _clear);

    _classPrivateFieldInitSpec(this, _renderer, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _container, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _renderer, renderer);

    _classPrivateFieldSet(this, _container, cardsContainer);
  }

  _createClass(Section, [{
    key: "renderItems",
    value: function renderItems(items) {
      var _this = this;

      _classPrivateMethodGet(this, _clear, _clear2).call(this);

      items.forEach(function (item) {
        return _classPrivateFieldGet(_this, _renderer).call(_this, item);
      });
    }
  }, {
    key: "addItem",
    value: function addItem(item) {
      _classPrivateFieldGet(this, _container).prepend(item);
    }
  }, {
    key: "addItems",
    value: function addItems(items) {
      var _this2 = this;

      items.forEach(function (item) {
        return _this2.addItem(item);
      });
    }
  }]);

  return Section;
}();

function _clear2() {
  _classPrivateFieldGet(this, _container).innerHTML = '';
}



/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserInfo)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _data = /*#__PURE__*/new WeakMap();

var _userId = /*#__PURE__*/new WeakMap();

var UserInfo = /*#__PURE__*/function () {
  function UserInfo(data) {
    _classCallCheck(this, UserInfo);

    _classPrivateFieldInitSpec(this, _data, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _userId, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _data, data);

    this.nameSelector = document.querySelector(_classPrivateFieldGet(this, _data).userName);
    this.infoSelector = document.querySelector(_classPrivateFieldGet(this, _data).userInfo);
    this.avatarSelector = document.querySelector(_classPrivateFieldGet(this, _data).avatar);
    this.avatarSelector.textContent = this.avatarSelector.src;
  }

  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      return {
        name: this.nameSelector.textContent,
        about: this.infoSelector.textContent
      };
    }
  }, {
    key: "setUserId",
    value: function setUserId(userId) {
      _classPrivateFieldSet(this, _userId, userId);
    }
  }, {
    key: "getUserId",
    value: function getUserId() {
      return _classPrivateFieldGet(this, _userId);
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(data) {
      this.nameSelector.textContent = data.name;
      this.infoSelector.textContent = data.about;
      this.avatarSelector.src = data.avatar;
    }
  }, {
    key: "setAvatar",
    value: function setAvatar(url) {
      this.avatarSelector.src = url;
    }
  }]);

  return UserInfo;
}();



/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cardsContainer": () => (/* binding */ cardsContainer),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "userSelectorsData": () => (/* binding */ userSelectorsData)
/* harmony export */ });
var config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
var cardsContainer = document.querySelector('.places__items');
var userSelectorsData = {
  userName: '.profile__title',
  userInfo: '.profile__subtitle',
  avatar: '.profile__avatar'
};

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* harmony import */ var _components_Api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Api.js */ "./src/components/Api.js");
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PopupWithForm.js */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_PopupWithConfirm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PopupWithConfirm.js */ "./src/components/PopupWithConfirm.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/constants.js */ "./src/utils/constants.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var handleAddButton = function handleAddButton() {
  popupAdd.openPopup();
  validatorFormAdd.resetValidation();
};

var handleEditButton = function handleEditButton() {
  popupEdit.openPopup();
  popupEdit.setInputValues(userInfo.getUserInfo());
  validatorFormEdit.resetValidation();
};

var handleAvatar = function handleAvatar() {
  popupEditAvatar.openPopup();
  popupEditAvatar.setInputValues(userInfo.getUserInfo());
  validatorFormAvatar.resetValidation();
};

var createCard = function createCard(values) {
  var card = new _components_Card_js__WEBPACK_IMPORTED_MODULE_2__.Card(values, '#cardtemplate', userInfo.getUserId(), popupImage.openPopup.bind(popupImage), function () {
    popupConfirm.openPopup({
      id: values._id,
      handleDelete: card.deleteCard.bind(card)
    });
  }, function (isLiked) {
    if (isLiked) {
      api.removeLike(values._id).then(function (data) {
        return card.removeLike(data.likes.length);
      }).catch(function (err) {
        return console.log(err.message);
      });
    } else {
      api.setLike(values._id).then(function (data) {
        return card.setLike(data.likes.length);
      }).catch(function (err) {
        return console.log(err.message);
      });
    }
  });
  return card.generateCard();
};

var api = new _components_Api_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
  url: 'https://nomoreparties.co/v1/cohort-52/',
  headers: {
    authorization: '79dfd97e-4c73-4c37-a7d5-b5e09710f5c9',
    'Content-Type': 'application/json'
  }
});
var cardList = new _components_Section_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
  renderer: function renderer(cardData) {
    cardList.addItem(createCard(cardData));
  },
  cardsContainer: _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.cardsContainer
});
Promise.all([api.getUser(), api.getCards()]).then(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      userData = _ref2[0],
      cardsData = _ref2[1];

  userInfo.setUserInfo(userData);
  userInfo.setUserId(userData._id);
  cardList.renderItems(cardsData.reverse());
}).catch(function (err) {
  return console.log(err.message);
});

var createValidator = function createValidator(form) {
  var formValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_8__.FormValidator(_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.config, form);
  return formValidator;
};

var popupImage = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_4__["default"]('.popup_type_image', '.popup__image');
var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.userSelectorsData);
var popupAdd = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__["default"]('.popup_type_add', function (inputValues) {
  return api.addCard(inputValues).then(function (cardData) {
    return cardList.addItem(createCard(cardData));
  });
});
var popupEdit = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__["default"]('.popup_type_edit', function (inputValues) {
  return api.updateUser(inputValues).then(function (userData) {
    return userInfo.setUserInfo(userData);
  });
});
var popupEditAvatar = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__["default"]('.popup_type_set-avatar', function (inputValues) {
  return api.setAvatar({
    avatar: inputValues.avatar
  }).then(userInfo.setAvatar(inputValues.avatar));
});
var popupConfirm = new _components_PopupWithConfirm_js__WEBPACK_IMPORTED_MODULE_6__["default"]('.popup_type_confirm', function (_ref3) {
  var id = _ref3.id,
      handleDelete = _ref3.handleDelete;
  return api.deleteCard(id).then(function () {
    return handleDelete();
  });
});
var validatorFormAdd = createValidator(popupAdd.getForm());
var validatorFormEdit = createValidator(popupEdit.getForm());
var validatorFormAvatar = createValidator(popupEditAvatar.getForm());
validatorFormAdd.enableValidation();
validatorFormEdit.enableValidation();
validatorFormAvatar.enableValidation();
popupImage.setEventListeners();
popupAdd.setEventListeners();
popupEdit.setEventListeners();
popupEditAvatar.setEventListeners();
popupConfirm.setEventListeners();
document.querySelector('.profile__add-button').addEventListener('click', handleAddButton);
document.querySelector('.profile__edit-button').addEventListener('click', handleEditButton);
document.querySelector('.profile__avatar-container').addEventListener('click', handleAvatar);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUyxDQUFDc0MsT0FBVixFQUFELENBQXpDO0FBQ0EsSUFBTWhDLG1CQUFtQixHQUFHMEIsZUFBZSxDQUFDM0IsZUFBZSxDQUFDaUMsT0FBaEIsRUFBRCxDQUEzQztBQUVBekMsZ0JBQWdCLENBQUMwQyxnQkFBakI7QUFDQXBDLGlCQUFpQixDQUFDb0MsZ0JBQWxCO0FBQ0FqQyxtQkFBbUIsQ0FBQ2lDLGdCQUFwQjtBQUVBNUIsVUFBVSxDQUFDNkIsaUJBQVg7QUFDQTdDLFFBQVEsQ0FBQzZDLGlCQUFUO0FBQ0F4QyxTQUFTLENBQUN3QyxpQkFBVjtBQUNBbkMsZUFBZSxDQUFDbUMsaUJBQWhCO0FBQ0E1QixZQUFZLENBQUM0QixpQkFBYjtBQUVBbEksUUFBUSxDQUFDQyxhQUFULENBQXVCLHNCQUF2QixFQUErQ2tCLGdCQUEvQyxDQUFnRSxPQUFoRSxFQUF5RWlFLGVBQXpFO0FBQ0FwRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsdUJBQXZCLEVBQWdEa0IsZ0JBQWhELENBQWlFLE9BQWpFLEVBQTBFc0UsZ0JBQTFFO0FBQ0F6RixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsNEJBQXZCLEVBQXFEa0IsZ0JBQXJELENBQXNFLE9BQXRFLEVBQStFMkUsWUFBL0UsRSIsInNvdXJjZXMiOlsid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvQXBpLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aENvbmZpcm0uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL3BhZ2VzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21lc3RvLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwaSB7XG5cbiAgI3VybDtcbiAgI2NvbmZpZ0FwaTtcblxuICBjb25zdHJ1Y3Rvcih7IHVybCwgLi4uY29uZmlnQXBpIH0pIHtcblxuICAgIHRoaXMuI3VybCA9IHVybDtcbiAgICB0aGlzLiNjb25maWdBcGkgPSBjb25maWdBcGk7XG4gIH1cblxuICBhc3luYyAjcmVuZGVyUmVxdWVzdChwYXRoLCBtZXRob2QgPSBcIkdFVFwiLCBib2R5KSB7XG5cbiAgICBjb25zdCBvcHRpb25zID0geyAuLi50aGlzLiNjb25maWdBcGksIG1ldGhvZCB9O1xuXG4gICAgaWYgKGJvZHkpIHtcblxuICAgICAgKHR5cGVvZiBib2R5ID09PSBcInN0cmluZ1wiKSA/IG9wdGlvbnMuYm9keSA9IGJvZHlcbiAgICAgICAgOiBvcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeShib2R5KTtcbiAgICB9XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0aGlzLiN1cmwgKyBwYXRoLCBvcHRpb25zKTtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICByZXR1cm4ganNvbjtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoanNvbi5tZXNzYWdlKTtcbiAgfVxuXG4gIGdldFVzZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3JlbmRlclJlcXVlc3QoXCJ1c2Vycy9tZVwiKTtcbiAgfVxuXG4gIGdldENhcmRzKCkge1xuICAgIHJldHVybiB0aGlzLiNyZW5kZXJSZXF1ZXN0KFwiY2FyZHNcIik7XG4gIH1cblxuICB1cGRhdGVVc2VyKGlucHV0VmFsdWVzKSB7XG5cbiAgICByZXR1cm4gdGhpcy4jcmVuZGVyUmVxdWVzdCgndXNlcnMvbWUnLCAnUEFUQ0gnLCBpbnB1dFZhbHVlcyk7XG4gIH1cblxuICBhZGRDYXJkKGlucHV0VmFsdWVzKSB7XG4gICAgcmV0dXJuIHRoaXMuI3JlbmRlclJlcXVlc3QoXCJjYXJkc1wiLCAnUE9TVCcsIGlucHV0VmFsdWVzKTtcbiAgfVxuXG4gIHNldExpa2UoaWQpIHtcbiAgICByZXR1cm4gdGhpcy4jcmVuZGVyUmVxdWVzdChgY2FyZHMvJHtpZH0vbGlrZXNgLCAnUFVUJyk7XG4gIH1cblxuICByZW1vdmVMaWtlKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuI3JlbmRlclJlcXVlc3QoYGNhcmRzLyR7aWR9L2xpa2VzYCwgJ0RFTEVURScpO1xuICB9XG5cbiAgZGVsZXRlQ2FyZChpZCkge1xuICAgIHJldHVybiB0aGlzLiNyZW5kZXJSZXF1ZXN0KGBjYXJkcy8ke2lkfWAsIFwiREVMRVRFXCIpO1xuICB9XG5cbiAgc2V0QXZhdGFyKGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy4jcmVuZGVyUmVxdWVzdCgndXNlcnMvbWUvYXZhdGFyJywgJ1BBVENIJywgZGF0YSk7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBDYXJkIHtcblxuICAjY2FyZHNUZW1wbGF0ZTtcbiAgI2NhcmRJdGVtO1xuICAjbmFtZTtcbiAgI2xpbms7XG4gICNjYXJkSW1hZ2U7XG4gICNoYW5kbGVDYXJkQ2xpY2s7XG4gICNoYW5kbGVEZWxldGVDbGljaztcbiAgI2xpa2VzQ291bnRlcjtcbiAgI293bmVySWQ7XG4gICNkZWxldGVCdXR0b247XG4gICNoYW5kbGVMaWtlQ2xpY2s7XG4gICNpc0xpa2VkO1xuICAjbGlrZUJ1dHRvbjtcbiAgI2xpa2VzQW1vdW50O1xuICAjdXNlcklkO1xuXG4gIGNvbnN0cnVjdG9yKGNhcmRzRGF0YSwgY2FyZHNJZFNlbGVjdG9yLCB1c2VySWQsIGhhbmRsZUNhcmRDbGljaywgaGFuZGxlRGVsZXRlQ2xpY2ssIGhhbmRsZUxpa2VDbGljaykge1xuXG4gICAgdGhpcy4jY2FyZHNUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2FyZHNJZFNlbGVjdG9yKTtcblxuICAgIHRoaXMuI25hbWUgPSBjYXJkc0RhdGEubmFtZTtcbiAgICB0aGlzLiNsaW5rID0gY2FyZHNEYXRhLmxpbms7XG5cbiAgICB0aGlzLiNvd25lcklkID0gY2FyZHNEYXRhLm93bmVyLl9pZDtcbiAgICB0aGlzLiN1c2VySWQgPSB1c2VySWQ7XG4gICAgdGhpcy4jbGlrZXNBbW91bnQgPSBjYXJkc0RhdGEubGlrZXMubGVuZ3RoO1xuXG4gICAgdGhpcy4jaGFuZGxlQ2FyZENsaWNrID0gaGFuZGxlQ2FyZENsaWNrO1xuICAgIHRoaXMuI2hhbmRsZURlbGV0ZUNsaWNrID0gaGFuZGxlRGVsZXRlQ2xpY2s7XG4gICAgdGhpcy4jaGFuZGxlTGlrZUNsaWNrID0gaGFuZGxlTGlrZUNsaWNrO1xuXG4gICAgdGhpcy4jaXNMaWtlZCA9ICEhY2FyZHNEYXRhLmxpa2VzLmZpbmQodXNlciA9PiB1c2VyLl9pZCA9PT0gdGhpcy4jdXNlcklkKTtcbiAgfVxuXG4gICNnZXRUZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jY2FyZHNUZW1wbGF0ZVxuICAgICAgLmNvbnRlbnQucXVlcnlTZWxlY3RvcignLnBsYWNlc19faXRlbScpLmNsb25lTm9kZSh0cnVlKTtcbiAgfVxuXG4gICNoYW5kbGVMaWtlKCkge1xuICAgIHRoaXMuI2hhbmRsZUxpa2VDbGljayh0aGlzLiNpc0xpa2VkKVxuICB9XG5cbiAgI3NldExpa2VzQW1vdW50KGxpa2VzKSB7XG5cbiAgICB0aGlzLiNsaWtlc0NvdW50ZXIudGV4dENvbnRlbnQgPSBsaWtlcztcbiAgfVxuXG4gIHNldExpa2UobGlrZXMpIHtcblxuICAgIHRoaXMuI2xpa2VCdXR0b24uY2xhc3NMaXN0LmFkZCgncGxhY2VzX19saWtlLWJ1dHRvbl9hY3RpdmUnKTtcbiAgICB0aGlzLiNpc0xpa2VkID0gdHJ1ZTtcbiAgICB0aGlzLiNzZXRMaWtlc0Ftb3VudChsaWtlcyk7XG4gIH1cblxuICByZW1vdmVMaWtlKGxpa2VzKSB7XG5cbiAgICB0aGlzLiNsaWtlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYWNlc19fbGlrZS1idXR0b25fYWN0aXZlJyk7XG4gICAgdGhpcy4jaXNMaWtlZCA9IGZhbHNlO1xuICAgIHRoaXMuI3NldExpa2VzQW1vdW50KGxpa2VzKTtcbiAgfVxuXG4gICNkZWxldGVIYW5kbGVyKCkge1xuICAgIHRoaXMuI2hhbmRsZURlbGV0ZUNsaWNrKCk7XG4gIH1cblxuICAjc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG5cbiAgICB0aGlzLiNsaWtlQnV0dG9uXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLiNoYW5kbGVMaWtlLmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy4jZGVsZXRlQnV0dG9uXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLiNkZWxldGVIYW5kbGVyLmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy4jY2FyZEltYWdlXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuI2hhbmRsZUNhcmRDbGljayh0aGlzLiNuYW1lLCB0aGlzLiNsaW5rKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgZ2VuZXJhdGVDYXJkKCkge1xuICAgIHRoaXMuI2NhcmRJdGVtID0gdGhpcy4jZ2V0VGVtcGxhdGUoKTtcblxuICAgIHRoaXMuI2NhcmRJbWFnZSA9IHRoaXMuI2NhcmRJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5wbGFjZXNfX2ltYWdlJyk7XG4gICAgdGhpcy4jZGVsZXRlQnV0dG9uID0gdGhpcy4jY2FyZEl0ZW0ucXVlcnlTZWxlY3RvcignLnBsYWNlc19fZGVsZXRlLWJ1dHRvbicpO1xuICAgIHRoaXMuI2xpa2VCdXR0b24gPSB0aGlzLiNjYXJkSXRlbS5xdWVyeVNlbGVjdG9yKCcucGxhY2VzX19saWtlLWJ1dHRvbicpO1xuICAgIHRoaXMuI2xpa2VzQ291bnRlciA9IHRoaXMuI2NhcmRJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5wbGFjZXNfX2xpa2VzLWNvdW50ZXInKTtcblxuICAgIHRoaXMuI2NhcmRJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5wbGFjZXNfX3RpdGxlJykudGV4dENvbnRlbnQgPSB0aGlzLiNuYW1lO1xuXG4gICAgdGhpcy4jY2FyZEltYWdlLnNyYyA9IHRoaXMuI2xpbms7XG4gICAgdGhpcy4jY2FyZEltYWdlLmFsdCA9IHRoaXMuI25hbWU7XG5cbiAgICB0aGlzLiNzZXRFdmVudExpc3RlbmVycygpO1xuXG4gICAgaWYgKHRoaXMuI3VzZXJJZCAhPT0gdGhpcy4jb3duZXJJZCkge1xuICAgICAgdGhpcy4jZGVsZXRlQnV0dG9uLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLiNpc0xpa2VkKSB7XG4gICAgICB0aGlzLnNldExpa2UodGhpcy4jbGlrZXNBbW91bnQpO1xuICAgIH1cblxuICAgIHRoaXMuI3NldExpa2VzQW1vdW50KHRoaXMuI2xpa2VzQW1vdW50KTtcblxuICAgIHJldHVybiB0aGlzLiNjYXJkSXRlbTtcbiAgfVxuXG4gIGRlbGV0ZUNhcmQoKSB7XG4gICAgdGhpcy4jY2FyZEl0ZW0ucmVtb3ZlKCk7XG4gICAgdGhpcy4jY2FyZEl0ZW0gPSBudWxsO1xuICB9XG59XG5cblxuXG5cblxuIiwiZXhwb3J0IGNsYXNzIEZvcm1WYWxpZGF0b3Ige1xuXG4gICNpbmFjdGl2ZUJ1dHRvbkNsYXNzO1xuICAjaW5wdXRFcnJvckNsYXNzO1xuICAjZXJyb3JDbGFzcztcbiAgI3N1Ym1pdEJ1dHRvbjtcbiAgI2lucHV0c0xpc3Q7XG4gICNlcnJvckVsZW1lbnQ7XG4gICNmb3JtRWxlbWVudDtcblxuICBjb25zdHJ1Y3Rvcihjb25maWcsIGZvcm1FbGVtZW50KSB7XG5cbiAgICB0aGlzLiNpbmFjdGl2ZUJ1dHRvbkNsYXNzID0gY29uZmlnLmluYWN0aXZlQnV0dG9uQ2xhc3M7XG4gICAgdGhpcy4jaW5wdXRFcnJvckNsYXNzID0gY29uZmlnLmlucHV0RXJyb3JDbGFzcztcbiAgICB0aGlzLiNlcnJvckNsYXNzID0gY29uZmlnLmVycm9yQ2xhc3M7XG4gICAgdGhpcy4jZm9ybUVsZW1lbnQgPSBmb3JtRWxlbWVudDtcbiAgICB0aGlzLiNpbnB1dHNMaXN0ID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuI2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY29uZmlnLmlucHV0U2VsZWN0b3IpXG4gICAgKTtcbiAgICB0aGlzLiNzdWJtaXRCdXR0b24gPSB0aGlzLiNmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGNvbmZpZy5zdWJtaXRCdXR0b25TZWxlY3Rvcik7XG5cbiAgfVxuXG4gICNzZXRCdXR0b25JbmFjdGl2ZSgpIHtcbiAgICB0aGlzLiNzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLiNpbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgICB0aGlzLiNzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xuXG4gIH07XG5cbiAgI3NldEJ1dHRvbkFjdGl2ZSgpIHtcbiAgICB0aGlzLiNzdWJtaXRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLiNpbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgICB0aGlzLiNzdWJtaXRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcsIGZhbHNlKTtcblxuICB9O1xuXG4gICNoYXNJbnB1dHNFcnJvcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2lucHV0c0xpc3Quc29tZShmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgIHJldHVybiAhaW5wdXQudmFsaWRpdHkudmFsaWQ7XG4gICAgfSk7XG4gIH07XG5cbiAgI3RvZ2dsZUJ1dHRvblN0YXRlKCkge1xuICAgIGlmICh0aGlzLiNoYXNJbnB1dHNFcnJvcnMoKSkge1xuICAgICAgdGhpcy4jc2V0QnV0dG9uSW5hY3RpdmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4jc2V0QnV0dG9uQWN0aXZlKCk7XG4gICAgfVxuICB9O1xuXG4gICNzaG93SW5wdXRFcnJvcihpbnB1dCwgZXJyb3JNZXNzYWdlKSB7XG5cbiAgICB0aGlzLiNlcnJvckVsZW1lbnQgPSB0aGlzLiNmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dC5pZH0tZXJyb3JgKTtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKHRoaXMuI2lucHV0RXJyb3JDbGFzcyk7XG5cbiAgICB0aGlzLiNlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBlcnJvck1lc3NhZ2U7XG4gICAgdGhpcy4jZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy4jZXJyb3JDbGFzcyk7XG4gIH07XG5cbiAgI2hpZGVJbnB1dEVycm9yKGlucHV0KSB7XG4gICAgdGhpcy4jZXJyb3JFbGVtZW50ID0gdGhpcy4jZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aW5wdXQuaWR9LWVycm9yYCk7XG4gICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLiNpbnB1dEVycm9yQ2xhc3MpO1xuICAgIHRoaXMuI2Vycm9yRWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgIHRoaXMuI2Vycm9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuI2Vycm9yQ2xhc3MpO1xuICB9O1xuXG4gICNjaGVja1ZhbGlkaXR5KGlucHV0KSB7XG5cbiAgICBpZiAoIWlucHV0LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICB0aGlzLiNzaG93SW5wdXRFcnJvcihpbnB1dCwgaW5wdXQudmFsaWRhdGlvbk1lc3NhZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiNoaWRlSW5wdXRFcnJvcihpbnB1dCk7XG4gICAgfVxuICB9O1xuXG4gICNzZXRFdmVudExpc3RlbmVycygpIHtcblxuICAgIHRoaXMuI3RvZ2dsZUJ1dHRvblN0YXRlKHRoaXMuI2lucHV0c0xpc3QpO1xuICAgIHRoaXMuI2lucHV0c0xpc3QuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICB0aGlzLiNjaGVja1ZhbGlkaXR5KGlucHV0KTtcbiAgICAgICAgdGhpcy4jdG9nZ2xlQnV0dG9uU3RhdGUodGhpcy4jaW5wdXRzTGlzdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICByZXNldFZhbGlkYXRpb24oKSB7XG4gICAgdGhpcy4jc2V0QnV0dG9uSW5hY3RpdmUoKVxuICAgIHRoaXMuI2lucHV0c0xpc3QuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIHRoaXMuI2hpZGVJbnB1dEVycm9yKGlucHV0KTtcbiAgICB9KTtcbiAgfTtcblxuICBlbmFibGVWYWxpZGF0aW9uKCkge1xuICAgIHRoaXMuI3NldEV2ZW50TGlzdGVuZXJzKCk7XG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XG5cbiAgI3BvcHVwO1xuXG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcbiAgICB0aGlzLiNwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wdXBTZWxlY3Rvcik7XG4gIH1cblxuICBvcGVuUG9wdXAoKSB7XG4gICAgdGhpcy4jcG9wdXAuY2xhc3NMaXN0LmFkZCgncG9wdXBfb3BlbmVkJyk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuI2hhbmRsZUVzY0Nsb3NlUG9wdXApO1xuICB9XG5cbiAgY2xvc2VQb3B1cCgpIHtcbiAgICBpZiAodGhpcy4jcG9wdXApIHtcbiAgICAgIHRoaXMuI3BvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHVwX29wZW5lZCcpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuI2hhbmRsZUVzY0Nsb3NlUG9wdXApO1xuICAgIH1cbiAgfVxuXG4gICNoYW5kbGVFc2NDbG9zZVBvcHVwID0gKGV2dCkgPT4ge1xuICAgIGlmIChldnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgdGhpcy5jbG9zZVBvcHVwKHRoaXMuI3BvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9vcGVuZWQnKSk7XG4gICAgfVxuICB9XG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy4jcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2dCkgPT4ge1xuICAgICAgaWYgKGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwb3B1cF9fbW9kYWwtd2luZG93JykgfHwgZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BvcHVwX29wZW5lZCcpKSB7XG4gICAgICAgIHRoaXMuY2xvc2VQb3B1cCh0aGlzLiNwb3B1cCk7XG4gICAgICB9XG4gICAgICBpZiAoZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BvcHVwX19jbG9zZS1idXR0b24nKSkge1xuICAgICAgICB0aGlzLmNsb3NlUG9wdXAodGhpcy4jcG9wdXApO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoQ29uZmlybSBleHRlbmRzIFBvcHVwIHtcblxuICAjcG9wdXA7XG4gICNoYW5kbGVDb25maXJtO1xuICAjYnV0dG9uQ29uZmlybTtcbiAgI2RhdGE7XG4gICNjdXN0b21CdXR0b25UZXh0O1xuICAjaXNMb2FkaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IsIGhhbmRsZUNvbmZpcm0pIHtcblxuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xuXG4gICAgdGhpcy4jcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBvcHVwU2VsZWN0b3IpO1xuICAgIHRoaXMuI2J1dHRvbkNvbmZpcm0gPSB0aGlzLiNwb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2J1dHRvbl90eXBlX2NvbmZpcm0nKTtcblxuICAgIHRoaXMuI2hhbmRsZUNvbmZpcm0gPSBoYW5kbGVDb25maXJtO1xuXG4gICAgdGhpcy4jaXNMb2FkaW5nID0gZmFsc2U7XG4gIH1cblxuICBvcGVuUG9wdXAoZGF0YSkge1xuXG4gICAgc3VwZXIub3BlblBvcHVwKCk7XG5cbiAgICB0aGlzLiNkYXRhID0gZGF0YTtcbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuXG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgIHRoaXMuI2J1dHRvbkNvbmZpcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICAgIGlmICghdGhpcy4jaXNMb2FkaW5nKSB7XG4gICAgICAgIHRoaXMuI2N1c3RvbUJ1dHRvblRleHQgPSB0aGlzLiNidXR0b25Db25maXJtLnRleHRDb250ZW50O1xuICAgICAgICB0aGlzLiNidXR0b25Db25maXJtLnRleHRDb250ZW50ID0gXCLQodC+0YXRgNCw0L3QtdC90LjQtS4uLlwiO1xuXG4gICAgICAgIHRoaXMuI2lzTG9hZGluZyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuI2hhbmRsZUNvbmZpcm0odGhpcy4jZGF0YSlcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cCgpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpKVxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuI2lzTG9hZGluZykge1xuICAgICAgICAgICAgdGhpcy4jYnV0dG9uQ29uZmlybS50ZXh0Q29udGVudCA9IHRoaXMuI2N1c3RvbUJ1dHRvblRleHQ7XG4gICAgICAgICAgICB0aGlzLiNpc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoRm9ybSBleHRlbmRzIFBvcHVwIHtcblxuICAjaGFuZGxlRm9ybVN1Ym1pdDtcbiAgI2lucHV0TGlzdDtcbiAgI3BvcHVwO1xuICAjZm9ybTtcbiAgI2lzTG9hZGluZztcbiAgI2N1c3RvbUJ1dHRvblRleHQ7XG4gICNidXR0b25TdWJtaXQ7XG4gICNpbnB1dFZhbHVlc1xuXG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IsIGhhbmRsZUZvcm1TdWJtaXQpIHtcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcblxuICAgIHRoaXMuI3BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwb3B1cFNlbGVjdG9yKTtcbiAgICB0aGlzLiNmb3JtID0gdGhpcy4jcG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19mb3JtJyk7XG4gICAgdGhpcy4jaW5wdXRMaXN0ID0gWy4uLnRoaXMuI2Zvcm0ucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwX19pbnB1dCcpXTtcbiAgICB0aGlzLiNidXR0b25TdWJtaXQgPSB0aGlzLiNwb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2J1dHRvbicpO1xuXG4gICAgdGhpcy4jaGFuZGxlRm9ybVN1Ym1pdCA9IGhhbmRsZUZvcm1TdWJtaXQ7XG5cbiAgICB0aGlzLiNpc0xvYWRpbmcgPSBmYWxzZVxuICB9XG5cbiAgI2dldElucHV0VmFsdWVzKCkge1xuICAgIHJldHVybiB0aGlzLiNpbnB1dExpc3QucmVkdWNlKChpbnB1dFZhbHVlLCBpbnB1dCkgPT4ge1xuICAgICAgaW5wdXRWYWx1ZVtpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlO1xuICAgICAgcmV0dXJuIGlucHV0VmFsdWU7XG4gICAgfSwge30pO1xuICB9XG5cbiAgc2V0SW5wdXRWYWx1ZXMoZGF0YSkge1xuICAgIHRoaXMuI2lucHV0TGlzdC5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgIGlmIChkYXRhW2lucHV0Lm5hbWVdKSB7XG4gICAgICAgIGlucHV0LnZhbHVlID0gZGF0YVtpbnB1dC5uYW1lXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldEZvcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMuI2Zvcm07XG4gIH1cblxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xuXG4gICAgdGhpcy4jZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZ0KSA9PiB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgdGhpcy4jaW5wdXRWYWx1ZXMgPSB0aGlzLiNnZXRJbnB1dFZhbHVlcygpO1xuXG4gICAgICBpZiAoIXRoaXMuI2lzTG9hZGluZykge1xuICAgICAgICB0aGlzLiNjdXN0b21CdXR0b25UZXh0ID0gdGhpcy4jYnV0dG9uU3VibWl0LnRleHRDb250ZW50O1xuICAgICAgICB0aGlzLiNidXR0b25TdWJtaXQudGV4dENvbnRlbnQgPSBcItCh0L7RhdGA0LDQvdC10L3QuNC1Li4uXCI7XG4gICAgICAgIHRoaXMuI2lzTG9hZGluZyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuI2hhbmRsZUZvcm1TdWJtaXQodGhpcy4jaW5wdXRWYWx1ZXMpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNsb3NlUG9wdXAoKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKSlcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLiNpc0xvYWRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuI2J1dHRvblN1Ym1pdC50ZXh0Q29udGVudCA9IHRoaXMuI2N1c3RvbUJ1dHRvblRleHQ7XG4gICAgICAgICAgICB0aGlzLiNpc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgY2xvc2VQb3B1cCgpIHtcbiAgICB0aGlzLiNmb3JtLnJlc2V0KCk7XG5cbiAgICBzdXBlci5jbG9zZVBvcHVwKCk7XG4gIH1cbn1cblxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwIHtcblxuICAjaW1hZ2U7XG5cbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3RvciwgaW1hZ2VTZWxlY3Rvcikge1xuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xuICAgIHRoaXMuI2ltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpbWFnZVNlbGVjdG9yKTtcbiAgfVxuXG4gIG9wZW5Qb3B1cChuYW1lLCBsaW5rKSB7XG5cbiAgICBzdXBlci5vcGVuUG9wdXAoKTtcblxuICAgIHRoaXMuI2ltYWdlLnNyYyA9IGxpbms7XG4gICAgdGhpcy4jaW1hZ2UuYWx0ID0gbmFtZTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9faW1hZ2UtY2FwdGlvbicpLnRleHRDb250ZW50ID0gbmFtZTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XG5cbiAgI3JlbmRlcmVyO1xuICAjY29udGFpbmVyO1xuXG5cbiAgY29uc3RydWN0b3IoeyByZW5kZXJlciwgY2FyZHNDb250YWluZXIgfSkge1xuXG4gICAgdGhpcy4jcmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICB0aGlzLiNjb250YWluZXIgPSBjYXJkc0NvbnRhaW5lcjtcblxuICB9XG5cbiAgI2NsZWFyKCkge1xuICAgIHRoaXMuI2NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIHJlbmRlckl0ZW1zKGl0ZW1zKSB7XG4gICAgdGhpcy4jY2xlYXIoKTtcbiAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4gdGhpcy4jcmVuZGVyZXIoaXRlbSkpO1xuICB9XG5cbiAgYWRkSXRlbShpdGVtKSB7XG4gICAgdGhpcy4jY29udGFpbmVyLnByZXBlbmQoaXRlbSk7XG4gIH1cblxuICBhZGRJdGVtcyhpdGVtcykge1xuICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB0aGlzLmFkZEl0ZW0oaXRlbSkpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mbyB7XG5cbiAgI2RhdGE7XG4gICN1c2VySWQ7XG5cbiAgY29uc3RydWN0b3IoZGF0YSkge1xuXG4gICAgdGhpcy4jZGF0YSA9IGRhdGE7XG5cbiAgICB0aGlzLm5hbWVTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy4jZGF0YS51c2VyTmFtZSk7XG4gICAgdGhpcy5pbmZvU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuI2RhdGEudXNlckluZm8pO1xuICAgIHRoaXMuYXZhdGFyU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuI2RhdGEuYXZhdGFyKTtcbiAgICB0aGlzLmF2YXRhclNlbGVjdG9yLnRleHRDb250ZW50ID0gdGhpcy5hdmF0YXJTZWxlY3Rvci5zcmM7XG4gIH1cblxuICBnZXRVc2VySW5mbygpIHtcblxuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWVTZWxlY3Rvci50ZXh0Q29udGVudCxcbiAgICAgIGFib3V0OiB0aGlzLmluZm9TZWxlY3Rvci50ZXh0Q29udGVudCxcbiAgICB9XG4gIH1cblxuICBzZXRVc2VySWQodXNlcklkKSB7XG4gICAgdGhpcy4jdXNlcklkID0gdXNlcklkO1xuICB9XG5cbiAgZ2V0VXNlcklkKCkge1xuICAgIHJldHVybiB0aGlzLiN1c2VySWQ7XG4gIH1cblxuICBzZXRVc2VySW5mbyhkYXRhKSB7XG5cbiAgICB0aGlzLm5hbWVTZWxlY3Rvci50ZXh0Q29udGVudCA9IGRhdGEubmFtZTtcbiAgICB0aGlzLmluZm9TZWxlY3Rvci50ZXh0Q29udGVudCA9IGRhdGEuYWJvdXQ7XG4gICAgdGhpcy5hdmF0YXJTZWxlY3Rvci5zcmMgPSBkYXRhLmF2YXRhcjtcbiAgfVxuXG4gIHNldEF2YXRhcih1cmwpIHtcblxuICAgIHRoaXMuYXZhdGFyU2VsZWN0b3Iuc3JjID0gdXJsO1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBmb3JtU2VsZWN0b3I6ICcucG9wdXBfX2Zvcm0nLFxuICBpbnB1dFNlbGVjdG9yOiAnLnBvcHVwX19pbnB1dCcsXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiAnLnBvcHVwX19idXR0b24nLFxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiAncG9wdXBfX2J1dHRvbl9kaXNhYmxlZCcsXG4gIGlucHV0RXJyb3JDbGFzczogJ3BvcHVwX19pbnB1dF90eXBlX2Vycm9yJyxcbiAgZXJyb3JDbGFzczogJ3BvcHVwX19lcnJvcl92aXNpYmxlJyxcbn07XG5cblxuXG5cbmV4cG9ydCBjb25zdCBjYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFjZXNfX2l0ZW1zJylcbmV4cG9ydCBjb25zdCB1c2VyU2VsZWN0b3JzRGF0YSA9IHtcbiAgdXNlck5hbWU6ICcucHJvZmlsZV9fdGl0bGUnLFxuICB1c2VySW5mbzogJy5wcm9maWxlX19zdWJ0aXRsZScsXG4gIGF2YXRhcjogJy5wcm9maWxlX19hdmF0YXInXG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG5pbXBvcnQgQXBpIGZyb20gXCIuLi9jb21wb25lbnRzL0FwaS5qc1wiO1xuXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZC5qc1wiO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvbi5qc1wiO1xuXG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanNcIjtcbmltcG9ydCBQb3B1cFdpdGhGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanNcIjtcbmltcG9ydCBQb3B1cFdpdGhDb25maXJtIGZyb20gJy4uL2NvbXBvbmVudHMvUG9wdXBXaXRoQ29uZmlybS5qcyc7XG5cbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VySW5mby5qc1wiO1xuaW1wb3J0IHsgRm9ybVZhbGlkYXRvciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanNcIjtcblxuaW1wb3J0IHtcbiAgY29uZmlnLFxuICBjYXJkc0NvbnRhaW5lcixcbiAgdXNlclNlbGVjdG9yc0RhdGFcbn0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50cy5qc1wiO1xuXG5jb25zdCBoYW5kbGVBZGRCdXR0b24gPSBmdW5jdGlvbiAoKSB7XG4gIHBvcHVwQWRkLm9wZW5Qb3B1cCgpO1xuICB2YWxpZGF0b3JGb3JtQWRkLnJlc2V0VmFsaWRhdGlvbigpO1xufVxuXG5jb25zdCBoYW5kbGVFZGl0QnV0dG9uID0gZnVuY3Rpb24gKCkge1xuICBwb3B1cEVkaXQub3BlblBvcHVwKCk7XG4gIHBvcHVwRWRpdC5zZXRJbnB1dFZhbHVlcyh1c2VySW5mby5nZXRVc2VySW5mbygpKTtcbiAgdmFsaWRhdG9yRm9ybUVkaXQucmVzZXRWYWxpZGF0aW9uKCk7XG59XG5cbmNvbnN0IGhhbmRsZUF2YXRhciA9IGZ1bmN0aW9uICgpIHtcbiAgcG9wdXBFZGl0QXZhdGFyLm9wZW5Qb3B1cCgpO1xuICBwb3B1cEVkaXRBdmF0YXIuc2V0SW5wdXRWYWx1ZXModXNlckluZm8uZ2V0VXNlckluZm8oKSk7XG4gIHZhbGlkYXRvckZvcm1BdmF0YXIucmVzZXRWYWxpZGF0aW9uKCk7XG59XG5cbmNvbnN0IGNyZWF0ZUNhcmQgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG5cbiAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKFxuICAgIHZhbHVlcyxcbiAgICAnI2NhcmR0ZW1wbGF0ZScsXG4gICAgdXNlckluZm8uZ2V0VXNlcklkKCksXG4gICAgcG9wdXBJbWFnZS5vcGVuUG9wdXAuYmluZChwb3B1cEltYWdlKSwgKCkgPT4ge1xuICAgICAgcG9wdXBDb25maXJtLm9wZW5Qb3B1cCh7XG4gICAgICAgIGlkOiB2YWx1ZXMuX2lkLFxuICAgICAgICBoYW5kbGVEZWxldGU6IGNhcmQuZGVsZXRlQ2FyZC5iaW5kKGNhcmQpLFxuICAgICAgfSk7XG4gICAgfSxcbiAgICAoaXNMaWtlZCkgPT4ge1xuICAgICAgaWYgKGlzTGlrZWQpIHtcbiAgICAgICAgYXBpLnJlbW92ZUxpa2UodmFsdWVzLl9pZClcbiAgICAgICAgICAudGhlbihkYXRhID0+IGNhcmQucmVtb3ZlTGlrZShkYXRhLmxpa2VzLmxlbmd0aCkpXG4gICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXBpLnNldExpa2UodmFsdWVzLl9pZClcbiAgICAgICAgICAudGhlbihkYXRhID0+IGNhcmQuc2V0TGlrZShkYXRhLmxpa2VzLmxlbmd0aCkpXG4gICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSkpO1xuICAgICAgfVxuICAgIH1cbiAgKTtcblxuICByZXR1cm4gY2FyZC5nZW5lcmF0ZUNhcmQoKTtcbn1cblxuY29uc3QgYXBpID0gbmV3IEFwaSh7XG4gIHVybDogJ2h0dHBzOi8vbm9tb3JlcGFydGllcy5jby92MS9jb2hvcnQtNTIvJyxcbiAgaGVhZGVyczoge1xuICAgIGF1dGhvcml6YXRpb246ICc3OWRmZDk3ZS00YzczLTRjMzctYTdkNS1iNWUwOTcxMGY1YzknLFxuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgfSxcbn0pO1xuXG5cbmNvbnN0IGNhcmRMaXN0ID0gbmV3IFNlY3Rpb24oe1xuICByZW5kZXJlcjogKGNhcmREYXRhKSA9PiB7XG4gICAgY2FyZExpc3QuYWRkSXRlbShjcmVhdGVDYXJkKGNhcmREYXRhKSlcbiAgfSwgY2FyZHNDb250YWluZXJcbn0pO1xuXG5Qcm9taXNlLmFsbChbYXBpLmdldFVzZXIoKSwgYXBpLmdldENhcmRzKCldKVxuICAudGhlbigoW3VzZXJEYXRhLCBjYXJkc0RhdGFdKSA9PiB7XG4gICAgdXNlckluZm8uc2V0VXNlckluZm8odXNlckRhdGEpO1xuICAgIHVzZXJJbmZvLnNldFVzZXJJZCh1c2VyRGF0YS5faWQpO1xuXG4gICAgY2FyZExpc3QucmVuZGVySXRlbXMoY2FyZHNEYXRhLnJldmVyc2UoKSk7XG4gIH0pXG4gIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpKTtcblxuY29uc3QgY3JlYXRlVmFsaWRhdG9yID0gZnVuY3Rpb24gKGZvcm0pIHtcbiAgY29uc3QgZm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKGNvbmZpZywgZm9ybSk7XG4gIHJldHVybiBmb3JtVmFsaWRhdG9yO1xufTtcblxuY29uc3QgcG9wdXBJbWFnZSA9IG5ldyBQb3B1cFdpdGhJbWFnZSgnLnBvcHVwX3R5cGVfaW1hZ2UnLCAnLnBvcHVwX19pbWFnZScpO1xuXG5jb25zdCB1c2VySW5mbyA9IG5ldyBVc2VySW5mbyh1c2VyU2VsZWN0b3JzRGF0YSk7XG5cbmNvbnN0IHBvcHVwQWRkID0gbmV3IFBvcHVwV2l0aEZvcm0oJy5wb3B1cF90eXBlX2FkZCcsIChpbnB1dFZhbHVlcyA9PiBhcGkuYWRkQ2FyZChpbnB1dFZhbHVlcylcbiAgLnRoZW4oY2FyZERhdGEgPT4gY2FyZExpc3QuYWRkSXRlbShjcmVhdGVDYXJkKGNhcmREYXRhKSkpXG4pKTtcblxuY29uc3QgcG9wdXBFZGl0ID0gbmV3IFBvcHVwV2l0aEZvcm0oJy5wb3B1cF90eXBlX2VkaXQnLCAoaW5wdXRWYWx1ZXMgPT5cbiAgYXBpLnVwZGF0ZVVzZXIoaW5wdXRWYWx1ZXMpXG4gICAgLnRoZW4odXNlckRhdGEgPT4gdXNlckluZm8uc2V0VXNlckluZm8odXNlckRhdGEpKVxuKSk7XG5cbmNvbnN0IHBvcHVwRWRpdEF2YXRhciA9IG5ldyBQb3B1cFdpdGhGb3JtKCcucG9wdXBfdHlwZV9zZXQtYXZhdGFyJywgKGlucHV0VmFsdWVzID0+XG4gIGFwaS5zZXRBdmF0YXIoeyBhdmF0YXI6IGlucHV0VmFsdWVzLmF2YXRhciB9KVxuICAgIC50aGVuKHVzZXJJbmZvLnNldEF2YXRhcihpbnB1dFZhbHVlcy5hdmF0YXIpKVxuKSk7XG5cbmNvbnN0IHBvcHVwQ29uZmlybSA9IG5ldyBQb3B1cFdpdGhDb25maXJtKCcucG9wdXBfdHlwZV9jb25maXJtJyxcbiAgKHsgaWQsIGhhbmRsZURlbGV0ZSB9KSA9PiB7XG4gICAgcmV0dXJuIGFwaS5kZWxldGVDYXJkKGlkKVxuICAgICAgLnRoZW4oKCkgPT4gaGFuZGxlRGVsZXRlKCkpO1xuICB9KTtcblxuY29uc3QgdmFsaWRhdG9yRm9ybUFkZCA9IGNyZWF0ZVZhbGlkYXRvcihwb3B1cEFkZC5nZXRGb3JtKCkpO1xuY29uc3QgdmFsaWRhdG9yRm9ybUVkaXQgPSBjcmVhdGVWYWxpZGF0b3IocG9wdXBFZGl0LmdldEZvcm0oKSk7XG5jb25zdCB2YWxpZGF0b3JGb3JtQXZhdGFyID0gY3JlYXRlVmFsaWRhdG9yKHBvcHVwRWRpdEF2YXRhci5nZXRGb3JtKCkpO1xuXG52YWxpZGF0b3JGb3JtQWRkLmVuYWJsZVZhbGlkYXRpb24oKTtcbnZhbGlkYXRvckZvcm1FZGl0LmVuYWJsZVZhbGlkYXRpb24oKTtcbnZhbGlkYXRvckZvcm1BdmF0YXIuZW5hYmxlVmFsaWRhdGlvbigpO1xuXG5wb3B1cEltYWdlLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5wb3B1cEFkZC5zZXRFdmVudExpc3RlbmVycygpO1xucG9wdXBFZGl0LnNldEV2ZW50TGlzdGVuZXJzKCk7XG5wb3B1cEVkaXRBdmF0YXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbnBvcHVwQ29uZmlybS5zZXRFdmVudExpc3RlbmVycygpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fYWRkLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQWRkQnV0dG9uKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19lZGl0LWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRWRpdEJ1dHRvbik7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fYXZhdGFyLWNvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQXZhdGFyKTtcblxuIl0sIm5hbWVzIjpbIkFwaSIsInVybCIsImNvbmZpZ0FwaSIsImlucHV0VmFsdWVzIiwiaWQiLCJkYXRhIiwicGF0aCIsIm1ldGhvZCIsImJvZHkiLCJvcHRpb25zIiwiSlNPTiIsInN0cmluZ2lmeSIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwib2siLCJFcnJvciIsIm1lc3NhZ2UiLCJDYXJkIiwiY2FyZHNEYXRhIiwiY2FyZHNJZFNlbGVjdG9yIiwidXNlcklkIiwiaGFuZGxlQ2FyZENsaWNrIiwiaGFuZGxlRGVsZXRlQ2xpY2siLCJoYW5kbGVMaWtlQ2xpY2siLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJuYW1lIiwibGluayIsIm93bmVyIiwiX2lkIiwibGlrZXMiLCJsZW5ndGgiLCJmaW5kIiwidXNlciIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInRleHRDb250ZW50Iiwic3JjIiwiYWx0Iiwic2V0TGlrZSIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJhZGRFdmVudExpc3RlbmVyIiwiYmluZCIsIkZvcm1WYWxpZGF0b3IiLCJjb25maWciLCJmb3JtRWxlbWVudCIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbnB1dEVycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImlucHV0U2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsImZvckVhY2giLCJpbnB1dCIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsInNvbWUiLCJ2YWxpZGl0eSIsInZhbGlkIiwiZXJyb3JNZXNzYWdlIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJQb3B1cCIsInBvcHVwU2VsZWN0b3IiLCJldnQiLCJrZXkiLCJjbG9zZVBvcHVwIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRhcmdldCIsImNvbnRhaW5zIiwiUG9wdXBXaXRoQ29uZmlybSIsImhhbmRsZUNvbmZpcm0iLCJ0aGVuIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZmluYWxseSIsIlBvcHVwV2l0aEZvcm0iLCJoYW5kbGVGb3JtU3VibWl0IiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc2V0IiwicmVkdWNlIiwiaW5wdXRWYWx1ZSIsIlBvcHVwV2l0aEltYWdlIiwiaW1hZ2VTZWxlY3RvciIsIlNlY3Rpb24iLCJyZW5kZXJlciIsImNhcmRzQ29udGFpbmVyIiwiaXRlbXMiLCJpdGVtIiwicHJlcGVuZCIsImFkZEl0ZW0iLCJpbm5lckhUTUwiLCJVc2VySW5mbyIsIm5hbWVTZWxlY3RvciIsInVzZXJOYW1lIiwiaW5mb1NlbGVjdG9yIiwidXNlckluZm8iLCJhdmF0YXJTZWxlY3RvciIsImF2YXRhciIsImFib3V0IiwiZm9ybVNlbGVjdG9yIiwidXNlclNlbGVjdG9yc0RhdGEiLCJoYW5kbGVBZGRCdXR0b24iLCJwb3B1cEFkZCIsIm9wZW5Qb3B1cCIsInZhbGlkYXRvckZvcm1BZGQiLCJyZXNldFZhbGlkYXRpb24iLCJoYW5kbGVFZGl0QnV0dG9uIiwicG9wdXBFZGl0Iiwic2V0SW5wdXRWYWx1ZXMiLCJnZXRVc2VySW5mbyIsInZhbGlkYXRvckZvcm1FZGl0IiwiaGFuZGxlQXZhdGFyIiwicG9wdXBFZGl0QXZhdGFyIiwidmFsaWRhdG9yRm9ybUF2YXRhciIsImNyZWF0ZUNhcmQiLCJ2YWx1ZXMiLCJjYXJkIiwiZ2V0VXNlcklkIiwicG9wdXBJbWFnZSIsInBvcHVwQ29uZmlybSIsImhhbmRsZURlbGV0ZSIsImRlbGV0ZUNhcmQiLCJpc0xpa2VkIiwiYXBpIiwicmVtb3ZlTGlrZSIsImdlbmVyYXRlQ2FyZCIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwiY2FyZExpc3QiLCJjYXJkRGF0YSIsIlByb21pc2UiLCJhbGwiLCJnZXRVc2VyIiwiZ2V0Q2FyZHMiLCJ1c2VyRGF0YSIsInNldFVzZXJJbmZvIiwic2V0VXNlcklkIiwicmVuZGVySXRlbXMiLCJyZXZlcnNlIiwiY3JlYXRlVmFsaWRhdG9yIiwiZm9ybSIsImZvcm1WYWxpZGF0b3IiLCJhZGRDYXJkIiwidXBkYXRlVXNlciIsInNldEF2YXRhciIsImdldEZvcm0iLCJlbmFibGVWYWxpZGF0aW9uIiwic2V0RXZlbnRMaXN0ZW5lcnMiXSwic291cmNlUm9vdCI6IiJ9