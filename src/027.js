export class UO027 {
    constructor(data) {
        this.data = data;
        this.nextScreen = document.getElementById('UO-026');
        this.allScreens = document.getElementsByClassName('screen');
        this.button = document.getElementById('next027');
        this.backButton =  document.getElementById('angleLeft027');
        this.previousScreen = document.getElementById('UO-026');
        this.init();

    }

    init() {
        this.changeScreen(this.button, this.allScreens, this.nextScreen);
        this.returnBack(this.backButton, this.allScreens, this.previousScreen);

    }


    changeScreen(button, allScreens, nextScreen){
        button.onclick = () => {
            for (let i = 0; i < allScreens.length; i++) {
                allScreens[i].style.display = "none";
            }
            nextScreen.style.display = "block";
        }
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





