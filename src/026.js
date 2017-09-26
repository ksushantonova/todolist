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
        this.init();
    }

    init() {
        this.getPlanNumber(this.email, "userEmail");
        this.getPlanNumber(this.password, "userPassword");
        this.getPlanNumber(this.password_again, "userPassword_again");
        this.changeScreen(this.button, this.allScreens, this.nextScreen);
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

}