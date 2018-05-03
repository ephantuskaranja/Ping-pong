$(document).ready(function () {
    $("form#form").submit(function (event) {
        event.preventDefault();
        //inputs
        var num = $("input#number").val();

        //display results
        $(".output").text(num);
        $("#results").show();
    });
});
