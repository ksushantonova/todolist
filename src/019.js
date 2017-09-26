export class UO019 {
    constructor(data){
        this.data = data;
        this.button = document.getElementById('okay019');
        this.allScreens = document.getElementsByClassName('screen');
        this.nextScreen = document.getElementById('UO-020');
        this.backButton =  document.getElementById('angleLeft019');
        this.previousScreen = document.getElementById('UO-017');
        this.circles = document.getElementById('circles');
        this.init();
    }

    init(){
        this.returnBack(this.backButton, this.allScreens, this.previousScreen, this.circles);
        this.getLocation(this.data);
        this.changeScreen(this.button, this.allScreens, this.nextScreen);
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

    getLocation(data){
        data.userLocation = "user location";
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