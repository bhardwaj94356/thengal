function openNav() {
    document.getElementById("mySidenav").style.width = "220px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
function addNum() {
    var a = document.getElementById("num1").value || 0;
    var b = document.getElementById("num2").value || 0;

    var c = parseInt(a) + parseInt(b);

    document.getElementById("num3").value = c;
}
function dark() {
    var notun = document.getElementById("theme");
    notun.classList.toggle("dark-mode");
}