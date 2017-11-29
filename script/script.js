function buildFooter() {
    let d = new Date();
    let f="<img src='images/robot-waving-animated-gif-clr.gif'/>                            <h2>Thank you for visiting!</h2>                                                <address><a href='https://www.google.com/moon/' target='_blank'>1011 Crater Ave, Moon City: THE MOON</a></address>                                              All site contents is copyright <a href='http://www.mrrobot.com' target='_blank'>Mr Robot!</a>                                                                   <br><time>Generated on: " + d + "</time><br>";

    document.getElementById("roboFooter").innerHTML = f;
}

// DJBHERE DJB HERE: Why can't this be its own function???
// function roboNavbar(p)
//
function roboPageBuild(p) {
    let ap = p; // Active/current page so navbar item is highlighted

    /* Build dynamic navBar. roboGreeen.... gets set to w3-green based
     * upon passed in active/current page arg.
     */
    
    let logoSmall="<a href='index.html'><img class='w3-bar-item w3-cell-top roboLogo' src='images/logoSmall.png'></a>";
    let home= "<a href='index.html' class='w3-bar-item w3-btn roboGreenIndex'>Home</a>";
    let specs="<a href='specs.html' class='w3-bar-item w3-btn roboGreenSpecs'>Specs</a>";
    let robots="<div class='w3-dropdown-hover w3-hide-small roboGreenRobots'>                               <button class='w3-btn'><a href='robots'>Robots</a></button>                     <div class='w3-dropdown-content w3-bar-block w3-card-4'>                        <a href='robots.html#robo1LinkStartHere' class='w3-bar-item w3-btn'>R.E.T</a>            <a href='robots.html#robo2LinkStartHere' class='w3-bar-item w3-btn'>Butler.Bot</a>       <a href='robots.html#robo3LinkStartHere' class='w3-bar-item w3-btn'>Mega Man</a>         </div>                                                                          </div>";
    let hardware="<a href='hardware.html' class='w3-bar-item w3-btn roboGreenHardware'>Hardware</a>";
    let contact="<a href='contact.html' class='w3-bar-item w3-btn roboGreenContact'>Contact</a>";
    let about="<a href='about.html' class='w3-bar-item w3-btn roboGreenAbout'>About</a>";
    let searchBox="<input type='text' class='w3-bar-item w3-input w3-round w3-display-topright' placeholder='Search our store'>";
    let goText="<a href='#' class='w3-bar-item w3-btn w3-cell-top w3-green roboTopRight'>Go</a>";
    let logoHeader1="<a href='index.html'> <img class='w3-bar-item w3-display-middle' src='images/logoHeader1.png'></a>";

    // Put all the navbar components together.
    let newNav=logoSmall + home + specs + robots + hardware + contact + about;
    newNav += searchBox + goText + logoHeader1;

    // Now substitute the approprate w3-schools w3-green selector to the
    // passed in arg representing the current page. The other oddly named css
    // elements should be ignored and will leave the navbar item unhighlighted.
    let nav = newNav.replace(ap, "w3-green");

    document.getElementById("nav").innerHTML = nav;

    buildFooter();
}
