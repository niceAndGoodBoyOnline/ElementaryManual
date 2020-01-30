let helper = document.getElementById('helper')
let helperToggle = document.getElementById('helperToggle')
let sideNav = document.getElementById("sideNav");
let navButton = document.getElementById('navButton');
let containerStyle = document.getElementById('container').style;
let helperContent = document.getElementById('helperContent')

let glossary = {}

navButton.addEventListener("click", toggleSideNav);
helperToggle.addEventListener("click", toggleHelper);
let sideNavState = false;
let helperState = false;

function toggleSideNav(){

    if(window.innerHeight > window.innerWidth){
        set_portrait_css()
    }
    else{
        set_landscape_css()
    }

}

function toggleHelper(){
    
    if(window.innerHeight > window.innerWidth){
        set_portrait_helper()
    }
    else{
        set_landscape_helper()
    }

}

function set_portrait_helper(){

    if (helperState==true){
        helperState=false;
        containerStyle.magrin = "0 0 0 0"
        helper.style.height = '5.5vh'
    }
    else{
        helperState=true;
        containerStyle.magrin = "0 0 45vh 0"
        helper.style.height = '66vh'
    }
}

function set_landscape_helper(){

    if (helperState==true){
        helperState=false;
        containerStyle.magrin = "0 0 0 0"
        helper.style.height = '9vh'
    }
    else{
        helperState=true;
        containerStyle.magrin = "0 0 45vh 0"
        helper.style.height = '90%'
    }
}

function set_portrait_css(){
    if (sideNavState == true){
        sideNavState = false;
        sideNav.style.width = '0';
        containerStyle.left = "8vh";
        navButton.style.left = '-10vh';
        navButton.style.fontSize = '14vh';
    }
    else{
        sideNavState = true;
        sideNav.style.width = '30vh';
        containerStyle.left = "30vh";
        sideNav.style.fontSize = '2vh'
        navButton.style.left = '5vh'
    }
}


function set_landscape_css(){
    if (sideNavState == true){
        sideNavState = false;
        sideNav.style.width = "0";
        navButton.style.fontSize = '14vh'
        navButton.style.left = '-10vh'
        containerStyle.left = "7vw";
    }
    else{
        sideNavState = true;
        sideNav.style.width = '33vw';
        sideNav.style.fontSize = "3vh"
        navButton.style.left = '13vw'
        containerStyle.left = "33vw";
    }
}

function onOrientationChange() {
    sideNavState = true
    helperState = true
    switch(window.orientation) {  
      case -90: case 90:
        set_landscape_css()
        set_landscape_helper()
        break; 
      default:
        set_portrait_css()
        set_portrait_helper()
        break; 
    }
}
  
window.addEventListener('orientationchange', onOrientationChange);


function makeGlossary(){
    glossary = {
        shell: "A command-line interpreter that provides you an interface to execute commands without a GUI.",
        terminal: "A command-line interpreter that provides you an interface to execute commands without a GUI.",
        CMD: "A command-line interpreter that provides you an interface to execute commands without a GUI.",
        bash: "A command-line interpreter that provides you an interface to execute commands without a GUI.",
        sudo: 'Prompts you for a password to execute administravtive (protected) tasks. Means "Substitue User DO" or "Super User DO".',
        distro: 'A specific version of Linux, which contains specific software. Similar to how Windows has home, professional, education versions.',
        X: 'The name of the GUI in Linux. Icons, windows, wallpaper etc. Also known as X11 and X-windows',
        root: 'The start of a Linux file system. Always located at "/".',
        rootUser: 'The System Administrator account. Has permission to do anything in the system.',
        compile: 'Turn source code into an application. Also refered to as "build".',
        binaries: 'Compiled code that "just runs" on Linux. All .exe files in windows are binaries.',
        apt: 'The shell command to get, install, update and upgrade software. Very power and simple tool.',
        kernel: 'The very core of a computer system. The bridge between hardware and Linux.',
        bootable: 'A disk or other medium from which the system can be booted. Contains the OS.',
        highlighted: 'This is where the definition would show up.',
        gui: 'a human-computer interface (i.e., a way for humans to interact with computers) that uses windows, icons and menus',
        console: "A command-line interpreter that provides you an interface to execute commands without a GUI."
    }
}

function show_highlighted_definitions(){
    makeGlossary()
    let terms = document.getElementsByTagName('mark')
    for (let i=0; i < terms.length; i++) {
        let term = terms[i].innerHTML
        terms[i].title = glossary[term.toLowerCase()]
        terms[i].addEventListener("click", toggleHelper)
        terms[i].addEventListener("click", function () {
            helperContent.innerHTML = '<mark>' + term + '</mark>' + ' -> ' + glossary[term.toLowerCase()]
        })
    }
    let vids = document.getElementsByClassName("icon")
    for (let i=0; i < vids.length; i++){
        vids[i].addEventListener("click", toggleHelper)
        vids[i].addEventListener("click", function () {
            helperContent.innerHTML = '<video autoplay muted loop>' + '<source src="../video/' + vids[i].id + '.mp4" type="video/mp4" id="' + vids[i].id + '">' + '</source>' + '</video>'
        })
    }
}

show_highlighted_definitions()