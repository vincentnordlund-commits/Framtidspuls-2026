const d = new Date();
let text = d.toLocaleDateString();
const t = new Date();
let time = t.toLocaleTimeString();
document.getElementById("date").innerHTML = "Dagens datum och tid: " + text + " " + time;