export class UO017 {
    constructor(){
        this.button = document.getElementById('information017');
        this.infoScreen = document.getElementById('UO-018');
        this.infoScreenButton = document.getElementById('okay018');
        this.image = document.getElementById('location');
        this.allScreens = document.getElementsByClassName('screen');
        this.nextScreen = document.getElementById('UO-019');
        this.init();
    }

    init(){
        this.showInfo(this.button, this.infoScreen);
        this.hideInfo(this.infoScreenButton, this.infoScreen);
        this.changeScreen(this.image, this.allScreens, this.nextScreen)

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

    changeScreen(button, allScreens, nextScreen ){
        button.addEventListener('click', (e) => {
            for (let i = 0; i < allScreens.length; i++){
                allScreens[i].style.display = "none";
            }
            nextScreen.style.display = "block";
            document.getElementById('circles').style.display = "none";
        });

    }


}