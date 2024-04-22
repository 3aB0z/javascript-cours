// document.getElementById("name").addEventListener("keydown", function(event) {
//     if (event.keyCode === 13) {
//         console.log("Enter key was pressed downnn!");
//     }
// })

// document.getElementById("name").addEventListener("keypress", function(event) {
//     if (event.keyCode === 13) {
//         console.log("Enter key was pressedddd!");
//     }
// })

// document.getElementById("name").addEventListener("keyup", function(event) {
//     if (event.keyCode === 13) {
//         console.log("Enter key was pressed uppp!");
//     }
// })

// document.getElementById("name").addEventListener("keyup", function(event) {
//     console.log(event.key);
// })


document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault();

    let user = document.getElementById("username");
    if (user.value === "") {
        user.style.borderWidth = "4px";
        user.style.borderColor = "rgb(230, 0, 0)";
        user.style.borderStyle = "solid";
        document.getElementById("empty-username").style.display = "block";
        document.getElementById("error-username").style.display = "none";
    } else if (user.value.length >= 3 && user.value.length <= 25) {
        user.style.borderWidth = "4px";
        user.style.borderColor = "rgb(0, 195, 0)";
        user.style.borderStyle = "solid";
        document.getElementById("error-username").style.display = "none";
        document.getElementById("empty-username").style.display = "none";
    } else {
        user.style.borderWidth = "4px";
        user.style.borderColor = "rgb(230, 0, 0)";
        user.style.borderStyle = "solid";
        document.getElementById("error-username").style.display = "block";
        document.getElementById("empty-username").style.display = "none";
    }

    let mail = document.getElementById("email");
    if (mail.value === "") {
        mail.style.borderWidth = "4px";
        mail.style.borderColor = "rgb(230, 0, 0)";
        mail.style.borderStyle = "solid";
        document.getElementById("empty-email").style.display = "block";
        document.getElementById("error-email").style.display = "none";
    } else if (mail.value.length >= 3 && mail.value.length <= 25) {
        mail.style.borderWidth = "4px";
        mail.style.borderColor = "rgb(0, 195, 0)";
        mail.style.borderStyle = "solid";
        document.getElementById("error-email").style.display = "none";
        document.getElementById("empty-email").style.display = "none";
    } else {
        mail.style.borderWidth = "4px";
        mail.style.borderColor = "rgb(230, 0, 0)";
        mail.style.borderStyle = "solid";
        document.getElementById("error-email").style.display = "block";
        document.getElementById("empty-email").style.display = "none";
    }

    let password = document.getElementById("password");
    if (password.value === "") {
        password.style.borderWidth = "4px";
        password.style.borderColor = "rgb(230, 0, 0)";
        password.style.borderStyle = "solid";
        document.getElementById("empty-password").style.display = "block";
        document.getElementById("error-password").style.display = "none";
    } else if (password.value.length >= 3 && password.value.length <= 25) {
        password.style.borderWidth = "4px";
        password.style.borderColor = "rgb(0, 195, 0)";
        password.style.borderStyle = "solid";
        document.getElementById("error-password").style.display = "none";
        document.getElementById("empty-password").style.display = "none";
    } else {
        password.style.borderWidth = "4px";
        password.style.borderColor = "rgb(230, 0, 0)";
        password.style.borderStyle = "solid";
        document.getElementById("error-password").style.display = "block";
        document.getElementById("empty-password").style.display = "none";
    }

    let cPassword = document.getElementById("cPassword");
    if (cPassword.value === "") {
        cPassword.style.borderWidth = "4px";
        cPassword.style.borderColor = "rgb(230, 0, 0)";
        cPassword.style.borderStyle = "solid";
        document.getElementById("empty-cPassword").style.display = "block";
        document.getElementById("error-cPassword").style.display = "none";
    } else if (cPassword.value.length >= 3 && cPassword.value.length <= 25) {
        cPassword.style.borderWidth = "4px";
        cPassword.style.borderColor = "rgb(0, 195, 0)";
        cPassword.style.borderStyle = "solid";
        document.getElementById("error-cPassword").style.display = "none";
        document.getElementById("empty-cPassword").style.display = "none";
    } else {
        cPassword.style.borderWidth = "4px";
        cPassword.style.borderColor = "rgb(230, 0, 0)";
        cPassword.style.borderStyle = "solid";
        document.getElementById("error-cPassword").style.display = "block";
        document.getElementById("empty-cPassword").style.display = "none";
    }
})



