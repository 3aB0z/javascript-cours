let nombre = -5.9;

console.log(Math.abs(nombre));

console.log(Math.ceil(nombre));

console.log(Math.trunc(nombre));

console.log(Math.floor(nombre));

console.log(Math.random(nombre));

console.log(Math.sqrt(25));

console.log(Math.min(12,45,64,1,4));

console.log(Math.max(12,45,64,1,4));

let nombres = [12,45,64,1,4];

console.log(Math.max(...nombres));

const stagiaires = [{id:1,nom:"Loukhmi",note:12},
                    {id:2,nom:"Hilmi",note:16},
                    {id:3,nom:"Hachimi",note:7},
                    {id:4,nom:"Kali",note:18}
                    ];

let listNotes = stagiaires.map((item) => {
    return item.note
});

let maxNotes = Math.max(...listNotes);

console.log(Math.max(maxNotes));

let majoranList = stagiaires.filter((item) => {
    return item.note === maxNotes
});

console.log(majoranList);

console.log(Math.round(Math.random()*(20)));// Gives a random real number: 0 <= number <= 20