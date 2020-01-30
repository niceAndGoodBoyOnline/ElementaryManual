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
        shell: "A command-line interface that provides you an interface to execute commands without a GUI.",
        terminal: "A command-line interface that provides you an interface to execute commands without a GUI.",
        hig: "A command-line interface that provides you an interface to execute commands without a GUI.",
        bash: "A command-line interface that provides you an interface to execute commands without a GUI.",
        sudo: 'Prompts you for a password to execute administravtive (protected) tasks. Means "Substitue User DO" or "Super User DO".',
        distro: 'A specific version of Linux, which contains specific software. Similar to how Windows has home, professional, education versions.',
        x: 'The name of the GUI in Linux. Icons, windows, wallpaper etc. Also known as X11 and X-windows',
        root: 'The start of a Linux file system. Always located at "/".',
        rootUser: 'The System Administrator account. Has permission to do anything in the system.',
        compile: 'Turn source code into an application. Also refered to as "build".',
        binaries: 'Compiled code that "just runs" on Linux. All .exe files in windows are binaries.',
        apt: 'The shell command to get, install, update and upgrade software. Very power and simple tool.',
        kernel: 'The very core of a computer system. The bridge between hardware and Linux.',
        bootable: 'A disk or other medium from which the system can be booted. Contains the OS.',
        highlighted: 'This is where the definition would show up.',
        gui: 'a human-computer interface (i.e., a way for humans to interact with computers) that uses windows, icons and menus',
        console: "A command-line interpreter that provides you an interface to execute commands without a GUI.",
        hig: 'Human interface guidelines. This is essentially the GUI style guide that elementary OS uses.',
        plank: 'The Plank is a display of which user applications are running. Similar to the taskbar in Windows or Dock in macOS.',
        superkey: 'Keyboard key that is associated with special elementary OS commands. Similar to the Windows key for Windows or the Apple/Command key in macOS.',
        focus: 'Focus refers to which application in elementary OS that key presses will be sent to. Only one application can have focus.',
        shortcuts: 'Combinations of keys on a keyboard, usually involving Alt, Shift, Ctrl, and Super.',
        curatedapplications: 'Applications which meet the elementary OS HIG and are specifically designed for elementary OS.',
        userpassword: 'The password you created when installing elementary OS.',
        authentication: 'The process of verifying your identity. Your user password should be kept a secret for this reason.',
        applicationdrawer: 'Where elementary OS keeps all installed applications for easy access. Similar to the Start menu in Windows.',
        update: 'Small changes to applications. Usually bug fixes, security patches or minor improvements.',
        linux: 'A Free and Open Source kernel. Allows many different operating systems to exist, like elementary OS.',
        ubuntu: 'A distribution of the Linux kernel which is well known and popular. elementary OS is based on Ubuntu 18.04.',
        foss: 'Free Open Source Software. "Free as in speech, not as in beer!"',
        updates: 'Small changes to applications. Usually bug fixes, security patches or minor improvements.',
        bootmenukey: 'Usually a F key, like F2 or F10. There is no standard bootmenu key. The bootmenu key is displayed when you turn your computer on, before an OS is loaded.',
        os: "Operating System. Handles communication with all the computers low level hardware through a kernel.",
        sourcepackages: 'Code which is packaged and ready to be installed on a Linux computer.',
        aptrepository: 'An online database of software that can be installed on a Linux computer'
    }
}

function show_highlighted_definitions(){
    makeGlossary()
    let terms = document.getElementsByTagName('mark')
    for (let i=0; i < terms.length; i++) {
        let term = terms[i].innerHTML
        terms[i].title = glossary[term.toLowerCase().replace(" ","")]
        terms[i].addEventListener("click", toggleHelper)
        terms[i].addEventListener("click", function () {
            helperContent.innerHTML = '<mark>' + term + '</mark>' + ' -> ' + glossary[term.toLowerCase().replace(" ","")]
        })
    }
    let vids = document.getElementsByClassName("icon")
    for (let i=0; i < vids.length; i++){

        
    }
}

function make_glossary_page() {
    makeGlossary()
    let GlossaryList =  document.getElementById("Glossary")
    for (let term in glossary) {
        let listItem = document.createElement("li")
        listItem.innerHTML = term + ' -> ' + glossary[term]
        GlossaryList.appendChild(listItem)
        let breakLine = document.createElement("br")
        GlossaryList.appendChild(breakLine)
    }
}

show_highlighted_definitions()
make_glossary_page()
