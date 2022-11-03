let os = "Unkown";

if (navigator.appVersion.indexOf("Win") != -1) os = "Windows";
if (navigator.appVersion.indexOf("Mac") != -1) os = "Mac OS";

document.querySelector(".os").innerHTML = os;

const nextbtn = document.querySelector("#nextbtn");

if (os === "Mac OS") {
    console.log("mac");
    nextbtn.classList.add("disabledbtn");
    nextbtn.disabled = true;

} else if (os === "Windows") {
    console.log("windows")
    nextbtn.classList.remove("disabledbtn");
    nextbtn.disabled = false;

} else {
    console.log("Other OS")
    nextbtn.classList.add("disabledbtn");
    nextbtn.disabled = true;

}
