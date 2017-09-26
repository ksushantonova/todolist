export class UO000 {
    constructor(data) {
        this.data = data;
        this.currentScreen = document.getElementById('UO-000');
        this.nextScreen = document.getElementById('UO-002');
        this.menues = document.getElementsByClassName('dropdownMenu');
        this.button = document.getElementById('next000');
        this.init();

    }

    init() {
        this.showMenues(this.menues);
        this.changeScreen(this.button, this.currentScreen, this.nextScreen);

    }

    showMenues(menues) {
        for (let menu of menues) {
            menu.addEventListener('click' , () => {
                this.toggleMenu(menu.nextElementSibling, "menuPocket", menu);
            })
        }
    }

    changeScreen(button, previousScreen, nextScreen){
        button.onclick = () => {
            previousScreen.style.display = "none";
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



}

	
	


