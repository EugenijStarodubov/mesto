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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUyxDQUFDc0MsT0FBVixFQUFELENBQXpDO0FBQ0EsSUFBTWhDLG1CQUFtQixHQUFHMEIsZUFBZSxDQUFDM0IsZUFBZSxDQUFDaUMsT0FBaEIsRUFBRCxDQUEzQztBQUVBekMsZ0JBQWdCLENBQUMwQyxnQkFBakI7QUFDQXBDLGlCQUFpQixDQUFDb0MsZ0JBQWxCO0FBQ0FqQyxtQkFBbUIsQ0FBQ2lDLGdCQUFwQjtBQUVBNUIsVUFBVSxDQUFDNkIsaUJBQVg7QUFDQTdDLFFBQVEsQ0FBQzZDLGlCQUFUO0FBQ0F4QyxTQUFTLENBQUN3QyxpQkFBVjtBQUNBbkMsZUFBZSxDQUFDbUMsaUJBQWhCO0FBQ0E1QixZQUFZLENBQUM0QixpQkFBYjtBQUVBbEksUUFBUSxDQUFDQyxhQUFULENBQXVCLHNCQUF2QixFQUErQ2tCLGdCQUEvQyxDQUFnRSxPQUFoRSxFQUF5RWlFLGVBQXpFO0FBQ0FwRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsdUJBQXZCLEVBQWdEa0IsZ0JBQWhELENBQWlFLE9BQWpFLEVBQTBFc0UsZ0JBQTFFO0FBQ0F6RixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsNEJBQXZCLEVBQXFEa0IsZ0JBQXJELENBQXNFLE9BQXRFLEVBQStFMkUsWUFBL0UsRSIsInNvdXJjZXMiOlsid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvQXBpLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aENvbmZpcm0uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL3BhZ2VzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21lc3RvLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwaSB7XG5cbiAgI3VybDtcbiAgI2NvbmZpZ0FwaTtcblxuICBjb25zdHJ1Y3Rvcih7IHVybCwgLi4uY29uZmlnQXBpIH0pIHtcblxuICAgIHRoaXMuI3VybCA9IHVybDtcbiAgICB0aGlzLiNjb25maWdBcGkgPSBjb25maWdBcGk7XG4gIH1cblxuICBhc3luYyAjcmVuZGVyUmVxdWVzdChwYXRoLCBtZXRob2QgPSBcIkdFVFwiLCBib2R5KSB7XG5cbiAgICBjb25zdCBvcHRpb25zID0geyAuLi50aGlzLiNjb25maWdBcGksIG1ldGhvZCB9O1xuXG4gICAgaWYgKGJvZHkpIHtcblxuICAgICAgKHR5cGVvZiBib2R5ID09PSBcInN0cmluZ1wiKSA/IG9wdGlvbnMuYm9keSA9IGJvZHlcbiAgICAgICAgOiBvcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeShib2R5KTtcbiAgICB9XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0aGlzLiN1cmwgKyBwYXRoLCBvcHRpb25zKTtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICByZXR1cm4ganNvbjtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoanNvbi5tZXNzYWdlKTtcbiAgfVxuXG4gIGdldFVzZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3JlbmRlclJlcXVlc3QoXCJ1c2Vycy9tZVwiKTtcbiAgfVxuXG4gIGdldENhcmRzKCkge1xuICAgIHJldHVybiB0aGlzLiNyZW5kZXJSZXF1ZXN0KFwiY2FyZHNcIik7XG4gIH1cblxuICB1cGRhdGVVc2VyKGlucHV0VmFsdWVzKSB7XG5cbiAgICByZXR1cm4gdGhpcy4jcmVuZGVyUmVxdWVzdCgndXNlcnMvbWUnLCAnUEFUQ0gnLCBpbnB1dFZhbHVlcyk7XG4gIH1cblxuICBhZGRDYXJkKGlucHV0VmFsdWVzKSB7XG4gICAgcmV0dXJuIHRoaXMuI3JlbmRlclJlcXVlc3QoXCJjYXJkc1wiLCAnUE9TVCcsIGlucHV0VmFsdWVzKTtcbiAgfVxuXG4gIHNldExpa2UoaWQpIHtcbiAgICByZXR1cm4gdGhpcy4jcmVuZGVyUmVxdWVzdChgY2FyZHMvJHtpZH0vbGlrZXNgLCAnUFVUJyk7XG4gIH1cblxuICByZW1vdmVMaWtlKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuI3JlbmRlclJlcXVlc3QoYGNhcmRzLyR7aWR9L2xpa2VzYCwgJ0RFTEVURScpO1xuICB9XG5cbiAgZGVsZXRlQ2FyZChpZCkge1xuICAgIHJldHVybiB0aGlzLiNyZW5kZXJSZXF1ZXN0KGBjYXJkcy8ke2lkfWAsIFwiREVMRVRFXCIpO1xuICB9XG5cbiAgc2V0QXZhdGFyKGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy4jcmVuZGVyUmVxdWVzdCgndXNlcnMvbWUvYXZhdGFyJywgJ1BBVENIJywgZGF0YSk7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBDYXJkIHtcblxuICAjY2FyZHNUZW1wbGF0ZTtcbiAgI2NhcmRJdGVtO1xuICAjbmFtZTtcbiAgI2xpbms7XG4gICNjYXJkSW1hZ2U7XG4gICNoYW5kbGVDYXJkQ2xpY2s7XG4gICNoYW5kbGVEZWxldGVDbGljaztcbiAgI2xpa2VzQ291bnRlcjtcbiAgI293bmVySWQ7XG4gICNkZWxldGVCdXR0b247XG4gICNoYW5kbGVMaWtlQ2xpY2s7XG4gICNpc0xpa2VkO1xuICAjbGlrZUJ1dHRvbjtcbiAgI2xpa2VzQW1vdW50O1xuICAjdXNlcklkO1xuXG4gIGNvbnN0cnVjdG9yKGNhcmRzRGF0YSwgY2FyZHNJZFNlbGVjdG9yLCB1c2VySWQsIGhhbmRsZUNhcmRDbGljaywgaGFuZGxlRGVsZXRlQ2xpY2ssIGhhbmRsZUxpa2VDbGljaykge1xuXG4gICAgdGhpcy4jY2FyZHNUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2FyZHNJZFNlbGVjdG9yKTtcblxuICAgIHRoaXMuI25hbWUgPSBjYXJkc0RhdGEubmFtZTtcbiAgICB0aGlzLiNsaW5rID0gY2FyZHNEYXRhLmxpbms7XG5cbiAgICB0aGlzLiNvd25lcklkID0gY2FyZHNEYXRhLm93bmVyLl9pZDtcbiAgICB0aGlzLiN1c2VySWQgPSB1c2VySWQ7XG4gICAgdGhpcy4jbGlrZXNBbW91bnQgPSBjYXJkc0RhdGEubGlrZXMubGVuZ3RoO1xuXG4gICAgdGhpcy4jaGFuZGxlQ2FyZENsaWNrID0gaGFuZGxlQ2FyZENsaWNrO1xuICAgIHRoaXMuI2hhbmRsZURlbGV0ZUNsaWNrID0gaGFuZGxlRGVsZXRlQ2xpY2s7XG4gICAgdGhpcy4jaGFuZGxlTGlrZUNsaWNrID0gaGFuZGxlTGlrZUNsaWNrO1xuXG4gICAgdGhpcy4jaXNMaWtlZCA9ICEhY2FyZHNEYXRhLmxpa2VzLmZpbmQodXNlciA9PiB1c2VyLl9pZCA9PT0gdGhpcy4jdXNlcklkKTtcbiAgfVxuXG4gICNnZXRUZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jY2FyZHNUZW1wbGF0ZVxuICAgICAgLmNvbnRlbnQucXVlcnlTZWxlY3RvcignLnBsYWNlc19faXRlbScpLmNsb25lTm9kZSh0cnVlKTtcbiAgfVxuXG4gICNoYW5kbGVMaWtlKCkge1xuICAgIHRoaXMuI2hhbmRsZUxpa2VDbGljayh0aGlzLiNpc0xpa2VkKVxuICB9XG5cbiAgI3NldExpa2VzQW1vdW50KGxpa2VzKSB7XG5cbiAgICB0aGlzLiNsaWtlc0NvdW50ZXIudGV4dENvbnRlbnQgPSBsaWtlcztcbiAgfVxuXG4gIHNldExpa2UobGlrZXMpIHtcblxuICAgIHRoaXMuI2xpa2VCdXR0b24uY2xhc3NMaXN0LmFkZCgncGxhY2VzX19saWtlLWJ1dHRvbl9hY3RpdmUnKTtcbiAgICB0aGlzLiNpc0xpa2VkID0gdHJ1ZTtcbiAgICB0aGlzLiNzZXRMaWtlc0Ftb3VudChsaWtlcyk7XG4gIH1cblxuICByZW1vdmVMaWtlKGxpa2VzKSB7XG5cbiAgICB0aGlzLiNsaWtlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYWNlc19fbGlrZS1idXR0b25fYWN0aXZlJyk7XG4gICAgdGhpcy4jaXNMaWtlZCA9IGZhbHNlO1xuICAgIHRoaXMuI3NldExpa2VzQW1vdW50KGxpa2VzKTtcbiAgfVxuXG4gICNkZWxldGVIYW5kbGVyKCkge1xuICAgIHRoaXMuI2hhbmRsZURlbGV0ZUNsaWNrKCk7XG4gIH1cblxuICAjc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG5cbiAgICB0aGlzLiNsaWtlQnV0dG9uXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLiNoYW5kbGVMaWtlLmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy4jZGVsZXRlQnV0dG9uXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLiNkZWxldGVIYW5kbGVyLmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy4jY2FyZEltYWdlXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuI2hhbmRsZUNhcmRDbGljayh0aGlzLiNuYW1lLCB0aGlzLiNsaW5rKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgZ2VuZXJhdGVDYXJkKCkge1xuICAgIHRoaXMuI2NhcmRJdGVtID0gdGhpcy4jZ2V0VGVtcGxhdGUoKTtcblxuICAgIHRoaXMuI2NhcmRJbWFnZSA9IHRoaXMuI2NhcmRJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5wbGFjZXNfX2ltYWdlJyk7XG4gICAgdGhpcy4jZGVsZXRlQnV0dG9uID0gdGhpcy4jY2FyZEl0ZW0ucXVlcnlTZWxlY3RvcignLnBsYWNlc19fZGVsZXRlLWJ1dHRvbicpO1xuICAgIHRoaXMuI2xpa2VCdXR0b24gPSB0aGlzLiNjYXJkSXRlbS5xdWVyeVNlbGVjdG9yKCcucGxhY2VzX19saWtlLWJ1dHRvbicpO1xuICAgIHRoaXMuI2xpa2VzQ291bnRlciA9IHRoaXMuI2NhcmRJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5wbGFjZXNfX2xpa2VzLWNvdW50ZXInKTtcblxuICAgIHRoaXMuI2NhcmRJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5wbGFjZXNfX3RpdGxlJykudGV4dENvbnRlbnQgPSB0aGlzLiNuYW1lO1xuXG4gICAgdGhpcy4jY2FyZEltYWdlLnNyYyA9IHRoaXMuI2xpbms7XG4gICAgdGhpcy4jY2FyZEltYWdlLmFsdCA9IHRoaXMuI25hbWU7XG5cbiAgICB0aGlzLiNzZXRFdmVudExpc3RlbmVycygpO1xuXG4gICAgaWYgKHRoaXMuI3VzZXJJZCAhPT0gdGhpcy4jb3duZXJJZCkge1xuICAgICAgdGhpcy4jZGVsZXRlQnV0dG9uLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLiNpc0xpa2VkKSB7XG4gICAgICB0aGlzLnNldExpa2UodGhpcy4jbGlrZXNBbW91bnQpO1xuICAgIH1cblxuICAgIHRoaXMuI3NldExpa2VzQW1vdW50KHRoaXMuI2xpa2VzQW1vdW50KTtcblxuICAgIHJldHVybiB0aGlzLiNjYXJkSXRlbTtcbiAgfVxuXG4gIGRlbGV0ZUNhcmQoKSB7XG4gICAgdGhpcy4jY2FyZEl0ZW0ucmVtb3ZlKCk7XG4gICAgdGhpcy4jY2FyZEl0ZW0gPSBudWxsO1xuICB9XG59XG5cblxuXG5cblxuIiwiZXhwb3J0IGNsYXNzIEZvcm1WYWxpZGF0b3Ige1xuXG4gICNpbmFjdGl2ZUJ1dHRvbkNsYXNzO1xuICAjaW5wdXRFcnJvckNsYXNzO1xuICAjZXJyb3JDbGFzcztcbiAgI3N1Ym1pdEJ1dHRvbjtcbiAgI2lucHV0c0xpc3Q7XG4gICNlcnJvckVsZW1lbnQ7XG4gICNmb3JtRWxlbWVudDtcblxuICBjb25zdHJ1Y3Rvcihjb25maWcsIGZvcm1FbGVtZW50KSB7XG5cbiAgICB0aGlzLiNpbmFjdGl2ZUJ1dHRvbkNsYXNzID0gY29uZmlnLmluYWN0aXZlQnV0dG9uQ2xhc3M7XG4gICAgdGhpcy4jaW5wdXRFcnJvckNsYXNzID0gY29uZmlnLmlucHV0RXJyb3JDbGFzcztcbiAgICB0aGlzLiNlcnJvckNsYXNzID0gY29uZmlnLmVycm9yQ2xhc3M7XG4gICAgdGhpcy4jZm9ybUVsZW1lbnQgPSBmb3JtRWxlbWVudDtcbiAgICB0aGlzLiNpbnB1dHNMaXN0ID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuI2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY29uZmlnLmlucHV0U2VsZWN0b3IpXG4gICAgKTtcbiAgICB0aGlzLiNzdWJtaXRCdXR0b24gPSB0aGlzLiNmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGNvbmZpZy5zdWJtaXRCdXR0b25TZWxlY3Rvcik7XG5cbiAgfVxuXG4gICNzZXRCdXR0b25JbmFjdGl2ZSgpIHtcbiAgICB0aGlzLiNzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLiNpbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgICB0aGlzLiNzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xuICB9O1xuXG4gICNzZXRCdXR0b25BY3RpdmUoKSB7XG4gICAgdGhpcy4jc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUodGhpcy4jaW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgdGhpcy4jc3VibWl0QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gIH07XG5cbiAgI2hhc0lucHV0c0Vycm9ycygpIHtcbiAgICByZXR1cm4gdGhpcy4jaW5wdXRzTGlzdC5zb21lKGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgcmV0dXJuICFpbnB1dC52YWxpZGl0eS52YWxpZDtcbiAgICB9KTtcbiAgfTtcblxuICAjdG9nZ2xlQnV0dG9uU3RhdGUoKSB7XG4gICAgaWYgKHRoaXMuI2hhc0lucHV0c0Vycm9ycygpKSB7XG4gICAgICB0aGlzLiNzZXRCdXR0b25JbmFjdGl2ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiNzZXRCdXR0b25BY3RpdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgI3Nob3dJbnB1dEVycm9yKGlucHV0LCBlcnJvck1lc3NhZ2UpIHtcblxuICAgIHRoaXMuI2Vycm9yRWxlbWVudCA9IHRoaXMuI2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0LmlkfS1lcnJvcmApO1xuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQodGhpcy4jaW5wdXRFcnJvckNsYXNzKTtcblxuICAgIHRoaXMuI2Vycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IGVycm9yTWVzc2FnZTtcbiAgICB0aGlzLiNlcnJvckVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLiNlcnJvckNsYXNzKTtcbiAgfTtcblxuICAjaGlkZUlucHV0RXJyb3IoaW5wdXQpIHtcbiAgICB0aGlzLiNlcnJvckVsZW1lbnQgPSB0aGlzLiNmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dC5pZH0tZXJyb3JgKTtcbiAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuI2lucHV0RXJyb3JDbGFzcyk7XG4gICAgdGhpcy4jZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgdGhpcy4jZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy4jZXJyb3JDbGFzcyk7XG4gIH07XG5cbiAgI2NoZWNrVmFsaWRpdHkoaW5wdXQpIHtcblxuICAgIGlmICghaW5wdXQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIHRoaXMuI3Nob3dJbnB1dEVycm9yKGlucHV0LCBpbnB1dC52YWxpZGF0aW9uTWVzc2FnZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuI2hpZGVJbnB1dEVycm9yKGlucHV0KTtcbiAgICB9XG4gIH07XG5cbiAgI3NldEV2ZW50TGlzdGVuZXJzKCkge1xuXG4gICAgdGhpcy4jdG9nZ2xlQnV0dG9uU3RhdGUodGhpcy4jaW5wdXRzTGlzdCk7XG4gICAgdGhpcy4jaW5wdXRzTGlzdC5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuI2NoZWNrVmFsaWRpdHkoaW5wdXQpO1xuICAgICAgICB0aGlzLiN0b2dnbGVCdXR0b25TdGF0ZSh0aGlzLiNpbnB1dHNMaXN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJlc2V0VmFsaWRhdGlvbigpIHtcbiAgICB0aGlzLiNzZXRCdXR0b25JbmFjdGl2ZSgpXG4gICAgdGhpcy4jaW5wdXRzTGlzdC5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgdGhpcy4jaGlkZUlucHV0RXJyb3IoaW5wdXQpO1xuICAgIH0pO1xuICB9O1xuXG4gIGVuYWJsZVZhbGlkYXRpb24oKSB7XG4gICAgdGhpcy4jc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcblxuICAjcG9wdXA7XG5cbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xuICAgIHRoaXMuI3BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwb3B1cFNlbGVjdG9yKTtcbiAgfVxuXG4gIG9wZW5Qb3B1cCgpIHtcbiAgICB0aGlzLiNwb3B1cC5jbGFzc0xpc3QuYWRkKCdwb3B1cF9vcGVuZWQnKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy4jaGFuZGxlRXNjQ2xvc2VQb3B1cCk7XG4gIH1cblxuICBjbG9zZVBvcHVwKCkge1xuICAgIGlmICh0aGlzLiNwb3B1cCkge1xuICAgICAgdGhpcy4jcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgncG9wdXBfb3BlbmVkJyk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy4jaGFuZGxlRXNjQ2xvc2VQb3B1cCk7XG4gICAgfVxuICB9XG5cbiAgI2hhbmRsZUVzY0Nsb3NlUG9wdXAgPSAoZXZ0KSA9PiB7XG4gICAgaWYgKGV2dC5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICB0aGlzLmNsb3NlUG9wdXAodGhpcy4jcG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX29wZW5lZCcpKTtcbiAgICB9XG4gIH1cblxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLiNwb3B1cC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZXZ0KSA9PiB7XG4gICAgICBpZiAoZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BvcHVwX19tb2RhbC13aW5kb3cnKSB8fCBldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncG9wdXBfb3BlbmVkJykpIHtcbiAgICAgICAgdGhpcy5jbG9zZVBvcHVwKHRoaXMuI3BvcHVwKTtcbiAgICAgIH1cbiAgICAgIGlmIChldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncG9wdXBfX2Nsb3NlLWJ1dHRvbicpKSB7XG4gICAgICAgIHRoaXMuY2xvc2VQb3B1cCh0aGlzLiNwb3B1cCk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhDb25maXJtIGV4dGVuZHMgUG9wdXAge1xuXG4gICNwb3B1cDtcbiAgI2hhbmRsZUNvbmZpcm07XG4gICNidXR0b25Db25maXJtO1xuICAjZGF0YTtcbiAgI2N1c3RvbUJ1dHRvblRleHQ7XG4gICNpc0xvYWRpbmc7XG5cbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3RvciwgaGFuZGxlQ29uZmlybSkge1xuXG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XG5cbiAgICB0aGlzLiNwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wdXBTZWxlY3Rvcik7XG4gICAgdGhpcy4jYnV0dG9uQ29uZmlybSA9IHRoaXMuI3BvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fYnV0dG9uX3R5cGVfY29uZmlybScpO1xuXG4gICAgdGhpcy4jaGFuZGxlQ29uZmlybSA9IGhhbmRsZUNvbmZpcm07XG5cbiAgICB0aGlzLiNpc0xvYWRpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIG9wZW5Qb3B1cChkYXRhKSB7XG5cbiAgICBzdXBlci5vcGVuUG9wdXAoKTtcblxuICAgIHRoaXMuI2RhdGEgPSBkYXRhO1xuICB9XG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG5cbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xuXG4gICAgdGhpcy4jYnV0dG9uQ29uZmlybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgICAgaWYgKCF0aGlzLiNpc0xvYWRpbmcpIHtcbiAgICAgICAgdGhpcy4jY3VzdG9tQnV0dG9uVGV4dCA9IHRoaXMuI2J1dHRvbkNvbmZpcm0udGV4dENvbnRlbnQ7XG4gICAgICAgIHRoaXMuI2J1dHRvbkNvbmZpcm0udGV4dENvbnRlbnQgPSBcItCh0L7RhdGA0LDQvdC10L3QuNC1Li4uXCI7XG5cbiAgICAgICAgdGhpcy4jaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy4jaGFuZGxlQ29uZmlybSh0aGlzLiNkYXRhKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jbG9zZVBvcHVwKClcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSkpXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy4jaXNMb2FkaW5nKSB7XG4gICAgICAgICAgICB0aGlzLiNidXR0b25Db25maXJtLnRleHRDb250ZW50ID0gdGhpcy4jY3VzdG9tQnV0dG9uVGV4dDtcbiAgICAgICAgICAgIHRoaXMuI2lzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xuXG4gICNoYW5kbGVGb3JtU3VibWl0O1xuICAjaW5wdXRMaXN0O1xuICAjcG9wdXA7XG4gICNmb3JtO1xuICAjaXNMb2FkaW5nO1xuICAjY3VzdG9tQnV0dG9uVGV4dDtcbiAgI2J1dHRvblN1Ym1pdDtcbiAgI2lucHV0VmFsdWVzXG5cbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3RvciwgaGFuZGxlRm9ybVN1Ym1pdCkge1xuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xuXG4gICAgdGhpcy4jcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBvcHVwU2VsZWN0b3IpO1xuICAgIHRoaXMuI2Zvcm0gPSB0aGlzLiNwb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2Zvcm0nKTtcbiAgICB0aGlzLiNpbnB1dExpc3QgPSBbLi4udGhpcy4jZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBfX2lucHV0JyldO1xuICAgIHRoaXMuI2J1dHRvblN1Ym1pdCA9IHRoaXMuI3BvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fYnV0dG9uJyk7XG5cbiAgICB0aGlzLiNoYW5kbGVGb3JtU3VibWl0ID0gaGFuZGxlRm9ybVN1Ym1pdDtcblxuICAgIHRoaXMuI2lzTG9hZGluZyA9IGZhbHNlXG4gIH1cblxuICAjZ2V0SW5wdXRWYWx1ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2lucHV0TGlzdC5yZWR1Y2UoKGlucHV0VmFsdWUsIGlucHV0KSA9PiB7XG4gICAgICBpbnB1dFZhbHVlW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XG4gICAgICByZXR1cm4gaW5wdXRWYWx1ZTtcbiAgICB9LCB7fSk7XG4gIH1cblxuICBzZXRJbnB1dFZhbHVlcyhkYXRhKSB7XG4gICAgdGhpcy4jaW5wdXRMaXN0LmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgaWYgKGRhdGFbaW5wdXQubmFtZV0pIHtcbiAgICAgICAgaW5wdXQudmFsdWUgPSBkYXRhW2lucHV0Lm5hbWVdO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0Rm9ybSgpIHtcbiAgICByZXR1cm4gdGhpcy4jZm9ybTtcbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICB0aGlzLiNmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldnQpID0+IHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICB0aGlzLiNpbnB1dFZhbHVlcyA9IHRoaXMuI2dldElucHV0VmFsdWVzKCk7XG5cbiAgICAgIGlmICghdGhpcy4jaXNMb2FkaW5nKSB7XG4gICAgICAgIHRoaXMuI2N1c3RvbUJ1dHRvblRleHQgPSB0aGlzLiNidXR0b25TdWJtaXQudGV4dENvbnRlbnQ7XG4gICAgICAgIHRoaXMuI2J1dHRvblN1Ym1pdC50ZXh0Q29udGVudCA9IFwi0KHQvtGF0YDQsNC90LXQvdC40LUuLi5cIjtcbiAgICAgICAgdGhpcy4jaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy4jaGFuZGxlRm9ybVN1Ym1pdCh0aGlzLiNpbnB1dFZhbHVlcylcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cCgpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpKVxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuI2lzTG9hZGluZykge1xuICAgICAgICAgICAgdGhpcy4jYnV0dG9uU3VibWl0LnRleHRDb250ZW50ID0gdGhpcy4jY3VzdG9tQnV0dG9uVGV4dDtcbiAgICAgICAgICAgIHRoaXMuI2lzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjbG9zZVBvcHVwKCkge1xuICAgIHRoaXMuI2Zvcm0ucmVzZXQoKTtcblxuICAgIHN1cGVyLmNsb3NlUG9wdXAoKTtcbiAgfVxufVxuXG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXAge1xuXG4gICNpbWFnZTtcblxuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yLCBpbWFnZVNlbGVjdG9yKSB7XG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XG4gICAgdGhpcy4jaW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGltYWdlU2VsZWN0b3IpO1xuICB9XG5cbiAgb3BlblBvcHVwKG5hbWUsIGxpbmspIHtcblxuICAgIHN1cGVyLm9wZW5Qb3B1cCgpO1xuXG4gICAgdGhpcy4jaW1hZ2Uuc3JjID0gbGluaztcbiAgICB0aGlzLiNpbWFnZS5hbHQgPSBuYW1lO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19pbWFnZS1jYXB0aW9uJykudGV4dENvbnRlbnQgPSBuYW1lO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcblxuICAjcmVuZGVyZXI7XG4gICNjb250YWluZXI7XG5cblxuICBjb25zdHJ1Y3Rvcih7IHJlbmRlcmVyLCBjYXJkc0NvbnRhaW5lciB9KSB7XG5cbiAgICB0aGlzLiNyZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIHRoaXMuI2NvbnRhaW5lciA9IGNhcmRzQ29udGFpbmVyO1xuXG4gIH1cblxuICAjY2xlYXIoKSB7XG4gICAgdGhpcy4jY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgcmVuZGVySXRlbXMoaXRlbXMpIHtcbiAgICB0aGlzLiNjbGVhcigpO1xuICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB0aGlzLiNyZW5kZXJlcihpdGVtKSk7XG4gIH1cblxuICBhZGRJdGVtKGl0ZW0pIHtcbiAgICB0aGlzLiNjb250YWluZXIucHJlcGVuZChpdGVtKTtcbiAgfVxuXG4gIGFkZEl0ZW1zKGl0ZW1zKSB7XG4gICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHRoaXMuYWRkSXRlbShpdGVtKSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvIHtcblxuICAjZGF0YTtcbiAgI3VzZXJJZDtcblxuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG5cbiAgICB0aGlzLiNkYXRhID0gZGF0YTtcblxuICAgIHRoaXMubmFtZVNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLiNkYXRhLnVzZXJOYW1lKTtcbiAgICB0aGlzLmluZm9TZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy4jZGF0YS51c2VySW5mbyk7XG4gICAgdGhpcy5hdmF0YXJTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy4jZGF0YS5hdmF0YXIpO1xuICAgIHRoaXMuYXZhdGFyU2VsZWN0b3IudGV4dENvbnRlbnQgPSB0aGlzLmF2YXRhclNlbGVjdG9yLnNyYztcbiAgfVxuXG4gIGdldFVzZXJJbmZvKCkge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZVNlbGVjdG9yLnRleHRDb250ZW50LFxuICAgICAgYWJvdXQ6IHRoaXMuaW5mb1NlbGVjdG9yLnRleHRDb250ZW50LFxuICAgIH1cbiAgfVxuXG4gIHNldFVzZXJJZCh1c2VySWQpIHtcbiAgICB0aGlzLiN1c2VySWQgPSB1c2VySWQ7XG4gIH1cblxuICBnZXRVc2VySWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3VzZXJJZDtcbiAgfVxuXG4gIHNldFVzZXJJbmZvKGRhdGEpIHtcblxuICAgIHRoaXMubmFtZVNlbGVjdG9yLnRleHRDb250ZW50ID0gZGF0YS5uYW1lO1xuICAgIHRoaXMuaW5mb1NlbGVjdG9yLnRleHRDb250ZW50ID0gZGF0YS5hYm91dDtcbiAgICB0aGlzLmF2YXRhclNlbGVjdG9yLnNyYyA9IGRhdGEuYXZhdGFyO1xuICB9XG5cbiAgc2V0QXZhdGFyKHVybCkge1xuXG4gICAgdGhpcy5hdmF0YXJTZWxlY3Rvci5zcmMgPSB1cmw7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIGZvcm1TZWxlY3RvcjogJy5wb3B1cF9fZm9ybScsXG4gIGlucHV0U2VsZWN0b3I6ICcucG9wdXBfX2lucHV0JyxcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6ICcucG9wdXBfX2J1dHRvbicsXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6ICdwb3B1cF9fYnV0dG9uX2Rpc2FibGVkJyxcbiAgaW5wdXRFcnJvckNsYXNzOiAncG9wdXBfX2lucHV0X3R5cGVfZXJyb3InLFxuICBlcnJvckNsYXNzOiAncG9wdXBfX2Vycm9yX3Zpc2libGUnLFxufTtcblxuXG5cblxuZXhwb3J0IGNvbnN0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYWNlc19faXRlbXMnKVxuZXhwb3J0IGNvbnN0IHVzZXJTZWxlY3RvcnNEYXRhID0ge1xuICB1c2VyTmFtZTogJy5wcm9maWxlX190aXRsZScsXG4gIHVzZXJJbmZvOiAnLnByb2ZpbGVfX3N1YnRpdGxlJyxcbiAgYXZhdGFyOiAnLnByb2ZpbGVfX2F2YXRhcidcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5cbmltcG9ydCBBcGkgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBpLmpzXCI7XG5cbmltcG9ydCB7IENhcmQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkLmpzXCI7XG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWN0aW9uLmpzXCI7XG5cbmltcG9ydCBQb3B1cFdpdGhJbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qc1wiO1xuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qc1wiO1xuaW1wb3J0IFBvcHVwV2l0aENvbmZpcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhDb25maXJtLmpzJztcblxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJJbmZvLmpzXCI7XG5pbXBvcnQgeyBGb3JtVmFsaWRhdG9yIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qc1wiO1xuXG5pbXBvcnQge1xuICBjb25maWcsXG4gIGNhcmRzQ29udGFpbmVyLFxuICB1c2VyU2VsZWN0b3JzRGF0YVxufSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzLmpzXCI7XG5cbmNvbnN0IGhhbmRsZUFkZEJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcbiAgcG9wdXBBZGQub3BlblBvcHVwKCk7XG4gIHZhbGlkYXRvckZvcm1BZGQucmVzZXRWYWxpZGF0aW9uKCk7XG59XG5cbmNvbnN0IGhhbmRsZUVkaXRCdXR0b24gPSBmdW5jdGlvbiAoKSB7XG4gIHBvcHVwRWRpdC5vcGVuUG9wdXAoKTtcbiAgcG9wdXBFZGl0LnNldElucHV0VmFsdWVzKHVzZXJJbmZvLmdldFVzZXJJbmZvKCkpO1xuICB2YWxpZGF0b3JGb3JtRWRpdC5yZXNldFZhbGlkYXRpb24oKTtcbn1cblxuY29uc3QgaGFuZGxlQXZhdGFyID0gZnVuY3Rpb24gKCkge1xuICBwb3B1cEVkaXRBdmF0YXIub3BlblBvcHVwKCk7XG4gIHBvcHVwRWRpdEF2YXRhci5zZXRJbnB1dFZhbHVlcyh1c2VySW5mby5nZXRVc2VySW5mbygpKTtcbiAgdmFsaWRhdG9yRm9ybUF2YXRhci5yZXNldFZhbGlkYXRpb24oKTtcbn1cblxuY29uc3QgY3JlYXRlQ2FyZCA9IGZ1bmN0aW9uICh2YWx1ZXMpIHtcblxuICBjb25zdCBjYXJkID0gbmV3IENhcmQoXG4gICAgdmFsdWVzLFxuICAgICcjY2FyZHRlbXBsYXRlJyxcbiAgICB1c2VySW5mby5nZXRVc2VySWQoKSxcbiAgICBwb3B1cEltYWdlLm9wZW5Qb3B1cC5iaW5kKHBvcHVwSW1hZ2UpLCAoKSA9PiB7XG4gICAgICBwb3B1cENvbmZpcm0ub3BlblBvcHVwKHtcbiAgICAgICAgaWQ6IHZhbHVlcy5faWQsXG4gICAgICAgIGhhbmRsZURlbGV0ZTogY2FyZC5kZWxldGVDYXJkLmJpbmQoY2FyZCksXG4gICAgICB9KTtcbiAgICB9LFxuICAgIChpc0xpa2VkKSA9PiB7XG4gICAgICBpZiAoaXNMaWtlZCkge1xuICAgICAgICBhcGkucmVtb3ZlTGlrZSh2YWx1ZXMuX2lkKVxuICAgICAgICAgIC50aGVuKGRhdGEgPT4gY2FyZC5yZW1vdmVMaWtlKGRhdGEubGlrZXMubGVuZ3RoKSlcbiAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcGkuc2V0TGlrZSh2YWx1ZXMuX2lkKVxuICAgICAgICAgIC50aGVuKGRhdGEgPT4gY2FyZC5zZXRMaWtlKGRhdGEubGlrZXMubGVuZ3RoKSlcbiAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKSk7XG4gICAgICB9XG4gICAgfVxuICApO1xuXG4gIHJldHVybiBjYXJkLmdlbmVyYXRlQ2FyZCgpO1xufVxuXG5jb25zdCBhcGkgPSBuZXcgQXBpKHtcbiAgdXJsOiAnaHR0cHM6Ly9ub21vcmVwYXJ0aWVzLmNvL3YxL2NvaG9ydC01Mi8nLFxuICBoZWFkZXJzOiB7XG4gICAgYXV0aG9yaXphdGlvbjogJzc5ZGZkOTdlLTRjNzMtNGMzNy1hN2Q1LWI1ZTA5NzEwZjVjOScsXG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICB9LFxufSk7XG5cblxuY29uc3QgY2FyZExpc3QgPSBuZXcgU2VjdGlvbih7XG4gIHJlbmRlcmVyOiAoY2FyZERhdGEpID0+IHtcbiAgICBjYXJkTGlzdC5hZGRJdGVtKGNyZWF0ZUNhcmQoY2FyZERhdGEpKVxuICB9LCBjYXJkc0NvbnRhaW5lclxufSk7XG5cblByb21pc2UuYWxsKFthcGkuZ2V0VXNlcigpLCBhcGkuZ2V0Q2FyZHMoKV0pXG4gIC50aGVuKChbdXNlckRhdGEsIGNhcmRzRGF0YV0pID0+IHtcbiAgICB1c2VySW5mby5zZXRVc2VySW5mbyh1c2VyRGF0YSk7XG4gICAgdXNlckluZm8uc2V0VXNlcklkKHVzZXJEYXRhLl9pZCk7XG5cbiAgICBjYXJkTGlzdC5yZW5kZXJJdGVtcyhjYXJkc0RhdGEucmV2ZXJzZSgpKTtcbiAgfSlcbiAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSkpO1xuXG5jb25zdCBjcmVhdGVWYWxpZGF0b3IgPSBmdW5jdGlvbiAoZm9ybSkge1xuICBjb25zdCBmb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoY29uZmlnLCBmb3JtKTtcbiAgcmV0dXJuIGZvcm1WYWxpZGF0b3I7XG59O1xuXG5jb25zdCBwb3B1cEltYWdlID0gbmV3IFBvcHVwV2l0aEltYWdlKCcucG9wdXBfdHlwZV9pbWFnZScsICcucG9wdXBfX2ltYWdlJyk7XG5cbmNvbnN0IHVzZXJJbmZvID0gbmV3IFVzZXJJbmZvKHVzZXJTZWxlY3RvcnNEYXRhKTtcblxuY29uc3QgcG9wdXBBZGQgPSBuZXcgUG9wdXBXaXRoRm9ybSgnLnBvcHVwX3R5cGVfYWRkJywgKGlucHV0VmFsdWVzID0+IGFwaS5hZGRDYXJkKGlucHV0VmFsdWVzKVxuICAudGhlbihjYXJkRGF0YSA9PiBjYXJkTGlzdC5hZGRJdGVtKGNyZWF0ZUNhcmQoY2FyZERhdGEpKSlcbikpO1xuXG5jb25zdCBwb3B1cEVkaXQgPSBuZXcgUG9wdXBXaXRoRm9ybSgnLnBvcHVwX3R5cGVfZWRpdCcsIChpbnB1dFZhbHVlcyA9PlxuICBhcGkudXBkYXRlVXNlcihpbnB1dFZhbHVlcylcbiAgICAudGhlbih1c2VyRGF0YSA9PiB1c2VySW5mby5zZXRVc2VySW5mbyh1c2VyRGF0YSkpXG4pKTtcblxuY29uc3QgcG9wdXBFZGl0QXZhdGFyID0gbmV3IFBvcHVwV2l0aEZvcm0oJy5wb3B1cF90eXBlX3NldC1hdmF0YXInLCAoaW5wdXRWYWx1ZXMgPT5cbiAgYXBpLnNldEF2YXRhcih7IGF2YXRhcjogaW5wdXRWYWx1ZXMuYXZhdGFyIH0pXG4gICAgLnRoZW4odXNlckluZm8uc2V0QXZhdGFyKGlucHV0VmFsdWVzLmF2YXRhcikpXG4pKTtcblxuY29uc3QgcG9wdXBDb25maXJtID0gbmV3IFBvcHVwV2l0aENvbmZpcm0oJy5wb3B1cF90eXBlX2NvbmZpcm0nLFxuICAoeyBpZCwgaGFuZGxlRGVsZXRlIH0pID0+IHtcbiAgICByZXR1cm4gYXBpLmRlbGV0ZUNhcmQoaWQpXG4gICAgICAudGhlbigoKSA9PiBoYW5kbGVEZWxldGUoKSk7XG4gIH0pO1xuXG5jb25zdCB2YWxpZGF0b3JGb3JtQWRkID0gY3JlYXRlVmFsaWRhdG9yKHBvcHVwQWRkLmdldEZvcm0oKSk7XG5jb25zdCB2YWxpZGF0b3JGb3JtRWRpdCA9IGNyZWF0ZVZhbGlkYXRvcihwb3B1cEVkaXQuZ2V0Rm9ybSgpKTtcbmNvbnN0IHZhbGlkYXRvckZvcm1BdmF0YXIgPSBjcmVhdGVWYWxpZGF0b3IocG9wdXBFZGl0QXZhdGFyLmdldEZvcm0oKSk7XG5cbnZhbGlkYXRvckZvcm1BZGQuZW5hYmxlVmFsaWRhdGlvbigpO1xudmFsaWRhdG9yRm9ybUVkaXQuZW5hYmxlVmFsaWRhdGlvbigpO1xudmFsaWRhdG9yRm9ybUF2YXRhci5lbmFibGVWYWxpZGF0aW9uKCk7XG5cbnBvcHVwSW1hZ2Uuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbnBvcHVwQWRkLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5wb3B1cEVkaXQuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbnBvcHVwRWRpdEF2YXRhci5zZXRFdmVudExpc3RlbmVycygpO1xucG9wdXBDb25maXJtLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19hZGQtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVBZGRCdXR0b24pO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX2VkaXQtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVFZGl0QnV0dG9uKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19hdmF0YXItY29udGFpbmVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVBdmF0YXIpO1xuXG4iXSwibmFtZXMiOlsiQXBpIiwidXJsIiwiY29uZmlnQXBpIiwiaW5wdXRWYWx1ZXMiLCJpZCIsImRhdGEiLCJwYXRoIiwibWV0aG9kIiwiYm9keSIsIm9wdGlvbnMiLCJKU09OIiwic3RyaW5naWZ5IiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJvayIsIkVycm9yIiwibWVzc2FnZSIsIkNhcmQiLCJjYXJkc0RhdGEiLCJjYXJkc0lkU2VsZWN0b3IiLCJ1c2VySWQiLCJoYW5kbGVDYXJkQ2xpY2siLCJoYW5kbGVEZWxldGVDbGljayIsImhhbmRsZUxpa2VDbGljayIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm5hbWUiLCJsaW5rIiwib3duZXIiLCJfaWQiLCJsaWtlcyIsImxlbmd0aCIsImZpbmQiLCJ1c2VyIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwidGV4dENvbnRlbnQiLCJzcmMiLCJhbHQiLCJzZXRMaWtlIiwiY29udGVudCIsImNsb25lTm9kZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJiaW5kIiwiRm9ybVZhbGlkYXRvciIsImNvbmZpZyIsImZvcm1FbGVtZW50IiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5wdXRTZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiZm9yRWFjaCIsImlucHV0Iiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwic29tZSIsInZhbGlkaXR5IiwidmFsaWQiLCJlcnJvck1lc3NhZ2UiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIlBvcHVwIiwicG9wdXBTZWxlY3RvciIsImV2dCIsImtleSIsImNsb3NlUG9wdXAiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidGFyZ2V0IiwiY29udGFpbnMiLCJQb3B1cFdpdGhDb25maXJtIiwiaGFuZGxlQ29uZmlybSIsInRoZW4iLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJmaW5hbGx5IiwiUG9wdXBXaXRoRm9ybSIsImhhbmRsZUZvcm1TdWJtaXQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwicmVzZXQiLCJyZWR1Y2UiLCJpbnB1dFZhbHVlIiwiUG9wdXBXaXRoSW1hZ2UiLCJpbWFnZVNlbGVjdG9yIiwiU2VjdGlvbiIsInJlbmRlcmVyIiwiY2FyZHNDb250YWluZXIiLCJpdGVtcyIsIml0ZW0iLCJwcmVwZW5kIiwiYWRkSXRlbSIsImlubmVySFRNTCIsIlVzZXJJbmZvIiwibmFtZVNlbGVjdG9yIiwidXNlck5hbWUiLCJpbmZvU2VsZWN0b3IiLCJ1c2VySW5mbyIsImF2YXRhclNlbGVjdG9yIiwiYXZhdGFyIiwiYWJvdXQiLCJmb3JtU2VsZWN0b3IiLCJ1c2VyU2VsZWN0b3JzRGF0YSIsImhhbmRsZUFkZEJ1dHRvbiIsInBvcHVwQWRkIiwib3BlblBvcHVwIiwidmFsaWRhdG9yRm9ybUFkZCIsInJlc2V0VmFsaWRhdGlvbiIsImhhbmRsZUVkaXRCdXR0b24iLCJwb3B1cEVkaXQiLCJzZXRJbnB1dFZhbHVlcyIsImdldFVzZXJJbmZvIiwidmFsaWRhdG9yRm9ybUVkaXQiLCJoYW5kbGVBdmF0YXIiLCJwb3B1cEVkaXRBdmF0YXIiLCJ2YWxpZGF0b3JGb3JtQXZhdGFyIiwiY3JlYXRlQ2FyZCIsInZhbHVlcyIsImNhcmQiLCJnZXRVc2VySWQiLCJwb3B1cEltYWdlIiwicG9wdXBDb25maXJtIiwiaGFuZGxlRGVsZXRlIiwiZGVsZXRlQ2FyZCIsImlzTGlrZWQiLCJhcGkiLCJyZW1vdmVMaWtlIiwiZ2VuZXJhdGVDYXJkIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJjYXJkTGlzdCIsImNhcmREYXRhIiwiUHJvbWlzZSIsImFsbCIsImdldFVzZXIiLCJnZXRDYXJkcyIsInVzZXJEYXRhIiwic2V0VXNlckluZm8iLCJzZXRVc2VySWQiLCJyZW5kZXJJdGVtcyIsInJldmVyc2UiLCJjcmVhdGVWYWxpZGF0b3IiLCJmb3JtIiwiZm9ybVZhbGlkYXRvciIsImFkZENhcmQiLCJ1cGRhdGVVc2VyIiwic2V0QXZhdGFyIiwiZ2V0Rm9ybSIsImVuYWJsZVZhbGlkYXRpb24iLCJzZXRFdmVudExpc3RlbmVycyJdLCJzb3VyY2VSb290IjoiIn0=