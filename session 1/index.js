// le declaration de variables

let nombreUn;
let nombreDeux;
let somme;
const PI = 3.14;

nombreUn = 16;
nombreDeux = 20;
somme = nombreUn + nombreDeux;
console.log(somme);

// les fonctions

function greet(nom) {
    console.log('Hello ' + nom + '!');
}
greet('boukri');
greet('bakarouch');
greet('ilyas');

function sum(nombreUn, nombreDeux) {
    return nombreUn + nombreDeux
}
console.log(sum(nombreUn, nombreDeux));
function inscrire() {
    let nom = 'Loukhmi';
    let prenom = 'Abdelaziz';
    let age = 18;

    if (age == 18) {
        let statut = 'Etudiant';
        console.log(statut);
    }
}
inscrire();
