export class UO025 {
    constructor(data){
        this.data = data;
        this.check025 = document.getElementById('radio025');
        this.check025_1 = document.getElementById('radio025-1');
        this.check025_2 = document.getElementById('radio025-2');
        this.button = document.getElementById('next025');
        this.nextScreen = document.getElementById('UO-026');
        this.nextCircle = document.getElementById('circle6');
        this.allCircles = document.getElementsByClassName('circle');
        this.backButton =  document.getElementById('angleLeft025');
        this.previousScreen = document.getElementById('UO-022');
        this.previousCircle = document.getElementById('circle4');
        this.allScreens = document.getElementsByClassName('screen');
        this.temporaryData = {
            councils: "",
            government_agencies: "",
            gas_companies: ""
        };
        this.dataState = "false";
        this.init();
    }

    init(){
        this.button.disabled = true;

        let check025 = {
            container: this.check025,
            name: "councils",
            pClassName: "p025",
            classNameFirst: "fa fa-square-o check025",
            classNameSecond: "fa fa-check-square check025",
            classCommon: "check025"
        }

        let check025_1 = {
            container: this.check025_1,
            name: "government_agencies",
            pClassName: "p025-1",
            classNameFirst: "fa fa-square-o check025-1",
            classNameSecond: "fa fa-check-square check025-1",
            classCommon: "check025-1"
        }

        let check025_2 = {
            container: this.check025_2,
            name: "gas_companies",
            pClassName: "p025-2",
            classNameFirst: "fa fa-square-o check025-2",
            classNameSecond: "fa fa-check-square check025-2",
            classCommon: "check025-2"
        }

        this.getRadioChoise(check025, check025_1,check025_2);
        this.getRadioChoise(check025_1, check025, check025_2);
        this.getRadioChoise(check025_2, check025, check025_1);
        this.returnBack(this.backButton, this.allScreens, this.previousScreen, this.allCircles, this.previousCircle);

    }

    getRadioChoise(changeData, changeData2, changeData3) {
        changeData.container.addEventListener('click', (e) => {
            this.makeCheckButton(e, changeData);
            this.getData(changeData.classCommon, changeData.classNameSecond, changeData.name);
            this.getData(changeData2.classCommon, changeData2.classNameSecond, changeData2.name);
            this.getData(changeData3.classCommon, changeData3.classNameSecond, changeData3.name);
            this.checkAll();
            this.unlockButton(this.button);

        });
    }

    checkAll(){
        this.dataState = "false";
        if ((this.temporaryData.councils.length > 0) && (this.temporaryData.government_agencies.length > 0)  && (this.temporaryData.gas_companies.length > 0)) {
            this.dataState = "true";
        } else {
            this.dataState = "false";
        }
    }

    makeCheckButton(e, changeData) {
        if (e.target.className == changeData.classNameFirst || e.target.className == changeData.classNameSecond) {
            this.setICheck(e, changeData);
        } else if (e.target.className == "text") {
            this.setPCheck(e, changeData);
        }
    }


    getData(commonClass, secondClass, name){
        let checkBoxArray = document.getElementsByClassName(commonClass);
        let dataArray = [];
        for (let i = 0; i < checkBoxArray.length; i++){
            if (checkBoxArray[i].className == secondClass){
                dataArray.push(checkBoxArray[i].nextElementSibling.innerHTML);
            }
        }
        this.temporaryData[name] = dataArray;
    }

    setICheck(e, changeData) {
        if (e.target.className == changeData.classNameFirst) {
            e.target.className = changeData.classNameSecond;
        } else if (e.target.className == changeData.classNameSecond) {
            e.target.className = changeData.classNameFirst;
        }
    }

    setPCheck(e, changeData) {
        if (e.target.previousElementSibling.className == changeData.classNameFirst) {
            e.target.previousElementSibling.className = changeData.classNameSecond;

        } else if (e.target.previousElementSibling.className == changeData.classNameSecond) {
            e.target.previousElementSibling.className = changeData.classNameFirst;
        }
    }





    unlockButton(button) {
        if (this.dataState == "true") {
            this.changeButton(button);
            this.changeScreen(button, this.allScreens, this.nextScreen);
            this.changeCircle(this.button, this.allCircles, this.nextCircle);
            this.data.receiveInfoFrom = [];
            this.data.receiveInfoFrom = this.temporaryData;
            this.getDataForServer();
        } else {
            this.lockButton(button);
        }
    }

    getDataForServer(){
        $('#radio025').attr('data-current-value', this.data.receiveInfoFrom.councils);
        $('#radio025-1').attr('data-current-value', this.data.receiveInfoFrom.government_agencies);
        $('#radio025-2').attr('data-current-value', this.data.receiveInfoFrom.gas_companies);
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
        });
    }
}