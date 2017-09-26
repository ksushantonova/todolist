export class UO019 {
    constructor(data){
        this.data = data;
        this.button = document.getElementById('okay019');
        this.allScreens = document.getElementsByClassName('screen');
        this.nextScreen = document.getElementById('UO-020');
        this.init();
    }

    init(){
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
}