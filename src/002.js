export class UO002 {
    constructor(data) {
        this.data = data;
        this.currentScreen = document.getElementById('UO-002');
        this.nextLandholder = document.getElementById('UO-004');
        this.nextGovernment = document.getElementById('UO-008');
        this.nextGas_industry = document.getElementById('UO-011');
        this.nextCommunity = document.getElementById('UO-014');
        this.allScreens = document.getElementsByClassName('screen');
        this.button = document.getElementById('next002');
        this.choiseContainer = document.getElementById('flexSquares');
        this.choiseContainers = document.getElementsByClassName('choiseImage');
        this.currentCircle = document.getElementById('circle1');
        this.nextCircle = document.getElementById('circle2');
        this.choiseData = "";
        this.init();
    }

    init() {
        this.makeChoise(this.choiseContainer, this.data);
    }

    makeChoise(container, data) {
        container.addEventListener("click", (e) => {
            this.choiseData = e.target.id;
            data.describeYouBest = this.choiseData;
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
        if (this.data.describeYouBest == "Landholder"){
            this.changeScreen(button, this.allScreens, this.nextLandholder);
        } else if (this.data.describeYouBest == "Government"){
            this.changeScreen(button, this.allScreens, this.nextGovernment);
        } else if(this.data.describeYouBest == "Gas-industry"){
            this.changeScreen(button, this.allScreens, this.nextGas_industry);
        } else if (this.data.describeYouBest == "Community"){
            this.changeScreen(button, this.allScreens, this.nextCommunity);

        }
    }

    changeScreen(button, allScreens, nextScreen ){
        button.addEventListener('click', (e) => {
            for (let i = 0; i < allScreens.length; i++){
                allScreens[i].style.display = "none";
            }
            nextScreen.style.display = "block";
            this.changeCircle(this.currentCircle, this.nextCircle);
        })

    }

    changeImage( e , choise, containers) {
            e.target.setAttribute("src", "./images/" + choise + ".png");
            for (let i = 0; i < containers.length; i++ ){
                if (containers[i] !== e.target ){
                    containers[i].setAttribute("src", "./images/" + containers[i].id + "first.png");
                }
            }
        }

    changeCircle(current, next){
        current.style.color = "white";
        next.style.color = "#007598";
    }

}