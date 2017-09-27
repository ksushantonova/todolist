import {Result} from "./result.js";

export class UO026 {
    constructor(data) {
        this.data = data;
        this.email = document.getElementById('email');
        this.password = document.getElementById('password');
        this.terms = document.getElementById('terms');
        this.password_again = document.getElementById('password_again');
        this.button = document.getElementById('next026');
        this.termScreen = document.getElementById('UO-027');
        this.allScreens = document.getElementsByClassName('screen');
        this.nextScreen = document.getElementById('result');
        this.backButton = document.getElementById('angleLeft026');
        this.previousScreen = document.getElementById('UO-022');
        this.allCircles = document.getElementsByClassName('circle');
        this.circlesContainer = document.getElementById('circles');
        this.previousCircle = document.getElementById('circle4');
        this.warning = document.getElementById('dontMatch');
        this.state = "false";
        this.init();
    }

    init() {
        this.button.disabled = true;
        this.showTerms(this.terms, this.allScreens, this.termScreen);
        this.getPlanNumber(this.email, "userEmail");
        this.getPlanNumber(this.password, "userPassword");
        this.getPlanNumber(this.password_again, "userPassword_again");
        this.returnBack(this.backButton, this.allScreens, this.previousScreen, this.allCircles, this.previousCircle);

    }

    getPlanNumber(input, name) {
        input.addEventListener('input', () => {
            this.data[name] = input.value;
            this.checkInputs(this.data);
            if( name == "userEmail"){
                this.validateEmail(input);
            }
        });

    }

    checkInputs(data) {
        if((this.state == "true") && (data.userPassword.length > 0) && (data.userPassword_again.length > 0) && (data.userPassword == data.userPassword_again)){
            this.unlockButton(this.button);
            this.warning.style.display = "none";
            // this.changeScreen(this.button, this.allScreens, this.nextScreen);
        } else {
            this.lockButton(this.button);
            this.warning.style.display = "none";
        }

        if ((data.userPassword.length > 0) && (data.userPassword_again.length > 0) && (data.userPassword !== data.userPassword_again)){
            this.lockButton(this.button);
            this.warning.style.display = "block";
        }

    }

    unlockButton(button) {
            button.style.cursor = "pointer";
            button.style.opacity = "1";
            button.disabled = false;
    }

    lockButton(button) {
        button.style.cursor = "default";
        button.style.opacity = "0.5";
        button.disabled = true;
    }



    // changeScreen(button, allScreens, nextScreen) {
    //     button.addEventListener('click', () => {
    //         for (let i = 0; i < allScreens.length; i++) {
    //             allScreens[i].style.display = "none";
    //         }
    //         nextScreen.style.display = "block";
    //         this.circlesContainer.style.display = "none";
    //         new Result(this.data);
    //     });
    //
    // }

    returnBack(backButton, allScreens, previousScreen, allCircles, previousCircle) {
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

    showTerms(button, allScreens, screen) {
        button.addEventListener('click', () => {
            for (let i = 0; i < allScreens.length; i++) {
                allScreens[i].style.display = "none";
            }
            screen.style.display = "block";
        })

    }

    validateEmail(input){
        input.addEventListener('input', () => {
            if(input.value != '') {
                let pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                if(pattern.test(input.value)){
                    this.state = "true";
                } else {
                    input.focus();
                    this.state = "false";
                }
            } else {
                this.state = "false";
            }
        });
    }
}