export class UO022 {
    constructor(data) {
        this.data = data;
        this.radioContainer = document.getElementById('radio022');
        this.radioButtons = document.getElementsByClassName('radio022');
        this.nextScreen = document.getElementById('UO-026');
        this.button = document.getElementById('next022');
        this.allScreens = document.getElementsByClassName('screen');
        this.allCircles = document.getElementsByClassName('circle');
        this.nextCircle = document.getElementById('circle6');
        this.backButton =  document.getElementById('angleLeft022');
        this.previousScreen = document.getElementById('UO-020');
        this.previousCircle = document.getElementById('circle3');
        this.radioP = document.getElementsByClassName('p022')
        this.init();
    }

    init() {
        let changeRadioData = {
            container: this.radioContainer,
            name: "interests",
            p: this.radioP,
            pClassName: "p022",
            radioButtons: this.radioButtons,
            firstClass: "fa fa-circle-thin radio022",
            secondClass: "fa fa-circle radio022"
        }

        this.getRadioChoise(changeRadioData);
        this.returnBack(this.backButton, this.allScreens, this.previousScreen, this.allCircles, this.previousCircle);

    }

    getRadioChoise(changeData) {
        changeData.container.addEventListener('click', (e) => {
            this.makeRadioButton(e, changeData.radioButtons, changeData.p, changeData.pClassName, changeData.firstClass, changeData.secondClass, changeData.name);
            this.unlockButton(this.button);

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

    unlockButton(button) {
        if (this.data.interests.length > 0) {
            this.changeButton(button);
            this.changeScreen(button, this.allScreens, this.nextScreen);
            this.changeCircle(this.button, this.allCircles, this.nextCircle);
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

    changeCircle(button, allCircles, next){
        button.addEventListener('click', () => {
            for (let i = 0; i < allCircles.length; i++){
                allCircles[i].style.color = "white";
            }
            next.style.color = "#007598";
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