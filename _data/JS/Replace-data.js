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
        };

var Version = "0.4";
var Author = "Darowimu";
var Version = "0.4";

function ReplaceData() {
document.getElementById("url").innerHTML =
"You're at: " + window.location.pathname;
document.getElementById("ver").innerHTML =
"Version: " + Version;
document.getElementById("author").innerHTML =
"Developed by: " + Author;
};
