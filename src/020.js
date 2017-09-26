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
        this.init();
    }

    init() {

        this.showInfo(this.infoButton, this.infoScreen);
        this.hideInfo(this.infoScreenButton, this.infoScreen);
        this.getPlanNumber(this.input);
        this.returnBack(this.backButton, this.allScreens, this.previousScreen, this.circles);
    }

    getPlanNumber(input) {
        input.addEventListener('input', (e) => {
            this.changeButton(this.button);
            this.data.nearestPopulationCentre = input.value;
            this.changeScreen(this.button, this.allScreens, this.nextScreen);
        });
    }

    changeButton(button) {
        button.style.cursor = "pointer";
        button.style.opacity = "1";
        this.changeCircle(this.button, this.allCircles, this.nextCircle);
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


}