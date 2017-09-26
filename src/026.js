import { Result } from "./result.js";

export class UO026 {
    constructor(data) {
        this.data = data;
        this.email = document.getElementById('email');
        this.password = document.getElementById('password');
        this.password_again = document.getElementById('password_again');
        this.button = document.getElementById('next026');
        this.allScreens = document.getElementsByClassName('screen');
        this.nextScreen = document.getElementById('result');
        this.backButton =  document.getElementById('angleLeft026');
        this.previousScreen = document.getElementById('UO-022');
        this.allCircles = document.getElementsByClassName('circle');
        this.previousCircle = document.getElementById('circle4');
        this.init();
    }

    init() {
        this.getPlanNumber(this.email, "userEmail");
        this.getPlanNumber(this.password, "userPassword");
        this.getPlanNumber(this.password_again, "userPassword_again");
        this.changeScreen(this.button, this.allScreens, this.nextScreen);
        this.returnBack(this.backButton, this.allScreens, this.previousScreen, this.allCircles, this.previousCircle);

    }

    getPlanNumber(input, name) {
        input.addEventListener('change', () => {
            this.data[name] = input.value;
            this.checkInputs(this.data);
        });
    }

    checkInputs(data){
        if((data.userEmail.length > 0) && (data.userPassword.length > 0) && (data.userPassword_again.length > 0) && (data.userPassword == data.userPassword_again)){
            this.changeButton(this.button);
        }
    }

    changeButton(button) {
        button.style.cursor = "pointer";
        button.style.opacity = "1";
    }

    changeScreen(button, allScreens, nextScreen) {
        button.addEventListener('click', (e) => {
            for (let i = 0; i < allScreens.length; i++) {
                allScreens[i].style.display = "none";
            }
            nextScreen.style.display = "block";
            new Result(this.data);
        });

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