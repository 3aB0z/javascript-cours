document.getElementById("btn-google").addEventListener("click", () => {
    open("https://www.google.com/");
});// Open an URL or link

// Apple synchrone

let a = 10;

let b = 19;

let somme = a + b;

console.log(somme);

let i = 0;

setInterval(() => {
    i++
    console.log(i);
}, 1000);// Executed every 1 second

setTimeout(() => {
    console.log("ok 5 seconds ago");
}, 5000);// Executed one time after 5 seconds

// Apple asynchrone

let stagiaires = getStagiaireData((listStagiaires) => {
    console.log(listStagiaires);
});

console.log(stagiaires);

function getStagiaireData(myCallBackFunction) {
    setTimeout(() => {
        return myCallBackFunction(["Kadiri", "Farid", "Batouli"]);
    },1000)
};