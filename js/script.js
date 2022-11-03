let os = "Unkown"

if (navigator.appVersion.indexOf("Win") != -1) os = "Windows";
if (navigator.appVersion.indexOf("Mac") != -1) os = "Mac OS";
if (navigator.appVersion.indexOf("X11") != -1) os = "UNIX";
if (navigator.appVersion.indexOf("Linux") != -1) os = "Linux";

document.querySelector(".os").innerHTML = os;
