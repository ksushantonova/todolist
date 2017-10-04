export class UO022 {
    constructor(data) {
        this.data = data;
        this.radioContainer = document.getElementById('radio022');
        this.nextScreen = document.getElementById('UO-025');
        this.button = document.getElementById('next022');
        this.allScreens = document.getElementsByClassName('screen');
        this.allCircles = document.getElementsByClassName('circle');
        this.nextCircle = document.getElementById('circle5');
        this.backButton =  document.getElementById('angleLeft022');
        this.previousScreen = document.getElementById('UO-020');
        this.previousCircle = document.getElementById('circle3');
        this.init();
    }

    init() {
        this.button.disabled = true;
        let changeRadioData = {
            container: this.radioContainer,
            name: "interests",
            pClassName: "p022",
            classNameFirst: "fa fa-square-o check022",
            classNameSecond: "fa fa-check-square check022",
            classCommon: "check022"
        }

        this.getRadioChoise(changeRadioData);
        this.returnBack(this.backButton, this.allScreens, this.previousScreen, this.allCircles, this.previousCircle);

    }

    getRadioChoise(changeData) {
        changeData.container.addEventListener('click', (e) => {
            this.makeRadioButton(e, changeData);
            this.getData(changeData.classCommon, changeData.classNameSecond);
            this.unlockButton(this.button);
        });
    }

    makeRadioButton(e, changeData) {
        if (e.target.className == changeData.classNameFirst || e.target.className == changeData.classNameSecond) {
            this.setICheck(e, changeData);
        } else if (e.target.className == changeData.pClassName) {
            this.setPCheck(e, changeData);
        }
        this.getDataForServer(e,changeData, 'p022');
    }

    getDataForServer(){
            $('#radio022').attr('data-current-value', this.data.interests);
    }

    setICheck(e, changeData) {
        if (e.target.className == changeData.classNameFirst) {
            e.target.className = changeData.classNameSecond;
        } else if (e.target.className == changeData.classNameSecond) {
            e.target.className = changeData.classNameFirst;
        }
    }

    setPCheck(e, changeData) {
        if (e.target.firstElementChild.className == changeData.classNameFirst) {
            e.target.firstElementChild.className = changeData.classNameSecond;

        } else if (e.target.firstElementChild.className == changeData.classNameSecond) {
            e.target.firstElementChild.className = changeData.classNameFirst;
        }
    }


    getData(commonClass, secondClass){
        let checkBoxArray = document.getElementsByClassName(commonClass);
        let dataArray = [];
        for (let i = 0; i < checkBoxArray.length; i++){
            if (checkBoxArray[i].className == secondClass){
                dataArray.push(checkBoxArray[i].nextSibling.data);
            }
        }
        this.data.interests = dataArray;
    }


    unlockButton(button) {
        if (this.data.interests.length > 0) {
            this.changeButton(button);
            this.changeScreen(button, this.allScreens, this.nextScreen);
            this.changeCircle(this.button, this.allCircles, this.nextCircle);
            this.getDataForServer();
        } else if (this.data.interests.length < 1){
            this.lockButton(button);
        }
    }


    changeScreen(button, allScreens, nextScreen) {
        button.addEventListener('click', () => {
            for (let i = 0; i < allScreens.length; i++) {
                allScreens[i].style.display = "none";
            }
            nextScreen.style.display = "block";
        });

    }

    changeButton(button) {
        button.style.cursor = "pointer";
        button.style.opacity = "1";
        this.button.disabled = false;
    }

    lockButton(button) {
        button.style.cursor = "default";
        button.style.opacity = "0.5";
        this.button.disabled = true;
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