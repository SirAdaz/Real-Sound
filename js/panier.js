let d = new Date();
let fullDate;
let user = localStorage.getItem("datauser");
let objUser = JSON.parse(user);
let objPanier = JSON.parse(localStorage.getItem("dataPanier"))
let nbTotal = objPanier.billie + objPanier.taylor + objPanier.weeknd;
let prixBillie = objPanier.billie * 39.99;
let prixTaylor = objPanier.taylor * 38.99;
let prixWeeknd = objPanier.weeknd * 14.99;
let prixTotal = prixBillie + prixTaylor + prixWeeknd;
let btnBillie = document.getElementById("btn-billie");
let btnTaylor = document.getElementById("btn-taylor");
let btnWeeknd = document.getElementById("btn-weeknd");
let btnAll = document.getElementById("btn-all");
let formBillie = document.getElementById("nbBillie")
let formTaylor = document.getElementById("nbTaylor")
let formWeeknd = document.getElementById("nbWeeknd")
document.getElementById("firstName").innerText = objUser.firstname;
document.getElementById("lastName").innerText = objUser.lastname;
document.getElementById("nbBillie").value = objPanier.billie;
document.getElementById("nbTaylor").value = objPanier.taylor;
document.getElementById("nbWeeknd").value = objPanier.weeknd;
document.getElementById("nbTotal").innerText = nbTotal;
document.getElementById("prixTotal").innerText = nbTotal;
document.getElementById("prixBillie").innerText = prixBillie.toFixed(2) + "€";
document.getElementById("prixTaylor").innerText = prixTaylor.toFixed(2) + "€";
document.getElementById("prixWeeknd").innerText = prixWeeknd.toFixed(2) + "€";
document.getElementById("prixTotal").innerText = prixTotal.toFixed(2) + "€";
function display() {
    if (objPanier.billie === 0) {
        document.getElementById("blockBillie").style.display = "none";
    } else {
        document.getElementById("blockBillie").style.display = "table-row";
    };

    if (objPanier.taylor === 0) {
        document.getElementById("blockTaylor").style.display = "none";
    } else {
        document.getElementById("blockTaylor").style.display = "table-row";
    };

    if (objPanier.weeknd === 0) {
        document.getElementById("blockWeeknd").style.display = "none";
    } else {
        document.getElementById("blockWeeknd").style.display = "table-row";
    };
}
display();
function dataBillie() {
    if (typeof objPanier.billie !== "number") {
        billie = 0;
    } else {
        billie = objPanier.billie;
    }
    return billie;
}

function dataTaylor() {
    if (typeof objPanier.taylor !== "number") {
        taylor = 0;
    } else {
        taylor = objPanier.taylor;
    }
    return taylor;
}

function dataWeeknd() {
    if (typeof objPanier.weeknd !== "number") {
        weeknd = 0;
    } else {
        weeknd = objPanier.weeknd;
    }
    return weeknd;
}

billie = dataBillie();
taylor = dataTaylor();
weeknd = dataWeeknd();

let panier = {
    billie: billie,
    taylor: taylor,
    weeknd: weeknd
};
btnAll.addEventListener("click", function(e) {
    e.preventDefault();
    sessionStorage.removeItem("panier");
    localStorage.setItem("dataPanier", JSON.stringify(panier)); 
    document.getElementById("prixTotal").innerText = 0 + "€";
    document.getElementById("nbTotal").innerText = 0;
    document.getElementById("blockBillie").style.display = "none";
    document.getElementById("blockTaylor").style.display = "none";
    document.getElementById("blockWeeknd").style.display = "none";
})
btnBillie.addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("nbTotal").innerText = nbTotal - objPanier.billie;
    document.getElementById("prixTotal").innerText = (prixTotal-prixBillie).toFixed(2) + "€";
    panier.billie = 0;
    document.getElementById("blockBillie").style.display = "none";
    localStorage.setItem("dataPanier", JSON.stringify(panier)); 
})
btnTaylor.addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("nbTotal").innerText = nbTotal - objPanier.taylor;
    document.getElementById("prixTotal").innerText = (prixTotal-prixTaylor).toFixed(2) + "€";
    panier.taylor = 0;
    localStorage.setItem("dataPanier", JSON.stringify(panier)); 
    document.getElementById("blockTaylor").style.display = "none";
})
btnWeeknd.addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("nbTotal").innerText = nbTotal - objPanier.weeknd;
    document.getElementById("prixTotal").innerText = (prixTotal-prixWeeknd).toFixed(2) + "€";
    panier.weeknd = 0;
    localStorage.setItem("dataPanier", JSON.stringify(panier)); 
    document.getElementById("blockWeeknd").style.display = "none";
})
formBillie.addEventListener("input", function(e){
    e.preventDefault();
    objPanier.billie = Number(formBillie.value);
    localStorage.setItem("dataPanier", JSON.stringify(objPanier));
    prixBillie = objPanier.billie * 39.99;
    prixTotal = prixBillie + prixTaylor + prixWeeknd;
    document.getElementById("prixBillie").innerText = prixBillie.toFixed(2) + "€"; 
    document.getElementById("prixTotal").innerText = prixTotal.toFixed(2) + "€";
})
formTaylor.addEventListener("input", function(e){
    e.preventDefault();
    objPanier.taylor = Number(formTaylor.value);
    localStorage.setItem("dataPanier", JSON.stringify(objPanier)); 
    prixTaylor = objPanier.taylor * 38.99;
    prixTotal = prixBillie + prixTaylor + prixWeeknd;
    document.getElementById("prixTaylor").innerText = prixTaylor.toFixed(2) + "€"; 
    document.getElementById("prixTotal").innerText = prixTotal.toFixed(2) + "€";
})
formWeeknd.addEventListener("input", function(e){
    e.preventDefault();
    objPanier.weeknd = Number(formWeeknd.value);
    localStorage.setItem("dataPanier", JSON.stringify(objPanier)); 
    prixWeeknd = objPanier.weeknd * 14.99;
    prixTotal = prixBillie + prixTaylor + prixWeeknd;
    document.getElementById("prixWeeknd").innerText = prixWeeknd.toFixed(2) + "€"; 
    document.getElementById("prixTotal").innerText = prixTotal.toFixed(2) + "€";
})
function date() {
    let DD = d.getDate();
    let MM = d.getMonth() + 1;
    let YYYY = d.getFullYear();
    let hh = d.getHours();
    let mm = d.getMinutes();
    let ss = d.getSeconds();
    if (DD < 10) {
        DD = "0" + DD;
    }
    if (MM < 10) {
        MM = "0" + MM;
    }
    if (hh < 10) {
        hh = "0" + hh;
    }
    if (mm < 10) {
        mm = "0" + mm;
    }
    if (ss < 10) {
        ss = "0" + ss;
    }
    fullDate = DD + '/' + MM + '/' + YYYY + " à " + hh + ":" + mm + ":" + ss;
    return fullDate;
};
fullDate = date();
document.getElementById("date").innerText = fullDate;