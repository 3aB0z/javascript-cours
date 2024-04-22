let stagiaires = [];
let activites = [];


let request = new XMLHttpRequest();
request.open("get", "gestionDesActivites.json", true);
request.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200) {
        let responseData = this.responseText;
        stagiaires = responseData.stagiaires;
        activites = responseData.activites;
    }
};
request.send();