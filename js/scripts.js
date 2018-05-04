var num;
//Business logic
function ping() {
    $("#output").text("");
    for (var i = 1; i <= num; i++) {
        if (i % 15 == 0) {
            $("#output").append('<li>pingpong</li>');
            alert(num);
        }
        else if (i % 5 == 0) {
            $("#output").append("<li>Pong</li>");
        }
        else if ((i % 3 == 0)) {
            $("#output").append("<li>Ping</li>");
        }
        else {
            $('#output').append('<li>' + i.toString() + '</li>');
        }
    }
};
//User Interface
$(document).ready(function () {
    $("form#form").submit(function (event) {
        event.preventDefault();
        num = parseInt($("input#number").val());
        // alert(num);
        ping();
        $("#output").show();
    });
});
