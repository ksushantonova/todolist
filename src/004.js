export class UO004 {
    constructor(data) {
        this.data = data;
        this.allScreens = document.getElementsByClassName('screen');
        this.nextScreen = document.getElementById('UO-017');
        this.currentScreen = document.getElementById('UO-004');
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
        this.state = "false";
        this.init();
    }

    init() {
        this.button.disabled = true;
        this.getChoises(this.data);
        this.showInfo(this.infoButton, this.infoScreen);
        this.hideInfo(this.infoScreenButton, this.infoScreen);
        this.returnBack(this.backButton, this.allScreens, this.previousScreen, this.allCircles, this.previousCircle);

    }

    getChoises(data){
        this.getPlanNumber(this.planNumberInput, data);
        this.getRadioChoise(this.radioContainer, data);
    }

    getPlanNumber(input, data) {
        input.addEventListener('input', () => {
            data.planNumber = input.value;
            if ((data.ownerOrLeasee.length > 2) && (data.planNumber.length == 8)){
                this.state = "true";
                this.unlockButton(this.button);
            } else {
                this.state = "false";
                this.unlockButton(this.button);
            }
        });
    }

    getRadioChoise(container, data) {
        container.addEventListener('click', (e) => {
            this.makeRadioButton(e, this.radioButtons, this.radioP);
            if (data.ownerOrLeasee.length > 2 && data.planNumber.length == 8){
                this.state = "true";
                this.unlockButton(this.button);
            } else {
                this.state = "false";
                this.unlockButton(this.button);
            }
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
        if (this.state == "true") {
            this.changeButton(button);
            this.changeScreen(button, this.allScreens, this.nextScreen);
        } else {
            this.lockButton(button);
        }
    }

    changeButton(button) {
        button.style.cursor = "pointer";
        button.style.opacity = "1";
        this.button.disabled = false;

    }

    lockButton(button){

        button.style.cursor = "default";
        button.style.opacity = "0.5"
        this.button.disabled = true;
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