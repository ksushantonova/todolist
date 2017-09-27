export class UO008 {
    constructor(data){
        this.data = data;
        this.radioContainer1 = document.getElementById('radio008_1');
        this.radioContainer2 = document.getElementById('radio008_2');
        this.radioButtons1 = document.getElementsByClassName('radio008_1');
        this.radioButtons2 = document.getElementsByClassName('radio008_2');
        this.button = document.getElementById('next008');
        this.allScreens = document.getElementsByClassName('screen');
        this.allCircles = document.getElementsByClassName('circle');
        this.nextScreen = document.getElementById("UO-017");
        this.nextCircle = document.getElementById('circle3');
        this.backButton =  document.getElementById('angleLeft008');
        this.previousScreen = document.getElementById('UO-002');
        this.previousCircle = document.getElementById('circle1');
        this.radioP1 = document.getElementsByClassName('p008_1');
        this.radioP2 = document.getElementsByClassName('p008_2');
        this.init();
    }

    init(){
        const changeRadioData_1 = {
            container: this.radioContainer1,
            name : "whereAreYouWorkInGovernment",
            p: this.radioP1,
            pClassName: "p008_1",
            radioButtons: this.radioButtons1,
            firstClass:  "fa fa-circle-thin radio008_1",
            secondClass:  "fa fa-circle radio008_1"
        }
       const changeRadioData_2 = {
            container: this.radioContainer2,
            name : "areaOfInterest",
            p: this.radioP2,
            pClassName: "p008_2",
            radioButtons: this.radioButtons2,
            firstClass:  "fa fa-circle-thin radio008_2",
            secondClass:  "fa fa-circle radio008_2"
        }

        this.getRadioChoise(changeRadioData_1);
        this.getRadioChoise(changeRadioData_2);
        this.returnBack(this.backButton, this.allScreens, this.previousScreen, this.allCircles, this.previousCircle);

    }

    getRadioChoise(changeData){
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

    unlockButton(button){
        if ((this.data.whereAreYouWorkInGovernment.length !== undefined) && (this.data.areaOfInterest !== undefined)){
            this.changeButton(button);
            this.changeScreen(button, this.allScreens, this.nextScreen);
        }
    }

    changeScreen(button, allScreens, nextScreen)
    {
        button.addEventListener('click', () => {
            for (let i = 0; i < allScreens.length; i++) {
                allScreens[i].style.display = "none";
            }
            this.changeCircle( this.allCircles, this.nextCircle);
            nextScreen.style.display = "block";
        });
    }

    changeButton(button) {
        button.style.cursor = "pointer";
        button.style.opacity = "1";
    }


    changeCircle( allCircles, nextCircle){
            for (let i = 0; i < allCircles.length; i++) {
                allCircles[i].style.color = "white";
            }
            nextCircle.style.color = "#007598";
    }

    returnBack(backButton, allScreens, previousScreen, allCircles, previousCircle){
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