export class UO008 {
    constructor(data){
        this.data = data;
        this.radioContainer1 = document.getElementById('radio008_1');
        this.radioContainer2 = document.getElementById('radio008_2');
        this.radioButtons1 = document.getElementsByClassName('radio008_1');
        this.radioButtons2 = document.getElementsByClassName('radio008_2');
        this.button = document.getElementById('next008');
        this.currentScreen = document.getElementById("UO-008");
        this.nextScreen = document.getElementById("UO-017");
        this.currentCircle = document.getElementById('circle2');
        this.nextCircle = document.getElementById('circle3');
        this.init();
    }

    init(){
        const changeRadioData_1 = {
            container: this.radioContainer1,
            name : "whereAreYouWorkInGovernment",
            radioButtons: this.radioButtons1,
            firstClass:  "fa fa-circle-thin radio008_1",
            secondClass:  "fa fa-circle radio008_1"
        }
       const changeRadioData_2 = {
            container: this.radioContainer2,
            name : "areaOfInterest",
            radioButtons: this.radioButtons2,
            firstClass:  "fa fa-circle-thin radio008_2",
            secondClass:  "fa fa-circle radio008_2"
        }

        this.getRadioChoise(changeRadioData_1);
        this.getRadioChoise(changeRadioData_2);

    }

    getRadioChoise(changeData){
        changeData.container.addEventListener('click', (e) => {
            this.makeRadioButton(e, changeData.radioButtons, changeData.firstClass, changeData.secondClass);
            this.data[changeData.name] = e.target.parentNode.lastChild.data;
            this.unlockButton(this.button);

        });
    }

    makeRadioButton(e, buttons, classNameFirst, classNameSecond){
        if (e.target.className == classNameFirst){
            e.target.className = classNameSecond;
            for (let i = 0; i < buttons.length; i++ ){
                if (buttons[i] !== e.target){
                    buttons[i].className = classNameFirst;
                }
            }
        }
    }

    unlockButton(button){
        if ((this.data.whereAreYouWorkInGovernment.length !== undefined) && (this.data.areaOfInterest !== undefined)){
            this.changeButton(button);
            this.changeScreen(button, this.currentScreen, this.nextScreen);
            this.changeCircle(this.button, this.currentCircle, this.nextCircle);
        }
    }

    changeScreen(button, previousScreen, nextScreen)
    {
        button.addEventListener('click', () => {
            previousScreen.style.display = "none";
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