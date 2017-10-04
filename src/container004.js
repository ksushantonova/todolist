export class ContainerForLandholder {
    constructor(i, data, state) {
            this.i = i;
            this.data = data;
            this.mainState = state;
            this.infoScreen = document.getElementById('UO-005');
            this.lotPlanNumberContainer = document.getElementById('lot-plan-number-containers');
            this.infoScreenButton = document.getElementById(`okay`);
            this.button = document.getElementById('next004');
            this.state = "false";
            this.choiseArray = {
                id: this.i,
                ownerOrLeasee: "",
                planNumber: "",
              };
            this.init();
    }

    init() {
        let i = this.i;
        const lotPlanNumberFrame = `
                <div class="plan-number">
                    <p class="plan-number">What is your lot / plan number?</p>
                    <button type="button" class="information" id="information-${i}"><i class="	fa fa-info-circle"
                                                                                  aria-hidden="true"></i></button>
                </div>
                <div class="input">
                    <input id="plan-number-${i}" class="planNumber" name="plan_number_${i}" type="text" placeholder="RP123456"
                           value=""/>
                    <button type="button" class="edit"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                </div>
                <p>Are you an owner or a leasee?</p>
                <div id="radio004 number-${i}" class="radio radio-field-container" data-current-value=""
                     data-field-name="Owner or Leasee">
                    <p class="p004${i}" data-value="owner"><i class="fa fa-circle-thin radio004${i}" aria-hidden="true"></i>Owner</p>
                    <p class="p004${i}" data-value="leasee"><i class="fa fa-circle-thin radio004${i}" aria-hidden="true"></i>Leasee</p>
                </div>
        `;


        this.addContainer(this.lotPlanNumberContainer, lotPlanNumberFrame);
        this.getChoises(this.data);
        this.showInfo(this.infoButton, this.infoScreen);
        this.hideInfo(this.infoScreenButton, this.infoScreen);
    }



   addContainer(container, frame){
        let planContainer = document.createElement('div');
        planContainer.id = `lot-plan-number-${this.i}`;
        planContainer.className = "lot-plan-container";
        planContainer.innerHTML = frame;
        container.appendChild(planContainer);
        this.getElements(this.i);
   }

    getElements(i) {
            this.radioContainer = document.getElementById(`radio004 number-${i}`);
            this.planNumberInput = document.getElementById(`plan-number-${i}`);
            this.infoButton = document.getElementById(`information-${i}`);
            this.radioP = document.getElementsByClassName(`p004${i}`);
            this.radioButtons = document.getElementsByClassName(`radio004${i}`);

    }

    checkAll(i) {
        if (this.state == "true") {
            let newArr = this.data.landHolder.filter((array) => {
                return array.id !== i;
            });
            this.data.landHolder = newArr;
            this.data.landHolder.push(this.choiseArray);
        } else {
            if (this.data.landHolder.length > 0) {
                let newArr = this.data.landHolder.filter((array) => {
                    return array.id !== i;
                });
                this.data.landHolder = newArr;
            }

        }
    }


    getChoises(data){
        this.getPlanNumber(this.planNumberInput, data);
        this.getRadioChoise(this.radioContainer, data);
    }


    getPlanNumber(input) {
        input.addEventListener('input', () => {
            this.choiseArray.planNumber = input.value;
            if ((this.choiseArray.ownerOrLeasee.length > 2) && (this.choiseArray.planNumber.length > 2)){
                this.state = "true";
                this.checkAll(this.i);
            } else {
                this.state = "false";
                this.checkAll(this.i);
            }
        });
    }

    getRadioChoise(container) {
        container.addEventListener('click', (e) => {
            this.makeRadioButton(e, this.radioButtons, this.radioP, this.i);
            if (this.choiseArray.ownerOrLeasee.length > 2 && this.choiseArray.planNumber.length > 2){
                this.state = "true";
                this.checkAll(this.i);
            } else {
                this.state = "false";
                this.checkAll(this.i);
            }
        });
    }


    makeRadioButton(e, buttons, p, i) {
        if (e.target.className == `fa fa-circle-thin radio004${i}`) {
            for (let i = 0; i < buttons.length; i++) {
                if (buttons[i] !== e.target) {
                    buttons[i].className = `fa fa-circle-thin radio004${i}`;
                }
            }
            e.target.className = `fa fa-circle radio004${i}`;
            this.choiseArray.ownerOrLeasee = e.target.parentNode.lastChild.data;
        } else if (e.target.className == `p004${i}`) {
            e.target.firstElementChild.className = `fa fa-circle radio004${i}`;
            for (let j = 0; j < p.length; j++) {
                if (p[j] !== e.target) {
                    p[j].firstElementChild.className = `fa fa-circle-thin radio004${i}`;
                }
            }
            this.choiseArray.ownerOrLeasee = e.target.lastChild.data;

        }

        let $target = $(e.target);
        $target.closest('.radio-field-container').attr('data-current-value', $target.closest('[data-value]').attr('data-value'));
    }

    showInfo(button, infoScreen) {
        button.addEventListener('click', () => {
            infoScreen.style.display = "block";
            document.getElementById('circles').style.display = "none";
        })
    }

    hideInfo(button, infoScreen) {
        button.addEventListener('click', () => {
            infoScreen.style.display = "none";
            document.getElementById('circles').style.display = "block";
        });

    }

}