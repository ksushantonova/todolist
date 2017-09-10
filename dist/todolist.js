"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import {ToDoListItem} from './todolistitem.js';

var Todolist = function () {
    function Todolist(parent, counter, local, watch) {
        _classCallCheck(this, Todolist);

        this.watch = watch;
        this.local = local;
        this.parent = parent; // mainFrame
        this.tasks = [];
        this.listCounter = counter;
        this.taskCounter = 0;
        this.makeList();
    }

    // созлание нового айтема


    _createClass(Todolist, [{
        key: "makeList",
        value: function makeList() {
            this.makeFrame();
            this.mainElements();
            this.getHeader();
            this.newEvents();
            this.workingWithLocalStorage();
            this.inputs();
            this.initEvents();
            this.removeList();
            this.deleteAllEvents();
            this.doneallItems();
            this.parent.dispatchEvent(this.watch);
        }
    }, {
        key: "makeFrame",
        value: function makeFrame() {
            this.parent.innerHTML = " \n    <div class=\"head\">\n    <div class=\"todoHeader\">\n   <div class=\"header\" contenteditable=\"true\" >Blabla</div> \n    <div style=\"width:25px; height:25px; cursor:pointer; padding: 16px 0 0 13px;\"><img src='all2.png' style='heigth: 23px; width: 23px'></img></div>\n    <div  style=\"width:25px;cursor:pointer; height:25px; padding: 16px 15px 0 16px;\"><img src='del2.png' style='heigth: 23px; width: 23px'></img></div>\n    </div>\n    <div class=\"items\"></div>  \n        <div class=\"underdiv\">\n            <input class=\"input\" type=\"text\" placeholder=\" + New task\"/>\n            <div class=\"cross\"><img src='cross.png' style='heigth: 30px; width: 22px'></img></div>\n         </div> \n         </div>\n                    ";
        }

        // работа с данными из локалсторейдж( забирает заголовок, и запускает метод строительства заданий)

    }, {
        key: "workingWithLocalStorage",
        value: function workingWithLocalStorage() {
            if (this.local !== null) {
                var header = this.parent.childNodes[1].childNodes[1].childNodes[1];
                header.innerText = this.local.header;
                this.header = this.local.header;
                this.buildLocalTask();
            }
        }
    }, {
        key: "doneallItems",
        value: function doneallItems() {
            var _this = this;

            this.allDoneButton.addEventListener("click", function () {
                _this.tasks.forEach(function (task) {
                    task.checkedItem = true;
                    task.check.firstElementChild.checked = true;
                    task.checkItem();
                });
            });
            this.parent.dispatchEvent(this.watch);
        }
    }, {
        key: "buildLocalTask",


        // выясняет, сколько заданий было в локалсторейдж, и строит такое же количество 
        value: function buildLocalTask() {
            var _this2 = this;

            this.local.tasks.forEach(function (item) {
                _this2.buildTask(item);
            });
            this.parent.dispatchEvent(this.watch);
        }
    }, {
        key: "inputs",
        value: function inputs() {
            var _this3 = this;

            //    this.input.addEventListener("change", () => {
            //     this.buildTask(null);
            // }); 

            this.input.addEventListener("keyup", function (e) {
                _this3.buildTask(null);
                //  if(e.keyCode == 13){
                //  this.buildTask(null);
                // };
            });
            this.parent.dispatchEvent(this.watch);
        }

        // ловим ивенты удаления, и изменения в айтемх

    }, {
        key: "initEvents",
        value: function initEvents() {
            var _this4 = this;

            this.temporaryData = [];
            this.parent.addEventListener("deleteEvent", function (event) {
                _this4.getNumber(event);
                _this4.tasks.splice(_this4.temporaryData[1], 1);
            });

            this.parent.addEventListener("changeEvent", function (event) {
                _this4.getNumber(event);
                _this4.temporaryData[0].inputValue = event.detail.value;
            });

            this.parent.addEventListener("focusInput", function () {
                _this4.input.focus();
            });
        }
    }, {
        key: "deleteAllEvents",


        // при клике на мусорный бак удаляются все айтемы
        value: function deleteAllEvents() {
            var _this5 = this;

            this.deleteAllButton.addEventListener("click", function () {
                _this5.tasks = [];
                _this5.parent.childNodes[1].childNodes[3].innerHTML = "";
                _this5.parent.dispatchEvent(_this5.watch);
            });
        }
        // инициализация всех кастомивентов которые относятся к этому классу

    }, {
        key: "newEvents",
        value: function newEvents() {

            this.deleteLists = new CustomEvent("deleteLists", {
                detail: { count: "done" }
            });
        }
    }, {
        key: "mainElements",
        value: function mainElements() {
            this.input = this.parent.childNodes[1].childNodes[5].childNodes[1];
            this.allDoneButton = this.parent.childNodes[1].childNodes[1].childNodes[3];
            this.deleteAllButton = this.parent.childNodes[1].childNodes[1].childNodes[5];
            this.parent.dispatchEvent(this.watch);
        }
    }, {
        key: "buildTask",

        // строительство нового айтема
        value: function buildTask(localData) {
            this.tasks.push(new ToDoListItem(this.input.value, this.parent.childNodes[1].childNodes[3], this.taskCounter++, localData, this.watch));
            this.cleanValue();
            this.parent.childNodes[1].childNodes[3].lastElementChild.childNodes[1].childNodes[3].focus();
        }
    }, {
        key: "getHeader",

        // метод наблюдает за любыми изменениями заголовка, и списывает их в массив
        value: function getHeader() {
            var _this6 = this;

            var header = this.parent.childNodes[1].childNodes[1].childNodes[1];
            this.header = header.innerText;
            header.addEventListener("input", function () {
                _this6.header = header.innerText;
                _this6.parent.dispatchEvent(_this6.watch);
            });
        }
        // метод сравнивает номера в details и в массиве, на выходе получаем массив из элемента и его индекса

    }, {
        key: "getNumber",
        value: function getNumber(thisEvent) {
            var _this7 = this;

            this.temporaryData = [];
            this.tasks.forEach(function (task, i) {
                if (task.counter == thisEvent.detail.number) {
                    _this7.temporaryData.unshift(i);
                    _this7.temporaryData.unshift(task);
                }
            });
        }
    }, {
        key: "cleanValue",
        value: function cleanValue() {
            this.input.value = "";
        }
    }, {
        key: "removeList",


        // удаление листа 
        value: function removeList() {
            var _this8 = this;

            this.input.nextElementSibling.addEventListener("click", function () {
                _this8.deleteLists.detail.number = _this8.listCounter;
                _this8.parent.dispatchEvent(_this8.deleteLists);
                _this8.parent.remove();
                _this8.parent.dispatchEvent(_this8.watch);
            });
        }
    }]);

    return Todolist;
}();

;