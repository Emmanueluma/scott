var body = document.getElementsByTagName('body');
var mySection = body[0].getElementsByTagName('section');
var divContainerOfMenu = mySection[0].getElementsByTagName('div');
var myMenu = divContainerOfMenu[1];
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');

var sideBar =  document.getElementById('sideBar');


myMenu.onclick = function() {
    if(sideBar.style.display == "none"){
        sideBar.style.display = "block";
        img1.style.display = "none";
        img2.style.display = "block";



    }
    else {
        sideBar.style.display = "none";
        img1.style.display = "block";
        img2.style.display = "none";
    }
};