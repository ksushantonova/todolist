export class UO011 {
    constructor(data) {
        this.data = data;
        this.radioContainer = document.getElementById('radio011');
        this.radioButtons = document.getElementsByClassName('radio011');
        this.allScreens = document.getElementsByClassName('screen');
        this.nextScreen = document.getElementById('UO-017');
        this.button = document.getElementById('next011');
        this.specify = document.getElementById('toSpecify');
        this.allCircles = document.getElementsByClassName('circle');
        this.nextCircle = document.getElementById('circle3');
        this.previousCircle = document.getElementById('circle1');
        this.backButton =  document.getElementById('angleLeft011');
        this.previousScreen = document.getElementById('UO-002');
        this.radioP = document.getElementsByClassName('p011');
        this.init();
    }

    init() {
        this.button.disabled = true;
        let changeRadioData = {
            container: this.radioContainer,
            name: "roleWithinTheGasIndustry",
            p: this.radioP,
            pClassName: "p011",
            radioButtons: this.radioButtons,
            firstClass: "fa fa-circle-thin radio011",
            secondClass: "fa fa-circle radio011"
        }

        this.getRadioChoise(changeRadioData);
        this.returnBack(this.backButton, this.allScreens, this.previousScreen, this.allCircles, this.previousCircle);

    }

    getRadioChoise(changeData) {
        changeData.container.addEventListener('click', (e) => {
            this.makeRadioButton(e, changeData.radioButtons, changeData.p, changeData.pClassName, changeData.firstClass, changeData.secondClass, changeData.name);
            console.log(this.data.roleWithinTheGasIndustry);
            this.unlockButton(this.data);

        });
    }

    makeRadioButton(e, buttons, p, pClassName ,classNameFirst, classNameSecond, name) {
        if (e.target.className == classNameFirst) {
            for (let i = 0; i < buttons.length; i++) {
                if (buttons[i] !== e.target) {
                    buttons[i].className = classNameFirst;
                }
            }
            e.target.className = classNameSecond;
            this.data[name] = e.target.parentNode.lastChild.data;
        } else if (e.target.className == pClassName) {
            e.target.firstElementChild.className = classNameSecond;
            for (let j = 0; j < p.length; j++) {
                if (p[j] !== e.target) {
                    p[j].firstElementChild.className = classNameFirst;
                }
            }
            this.data[name] = e.target.lastChild.data;
        }
        let $target = $(e.target);
        $target.closest('.radio-field-container').attr('data-current-value', $target.closest('[data-value]').attr('data-value'));
    }

    unlockButton(data) {
            if (data.roleWithinTheGasIndustry !== "Other (please specify)"){
                this.validateInput(data);
                this.specify.style.display = "none";
                this.specify.firstElementChild.value = "";
            } else {
                this.specify.style.display = "block";
                    data.roleWithinTheGasIndustry = "";
                    this.lockButton(this.button);
                    this.getSpecify(this.specify.firstElementChild);

                }

            }


    getSpecify(input){
        input.addEventListener('input' , () => {
            this.data.roleWithinTheGasIndustry = input.value;
            this.validateInput(this.data);
        });
    }

    validateInput(data){
        if( data.roleWithinTheGasIndustry.length > 2){
            this.changeButton(this.button);
            this.changeScreen(this.button, this.allScreens, this.nextScreen);
            this.changeCircle(this.button, this.allCircles, this.nextCircle);
        } else {
            this.lockButton(this.button);
        }

    }

    changeScreen(button, allScreens, nextScreen) {
        button.addEventListener('click', () => {
            for (let i = 0; i < allScreens.length; i++) {
                allScreens[i].style.display = "none";
            }
            nextScreen.style.display = "block";
        })
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


    changeCircle(button, allCircles, nextCircle){
        button.addEventListener("click", () => {
            for (let i = 0; i < allCircles.length; i++){
                allCircles[i].style.color = "white";
            }
            nextCircle.style.color = "#007598";
        })
    }

    returnBack(backButton, allScreens, previousScreen, allCircles, previousCircle){
        backButton.addEventListener('click', () => {
            for (let i = 0; i < allScreens.length; i++) {
                allScreens[i].style.display = "none";
            }
            previousScreen.style.display = "block";
            for (let i = 0; i < allCircles.length; i++) {
                allCircles[i].style.color = 'white';
            }
            previousCircle.style.color = "#007598";
        })
    }
}
