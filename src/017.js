export class UO017 {
    constructor(data){
        this.data = data;
        this.button = document.getElementById('information017');
        this.infoScreen = document.getElementById('UO-018');
        this.infoScreenButton = document.getElementById('okay018');
        this.image = document.getElementById('location');
        this.allScreens = document.getElementsByClassName('screen');
        this.nextScreen = document.getElementById('UO-019');
        this.backButton = document.getElementById('angleLeft017');
        this.allCircles = document.getElementsByClassName('circle');
        this.previousCircle = document.getElementById('circle2');
        this.findOnMapImage = document.getElementById('find_on_map');
        this.choiseData = "";

        this.init();
    }

    init(){
        this.returnBack(this.backButton, this.allScreens, this.allCircles, this.previousCircle);
        this.showInfo(this.button, this.infoScreen);
        this.hideInfo(this.infoScreenButton, this.infoScreen);
        this.makeChoise(this.findOnMapImage);

    }

    showInfo(button, infoScreen){
        button.addEventListener('click', () => {
            infoScreen.style.display = "block";
        });
    }

    makeChoise(image){
        image.addEventListener('click', (e) => {
            this.choiseData = e.target.id;
            this.changeImage(e, this.choiseData);
            this.changeScreen(this.allScreens, this.nextScreen);
        })

    }

    hideInfo(button, infoScreen){
        button.addEventListener('click', () => {
            infoScreen.style.display = "none";
        });
    }

    changeScreen(allScreens, nextScreen ){
            for (let i = 0; i < allScreens.length; i++){
                allScreens[i].style.display = "none";
            }
            nextScreen.style.display = "block";
            document.getElementById('circles').style.display = "none";
    }

    returnBack(backButton, allScreens, allCircles, previousCircle){
        backButton.addEventListener('click', () => {
            this.getPreviousScreen(this.data);
            for (let i = 0; i < allScreens.length; i++) {
                allScreens[i].style.display = "none";
            };
            for (let i = 0; i < allCircles.length; i++) {
                allCircles[i].style.color = 'white';
            };
            this.previousScreen.style.display = "block";
            previousCircle.style.color = "#007598";
        })
    }


    getPreviousScreen(data){
        if (data.describeYouBest == "landholder"){
            this.previousScreen = document.getElementById('UO-004');
        } else if (data.describeYouBest == "government") {
            this.previousScreen = document.getElementById('UO-008');
        } else if(data.describeYouBest == "gas_industry") {
            this.previousScreen = document.getElementById('UO-011');
        }  else if (data.describeYouBest == "community") {
            if(data.roleInTheCommunity == "business_owner"){
            this.previousScreen = document.getElementById('UO-016');
        }  else if(data.roleInTheCommunity !== "business_owner") {
                this.previousScreen = document.getElementById('UO-014');
            }}
    }

    changeImage( e , choise) {
        e.target.setAttribute("src", "./icons/" + choise + "_selected.png");
    }


}