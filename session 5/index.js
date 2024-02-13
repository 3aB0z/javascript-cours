// console.log(document.querySelector(".nom").value);
// document.querySelector(".nom").value = "Ahmed";

// console.log(document.querySelector(".age").value);

// let a = Number(document.querySelector(".a").value);
// let b = Number(document.querySelector(".b").value);
// let somme = a + b;
// document.querySelector(".somme").value = somme;

// if (somme >= 20) {
//     document.querySelector(".somme").style.backgroundColor = "red";
// } else {
//     document.querySelector(".somme").style.backgroundColor = "blue";
// }

// let calculerF = (e) => {
//     e.preventDefault();
//     let n1 = Number(document.querySelector(".a").value);
//     let n2 = Number(document.querySelector(".b").value);
//     document.querySelector(".somme").textContent = n1 + n2;
// };
// document.querySelector(".btn-calculer").addEventListener("click", calculerF);




let storage = 20;
let minResult = 5;
let maxResult = 18;
document.querySelector(".points").textContent = "Avaiable points :" + storage;
let answer = (e) => {
    let userNumber = Number(document.querySelector(".userNumber").value);
    e.preventDefault();
    storage -= 1;
    if (storage > 0) {
        document.querySelector(".points").textContent = "Avaiable points :" + storage;
        if (userNumber <= maxResult && userNumber >= minResult) {
            document.querySelector(".result").textContent = "You Win!";
            document.querySelector(".submit").textContent = "Play again";
            storage = 20;
        } else {
            document.querySelector(".result").textContent = "Try something else";
        }
    } else {
        document.querySelector(".points").textContent = "Avaiable points :" + storage;
        document.querySelector(".result").textContent = "Your points out of stock!";
        document.querySelector(".submit").textContent = "Play again";
        storage = 20;
        document.querySelector(".submit").addEventListener("click", answer);
    }
};
document.querySelector(".submit").addEventListener("click", answer);


