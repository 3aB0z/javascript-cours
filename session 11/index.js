// const stagiaire = {
//     "id": 1,
//     "nom": "ahmed",
//     "age": 18
// }

// // from objet JS to objet JSON
// stagiaireJSON = JSON.stringify(stagiaire);

// console.log(stagiaire);

// console.log(stagiaireJSON);

// // from objet JSON to objet JS
// stagiaireJSON = JSON.parse(stagiaireJSON);

// console.log(stagiaireJSON);

// console.log(stagiaireJSON.nom);

// document.getElementById("btn-loader").addEventListener("click", (e) => {
//     e.preventDefault();
//     let request = new XMLHttpRequest();
//     request.open("get", "text.txt", true);
//     request.onreadystatechange = function () {
//         if(this.readyState == 4 && this.status == 200) {
//             document.getElementById("container").innerHTML = this.responseText;
//         }
//     };
//     request.send();
// });

// document.getElementById("btn-loader").addEventListener("click", function(e) {
//     e.preventDefault();
//     let stagiaire;
//     let request = new XMLHttpRequest();
//     request.open("get", "stagiaire.json", true);
//     request.onreadystatechange = function() {
//         if(this.readyState == 4 && this.status == 200) {
//             console.log(request.responseText);
//             (stagiaire) = JSON.parse(this.response);
//             console.log(stagiaire);
//         }
//     }
// })

document.addEventListener("DOMContentLoaded", loadData);

function loadData() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "stagiaire.json", true);
    xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let text = JSON.parse(this.responseText);
            console.log(text.nom + text.age);
        }
    }
    xhr.send()
}


