'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ToDoListItem = function () {
    function ToDoListItem(value, parent, counter, task, watch) {
        _classCallCheck(this, ToDoListItem);

        //получаем все ивенты через свойства, а так же нужные нам данные
        this.watch = watch;
        this.local = task;
        this.inputValue = value;
        this.parent = parent; // items
        this.counter = counter;
        this.checkedItem = false;
        this.init();
    }

    // строим новый айтем


    _createClass(ToDoListItem, [{
        key: 'init',
        value: function init() {
            this.newEvents();
            this.workingWithLocalStorage();
            this.htmlBuild();
            this.mainElements();
            this.mainContainerStyles();
            this.startInputValue();
            this.focusTodolistInput();
            this.checkItem();
            this.newItemValue();
            this.isChecked();
            this.removeTask();
            this.parent.parentNode.parentNode.dispatchEvent(this.watch);
        }

        // если есть какие-то локальные данные, забираем из них инпут, и информацию, какие из айтемов были чекнуты

    }, {
        key: 'workingWithLocalStorage',
        value: function workingWithLocalStorage() {
            if (this.local !== null) {
                this.inputValue = this.local.inputValue;
                this.checkedItem = this.local.checkedItem;
                this.parent.parentNode.parentNode.dispatchEvent(this.watch);
            }
        }
    }, {
        key: 'startInputValue',
        value: function startInputValue() {
            this.newInput.value = this.inputValue;
        }
    }, {
        key: 'mainElements',
        value: function mainElements() {
            this.check = this.mainContainer.firstElementChild.childNodes[1];
            this.newInput = this.mainContainer.firstElementChild.childNodes[3];
            this.remove = this.mainContainer.firstElementChild.childNodes[5];
        }
    }, {
        key: 'mainContainerStyles',
        value: function mainContainerStyles() {
            var _this = this;

            this.newInput.parentNode.addEventListener('mouseover', function () {
                _this.remove.style.display = "block";
            });

            this.newInput.addEventListener('input', function () {
                _this.remove.style.display = "block";
            });

            //    this.remove.addEventListener('mouseover', () => {
            //     this.remove.style.display = "block";

            // });

            // });

            this.remove.addEventListener('mouseout', function (e) {
                _this.remove.style.display = "none";
            });

            this.newInput.parentNode.addEventListener('mouseout', function (e) {
                _this.remove.style.display = "none";
            });
        }
    }, {
        key: 'newEvents',
        value: function newEvents() {

            this.deleteEvent = new CustomEvent("deleteEvent", {
                detail: { count: "done" }
            });

            this.changeEvent = new CustomEvent("changeEvent", {
                detail: { count: "done" }
            });

            this.focusInput = new CustomEvent("focusInput", {
                detail: { count: "done" }
            });
        }

        // постройка каркасса айтема

    }, {
        key: 'htmlBuild',
        value: function htmlBuild() {
            this.mainContainer = document.createElement("div");
            this.parent.appendChild(this.mainContainer);
            this.mainContainer.className = "mainContainer";
            this.mainContainer.innerHTML = ' \n                     <div class=\'container\'>\n                        <div class=\'check\'>\n                        <input type=\'checkbox\' style=\'position:relative; cursor: pointer\'>\n                        </div>\n                        <input class=\'newInput\' value=\'' + this.inputValue + '\'>\n                        <div class=\'remove\'><img src=\'cross.png\' style=\'heigth: 18px; width: 22px; display:block\'></img></div>\n                  </div>';
            this.parent.parentNode.parentNode.dispatchEvent(this.watch);
        }
    }, {
        key: 'focusTodolistInput',
        value: function focusTodolistInput() {
            var _this2 = this;

            this.newInput.addEventListener("keyup", function (e) {
                if (e.keyCode == 13) {
                    _this2.remove.style.display = "none";
                    _this2.parent.parentNode.parentNode.dispatchEvent(_this2.focusInput);
                };
            });
        }

        // метод удаления из Дома

    }, {
        key: 'removeTask',
        value: function removeTask() {
            var _this3 = this;

            console.log(this.remove);
            this.remove.addEventListener("click", function () {
                _this3.deleteEvent.detail.number = _this3.counter;
                _this3.parent.parentNode.parentNode.dispatchEvent(_this3.deleteEvent);
                _this3.mainContainer.remove();
                _this3.parent.parentNode.parentNode.dispatchEvent(_this3.watch);
            });
        }

        // следим за изменениями в чекбоксах, результат записываем в класс.

    }, {
        key: 'isChecked',
        value: function isChecked() {
            var _this4 = this;

            this.check.addEventListener('change', function () {
                if (_this4.check.firstElementChild.checked) {
                    _this4.checkedItem = true;
                    _this4.checkItem();
                    _this4.parent.parentNode.parentNode.dispatchEvent(_this4.watch);
                } else {
                    _this4.checkedItem = false;
                    _this4.checkItem();
                    _this4.parent.parentNode.parentNode.dispatchEvent(_this4.watch);
                }
            });
        }

        // метод изменения inputValue при его изменении на ходу

    }, {
        key: 'newItemValue',
        value: function newItemValue() {
            var _this5 = this;

            this.newInput.addEventListener("input", function () {
                _this5.changeEvent.detail.number = _this5.counter;
                _this5.changeEvent.detail.value = _this5.newInput.value;
                _this5.parent.parentNode.parentNode.dispatchEvent(_this5.changeEvent);
                _this5.parent.parentNode.parentNode.dispatchEvent(_this5.watch);
            });
        }

        // если в классе статус чекбокса checked - применяем стили, и наоборот

    }, {
        key: 'checkItem',
        value: function checkItem() {
            if (this.checkedItem) {
                this.check.className = "checkedcheck";
                this.newInput.className = "checked";
                this.remove.className = "checkedremove";
                this.check.firstElementChild.checked = true;
                this.parent.parentNode.parentNode.dispatchEvent(this.watch);
            } else {
                this.check.className = "check";
                this.newInput.className = "newInput";
                this.remove.className = "remove";
                this.parent.parentNode.parentNode.dispatchEvent(this.watch);
            }
        }
    }]);

    return ToDoListItem;
}();