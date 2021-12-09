var timeshow = document.querySelector("#timeshow");
function updateTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  var t_str = hours + ":" + minutes + " ";
  if (hours > 11) {
    t_str += "PM";
  } else {
    t_str += "AM";
  }
  document.getElementById("timeshow").innerHTML = t_str;
}
setInterval(updateTime, 1000);

function showday() {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date();
  // let day = weekday[d.getDay()];
  let day = d.toDateString();
  document.querySelector("#day").textContent = day;
  console.log(d);
}
showday();

window.addEventListener("keypress", function (elem) {
  if (elem.keyCode === 13) {
    document.querySelector("#main").style.top = "100%";
    document.querySelector("#second").style.top = "0%";
    document.querySelector("#pass").focus();
  }
});

var passcode = 8103;
document.querySelector("input").addEventListener("input", function () {
  if (Number(document.querySelector("input").value) === passcode) {
    document.querySelector("#second").style.top = "-100%";
    document.querySelector("#third").style.left = "0%";
  }
});
