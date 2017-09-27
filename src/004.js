export class UO004 {
    constructor(data) {
        this.data = data;
        this.allScreens = document.getElementsByClassName('screen');
        this.nextScreen = document.getElementById('UO-017');
        this.radioContainer = document.getElementById('radio004');
        this.radioButtons = document.getElementsByClassName('radio004');
        this.planNumberInput = document.getElementById('plan-number');
        this.button = document.getElementById('next004');
        this.infoButton = document.getElementById('information');
        this.infoScreen = document.getElementById('UO-005');
        this.infoScreenButton = document.getElementById('okay');
        this.allCircles = document.getElementsByClassName('circle');
        this.nextCircle = document.getElementById('circle3');
        this.previousCircle = document.getElementById('circle1');
        this.backButton = document.getElementById('angleLeft004');
        this.previousScreen = document.getElementById('UO-002');
        this.radioP = document.getElementsByClassName('p004');
        this.init();
    }

    init() {
        this.getPlanNumber(this.planNumberInput);
        this.getRadioChoise(this.radioContainer);
        this.showInfo(this.infoButton, this.infoScreen);
        this.hideInfo(this.infoScreenButton, this.infoScreen);
        this.returnBack(this.backButton, this.allScreens, this.previousScreen, this.allCircles, this.previousCircle);
    }

    getPlanNumber(input) {
        input.addEventListener('input', () => {
            this.data.planNumber = input.value;
        });
    }

    changeScreen(button, allScreens, nextScreen) {
        button.addEventListener('click', () => {
            for (let i = 0; i < allScreens.length; i++) {
                allScreens[i].style.display = "none";
            }
            this.changeCircle(this.allCircles, this.nextCircle);
            nextScreen.style.display = "block";
        });
    }

    unlockButton(button) {
        if ((this.data.planNumber.length > 2) && (this.data.ownerOrLeasee.length > 2)) {
            this.changeButton(this.button);
            this.changeScreen(button, this.allScreens, this.nextScreen);
        }
    }

    changeButton(button) {
        button.style.cursor = "pointer";
        button.style.opacity = "1";
    }

    getRadioChoise(container) {
        container.addEventListener('click', (e) => {
            this.makeRadioButton(e, this.radioButtons, this.radioP);
            this.unlockButton(this.button);
        });
    }

    makeRadioButton(e, buttons, p) {
        if (e.target.className == "fa fa-circle-thin radio004") {
            for (let i = 0; i < buttons.length; i++) {
                if (buttons[i] !== e.target) {
                    buttons[i].className = "fa fa-circle-thin radio004";
                }
            }
            e.target.className = "fa fa-circle radio004";
            this.data.ownerOrLeasee = e.target.parentNode.lastChild.data;
        } else if (e.target.className == "p004") {
            e.target.firstElementChild.className = 'fa fa-circle radio004';
            for (let j = 0; j < p.length; j++) {
                if (p[j] !== e.target) {
                    p[j].firstElementChild.className = 'fa fa-circle-thin radio004';
                }
            }
            this.data.ownerOrLeasee = e.target.lastChild.data;
        }
        let $target = $(e.target);
        $target.closest('.radio-field-container').attr('data-current-value', $target.closest('[data-value]').attr('data-value'));
    }


    showInfo(button, infoScreen) {
        button.addEventListener('click', () => {
            infoScreen.style.display = "block";
        })
    }

    hideInfo(button, infoScreen) {
        button.addEventListener('click', () => {
            infoScreen.style.display = "none";
        });
    }

    changeCircle(allCircles, next) {
        for (let i = 0; i < allCircles.length; i++) {
            allCircles[i].style.color = "white";
        }
        next.style.color = "#007598";
    }

    returnBack(backButton, allScreens, previousScreen, allCircles, previousCircle) {
        backButton.addEventListener('click', () => {
            for (let i = 0; i < allCircles.length; i++) {
                allCircles[i].style.color = 'white';
            }
            previousCircle.style.color = "#007598";
            for (let i = 0; i < allScreens.length; i++) {
                allScreens[i].style.display = "none";
            }
            previousScreen.style.display = "block";

        })
    }
}