export class UO016 {
    constructor(data) {
        this.data = data;
        this.input = document.getElementById('business-name');
        this.button = document.getElementById('next016');
        this.allScreens = document.getElementsByClassName('screen');
        this.nextScreen = document.getElementById('UO-017');
        this.allCircles = document.getElementsByClassName('circle');
        this.nextCircle = document.getElementById('circle3');
        this.backButton =  document.getElementById('angleLeft016');
        this.previousScreen = document.getElementById('UO-014');
        this.init();
    }

    init() {
        this.button.disabled = true;
        this.getPlanNumber(this.input);
        this.returnBack(this.backButton, this.allScreens, this.previousScreen);
    }

    getPlanNumber(input) {
        input.addEventListener('input', () => {
            this.data.businessName = input.value;
            if(this.data.businessName.length > 2){
                this.changeButton(this.button);
            } else {
                this.lockButton(this.button);
            }
        });
    }

    changeButton(button) {
        button.style.cursor = "pointer";
        button.style.opacity = "1";
        button.disabled = false;
        this.changeScreen(this.button, this.allScreens, this.nextScreen);
    }

    lockButton(button){
        button.style.cursor = "default";
        button.style.opacity = "0.5"
        this.button.disabled = true;
    }


    changeScreen(button, allScreens, nextScreen) {
        button.addEventListener('click', (e) => {
            for (let i = 0; i < allScreens.length; i++) {
                allScreens[i].style.display = "none";
            }
            nextScreen.style.display = "block";
            this.changeCircle(this.allCircles, this.nextCircle);
        });
    }

    changeCircle(allCircles, nextCircle){
        for (let i = 0; i < allCircles.length; i++){
            allCircles[i].style.color = "white";
        }
        nextCircle.style.color = "#007598";
    }

    returnBack(backButton, allScreens, previousScreen){
        backButton.addEventListener('click', () => {
            for (let i = 0; i < allScreens.length; i++) {
                allScreens[i].style.display = "none";
            }
            previousScreen.style.display = "block";
        })
}
}