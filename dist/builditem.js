'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BuildItem = function () {
    function BuildItem(parent) {
        _classCallCheck(this, BuildItem);

        this.container = parent;
        this.allLists = [];
        this.counter = 0;
        this.init();
    }

    _createClass(BuildItem, [{
        key: 'init',
        value: function init() {
            var _this = this;

            // localStorage.clear();
            this.newEvent();
            this.buildStorageLists();
            document.getElementById('plus').addEventListener("click", function () {
                _this.buildItemHtml();
                _this.toDoListInit();
                _this.customEvent();
            });
        }
    }, {
        key: 'buildStorageLists',


        // забираем все что есть из локалсторейджа, и в зависимости что там внутри - показываем локал, или пустой айтем.

        value: function buildStorageLists() {
            var _this2 = this;

            this.localValue = localStorage.getItem('data');
            if (this.localValue !== null && this.localValue.length > 3) {
                this.localFrame = JSON.parse(this.localValue);
                this.localFrame.forEach(function (list) {
                    _this2.buildItemHtml();
                    _this2.buildInit(list);
                    _this2.customEvent();
                });
            } else if (this.localValue !== null && this.localValue.length < 3) {
                this.buildItemHtml();
                this.buildInit(null);
                this.customEvent();
            } else {
                this.buildItemHtml();
                this.buildInit(null);
                this.customEvent();
            }
        }

        // метод создает каркасс для нового листа

    }, {
        key: 'buildItemHtml',
        value: function buildItemHtml() {
            this.mainFrame = document.createElement('div');
            this.mainFrame.className = 'main';
            this.container.insertBefore(this.mainFrame, this.container.childNodes[1]);
        }
    }, {
        key: 'customEvent',


        // метод ловит все кастомивенты, которые нужно словить в этом классе 
        value: function customEvent() {
            var _this3 = this;

            this.temporaryList = [];
            // событие удаления листа
            this.mainFrame.addEventListener("deleteLists", function (event) {
                _this3.getNumber(event);
                _this3.allLists.splice(_this3.temporaryList[1], 1);
            });
            // событие watch - мгновенная перезапись изменений в локал
            this.mainFrame.addEventListener("watch", function (event) {
                _this3.writeStorage();
                _this3.parseStorage();
                console.log('watching');
            });
        }
    }, {
        key: 'newEvent',
        value: function newEvent() {

            this.watch = new CustomEvent("watch", {
                detail: { count: "done" }
            });
        }

        // метод, который сравнивает информацию о номере листа, которая пришла из нижнего класса, с номером листа
        // возвращает массив с найденным элементом, и его индексом.

    }, {
        key: 'getNumber',
        value: function getNumber(thisEvent) {
            var _this4 = this;

            this.temporaryList = [];
            this.allLists.forEach(function (list, i) {
                if (list.listCounter == thisEvent.detail.number) {
                    _this4.temporaryList.unshift(i);
                    _this4.temporaryList.unshift(list);
                }
            });
        }
    }, {
        key: 'toDoListInit',

        // строит новый лист
        value: function toDoListInit() {
            this.buildInit(null);
            this.writeStorage();
            this.parseStorage();
        }
    }, {
        key: 'writeStorage',


        // метод перезаписывает локалсторейдж
        value: function writeStorage() {
            localStorage.clear();
            this.allListsString = JSON.stringify(this.allLists);
            localStorage.setItem("data", this.allListsString);
        }
    }, {
        key: 'parseStorage',

        // метод забирает локальные данные и делает их пригодным для работы
        value: function parseStorage() {
            this.localValue = localStorage.getItem('data');
            this.localFrame = JSON.parse(this.localValue);
        }
    }, {
        key: 'buildInit',


        // создание нового класса Todolist (localData ставить если есть локалсторейдж)
        value: function buildInit(localData) {
            var parent = this.mainFrame;
            this.allLists.push(new Todolist(parent, this.counter++, localData, this.watch));
        }
    }]);

    return BuildItem;
}();

;