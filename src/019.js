export class UO019 {
    constructor(data){
        this.data = data;
        this.button = document.getElementById('okay019');
        this.allScreens = document.getElementsByClassName('screen');
        this.nextScreen = document.getElementById('UO-020');
        this.backButton =  document.getElementById('angleLeft019');
        this.previousScreen = document.getElementById('UO-017');
        this.circles = document.getElementById('circles');
        this.radioContainer = document.getElementById('radio019');
        this.radioP = document.getElementsByClassName('p019');
        this.radioButtons = document.getElementsByClassName('radio019');



        this.init();
    }

    init(){
        this.button.disabled = true;

        let changeRadioData = {
            container: this.radioContainer,
            name: "exampleCouncil",
            p: this.radioP,
            pClassName: "p019",
            radioButtons: this.radioButtons,
            firstClass: "fa fa-circle-thin radio019",
            secondClass: "fa fa-circle radio019"
        }

        this.returnBack(this.backButton, this.allScreens, this.previousScreen, this.circles);
        this.getRadioChoise(changeRadioData);

    }

    getRadioChoise(changeData) {
        changeData.container.addEventListener('click', (e) => {
            this.makeRadioButton(e, changeData.radioButtons, changeData.p, changeData.pClassName, changeData.firstClass, changeData.secondClass, changeData.name);
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
            document.getElementById('2').className = classNameFirst;
            e.target.className = classNameSecond;
            this.setChoise(e, name, pClassName);
        } else if (e.target.className == pClassName) {
            e.target.firstElementChild.className = classNameSecond;
            for (let j = 0; j < p.length; j++) {
                if (p[j] !== e.target) {
                    p[j].firstElementChild.className = classNameFirst;
                }
            }
            document.getElementById('2').className = classNameFirst;
            this.setChoise(e, name, pClassName);

        } else if (e.target.className == "text"){
            e.target.previousElementSibling.className = classNameSecond;
            for (let k = 0; k < p.length; k++) {
                if (p[k].firstElementChild.id !== "2") {
                    p[k].firstElementChild.className = classNameFirst;
                }

            }
            this.setChoise(e, name, pClassName);
        }

    }

    getDataForServer(){
        $('#radio019').attr('data-current-value', this.data.exampleCouncil);
    }

    setChoise(e, name, pClassName){
        if (e.target.id == "2"){
            this.data[name] = e.target.nextElementSibling.innerHTML;
        } else if (e.target.className == "text"){
            this.data[name] = e.target.innerHTML;
        } else if (e.target.id == pClassName){
            this.data[name] = e.target.lastChild.data;
        } else if(e.target.className == "fa fa-circle radio019"){
            this.data[name] = e.target.nextSibling.data;
        } else {
            this.data[name] = e.target.innerText;
        }

    }

    unlockButton(data) {
        if (data.exampleCouncil.length > 0){
            console.log(data);
            this.changeButton(this.button);
            this.changeScreen(this.button, this.allScreens, this.nextScreen);
            this.getDataForServer();
        } else {
            this.lockButton(this.button);
            console.log(data);
        }

    }

    changeButton(button) {
        button.style.cursor = "pointer";
        button.style.opacity = "1";
        button.parentNode.style.opacity = "1 ";
        this.button.disabled = false;
    }

    lockButton(button){
        button.style.cursor = "default";
        button.style.opacity = "0.5";
        button.parentNode.style.opacity = "0.5 !important"
        this.button.disabled = true;
    }

    changeScreen(button, allScreens, nextScreen ){
        button.addEventListener('click', (e) => {
            for (let i = 0; i < allScreens.length; i++){
                allScreens[i].style.display = "none";
            }
            nextScreen.style.display = "block";
            document.getElementById('circles').style.display = "block";
        });
    }


    returnBack(backButton, allScreens, previousScreen, circles){
        backButton.addEventListener('click', () => {
            for (let i = 0; i < allScreens.length; i++) {
                allScreens[i].style.display = "none";
            }
            circles.style.display = "block";
            previousScreen.style.display = "block";
        })
    }
}