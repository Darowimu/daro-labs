var ver = "0.3";

function Replace() {
document.getElementById("url").innerHTML =
"You're at: " + window.location.pathname;
document.getElementById("ver").innerHTML =
"Version: " + ver;
}
 function time()
        {
            var data = new Date();
            var hour = data.getHours();
            var minute = data.getMinutes();
            var second = data.getSeconds();           
            if (minute < 10) minute = "0" + minute;
            if (second < 10) second = "0" + second;           
            var timer =  hour + ':' + minute + ':' + second;
            document.getElementById("time").innerHTML = timer;           
            setTimeout(time, 1000);            
        }


function ReplaceExplorer() {
document.getElementById("window-name").innerHTML =
"Darowimu's Lab - " + window.location.pathname;
document.getElementById("url").innerHTML =
"You're at: " + window.location.pathname;
document.getElementById("ver").innerHTML =
"Version: Dev" + ver;
document.getElementById("author").innerHTML =
"Made by: " + "Darowimu";
 
}

