export class UO020 {
    constructor(data) {
        this.data = data;
        this.input = document.getElementById('population-centre');
        this.button = document.getElementById('next020');
        this.infoButton = document.getElementById('information020');
        this.allScreens = document.getElementsByClassName('screen');
        this.nextScreen = document.getElementById('UO-022');
        this.infoScreen = document.getElementById('UO-021');
        this.infoScreenButton = document.getElementById('okay021');
        this.allCircles = document.getElementsByClassName('circle');
        this.nextCircle = document.getElementById('circle4');
        this.backButton =  document.getElementById('angleLeft020');
        this.previousScreen = document.getElementById('UO-019');
        this.circles = document.getElementById('circles');
        this.warning = document.getElementById('donotMatch');
        this.init();
    }

    init() {
        this.button.disabled = true;
        this.showInfo(this.infoButton, this.infoScreen);
        this.hideInfo(this.infoScreenButton, this.infoScreen);
        this.getPlanNumber(this.input);
        this.returnBack(this.backButton, this.allScreens, this.previousScreen, this.circles);
    }

    getPlanNumber(input) {
        // this.enterOnlyNumbers(input);
        input.addEventListener('input', () => {
            this.data.postCode = input.value;
            if((this.data.postCode.length == 4) && (/^[0-9]*$/.test(this.data.postCode))){
                this.changeButton(this.button);
            } else {
                this.lockButton(this.button);
            }
        });
    }

    changeButton(button) {
        button.style.cursor = "pointer";
        button.style.opacity = "1";
        this.button.disabled = false;
        this.warning.style.display = "none";
        this.changeCircle(this.button, this.allCircles, this.nextCircle);
        this.changeScreen(this.button, this.allScreens, this.nextScreen);
    }

    lockButton(button){
        button.style.cursor = "default";
        button.style.opacity = "0.5"
        this.button.disabled = true;
        this.warning.style.display = "block";
    }


    changeScreen(button, allScreens, nextScreen) {
        button.addEventListener('click', (e) => {
            for (let i = 0; i < allScreens.length; i++) {
                allScreens[i].style.display = "none";
            }
            nextScreen.style.display = "block";

        });

    }

    showInfo(button, infoScreen){
        button.addEventListener('click', () => {
            infoScreen.style.display = "block";
        });
    }

    hideInfo(button, infoScreen){
        button.addEventListener('click', () => {
            infoScreen.style.display = "none";
        });
    }

    changeCircle(button, allCircles, nextCircle){
        button.addEventListener('click', () => {
            for (let i = 0; i < allCircles.length; i++){
                allCircles[i].style.color = "white";
            }
            nextCircle.style.color = "#007598";
        });

    }

    returnBack(backButton, allScreens, previousScreen, circles){
        backButton.addEventListener('click', () => {
            for (let i = 0; i < allScreens.length; i++) {
                allScreens[i].style.display = "none";
            }
            circles.style.display = "none";
            previousScreen.style.display = "block";
        });
    }

    //
    // enterOnlyNumbers(input){
    //     input.addEventListener('keypress', (e) => {
    //         e = e || event;
    //         if (e.ctrlKey || e.altKey || e.metaKey) return;
    //         let chr = this.getChar(e);
    //         if (chr == null) return;
    //         if (chr < '0' || chr > '9') {
    //             return false;
    //         }
    //     });
    // }
    //
    //  getChar(event) {
    //     if (event.which == null) {
    //         if (event.keyCode < 32) return null;
    //         return String.fromCharCode(event.keyCode)
    //     }
    //
    //     if (event.which != 0 && event.charCode != 0) {
    //         if (event.which < 32) return null;
    //         return String.fromCharCode(event.which)
    //     }
    //
    //     return null;
    // }


}