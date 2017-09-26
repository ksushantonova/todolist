export class UO014 {
    constructor(data){
        this.data = data;
        this.container = document.getElementById('flexThree');
        this.currentScreen = document.getElementById('UO-014');
        this.choiseData = "";
        this.button = document.getElementById('next014');
        this.choiseContainers = document.getElementsByClassName('choiseImage014');
        this.allScreens = document.getElementsByClassName('screen');
        this.nextScreen = document.getElementById('UO-016');
        this.nextMainScreen = document.getElementById('UO-017');
        this.init();
    }

    init(){
        this.makeChoise(this.container, this.data);
    }

    makeChoise(container, data) {
        container.addEventListener("click", (e) => {
            this.choiseData = e.target.id;
            data.roleInTheCommunity = this.choiseData;
            this.changeButton(this.button);
            this.unlockButton(this.button);
            this.changeImage(e, this.choiseData, this.choiseContainers);
        })
    }

    changeButton(button) {
        button.style.cursor = "pointer";
        button.style.opacity = "1";
    }

    unlockButton(button){
        if (this.data.roleInTheCommunity.length > 0) {
            this.changeButton(button);
            if (this.data.roleInTheCommunity == "BusinessOwner"){
                this.changeScreen(button, this.allScreens, this.nextScreen);
            } else {
                this.changeScreen(button, this.allScreens, this.nextMainScreen);
            }
        }
    }

    changeScreen(button, allScreens, nextScreen ){
        button.addEventListener('click', (e) => {
            for (let i = 0; i < allScreens.length; i++){
                allScreens[i].style.display = "none";
            }
            nextScreen.style.display = "block";
        });

    }

    changeImage( e , choise, containers) {
        e.target.setAttribute("src", "./images/" + choise + ".png");
        e.target.previousElementSibling.style.color = "white";
        for (let i = 0; i < containers.length; i++ ){
            if (containers[i] !== e.target ){
                containers[i].setAttribute("src", "./images/" + containers[i].id + "first.png");
                containers[i].previousElementSibling.style.color = "#00ADC5";

        }
    }

}
}