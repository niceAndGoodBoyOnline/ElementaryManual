

function open_sidenav(){
    let sidenav = document.getElementById("sideNav")
    let container = document.getElementById('container');
    sidenav.style.fontSize = '1.5vw'
    container.style.marginLeft = "15vw";;

    sidenav.innerHTML = '<a href="javascript:void(0)" class="closebtn" onclick="close_sidenav()">🧭</a>\
    <a href="../html/title.html">Title</a>\
    <a href="../html/user_guide.html">How To Use This Document</a>\
    <a href="#">Table Of Contents</a>\
    <a href="#">Get To Know ElementaryOS</a>\
    <a href="#">Installation</a>\
    <a href="#">Customizations</a>\
    <a href="#">Glossary</a>'
    sidenav.style.width = '15vw'
}


function close_sidenav(){
    let sidenav = document.getElementById("sideNav")
    let container = document.getElementById('container');
    sidenav.style.fontSize = '5vw'
    container.style.marginLeft = "7vw";
    sidenav.innerHTML = '<a href="javascript:void(0)" class="closebtn" onclick="open_sidenav()">🧭</a>'
    sidenav.style.width = "auto"
}