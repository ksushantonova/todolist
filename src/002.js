export class UO002 {
    constructor(data) {
        this.data = data;
        this.nextLandholder = document.getElementById('UO-004');
        this.nextGovernment = document.getElementById('UO-008');
        this.nextGas_industry = document.getElementById('UO-011');
        this.nextCommunity = document.getElementById('UO-014');
        this.allScreens = document.getElementsByClassName('screen');
        this.button = document.getElementById('next002');
        this.choiseContainer = document.getElementById('flexSquares');
        this.choiseContainers = document.getElementsByClassName('choiseImage');
        this.allCircles = document.getElementsByClassName('circle');
        this.nextCircle = document.getElementById('circle2');
        this.backButton =  document.getElementById('angleLeft002');
        this.previousScreen = document.getElementById('UO-000');
        this.choiseData = "";
        this.init();
    }

    init() {
        this.makeChoise(this.choiseContainer, this.data);
        this.returnBack(this.backButton, this.allScreens, this.previousScreen);
    }

    makeChoise(container, data) {
        container.addEventListener("click", (e) => {
            this.choiseData = e.target.id;
            data.describeYouBest = this.choiseData;
            this.unlockButton(this.button, this.data);
            this.changeImage(e, this.choiseData, this.choiseContainers);
            let $target = $(e.target);
            $target.closest('.radio-field-container').attr('data-current-value', $target.attr('data-value'));
        })
    }

    changeButton(button) {
        button.style.cursor = "pointer";
        button.style.opacity = "1";
    }

    unlockButton(button, data){
        if (data.describeYouBest == "landholder"){
              this.changeButton(this.button);
            this.changeScreen(button, this.allScreens, this.nextLandholder);
        } else if (data.describeYouBest == "government"){
              this.changeButton(this.button);
            this.changeScreen(button, this.allScreens, this.nextGovernment);
        } else if(data.describeYouBest == "gas_industry"){
              this.changeButton(this.button);
            this.changeScreen(button, this.allScreens, this.nextGas_industry);
        } else if (data.describeYouBest == "community"){
              this.changeButton(this.button);
            this.changeScreen(button, this.allScreens, this.nextCommunity);

        }
    }

    changeScreen(button, allScreens, nextScreen ){
        button.addEventListener('click', (e) => {
            for (let i = 0; i < allScreens.length; i++){
                allScreens[i].style.display = "none";
            }
            nextScreen.style.display = "block";
            this.changeCircle(this.allCircles, this.nextCircle);
        })

    }

    changeImage( e , choise, containers) {
            e.target.setAttribute("src", "./icons/" + choise + "_selected.png");
            for (let i = 0; i < containers.length; i++ ){
                if (containers[i] !== e.target ){
                    containers[i].setAttribute("src", "./icons/" + containers[i].id + ".png");
                }
            }
        }

    changeCircle(allCircles, next){
        for (let i = 0; i < allCircles.length; i++){
            allCircles[i].style.color = "white";
        }
        next.style.color = "#007598";
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