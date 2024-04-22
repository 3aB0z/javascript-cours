switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}

console.log(day);

let hjghg=[ item , prix , contiter ]

let abreviation = "ID";
let filliere;
abreviation = "ID"

switch (abreviation) {
    case "DD":
        filliere = "Developement Dijital"
        break;
    case "ID":
        filliere = "Infrastructure Dijitale"
        break;
    case "WD":
        filliere = "Web Design"
        break;
    default:
        filliere = "";
}

console.log("La branche est :" + filliere);



jours = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi"]

for (i=0; i<5; i++) {
    console.log(jours[i]);
}

for (item in jours) {
    console.log(jours[item]);
}

for (jr of jours) {
    console.log(jr);
}



let txt = "";
function myFunction(value, index, array) {
    txt += value + " ";
}

jours.forEach(myFunction);

console.log(txt);




let n = 10;
while (n >= 0) {
    console.log(n);
    n = n - 1
}



do {
    console.log(n);
    n = n - 1
}
while (n >= 0)



let text;

for (i = 0; i < 10; i++) {
    if (i === 2) {
        break;
    }
    //code
}
