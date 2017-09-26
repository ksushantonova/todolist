export class UO004 {
    constructor(data) {
        this.data = data;
        this.currentScreen = document.getElementById('UO-004');
        this.nextScreen = document.getElementById('UO-017');
        this.radioContainer = document.getElementById('radio004');
        this.radioButtons = document.getElementsByClassName('radio004');
        this.planNumberInput = document.getElementById('plan-number');
        this.button = document.getElementById('next004');
        this.infoButton = document.getElementById('information');
        this.infoScreen = document.getElementById('UO-005');
        this.infoScreenButton = document.getElementById('okay');
        this.currentCircle = document.getElementById('circle2');
        this.nextCircle = document.getElementById('circle3');
        this.init();
    }

    init() {
        this.getPlanNumber(this.planNumberInput);
        this.getRadioChoise(this.radioContainer);
        this.showInfo(this.infoButton, this.infoScreen);
        this.hideInfo(this.infoScreenButton, this.infoScreen);

    }

    getPlanNumber(input) {
        input.addEventListener('change' , () => {
            this.data.planNumber = input.value;
            this.changeButton(this.button);
        });
    }

    changeScreen(button, previousScreen, nextScreen)

    {
        button.addEventListener('click', () => {
            this.changeCircle(this.currentCircle, this.nextCircle);
            previousScreen.style.display = "none";
            nextScreen.style.display = "block";
        });
    }

    unlockButton(button){
        if ((this.data.planNumber.length > 0) && (this.data.ownerOrLeasee.length > 0)){
            this.changeScreen(button, this.currentScreen, this.nextScreen);
        }
    }

    changeButton(button) {
        button.style.cursor = "pointer";
        button.style.opacity = "1";
    }

    getRadioChoise(container){
        container.addEventListener('click', (e) => {
            this.makeRadioButton(e, this.radioButtons);
            this.data.ownerOrLeasee = e.target.parentNode.lastChild.data;
            this.unlockButton(this.button);
        });
    }

    makeRadioButton(e, buttons){
        if (e.target.className == "fa fa-circle-thin radio004"){
            e.target.className = "fa fa-circle radio004";
            for (let i = 0; i < buttons.length; i++ ){
                if (buttons[i] !== e.target){
                    buttons[i].className = "fa fa-circle-thin radio004";
                }
            }
        }
    }

    showInfo(button, infoScreen){
        button.addEventListener('click', () => {
            infoScreen.style.display = "block";
        })
    }

    hideInfo(button, infoScreen){
        button.addEventListener('click', () => {
            infoScreen.style.display = "none";
        });
    }

    changeCircle(current, next){
        current.style.color = "white";
        next.style.color = "#007598";
    }
}