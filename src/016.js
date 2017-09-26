export class UO016 {
    constructor(data) {
        this.data = data;
        this.input = document.getElementById('business-name');
        this.button = document.getElementById('next016');
        this.allScreens = document.getElementsByClassName('screen');
        this.nextScreen = document.getElementById('UO-017');
        this.currentCircle = document.getElementById('circle2');
        this.nextCircle = document.getElementById('circle3');
        this.init();
    }

    init() {
        this.getPlanNumber(this.input);
        this.changeScreen(this.button, this.allScreens, this.nextScreen);
    }

    getPlanNumber(input) {
        input.addEventListener('change', () => {
            this.changeButton(this.button);
            this.data.businessName = input.value;
        });
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
            this.changeCircle(this.button, this.currentCircle, this.nextCircle);
        });

    }

    changeCircle(button, current, next){
        button.addEventListener('click', () => {
            current.style.color = "white";
            next.style.color = "#007598";
        })
    }
}