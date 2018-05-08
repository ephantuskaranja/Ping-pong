var num;
//Business logic
function ping() {
    for (var i = 1; i <= num; i++) {
        if (i % 15 == 0) {
            $("#output").append('<li>pingpong</li>');
        }
        else if (i % 5 == 0) {
            $("#output").append("<li>Pong</li>");
        }
        else if ((i % 3 == 0)) {
            $("#output").append("<li>Ping</li>");
        }
        else {
            $('#output').append('<li>' + i + '</li>');
        }
    }
};
//User Interface
$(function () {
    $("#form").submit(function (event) {
        event.preventDefault();
        num = parseInt($("input#number").val());
        //$("#output").text("");
        ping();
        $("#output").show();
    });
});
