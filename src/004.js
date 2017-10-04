import { ContainerForLandholder } from './container004';


export class UO004 {
    constructor(data) {
        this.data = data;
        this.allScreens = document.getElementsByClassName('screen');
        this.nextScreen = document.getElementById('UO-017');
        this.button = document.getElementById('next004');
        this.allCircles = document.getElementsByClassName('circle');
        this.nextCircle = document.getElementById('circle3');
        this.previousCircle = document.getElementById('circle1');
        this.backButton = document.getElementById('angleLeft004');
        this.previousScreen = document.getElementById('UO-002');
        this.addLotButton = document.getElementById('addLot');
        this.infoScreen = document.getElementById('UO-005');
        this.infoScreenButton = document.getElementById(`okay`);
        this.radioContainer = document.getElementById(`radio004 number-1`),
            this.planNumberInput = document.getElementById(`plan-number-1`),
            this.infoButton = document.getElementById(`information-1`),
            this.radioP = document.getElementsByClassName(`p0041`),
            this.radioButtons = document.getElementsByClassName(`radio0041`);
        this.choiseArray1 = {
            id: 1,
            ownerOrLeasee: "",
            planNumber: "",
        };
        this.mainState = "false";
        this.iterator = 1;
        this.localData = [];
        this.state = "false";
        this.init();
    }

    init() {

        this.button.disabled = true;
        this.addNewPlanNumber(this.addLotButton);
        this.getChoises(this.data);


        this.showInfo(this.infoButton, this.infoScreen);
        this.hideInfo(this.infoScreenButton, this.infoScreen);
        this.returnBack(this.backButton, this.allScreens, this.previousScreen, this.allCircles, this.previousCircle);
    }

    addNewPlanNumber(button){
        button.addEventListener('click', () => {
            this.manageContainers(this.mainState);
            document.getElementById('lot-plan-number-1').style.borderBottom = "0.3em solid #BDBDBD";
            document.getElementById('lot-plan-number-1').style.paddingBottom = "9em";
        });
    }

    manageContainers(state){
        this.iterator += 1;
        this.localData.push(new ContainerForLandholder(this.iterator, this.data, state));
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

    unlockButton(button){
        if (this.data.landHolder.length > 0){
            this.changeButton(button);
            this.changeScreen(button, this.allScreens, this.nextScreen);
        } else
            if(this.data.landHolder.length < 1){
            this.lockButton(button);
        }

    }

    checkAll() {
        if (this.state == "true") {
            let newArr = this.data.landHolder.filter((array) => {
                return array.id !== 1;
            });
            this.data.landHolder = newArr;
            this.data.landHolder.push(this.choiseArray1);
        } else {
            if (this.data.landHolder.length > 0) {
                let newArr = this.data.landHolder.filter((array) => {
                    return array.id !== 1;
                });
                this.data.landHolder = newArr;
            }

        }
    }

    changeButton(button) {
        button.style.cursor = "pointer";
        button.style.opacity = "1";
        this.button.disabled = false;

    }

    lockButton(button){
        button.style.cursor = "default";
        button.style.opacity = "0.5";
        this.button.disabled = true;
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

    getChoises(data){
        this.getPlanNumber(this.planNumberInput, data);
        this.getRadioChoise(this.radioContainer, data);
    }

    getPlanNumber(input, data) {
        input.addEventListener('input', () => {
            this.choiseArray1.planNumber = input.value;
            if ((this.choiseArray1.ownerOrLeasee.length > 2) && (this.choiseArray1.planNumber.length > 2)){
                this.state = "true";
                this.checkAll(this.button);
                this.unlockButton(this.button);
            } else {
                this.state = "false";
                this.checkAll(this.button);
                this.unlockButton(this.button);
            }
        });
    }

    getRadioChoise(container) {
        container.addEventListener('click', (e) => {
            this.makeRadioButton(e, this.radioButtons, this.radioP);
            if (this.choiseArray1.ownerOrLeasee.length > 2 && this.choiseArray1.planNumber.length > 2){
                this.state = "true";
                this.checkAll(this.button);
                this.unlockButton(this.button);
            } else {
                this.state = "false";
                this.checkAll(this.button);
                this.unlockButton(this.button);
            }
        });
    }


    makeRadioButton(e, buttons, p) {

        if (e.target.className == `fa fa-circle-thin radio0041`) {
            for (let i = 0; i < buttons.length; i++) {
                if (buttons[i] !== e.target) {
                    buttons[i].className = `fa fa-circle-thin radio0041`;
                }
            }
            e.target.className = `fa fa-circle radio0041`;
            this.choiseArray1.ownerOrLeasee = e.target.parentNode.lastChild.data;
        } else if (e.target.className == `p0041`) {
            e.target.firstElementChild.className = `fa fa-circle radio0041`;
            for (let j = 0; j < p.length; j++) {
                if (p[j] !== e.target) {
                    p[j].firstElementChild.className = `fa fa-circle-thin radio0041`;
                }
            }
            this.choiseArray1.ownerOrLeasee = e.target.lastChild.data;
        }
        let $target = $(e.target);
        $target.closest('.radio-field-container').attr('data-current-value', $target.closest('[data-value]').attr('data-value'));
    }

    showInfo(button, infoScreen) {
        button.addEventListener('click', () => {
            infoScreen.style.display = "block";
            document.getElementById('circles').style.display = "none";
        })
    }

    hideInfo(button, infoScreen) {
        button.addEventListener('click', () => {
            infoScreen.style.display = "none";
            document.getElementById('circles').style.display = "block";
        });

    }

}