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
document.getElementById("firstName").innerText = objUser.firstname;
document.getElementById("lastName").innerText = objUser.lastname;
document.getElementById("nbBillie").innerText = objPanier.billie;
document.getElementById("nbTaylor").innerText = objPanier.taylor;
document.getElementById("nbWeeknd").innerText = objPanier.weeknd;
document.getElementById("nbTotal").innerText = nbTotal;
document.getElementById("prixTotal").innerText = nbTotal;
document.getElementById("prixBillie").innerText = prixBillie.toFixed(2) + "€";
document.getElementById("prixTaylor").innerText = prixTaylor.toFixed(2) + "€";
document.getElementById("prixWeeknd").innerText = prixWeeknd.toFixed(2) + "€";
document.getElementById("prixTotal").innerText = prixTotal.toFixed(2) + "€";
console.log(document.getElementById("blockWeeknd"));
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