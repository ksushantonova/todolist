export class Result {
    constructor(data) {
        this.data = data;
        this.init()
    }

    init(){
        this.showData(this.data);
    }

    showData(data){
        for (let name in data){
            if (data[name].length > 1){
                document.getElementById(name).innerHTML = `${name} : ${data[name]}`;
                document.getElementById(name).style.display = "block";
            }
        }
    }

}