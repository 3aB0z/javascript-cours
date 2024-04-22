let stagiaires = [];

let ajouterDansUnList = (e) => {
    e.preventDefault();
    let person = {};
    let cnie;
    let nom;
    cnie = document.querySelector(".cnie").value;
    nom = document.querySelector(".nom").value;
    person = {cnie,nom};
    stagiaires.push(person);
};

document.querySelector(".submit").addEventListener("click", ajouterDansUnList);

let afficherPerson = () => {
    
};

document.querySelector(".afficher").addEventListener("click", afficherPerson);

let searchPerson = (e) => {
    e.preventDefault();
    let pValue = document.querySelector(".search-bar").value;
    stagiaires.filter((pValue) => {
        return 
    })
};

document.querySelector(".search-btn").addEventListener("click", searchPerson);