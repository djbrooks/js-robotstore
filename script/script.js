function buildFooter() {
    let d = new Date();
    let f="<img src='images/robot-waving-animated-gif-clr.gif'/></a>                            <h2>Thank you for visiting!</h2>                                                <address><a href='https://www.google.com/moon/' target='_blank'>1011 Crater Ave, Moon City: THE MOON</a></address>                                              All site contents is copyright <a href='http://www.mrrobot.com' target='_blank'>Mr Robot!</a>                                                                   <br><time>Generated on: " + d + "</time><br>";

    document.getElementById("roboFooter").innerHTML = f;
}

// DJBHERE DJB HERE Attempt to have Bonus loading page
//$(window).load(function() {
//    roboShow();
//});
//
//
//function roboShow() {
//    $('#roboLoading').hide();
//    $('#roboContainerWait').fadeIn();
//};
//
//setTimeout(roboShow, 4000);
//

// DJBHERE DJB HERE: Why can't this be its own function???
// function roboNavbar(p)
//
//
function roboPageBuild(p) {
    //alert("Inside roboPageBuild function");
    console.log("Inside roboPageBuild function");
    let ap = p; // Active/current page so navbar item is highlighted

    /* Build dynamic navBar. roboGreeen.... gets set to w3-green based
     * upon passed in active/current page arg.
     */

    let logoSmall="<a href='index.html'><img class='w3-bar-item w3-cell-top roboLogo' src='images/logoSmall.png'></a>";
    let home= "<a href='index.html' class='w3-bar-item w3-btn roboGreenIndex'>Home</a>";
    let specs="<a href='specs.html' class='w3-bar-item w3-btn roboGreenSpecs'>Specs</a>";
    let fefproject="<a href='fefproject.html' class='w3-bar-item w3-btn roboGreenFfeproject'>FEF_Proj</a>";
    let robots="<div class='w3-dropdown-hover w3-hide-small roboGreenRobots'>                               <button class='w3-btn'><a href='robots.html'>Robots</a></button>                     <div class='w3-dropdown-content w3-bar-block w3-card-4'>                        <a href='robotsRET.html' class='w3-bar-item w3-btn'>R.E.T</a>            <a href='robotsButlerBot.html' class='w3-bar-item w3-btn'>Butler.Bot</a>       <a href='robotsMegaMan.html' class='w3-bar-item w3-btn'>Mega Man</a>         </div>                                                                          </div>";
    let hardware="<a href='hardware.html' class='w3-bar-item w3-btn roboGreenHardware'>Hardware</a>";
    let contact="<a href='contact.html' class='w3-bar-item w3-btn roboGreenContact'>Contact</a>";
    let about="<a href='about.html' class='w3-bar-item w3-btn roboGreenAbout'>About</a>";
    //    let searchBox="<form><input list='roboRobots' name='roboNames' class='w3-bar-item w3-input w3-round w3-display-topright' placeholder='Search our store'> <datalist id='roboRobots'> <option value='R.E.T'> <option value='Butler.Bot'> <option value='Mega Man'> </datalist> <input type='submit' value='Go' class='w3-bar-item w3-btn w3-cell-top w3-green roboTopRight'></form>";
    let searchBox="<input id='roboSearchArg' list='roboRobotsList' name='roboNames' class='w3-bar-item w3-input w3-round w3-display-topright roboSearchArea' placeholder='Search our store'/> <datalist id='roboRobotsList'> <option data-id='RET' value='R.E.T'>Our very first robot</option> <option data-id='ButlerBot' value='Butler.Bot'>Makes martinis :)</option> <option data-id='MegaMan' value='Mega Man'>Newest model</option> </datalist> <button class='w3-bar-item w3-btn w3-cell-top w3-green roboTopRight'>Go</button>";

    //    let searchBox="<form><input list='roboRobots' name='roboNames' class='w3-bar-item w3-input w3-round w3-display-topright roboSearchArea' placeholder='Search our store'> <datalist id='roboRobots'> <option value='R.E.T'> <option value='Butler.Bot'> <option value='Mega Man'> </datalist> <input type='submit' value='Go' class='w3-bar-item w3-btn w3-cell-top w3-green roboTopRight'></form>";

    //    let goText="<a href='#' class='w3-bar-item w3-btn w3-cell-top w3-green roboTopRight'>Go</a>";
    let goText="";
    let logoHeader1="<a href='index.html'> <img class='w3-bar-item w3-display-middle' src='images/logoHeader1.png'></a>";

    // Put all the navbar components together.
    let newNav=logoSmall+home+specs + fefproject + robots + hardware;
    newNav += contact + about + searchBox + goText + logoHeader1;

    // Now substitute the approprate w3-schools w3-green selector to the
    // passed in arg representing the current page. The other oddly named css
    // elements should be ignored and will leave the navbar item unhighlighted.
    let nav = newNav.replace(ap, "w3-green");

    document.getElementById("nav").innerHTML = nav;

    buildFooter();
}

/*********************************************************
 *
 *   Test Checkboxes/Radio Buttons Script
 *
 *********************************************************/
function cpuSelect() {
    // loop through each form and handle submit event
    for (var i=0;i<document.forms.length;i++) {
        var form = document.forms[i];
        form.addEventListener('submit', function(e){
            e.preventDefault();
            var results = '';
            // loop through all checkboxes to see if checked
            var checkboxes = form.querySelectorAll("input[type='checkbox']");
            for(var k = 0; k < checkboxes.length; k++) {
                results += checkboxes[k].id + '=' + checkboxes[k].checked + '\n';
            }
            // loop through all radio butotns to display value
            var radiobuttons = form.querySelectorAll("input[type='radio']:checked");
            for(var m = 0; m < radiobuttons.length; m++) {
                results += radiobuttons[m].name + '=' + radiobuttons[m].value + '\n';
            }
            // alert results
            alert(results);
        });
    }
}

/*************************************************
 *
 * jQuery for searchbox. First retrive the object selected in the 
 * search bar, then get the string value so you know which robot page
 * to switch to.
 *
 *************************************************/
$(document).ready(function() {
    console.log("Inside jQuery document ready function");
    let  msg = "Detected Go search click with this value: ";
    
    // Detect a click on the search btn and determine which page to load.
    $( ".roboTopRight" ).on('click', function() {

        var valSelected = $('#roboSearchArg').val();
        var tl = "";
        var tid = "";

        // Build the jQuery cmd to get the id that will build the name
        // of the webpage with the robot they searched for.
        var valId = $('#roboRobotsList [value="' + valSelected + '"]').data('id');

        // Tell everyone what the hell is going on!/in
        //alert("valId : " + valId + " tl: " + tl + " tid: " + tid + " msg: " + msg + valSelected);
        console.log("valId: " + valId + " tl: " + tl + " tid: " + tid + " msg: " + msg + valSelected);

            window.location.href = "robots" + valId + ".html";
    });
} );
