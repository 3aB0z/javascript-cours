document.getElementById("add-btn").addEventListener("click", function verifier(e) {
    e.preventDefault();
    let tv = document.getElementById("select");
    let quantite = document.getElementById("quantite");
    if(tv.value != "" && (quantite.value <= 10 && quantite.value >= 0)) {
        
    }
})
