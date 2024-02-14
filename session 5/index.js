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
    if (storage === 21) {
        document.querySelector(".result").textContent = "Enter a number";
        document.querySelector(".result").style.color = "black";
        document.querySelector(".submit").textContent = "Submit";
        storage = 20;
        document.querySelector(".points").textContent = "Avaiable points :" + storage;
        document.querySelector(".userNumber").value = "";
    } else if (storage > 0 && storage < 21) {
        storage -= 1;
        document.querySelector(".points").textContent = "Avaiable points :" + storage;
        if (userNumber <= maxResult && userNumber >= minResult) {
            document.querySelector(".result").textContent = "You Win!";
            document.querySelector(".result").style.color = "green";
            document.querySelector(".submit").textContent = "Play again";
            storage = 21;
        } else {
            document.querySelector(".result").textContent = "Try something else";
            document.querySelector(".result").style.color = "red";
        }
    }
    if (storage === 0) {
        document.querySelector(".points").textContent = "Avaiable points :" + storage;
        document.querySelector(".result").textContent = "Your points out of stock!";
        document.querySelector(".submit").textContent = "Play again";
        storage = 21;
        document.querySelector(".submit").addEventListener("click", answer);
    }
};
document.querySelector(".submit").addEventListener("click", answer);


