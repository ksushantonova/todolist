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


var _ = __webpack_require__(1);

var _2 = __webpack_require__(2);

var _3 = __webpack_require__(3);

var _4 = __webpack_require__(4);

var _5 = __webpack_require__(5);

var _6 = __webpack_require__(6);

var _7 = __webpack_require__(7);

var _8 = __webpack_require__(8);

var _9 = __webpack_require__(9);

var _10 = __webpack_require__(10);

var _11 = __webpack_require__(11);

var _12 = __webpack_require__(12);

// Final data for sending off to the server
// UO-000

var data = {
    describeYouBest: "",
    planNumber: "",
    ownerOrLeasee: "",
    whereAreYouWorkInGovernment: "",
    areaOfInterest: "",
    roleWithinTheGasIndustry: "",
    roleInTheCommunity: "",
    businessName: "",
    userLocation: "",
    nearestPopulationCentre: "",
    interests: "",
    userEmail: "",
    userPassword: "",
    userPassword_again: ""

};

new _.UO000(data);
new _2.UO002(data);
new _3.UO004(data);
new _4.UO008(data);
new _5.UO011(data);
new _6.UO014(data);
new _7.UO016(data);
new _8.UO017();
new _9.UO019(data);
new _10.UO020(data);
new _11.UO022(data);
new _12.UO026(data);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UO000 = exports.UO000 = function () {
    function UO000(data) {
        _classCallCheck(this, UO000);

        this.data = data;
        this.currentScreen = document.getElementById('UO-000');
        this.nextScreen = document.getElementById('UO-002');
        this.menues = document.getElementsByClassName('dropdownMenu');
        this.button = document.getElementById('next000');
        this.init();
    }

    _createClass(UO000, [{
        key: 'init',
        value: function init() {
            this.showMenues(this.menues);
            this.changeScreen(this.button, this.currentScreen, this.nextScreen);
        }
    }, {
        key: 'showMenues',
        value: function showMenues(menues) {
            var _this = this;

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                var _loop = function _loop() {
                    var menu = _step.value;

                    menu.addEventListener('click', function () {
                        _this.toggleMenu(menu.nextElementSibling, "menuPocket", menu);
                    });
                };

                for (var _iterator = menues[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    _loop();
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: 'changeScreen',
        value: function changeScreen(button, previousScreen, nextScreen) {
            button.onclick = function () {
                previousScreen.style.display = "none";
                nextScreen.style.display = "block";
            };
        }
    }, {
        key: 'toggleMenu',
        value: function toggleMenu(element, className, dropdownMenu) {
            if (!element || !className) {
                return;
            }
            var classString = element.className,
                nameIndex = classString.indexOf(className);
            if (nameIndex == -1) {
                classString += ' ' + className;
                this.button.style.margin = "49px 17.5px 49px 17.5px";
                dropdownMenu.lastElementChild.firstElementChild.className = 'fa fa-angle-down';
            } else {
                classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length);
                this.button.style.margin = "25px 17.5px 49px 17.5px";
                dropdownMenu.lastElementChild.firstElementChild.className = 'fa fa-angle-up';
            }

            element.className = classString;
        }
    }]);

    return UO000;
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UO002 = exports.UO002 = function () {
    function UO002(data) {
        _classCallCheck(this, UO002);

        this.data = data;
        this.currentScreen = document.getElementById('UO-002');
        this.nextLandholder = document.getElementById('UO-004');
        this.nextGovernment = document.getElementById('UO-008');
        this.nextGas_industry = document.getElementById('UO-011');
        this.nextCommunity = document.getElementById('UO-014');
        this.allScreens = document.getElementsByClassName('screen');
        this.button = document.getElementById('next002');
        this.choiseContainer = document.getElementById('flexSquares');
        this.choiseContainers = document.getElementsByClassName('choiseImage');
        this.currentCircle = document.getElementById('circle1');
        this.nextCircle = document.getElementById('circle2');
        this.choiseData = "";
        this.init();
    }

    _createClass(UO002, [{
        key: 'init',
        value: function init() {
            this.makeChoise(this.choiseContainer, this.data);
        }
    }, {
        key: 'makeChoise',
        value: function makeChoise(container, data) {
            var _this = this;

            container.addEventListener("click", function (e) {
                _this.choiseData = e.target.id;
                data.describeYouBest = _this.choiseData;
                _this.changeButton(_this.button);
                _this.unlockButton(_this.button);
                _this.changeImage(e, _this.choiseData, _this.choiseContainers);
            });
        }
    }, {
        key: 'changeButton',
        value: function changeButton(button) {
            button.style.cursor = "pointer";
            button.style.opacity = "1";
        }
    }, {
        key: 'unlockButton',
        value: function unlockButton(button) {
            if (this.data.describeYouBest == "Landholder") {
                this.changeScreen(button, this.allScreens, this.nextLandholder);
            } else if (this.data.describeYouBest == "Government") {
                this.changeScreen(button, this.allScreens, this.nextGovernment);
            } else if (this.data.describeYouBest == "Gas-industry") {
                this.changeScreen(button, this.allScreens, this.nextGas_industry);
            } else if (this.data.describeYouBest == "Community") {
                this.changeScreen(button, this.allScreens, this.nextCommunity);
            }
        }
    }, {
        key: 'changeScreen',
        value: function changeScreen(button, allScreens, nextScreen) {
            var _this2 = this;

            button.addEventListener('click', function (e) {
                for (var i = 0; i < allScreens.length; i++) {
                    allScreens[i].style.display = "none";
                }
                nextScreen.style.display = "block";
                _this2.changeCircle(_this2.currentCircle, _this2.nextCircle);
            });
        }
    }, {
        key: 'changeImage',
        value: function changeImage(e, choise, containers) {
            e.target.setAttribute("src", "./images/" + choise + ".png");
            for (var i = 0; i < containers.length; i++) {
                if (containers[i] !== e.target) {
                    containers[i].setAttribute("src", "./images/" + containers[i].id + "first.png");
                }
            }
        }
    }, {
        key: 'changeCircle',
        value: function changeCircle(current, next) {
            current.style.color = "white";
            next.style.color = "#007598";
        }
    }]);

    return UO002;
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UO004 = exports.UO004 = function () {
    function UO004(data) {
        _classCallCheck(this, UO004);

        this.data = data;
        this.currentScreen = document.getElementById('UO-004');
        this.nextScreen = document.getElementById('UO-017');
        this.radioContainer = document.getElementById('radio004');
        this.radioButtons = document.getElementsByClassName('radio004');
        this.planNumberInput = document.getElementById('plan-number');
        this.button = document.getElementById('next004');
        this.infoButton = document.getElementById('information');
        this.infoScreen = document.getElementById('UO-005');
        this.infoScreenButton = document.getElementById('okay');
        this.currentCircle = document.getElementById('circle2');
        this.nextCircle = document.getElementById('circle3');
        this.init();
    }

    _createClass(UO004, [{
        key: 'init',
        value: function init() {
            this.getPlanNumber(this.planNumberInput);
            this.getRadioChoise(this.radioContainer);
            this.showInfo(this.infoButton, this.infoScreen);
            this.hideInfo(this.infoScreenButton, this.infoScreen);
        }
    }, {
        key: 'getPlanNumber',
        value: function getPlanNumber(input) {
            var _this = this;

            input.addEventListener('change', function () {
                _this.data.planNumber = input.value;
                _this.changeButton(_this.button);
            });
        }
    }, {
        key: 'changeScreen',
        value: function changeScreen(button, previousScreen, nextScreen) {
            var _this2 = this;

            button.addEventListener('click', function () {
                _this2.changeCircle(_this2.currentCircle, _this2.nextCircle);
                previousScreen.style.display = "none";
                nextScreen.style.display = "block";
            });
        }
    }, {
        key: 'unlockButton',
        value: function unlockButton(button) {
            if (this.data.planNumber.length > 0 && this.data.ownerOrLeasee.length > 0) {
                this.changeScreen(button, this.currentScreen, this.nextScreen);
            }
        }
    }, {
        key: 'changeButton',
        value: function changeButton(button) {
            button.style.cursor = "pointer";
            button.style.opacity = "1";
        }
    }, {
        key: 'getRadioChoise',
        value: function getRadioChoise(container) {
            var _this3 = this;

            container.addEventListener('click', function (e) {
                _this3.makeRadioButton(e, _this3.radioButtons);
                _this3.data.ownerOrLeasee = e.target.parentNode.lastChild.data;
                _this3.unlockButton(_this3.button);
            });
        }
    }, {
        key: 'makeRadioButton',
        value: function makeRadioButton(e, buttons) {
            if (e.target.className == "fa fa-circle-thin radio004") {
                e.target.className = "fa fa-circle radio004";
                for (var i = 0; i < buttons.length; i++) {
                    if (buttons[i] !== e.target) {
                        buttons[i].className = "fa fa-circle-thin radio004";
                    }
                }
            }
        }
    }, {
        key: 'showInfo',
        value: function showInfo(button, infoScreen) {
            button.addEventListener('click', function () {
                infoScreen.style.display = "block";
            });
        }
    }, {
        key: 'hideInfo',
        value: function hideInfo(button, infoScreen) {
            button.addEventListener('click', function () {
                infoScreen.style.display = "none";
            });
        }
    }, {
        key: 'changeCircle',
        value: function changeCircle(current, next) {
            current.style.color = "white";
            next.style.color = "#007598";
        }
    }]);

    return UO004;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UO008 = exports.UO008 = function () {
    function UO008(data) {
        _classCallCheck(this, UO008);

        this.data = data;
        this.radioContainer1 = document.getElementById('radio008_1');
        this.radioContainer2 = document.getElementById('radio008_2');
        this.radioButtons1 = document.getElementsByClassName('radio008_1');
        this.radioButtons2 = document.getElementsByClassName('radio008_2');
        this.button = document.getElementById('next008');
        this.currentScreen = document.getElementById("UO-008");
        this.nextScreen = document.getElementById("UO-017");
        this.currentCircle = document.getElementById('circle2');
        this.nextCircle = document.getElementById('circle3');
        this.init();
    }

    _createClass(UO008, [{
        key: 'init',
        value: function init() {
            var changeRadioData_1 = {
                container: this.radioContainer1,
                name: "whereAreYouWorkInGovernment",
                radioButtons: this.radioButtons1,
                firstClass: "fa fa-circle-thin radio008_1",
                secondClass: "fa fa-circle radio008_1"
            };
            var changeRadioData_2 = {
                container: this.radioContainer2,
                name: "areaOfInterest",
                radioButtons: this.radioButtons2,
                firstClass: "fa fa-circle-thin radio008_2",
                secondClass: "fa fa-circle radio008_2"
            };

            this.getRadioChoise(changeRadioData_1);
            this.getRadioChoise(changeRadioData_2);
        }
    }, {
        key: 'getRadioChoise',
        value: function getRadioChoise(changeData) {
            var _this = this;

            changeData.container.addEventListener('click', function (e) {
                _this.makeRadioButton(e, changeData.radioButtons, changeData.firstClass, changeData.secondClass);
                _this.data[changeData.name] = e.target.parentNode.lastChild.data;
                _this.unlockButton(_this.button);
            });
        }
    }, {
        key: 'makeRadioButton',
        value: function makeRadioButton(e, buttons, classNameFirst, classNameSecond) {
            if (e.target.className == classNameFirst) {
                e.target.className = classNameSecond;
                for (var i = 0; i < buttons.length; i++) {
                    if (buttons[i] !== e.target) {
                        buttons[i].className = classNameFirst;
                    }
                }
            }
        }
    }, {
        key: 'unlockButton',
        value: function unlockButton(button) {
            if (this.data.whereAreYouWorkInGovernment.length !== undefined && this.data.areaOfInterest !== undefined) {
                this.changeButton(button);
                this.changeScreen(button, this.currentScreen, this.nextScreen);
                this.changeCircle(this.button, this.currentCircle, this.nextCircle);
            }
        }
    }, {
        key: 'changeScreen',
        value: function changeScreen(button, previousScreen, nextScreen) {
            button.addEventListener('click', function () {
                previousScreen.style.display = "none";
                nextScreen.style.display = "block";
            });
        }
    }, {
        key: 'changeButton',
        value: function changeButton(button) {
            button.style.cursor = "pointer";
            button.style.opacity = "1";
        }
    }, {
        key: 'changeCircle',
        value: function changeCircle(button, current, next) {
            button.addEventListener('click', function () {
                current.style.color = "white";
                next.style.color = "#007598";
            });
        }
    }]);

    return UO008;
}();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UO011 = exports.UO011 = function () {
    function UO011(data) {
        _classCallCheck(this, UO011);

        this.data = data;
        this.radioContainer = document.getElementById('radio011');
        this.radioButtons = document.getElementsByClassName('radio011');
        this.currentScreen = document.getElementById('UO-011');
        this.nextScreen = document.getElementById('UO-017');
        this.button = document.getElementById('next011');
        this.specify = document.getElementById('toSpecify');
        this.currentCircle = document.getElementById('circle2');
        this.nextCircle = document.getElementById('circle3');
        this.init();
    }

    _createClass(UO011, [{
        key: 'init',
        value: function init() {
            var changeRadioData = {
                container: this.radioContainer,
                name: "roleWithinTheGasIndustry",
                radioButtons: this.radioButtons,
                firstClass: "fa fa-circle-thin radio011",
                secondClass: "fa fa-circle radio011"
            };

            this.getRadioChoise(changeRadioData);
        }
    }, {
        key: 'getRadioChoise',
        value: function getRadioChoise(changeData) {
            var _this = this;

            changeData.container.addEventListener('click', function (e) {
                _this.makeRadioButton(e, changeData.radioButtons, changeData.firstClass, changeData.secondClass);
                _this.data[changeData.name] = e.target.parentNode.lastChild.data;
                _this.unlockButton(_this.button);
            });
        }
    }, {
        key: 'makeRadioButton',
        value: function makeRadioButton(e, buttons, classNameFirst, classNameSecond) {
            if (e.target.className == classNameFirst) {
                e.target.className = classNameSecond;
                for (var i = 0; i < buttons.length; i++) {
                    if (buttons[i] !== e.target) {
                        buttons[i].className = classNameFirst;
                    }
                }
            }
        }
    }, {
        key: 'unlockButton',
        value: function unlockButton(button) {
            if (this.data.roleWithinTheGasIndustry.length !== undefined) {
                this.changeButton(button);
                if (this.data.roleWithinTheGasIndustry !== "Other (please specify)") {
                    this.changeScreen(button, this.currentScreen, this.nextScreen);
                    this.changeCircle(this.button, this.currentCircle, this.nextCircle);
                } else {
                    this.specify.style.display = "block";
                    this.getSpecify(this.specify.firstElementChild);
                    this.changeScreen(button, this.currentScreen, this.nextScreen);
                    this.changeCircle(this.button, this.currentCircle, this.nextCircle);
                }
            }
        }
    }, {
        key: 'getSpecify',
        value: function getSpecify(input) {
            var _this2 = this;

            input.addEventListener('change', function () {
                _this2.data.roleWithinTheGasIndustry = input.value;
                _this2.changeButton(_this2.button);
            });
        }
    }, {
        key: 'changeScreen',
        value: function changeScreen(button, previousScreen, nextScreen) {
            button.addEventListener('click', function () {
                previousScreen.style.display = "none";
                nextScreen.style.display = "block";
            });
        }
    }, {
        key: 'changeButton',
        value: function changeButton(button) {
            button.style.cursor = "pointer";
            button.style.opacity = "1";
        }
    }, {
        key: 'changeCircle',
        value: function changeCircle(button, current, next) {
            button.addEventListener('click', function () {
                current.style.color = "white";
                next.style.color = "#007598";
            });
        }
    }]);

    return UO011;
}();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UO014 = exports.UO014 = function () {
    function UO014(data) {
        _classCallCheck(this, UO014);

        this.data = data;
        this.container = document.getElementById('flexThree');
        this.currentScreen = document.getElementById('UO-014');
        this.choiseData = "";
        this.button = document.getElementById('next014');
        this.choiseContainers = document.getElementsByClassName('choiseImage014');
        this.allScreens = document.getElementsByClassName('screen');
        this.nextScreen = document.getElementById('UO-016');
        this.nextMainScreen = document.getElementById('UO-017');
        this.init();
    }

    _createClass(UO014, [{
        key: 'init',
        value: function init() {
            this.makeChoise(this.container, this.data);
        }
    }, {
        key: 'makeChoise',
        value: function makeChoise(container, data) {
            var _this = this;

            container.addEventListener("click", function (e) {
                _this.choiseData = e.target.id;
                data.roleInTheCommunity = _this.choiseData;
                _this.changeButton(_this.button);
                _this.unlockButton(_this.button);
                _this.changeImage(e, _this.choiseData, _this.choiseContainers);
            });
        }
    }, {
        key: 'changeButton',
        value: function changeButton(button) {
            button.style.cursor = "pointer";
            button.style.opacity = "1";
        }
    }, {
        key: 'unlockButton',
        value: function unlockButton(button) {
            if (this.data.roleInTheCommunity.length > 0) {
                this.changeButton(button);
                if (this.data.roleInTheCommunity == "BusinessOwner") {
                    this.changeScreen(button, this.allScreens, this.nextScreen);
                } else {
                    this.changeScreen(button, this.allScreens, this.nextMainScreen);
                }
            }
        }
    }, {
        key: 'changeScreen',
        value: function changeScreen(button, allScreens, nextScreen) {
            button.addEventListener('click', function (e) {
                for (var i = 0; i < allScreens.length; i++) {
                    allScreens[i].style.display = "none";
                }
                nextScreen.style.display = "block";
            });
        }
    }, {
        key: 'changeImage',
        value: function changeImage(e, choise, containers) {
            e.target.setAttribute("src", "./images/" + choise + ".png");
            e.target.previousElementSibling.style.color = "white";
            for (var i = 0; i < containers.length; i++) {
                if (containers[i] !== e.target) {
                    containers[i].setAttribute("src", "./images/" + containers[i].id + "first.png");
                    containers[i].previousElementSibling.style.color = "#00ADC5";
                }
            }
        }
    }]);

    return UO014;
}();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UO016 = exports.UO016 = function () {
    function UO016(data) {
        _classCallCheck(this, UO016);

        this.data = data;
        this.input = document.getElementById('business-name');
        this.button = document.getElementById('next016');
        this.allScreens = document.getElementsByClassName('screen');
        this.nextScreen = document.getElementById('UO-017');
        this.currentCircle = document.getElementById('circle2');
        this.nextCircle = document.getElementById('circle3');
        this.init();
    }

    _createClass(UO016, [{
        key: 'init',
        value: function init() {
            this.getPlanNumber(this.input);
            this.changeScreen(this.button, this.allScreens, this.nextScreen);
        }
    }, {
        key: 'getPlanNumber',
        value: function getPlanNumber(input) {
            var _this = this;

            input.addEventListener('change', function () {
                _this.changeButton(_this.button);
                _this.data.businessName = input.value;
            });
        }
    }, {
        key: 'changeButton',
        value: function changeButton(button) {
            button.style.cursor = "pointer";
            button.style.opacity = "1";
        }
    }, {
        key: 'changeScreen',
        value: function changeScreen(button, allScreens, nextScreen) {
            var _this2 = this;

            button.addEventListener('click', function (e) {
                for (var i = 0; i < allScreens.length; i++) {
                    allScreens[i].style.display = "none";
                }
                nextScreen.style.display = "block";
                _this2.changeCircle(_this2.button, _this2.currentCircle, _this2.nextCircle);
            });
        }
    }, {
        key: 'changeCircle',
        value: function changeCircle(button, current, next) {
            button.addEventListener('click', function () {
                current.style.color = "white";
                next.style.color = "#007598";
            });
        }
    }]);

    return UO016;
}();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UO017 = exports.UO017 = function () {
    function UO017() {
        _classCallCheck(this, UO017);

        this.button = document.getElementById('information017');
        this.infoScreen = document.getElementById('UO-018');
        this.infoScreenButton = document.getElementById('okay018');
        this.image = document.getElementById('location');
        this.allScreens = document.getElementsByClassName('screen');
        this.nextScreen = document.getElementById('UO-019');
        this.init();
    }

    _createClass(UO017, [{
        key: 'init',
        value: function init() {
            this.showInfo(this.button, this.infoScreen);
            this.hideInfo(this.infoScreenButton, this.infoScreen);
            this.changeScreen(this.image, this.allScreens, this.nextScreen);
        }
    }, {
        key: 'showInfo',
        value: function showInfo(button, infoScreen) {
            button.addEventListener('click', function () {
                infoScreen.style.display = "block";
            });
        }
    }, {
        key: 'hideInfo',
        value: function hideInfo(button, infoScreen) {
            button.addEventListener('click', function () {
                infoScreen.style.display = "none";
            });
        }
    }, {
        key: 'changeScreen',
        value: function changeScreen(button, allScreens, nextScreen) {
            button.addEventListener('click', function (e) {
                for (var i = 0; i < allScreens.length; i++) {
                    allScreens[i].style.display = "none";
                }
                nextScreen.style.display = "block";
                document.getElementById('circles').style.display = "none";
            });
        }
    }]);

    return UO017;
}();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UO019 = exports.UO019 = function () {
    function UO019(data) {
        _classCallCheck(this, UO019);

        this.data = data;
        this.button = document.getElementById('okay019');
        this.allScreens = document.getElementsByClassName('screen');
        this.nextScreen = document.getElementById('UO-020');
        this.init();
    }

    _createClass(UO019, [{
        key: 'init',
        value: function init() {
            this.getLocation(this.data);
            this.changeScreen(this.button, this.allScreens, this.nextScreen);
        }
    }, {
        key: 'changeScreen',
        value: function changeScreen(button, allScreens, nextScreen) {
            button.addEventListener('click', function (e) {
                for (var i = 0; i < allScreens.length; i++) {
                    allScreens[i].style.display = "none";
                }
                nextScreen.style.display = "block";
                document.getElementById('circles').style.display = "block";
            });
        }
    }, {
        key: 'getLocation',
        value: function getLocation(data) {
            data.userLocation = "user location";
        }
    }]);

    return UO019;
}();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UO020 = exports.UO020 = function () {
    function UO020(data) {
        _classCallCheck(this, UO020);

        this.data = data;
        this.input = document.getElementById('population-centre');
        this.button = document.getElementById('next020');
        this.infoButton = document.getElementById('information020');
        this.allScreens = document.getElementsByClassName('screen');
        this.nextScreen = document.getElementById('UO-022');
        this.infoScreen = document.getElementById('UO-021');
        this.infoScreenButton = document.getElementById('okay021');
        this.currentCircle = document.getElementById('circle3');
        this.nextCircle = document.getElementById('circle4');
        this.init();
    }

    _createClass(UO020, [{
        key: 'init',
        value: function init() {
            this.showInfo(this.infoButton, this.infoScreen);
            this.hideInfo(this.infoScreenButton, this.infoScreen);
            this.getPlanNumber(this.input);
        }
    }, {
        key: 'getPlanNumber',
        value: function getPlanNumber(input) {
            var _this = this;

            input.addEventListener('change', function () {
                _this.changeButton(_this.button);
                _this.data.nearestPopulationCentre = input.value;
                _this.changeScreen(_this.button, _this.allScreens, _this.nextScreen);
            });
        }
    }, {
        key: 'changeButton',
        value: function changeButton(button) {
            button.style.cursor = "pointer";
            button.style.opacity = "1";
            this.changeCircle(this.button, this.currentCircle, this.nextCircle);
        }
    }, {
        key: 'changeScreen',
        value: function changeScreen(button, allScreens, nextScreen) {
            button.addEventListener('click', function (e) {
                for (var i = 0; i < allScreens.length; i++) {
                    allScreens[i].style.display = "none";
                }
                nextScreen.style.display = "block";
            });
        }
    }, {
        key: 'showInfo',
        value: function showInfo(button, infoScreen) {
            button.addEventListener('click', function () {
                infoScreen.style.display = "block";
            });
        }
    }, {
        key: 'hideInfo',
        value: function hideInfo(button, infoScreen) {
            button.addEventListener('click', function () {
                infoScreen.style.display = "none";
            });
        }
    }, {
        key: 'changeCircle',
        value: function changeCircle(button, current, next) {
            button.addEventListener('click', function () {
                current.style.color = "white";
                next.style.color = "#007598";
            });
        }
    }]);

    return UO020;
}();

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UO022 = exports.UO022 = function () {
    function UO022(data) {
        _classCallCheck(this, UO022);

        this.data = data;
        this.radioContainer = document.getElementById('radio022');
        this.radioButtons = document.getElementsByClassName('radio022');
        this.nextScreen = document.getElementById('UO-026');
        this.button = document.getElementById('next022');
        this.allScreens = document.getElementsByClassName('screen');
        this.currentCircle = document.getElementById('circle4');
        this.nextCircle = document.getElementById('circle6');
        this.init();
    }

    _createClass(UO022, [{
        key: 'init',
        value: function init() {
            var changeRadioData = {
                container: this.radioContainer,
                name: "interests",
                radioButtons: this.radioButtons,
                firstClass: "fa fa-circle-thin radio022",
                secondClass: "fa fa-circle radio022"
            };

            this.getRadioChoise(changeRadioData);
        }
    }, {
        key: 'getRadioChoise',
        value: function getRadioChoise(changeData) {
            var _this = this;

            changeData.container.addEventListener('click', function (e) {
                _this.makeRadioButton(e, changeData.radioButtons, changeData.firstClass, changeData.secondClass);
                _this.data[changeData.name] = e.target.parentNode.lastChild.data;
                _this.unlockButton(_this.button);
            });
        }
    }, {
        key: 'makeRadioButton',
        value: function makeRadioButton(e, buttons, classNameFirst, classNameSecond) {
            if (e.target.className == classNameFirst) {
                e.target.className = classNameSecond;
                for (var i = 0; i < buttons.length; i++) {
                    if (buttons[i] !== e.target) {
                        buttons[i].className = classNameFirst;
                    }
                }
            }
        }
    }, {
        key: 'unlockButton',
        value: function unlockButton(button) {
            if (this.data.interests.length > 0) {
                this.changeButton(button);
                this.changeScreen(button, this.allScreens, this.nextScreen);
                this.changeCircle(this.button, this.currentCircle, this.nextCircle);
            }
        }
    }, {
        key: 'changeScreen',
        value: function changeScreen(button, allScreens, nextScreen) {
            button.addEventListener('click', function (e) {
                for (var i = 0; i < allScreens.length; i++) {
                    allScreens[i].style.display = "none";
                }
                nextScreen.style.display = "block";
            });
        }
    }, {
        key: 'changeButton',
        value: function changeButton(button) {
            button.style.cursor = "pointer";
            button.style.opacity = "1";
        }
    }, {
        key: 'changeCircle',
        value: function changeCircle(button, current, next) {
            button.addEventListener('click', function () {
                current.style.color = "white";
                next.style.color = "#007598";
            });
        }
    }]);

    return UO022;
}();

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UO026 = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _result = __webpack_require__(13);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UO026 = exports.UO026 = function () {
    function UO026(data) {
        _classCallCheck(this, UO026);

        this.data = data;
        this.email = document.getElementById('email');
        this.password = document.getElementById('password');
        this.password_again = document.getElementById('password_again');
        this.button = document.getElementById('next026');
        this.allScreens = document.getElementsByClassName('screen');
        this.nextScreen = document.getElementById('result');
        this.init();
    }

    _createClass(UO026, [{
        key: 'init',
        value: function init() {
            this.getPlanNumber(this.email, "userEmail");
            this.getPlanNumber(this.password, "userPassword");
            this.getPlanNumber(this.password_again, "userPassword_again");
            this.changeScreen(this.button, this.allScreens, this.nextScreen);
        }
    }, {
        key: 'getPlanNumber',
        value: function getPlanNumber(input, name) {
            var _this = this;

            input.addEventListener('change', function () {
                _this.data[name] = input.value;
                _this.checkInputs(_this.data);
            });
        }
    }, {
        key: 'checkInputs',
        value: function checkInputs(data) {
            if (data.userEmail.length > 0 && data.userPassword.length > 0 && data.userPassword_again.length > 0 && data.userPassword == data.userPassword_again) {
                this.changeButton(this.button);
            }
        }
    }, {
        key: 'changeButton',
        value: function changeButton(button) {
            button.style.cursor = "pointer";
            button.style.opacity = "1";
        }
    }, {
        key: 'changeScreen',
        value: function changeScreen(button, allScreens, nextScreen) {
            var _this2 = this;

            button.addEventListener('click', function (e) {
                for (var i = 0; i < allScreens.length; i++) {
                    allScreens[i].style.display = "none";
                }
                nextScreen.style.display = "block";
                new _result.Result(_this2.data);
            });
        }
    }]);

    return UO026;
}();

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Result = exports.Result = function () {
    function Result(data) {
        _classCallCheck(this, Result);

        this.data = data;
        this.init();
    }

    _createClass(Result, [{
        key: "init",
        value: function init() {
            this.showData(this.data);
        }
    }, {
        key: "showData",
        value: function showData(data) {
            for (var name in data) {
                if (data[name].length > 1) {
                    document.getElementById(name).innerHTML = name + " : " + data[name];
                    document.getElementById(name).style.display = "block";
                }
            }
        }
    }]);

    return Result;
}();

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map