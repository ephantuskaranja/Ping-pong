$(document).ready(function () {
    $("form#form").submit(function (event) {
        event.preventDefault();
        //inputs
        var num = $("input#number").val();

        //display results
        $(".output").text(num);
        for(var i = 1; i <= num; i++){
           //$("#results").show();
           document.writeln(i);
        } 
    });
});
