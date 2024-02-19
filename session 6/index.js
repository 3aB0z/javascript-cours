//Creation des elements DOM

document.querySelector(".creer-titre").addEventListener("click", function () {
    const parent = document.body;
    const titre = document.createElement("h1");
    titre.innerHTML = ("This is a title");
    titre.style.backgroundColor = "red";
    titre.style.color = "blue";
    parent.append(titre);
});

document.querySelector(".creer-par").addEventListener("click", function () {
    const parParent = document.body;
    const par = document.createElement("p");
    par.innerHTML = ("Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum");
    par.style.color = "red";
    par.style.backgroundColor = "green";
    parParent.append(par);
});

document.querySelector(".remove-par-btn").addEventListener("click", function () {
    const removeParParent = document.querySelector(".par-parent");
    const removePar = document.querySelector(".remove-par");
    removeParParent.remove(removePar);
})

document.querySelector(".color-par").addEventListener("click", function () {
    const removePar = document.querySelector(".remove-par");
    removePar.classList.add("color-paragraphe");
})

document.querySelector(".remove-child").addEventListener("click", function () {
    const childParent = document.body;
    const child = document.querySelector(".creer-titre");
    childParent.removeChild(child);
})

document.querySelector(".replace-btn").addEventListener("click", function () {
    const replaceParent = document.querySelector(".par-parent");
    const replacedElement = document.querySelector(".remove-par");
    const newReplacedElement = document.querySelector(".replace-par");
    replaceParent.replaceChild(newReplacedElement,replacedElement);
})

//Add a class to the new created element

document.querySelector(".btn-creer-conteneur").addEventListener("click", function () {
    const vConteneur = document.createElement("div");
    vConteneur.classList.add("container","encadrer");
    document.body.append(vConteneur);
    vConteneur.setAttribute("id","conteneur");
    vConteneur.setAttribute("name","conteneur-name");
})

document.querySelector(".creer-img").addEventListener("click", function () {
    const imageCreation = document.createElement("img");
    document.body.append(imageCreation);
    imageCreation.setAttribute("src","../../Phoditor/Phoditor-images/profile-img.JPG");
})