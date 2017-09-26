export class UO022 {
    constructor(data) {
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

    init() {
        let changeRadioData = {
            container: this.radioContainer,
            name: "interests",
            radioButtons: this.radioButtons,
            firstClass: "fa fa-circle-thin radio022",
            secondClass: "fa fa-circle radio022"
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
        if (this.data.interests.length > 0) {
            this.changeButton(button);
            this.changeScreen(button, this.allScreens, this.nextScreen);
            this.changeCircle(this.button, this.currentCircle, this.nextCircle);
        }
    }


    changeScreen(button, allScreens, nextScreen) {
        button.addEventListener('click', (e) => {
            for (let i = 0; i < allScreens.length; i++) {
                allScreens[i].style.display = "none";
            }
            nextScreen.style.display = "block";
        });

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
