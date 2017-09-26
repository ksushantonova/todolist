export class UO011 {
    constructor(data) {
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

    init() {
        let changeRadioData = {
            container: this.radioContainer,
            name: "roleWithinTheGasIndustry",
            radioButtons: this.radioButtons,
            firstClass: "fa fa-circle-thin radio011",
            secondClass: "fa fa-circle radio011"
        }

        this.getRadioChoise(changeRadioData);
    }

    getRadioChoise(changeData) {
        changeData.container.addEventListener('click', (e) => {
            this.makeRadioButton(e, changeData.radioButtons, changeData.firstClass, changeData.secondClass);
            this.data[changeData.name] = e.target.parentNode.lastChild.data;
            this.unlockButton(this.button);

        });
    }

    makeRadioButton(e, buttons, classNameFirst, classNameSecond) {
        if (e.target.className == classNameFirst) {
            e.target.className = classNameSecond;
            for (let i = 0; i < buttons.length; i++) {
                if (buttons[i] !== e.target) {
                    buttons[i].className = classNameFirst;
                }
            }
        }
    }

    unlockButton(button) {
        if (this.data.roleWithinTheGasIndustry.length !== undefined) {
            this.changeButton(button);
            if (this.data.roleWithinTheGasIndustry !== "Other (please specify)"){
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

    getSpecify(input){
        input.addEventListener('change' , () => {
            this.data.roleWithinTheGasIndustry = input.value;
            this.changeButton(this.button);
        });
    }

    changeScreen(button, previousScreen, nextScreen) {
        button.addEventListener('click', () => {
            previousScreen.style.display = "none";
            nextScreen.style.display = "block";
        })
    }

    changeButton(button) {
        button.style.cursor = "pointer";
        button.style.opacity = "1";
    }


    changeCircle(button, current, next){
        button.addEventListener('click', () => {
            current.style.color = "white";
            next.style.color = "#007598";
        })
    }
}
