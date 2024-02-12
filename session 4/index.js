//Map(il retourn un nouveau tableau)

const jours = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];

jours.map((item) => {
    if (item === "jeudi") {
        item = item + "* " + "jour ferier"
    }
    return console.log(item);
})
console.log(jours);

const stagiaires = [
    {nom:"loukhmi",prenom:"abdelaziz",age:17},
    {nom:"nasiri",prenom:"aycha",age:20},
    {nom:"mezraoui",prenom:"khalid",age:18},
    {nom:"ouafik",prenom:"mohammed",age:22}
]

//map c'est un methode qui retourne un nouveau tableau
let fullname;
let nomStagiaires;
nomStagiaires = stagiaires.map((item) => {
   fullname = console.log(item["nom"] + " " + item["prenom"]);
   return fullname;
})

console.log(stagiaires);
console.log(nomStagiaires);


let stagiaire;
let Name_age;

stagiaire = stagiaires.map((Name_and_age) => {
    Name_age = Name_and_age["nom"]+" is " + Name_and_age["age"] + " years_old"
    return Name_age;
});

console.log(stagiaire);



let nameAge;

nameAge = stagiaires.map((item,index,arrStagiaire) => {
    let st;
    st = {...item, branche: "DD", id: (index + 1)};
    return st;
})
console.log(nameAge);



