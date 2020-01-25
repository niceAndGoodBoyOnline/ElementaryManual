document.getElementById('navButton').addEventListener("click", toggleSideNav);

let containerStyle = document.getElementById('container').style;
let glossary = {}

sideNavState = false;
quickGlossaryState = false;

function toggleSideNav(){
    let sideNav = document.getElementById("sideNav");
    let navButton = document.getElementById('navButton');

    if (sideNavState == true){
        sideNavState = false;
        sideNav.style.width = "0";

        if(window.innerHeight > window.innerWidth){
            containerStyle.marginLeft = "8vh";
            navButton.style.left = '-10vh'
            navButton.style.fontSize = '15vh'
        }
        else{
            navButton.style.fontSize = '10vw'
            navButton.style.left = '-7vw'
            containerStyle.marginLeft = "7vw";
        }
    }

    else{
        sideNavState = true;

        if(window.innerHeight > window.innerWidth){
            sideNav.style.width = '30vh';
            containerStyle.marginLeft = "30vh";
            sideNav.style.fontSize = '3.5vw'
            navButton.style.left = '2vw'
        }

        else{
            sideNav.style.width = '20vw';
            navButton.style.left = '3vw'
            containerStyle.marginLeft = "20vw";
        }
        
    }
}

function expand_helper(){
    let helper = document.getElementById('helper')
    let expandButton = document.getElementById('expandButton')
    
    containerStyle.magrin = "0 0 45vh 0"
    helper.style.height = '66vh'
    expandButton.onclick = function() {contract_helper()}
}

function contract_helper(){
    let helper = document.getElementById('helper')
    let expandButton = document.getElementById('expandButton')

    containerStyle.magrin = "0 0 0 0"
    helper.style.height = '4vh'
    expandButton.onclick = function() {expand_helper()}
}

function makeGlossary(){
    glossary = {
        shell: "A command-line interpreter that provides you an interface to execute commands without a GUI.",
        terminal: glossary['shell'],
        CMD: glossary['shell'],
        bash: glossary['shell'],
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
    }
}

function show_highligthed_definitions(){
    makeGlossary()
    let terms = document.getElementsByTagName('span')
    for (let i=0; i < terms.length; i++) {
        terms[i].title = glossary[terms[i].innerHTML.toLowerCase()]
        let highlight = document.createElement('mark')
        let term = terms[i].innerHTML
        terms[i].innerHTML = ""
        highlight.innerHTML = term
        terms[i].appendChild(highlight)
    }
}

function show_quick_glossary() {
    if (quickGlossaryState == false) {
        makeGlossary()
        let helper = document.getElementById('helper')
        let glossaryList = document.createElement('ol')
        let terms = document.getElementsByTagName('span')
        for (let i=0; i < terms.length; i++) {
            let glossaryItem = document.createElement('li')
            glossaryItem.innerHTML = terms[i].innerHTML.toLowerCase() + ' -> ' + terms[i].title 
            glossaryList.appendChild(glossaryItem)
            glossaryList.appendChild(document.createElement('br'))
        }
        helper.appendChild(glossaryList)
    }
    quickGlossaryState = true;
}

show_highligthed_definitions()