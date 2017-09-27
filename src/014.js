export class UO014 {
    constructor(data){
        this.data = data;
        this.container = document.getElementById('flexThree');
        this.choiseData = "";
        this.button = document.getElementById('next014');
        this.choiseContainers = document.getElementsByClassName('choiseImage014');
        this.allScreens = document.getElementsByClassName('screen');
        this.nextScreen = document.getElementById('UO-016');
        this.nextMainScreen = document.getElementById('UO-017');
        this.backButton =  document.getElementById('angleLeft014');
        this.previousScreen = document.getElementById('UO-002');
        this.allCircles = document.getElementsByClassName('circle');
        this.previousCircle = document.getElementById('circle1');
        this.nextCircle = document.getElementById('circle3');
        this.currentCircle = document.getElementById('circle2');
        this.init();
    }

    init(){
        this.makeChoise(this.container, this.data);
        this.returnBack(this.backButton, this.allScreens, this.previousScreen, this.allCircles, this.previousCircle);

    }

    makeChoise(container, data) {
        container.addEventListener("click", (e) => {
            this.choiseData = e.target.id;
            data.roleInTheCommunity = this.choiseData;
            this.changeButton(this.button);
            this.unlockButton(this.button);
            this.changeImage(e, this.choiseData, this.choiseContainers);
            let $target = $(e.target);
            $target.closest('.radio-field-container').attr('data-current-value', $target.attr('data-value'));
        })
    }

    changeButton(button) {
        button.style.cursor = "pointer";
        button.style.opacity = "1";
    }

    unlockButton(button){
        if (this.data.roleInTheCommunity.length > 0) {
            this.changeButton(button);
            if (this.data.roleInTheCommunity == "business_owner"){
                this.changeScreen(button, this.allScreens, this.nextScreen);
                this.changeCircle(this.button, this.allCircles, this.currentCircle);
            } else {
                this.changeScreen(button, this.allScreens, this.nextMainScreen);
                this.changeCircle(this.button, this.allCircles, this.nextCircle);
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
        e.target.setAttribute("src", "./icons/" + choise + "_selected.png");
        for (let i = 0; i < containers.length; i++ ){
            if (containers[i] !== e.target ){
                containers[i].setAttribute("src", "./icons/" + containers[i].id + ".png");

        }
    }

}

    changeCircle(button,allCircles, nextCircle){
        button.addEventListener('click', () => {
            for (let i = 0; i < allCircles.length; i++){
                allCircles[i].style.color = "white";
            }
            nextCircle.style.color = "#007598";
        })
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