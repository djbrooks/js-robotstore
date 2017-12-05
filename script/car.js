function buildFooter() {
    let d = new Date();
    let f="<p>Thank you for visiting!</p>                                                <address>Located at: <a href='https://map.what3words.com/vets.undulation.agree' target='_blank'><img src='images/what3wordsRED.png' alt='What3Words Logo' height='30' width='30'> vets undulation agree</a> or Detroit Michigan</address> <time>Generated on: " + d + "</time><br>";

    console.log("Inside buildFooter Function. Footer should look like:\n" + f);
    document.getElementById("carFooter").innerHTML = f;
}

function buildInventoryPage() {
    let nonsenseInventoryText = "<div class='container-fluid text-center'>                              <div class='row'>                                                               <div class='col-sm-6' style='background-color:pink;'>                           Lorem ipsum dolor sit amet, reque interpretaris mea ut, quo vitae scripta saperet ad, an vel enim dolorum. Ei graeco theophrastus quo, id sit augue singulis qualisque. Ei labores mediocritatem eum. An cum vide perpetua comprehensam, et malis saepe sanctus per.</div>                                              <div class='col-sm-6' style='background-color:salmon'>                          Civibus principes definitionem nec no, inani vidisse has ea. Per falli verear moderatius ea, purto eligendi ne per. Ad hinc dicam virtute per, modus qualisque explicari id has. Ea mei oratio malorum, ut duo ullum vocibus denique. Principes eloquentiam ut pro, ad soluta prompta suavitate mea.                    </div></div></div>";
    document.getElementById("nonsenseInventoryText").innerHTML = nonsenseInventoryText;

    function Vehicle(car, imgLoc, priceN, priceD, extra, desc) {
        this.carType = car;
        this.imgLocation = imgLoc;
        this.priceNumber = priceN;
        this.priceDisplay = priceD;
        this.priceExtra = extra;
        this.description = desc;
    }

    Vehicle.prototype.inventoryDisplay = function() {
        let ta = this.priceN * .08;
        let wt = this.priceN + ta;
        return "<p>" + this.description + "</p>" 
            + "<img id='carInventoryImg' src='" + this.imgLocation 
            + "' class='img-responsive' "
            + "style='width:100%' alt='" + this.carType + "'>"
            + "<div class='carBottomLeft'>" + this.priceExtra 
            + " " + this.priceDisplay + "</div>"
            + "<div class='carBottomLeft' style='display:none;'>" 
            + "Total price including tax (" + ta + ") is: " + wt +"</div>" 
    };


    // Could put this all in array for easy looping, but no time...
    let myBronco = new Vehicle (
          "Bronco Classic"
        , "images/carBronco.jpg"
        , 83999
        , "$83,999"
        , ""
        , "Excellent in the snow with a very tight turning radius."
    );

    let myClassic = new Vehicle (
          "Timeless Ford Beauty"
        , "images/carClassic.jpg"
        , 22999
        , "$22,999"
        , ""
        , "What a beauty. This will never go out of style."
    );

    let myCorvair = new Vehicle (
          "Safe as any"
        , "images/carCorvair.jpg"
        , 1999
        , "$1,999"
        , ""
        ,  "Ralph Nader was nuts! These were great cars. Good in snow with plenty of room inside."
    );

    let myOcean = new Vehicle (
          "Wetsuit extra..."
        , "images/carOcean.jpg"
        , 349
        , "$349"
        , "MSRP"
        , "When fully submerged, this car becomes a vessel bound by all Coast Guard rules and regulations."
    );

    let myRoadRunner = new Vehicle (
          "Meep Meep"
        , "images/carRoadRunner.jpg"
        , 134999
        , "$134,999"
        , "Starts at"
        ,  "As far as I'm concerned: The Ultimate too cool car of the '70s in Road Runner orange."
    );

    let myTree = new Vehicle (
          "Strong as an oak"
        , "images/carTree.jpg"
        , 4999
        , "$4,999"
        , ""
        ,  "The patina alone is worth that much! Strong as an oak."
    );


/*
$( ".carBottomLeft" ).hover( function() {
    $( this ).append( $( "<span> ***</span>" ) );
  }, function() {
    $( this ).find( "span:last" ).remove();
  }
);
 
$( "li.fade" ).hover(function() {
  $( this ).fadeOut( 100 );
  $( this ).fadeIn( 500 );
});
*/





    document.getElementById("carBronco").innerHTML = myBronco.inventoryDisplay();
    document.getElementById("carClassic").innerHTML = myClassic.inventoryDisplay();
    document.getElementById("carCorvair").innerHTML = myCorvair.inventoryDisplay();
    document.getElementById("carOcean").innerHTML = myOcean.inventoryDisplay();
    document.getElementById("carRoadRunner").innerHTML = myRoadRunner.inventoryDisplay();
    document.getElementById("carTree").innerHTML = myTree.inventoryDisplay();


    $(".carBottomLeft").hover(function(){
        $(this).toggle();
    });

/*
    $(".carBottomLeft").mouseout(function(){
        $(".carBottomLeft").css("background-color", "white");
        $(this).remove();
    });
        $(".carBottomLeft").css("color", "black");
        $(this).css("background-color", "pink");
        $(this).append(" almost there");
        $(this).css("background-color", "pink");
        $(".carBottomLeft").css("background-color", "yellow")
    }), function() { $( this ).find(
    });
    
    $("#carInventoryImg").mouseover(function(){
        $(this).closest(".carBottomLeft").css("background-color", "black");
    });

    $(".carBottomLeft").mouseover(function(){
        $(".carBottomLeft").css("color", "black");
    });

    $(".carBottomLeft").mouseout(function(){
        $(".carBottomLeft").css("background-color", "white");
    });
*/

}

function buildAboutPage() {
    let nonsenseAboutText ="<div class='container-fluid text-center'                                <div class='row'>                                                   <div class='col-sm-6' style='background-color:pink;'>                           It is a one of a kind and can truly never be replicated.  Who would want to? I occasionally ask myself that and I can only come up with myself. Yep, that is it. There is only one of me and that is why Unique Car Company is unique: As of yet, there are no twins or clones. :)</div>                          <div class='col-sm-6' style='background-color:salmon'>                          Civibus principes definitionem nec no, inani vidisse has ea. Per falli verear moderatius ea, purto eligendi ne per. Ad hinc dicam virtute per, modus qualisque explicari id has. Ea mei oratio malorum, ut duo ullum vocibus denique. Principes eloquentiam ut pro, ad soluta prompta suavitate mea.                    </div></div></div>";
    document.getElementById("nonsenseAboutText").innerHTML = nonsenseAboutText;
}

// Create a custom Navbar for each page and insert it.
function buildNavbar(p) {
/*
 * Should do it this way (example) instead of doing inline style
 * color:white hack to highlight active menu:
 * function highlightItem(){
 *   $('#gallery li').addClass('active');
 * }
 */
    let ap = p; // Active/current page so navbar item is highlighted

    let nav = "<nav class='navbar navbar-inverse'>                                              <div class='container-fluid'>                                                   <div class='navbar-header'>                                                     <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>                                                     <span class='icon-bar'></span>                                                  <span class='icon-bar'></span>                                                  <span class='icon-bar'></span>                                                  </button> <a class='navbar-brand' href='index.html'>Unique Car Company</a> </div>                         <div class='collapse navbar-collapse' id='myNavbar'>                            <ul class='nav navbar-nav'>                                                     <li><a style='carIndexPage' href='index.html'>Home</a></li>                  <li><a style='carInventoryPage;' href='inventory.html'>Inventory</a></li>           <li><a style='carContactPage' href='contact.html'>Contact</a></li>               <li><a style='carAboutPage' href='about.html'>About</a></li>                   </ul> </div> </div> </nav>";

    let newNav = nav.replace(ap, "color:white;");
    console.log("newNav for page " + ap + " looks like this:\n" + newNav);
    document.getElementById("carNavbar").innerHTML = newNav;
}

// Let's build the header and footer once for all pages so it is
// easier to maintain...
function carPageBuild(p) {
    //alert("Inside roboPageBuild function");
    console.log("Inside carPageBuild function for page: " + p);

    /* Build pages as appropriate. 
     */
    if ( p === "carInventoryPage" ) { buildInventoryPage(); }
    else if ( p === "carAboutPage" ) { buildAboutPage(); };

    /* Build dynamic navBar. Pagename gets passed in so active menu
     * is highlighted as active.
     */

    buildNavbar(p);
    buildFooter();
}

/*************************************************
 *
 * jQuery for searchbox. First retrive the object selected in the 
 * search bar, then get the string value so you know which robot page
 * to switch to.
 *
 *************************************************/
$().ready(function() {
    console.log("Inside jQuery document ready function.");

    $( '.roboSearchGo' ).on('click', function() {
        console.log("Inside jQuery CLICK function.");

        let msg = "Detected Go search click with this value: ";
        let valSelected = $('.roboSearchArg').val();
        let tl = "";
        let tid = "";

        // Build the jQuery cmd to get the id that will build the name
        // of the webpage with the robot they searched for.
        let valId = $('#roboRobotsList [value="' + valSelected + '"]').data('id');

        // Tell EVERYONE what the hell is going on!
        console.log("valId: " + valId + " tl: " + tl + " tid: " + tid + " msg: " + msg + valSelected);
        alert(msg + valSelected);

        window.location.href = "robots" + valId + ".html";
    });


} );
