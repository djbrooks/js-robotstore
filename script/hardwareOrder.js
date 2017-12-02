/*********************************************************
 *
 *   Test Checkboxes/Radio Buttons settings in javascript
 *
 *********************************************************/
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
        // Log to console.log: alert(results);
        //   console.log(results);
        alert("javascript results are:\n" + results + "\nCheck console log for jQuery output...");
    });
}

/*********************************************************
 *
 *   Test Checkboxes/Radio Buttons settings using jQuery
 *
 *********************************************************/
$( "form" ).submit(function() {
    var msg = "jQuery results are:\n";
    var cpuRam = "CPU and RAM: ";
    cpuRam += $("input:radio:checked").map(function() {
        return $(this).val();
    }).get();
    var miscEquipment = "Misc Equipment: ";
    miscEquipment += $("input:checkbox:checked").map(function() {
        return $(this).val();
    }).get();
    console.log(msg + cpuRam + "\n" + miscEquipment);
});
