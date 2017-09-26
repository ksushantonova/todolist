export class UO000 {
    constructor(data) {
        this.data = data;
        this.nextScreen = document.getElementById('UO-002');
        this.allScreens = document.getElementsByClassName('screen');
        this.menues = document.getElementsByClassName('dropdownMenu');
        this.button = document.getElementById('next000');
        this.backButton =  document.getElementById('angleLeft000');
        this.previousScreen = document.getElementById('UO-000');
        this.init();

    }

    init() {
        this.showMenues(this.menues);
        this.changeScreen(this.button, this.allScreens, this.nextScreen);
        this.returnBack(this.backButton, this.allScreens, this.previousScreen);

    }

    showMenues(menues) {
        for (let menu of menues) {
            menu.addEventListener('click' , () => {
                this.toggleMenu(menu.nextElementSibling, "menuPocket", menu);
            })
        }
    }

    changeScreen(button, allScreens, nextScreen){
        button.onclick = () => {
            for (let i = 0; i < allScreens.length; i++) {
                allScreens[i].style.display = "none";
            }
            nextScreen.style.display = "block";
        }
    }

    toggleMenu(element, className, dropdownMenu) {
        if (!element || !className) {
            return;
        }
        let classString = element.className, nameIndex = classString.indexOf(className);
        if (nameIndex == -1) {
            classString += ' ' + className;
            this.button.style.margin = "49px 17.5px 49px 17.5px";
            dropdownMenu.lastElementChild.firstElementChild.className = 'fa fa-angle-down';



        } else {
            classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length);
            this.button.style.margin = "25px 17.5px 49px 17.5px";
            dropdownMenu.lastElementChild.firstElementChild.className = 'fa fa-angle-up';

        }

        element.className = classString;

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

	
	


