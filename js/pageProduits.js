let d = new Date();
let fullDate;
let user = localStorage.getItem("datauser");
let objUser = JSON.parse(user);

document.getElementById("firstName").innerText = objUser.firstname;

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
    fullDate = DD + '/' + MM + '/' + YYYY + " " + hh + ":" + mm + ":" + ss;
    return fullDate;
};
fullDate = date();
document.getElementById("date").innerText = fullDate;


let btnBillie = document.getElementById("btn-billie");
let btnTaylor = document.getElementById("btn-taylor");
let btnWeeknd = document.getElementById("btn-weeknd");
let objPanier = JSON.parse(localStorage.getItem("dataPanier")) || {};
let billie;
let taylor;
let weeknd;

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

btnBillie.addEventListener("click", function(e) { 
    e.preventDefault();
    billie++;
    panier.billie = billie;
    localStorage.setItem("dataPanier", JSON.stringify(panier)); 
    alert("bien ajouté");
});

btnTaylor.addEventListener("click", function(e) { 
    e.preventDefault();
    taylor++;
    panier.taylor = taylor;
    localStorage.setItem("dataPanier", JSON.stringify(panier)); 
    alert("bien ajouté");
});

btnWeeknd.addEventListener("click", function(e) { 
    e.preventDefault();
    weeknd++;
    panier.weeknd = weeknd;
    localStorage.setItem("dataPanier", JSON.stringify(panier)); 
    alert("bien ajouté");
});

