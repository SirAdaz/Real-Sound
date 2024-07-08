let d = new Date();
let fullDate;
function date() {
    let day = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    if (day < 10) {
        day = "0" + day;
    }
    if (month < 10) {
        month = "0" + month;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    fullDate = day + '/' + month + '/' + year + " " + hours + ":" + minutes + ":" + seconds;
    return fullDate;
}
fullDate = date();
let user = localStorage.getItem("datauser");
let objUser = JSON.parse(user)
document.getElementById("firstName").innerText = objUser.firstname;
document.getElementById("date").innerText = fullDate;
