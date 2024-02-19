let stagiaires = [];

let ajouterDansUnList = (e) => {
    e.preventDefault();
    let person;
    let name;
    let prenom;
    let age;
    name = document.querySelector(".name").value;
    prenom = document.querySelector(".prenom").value;
    age = document.querySelector(".age").value;
    person = {name,prenom,age};
    stagiaires.push(person);
};

document.querySelector(".submit").addEventListener("click", ajouterDansUnList);

let afficherList = (e) => {
    e.preventDefault();
    stagiaires.map(function (item) {
        let aLabel = document.createElement("label");
        aLabel.style.color = "black";
        aLabel.style.width = "200px";
        aLabel.style.height = "200px";
        aLabel.innerHTML = item.name + item.prenom + item.age;
        document.body.append(aLabel);
    })
};

document.querySelector(".afficher").addEventListener("click", afficherList);