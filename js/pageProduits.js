let d = new Date();
let fullDate;
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
}
fullDate = date();
let user = localStorage.getItem("datauser");
let objUser = JSON.parse(user)
document.getElementById("firstName").innerText = objUser.firstname;
document.getElementById("date").innerText = fullDate;
