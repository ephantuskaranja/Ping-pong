function ping(i) {
    if (i % 15 == 0) {
        var res = i.toString();
        var ress = document.writeln(res.replace(res, 'PingPong'));
    }
    else if (i % 5 ==0){
        var res3 = i.toString();
        var ress3 = document.writeln(res3.replace(res3, 'Pong')); 
    }
    else if ((i % 3 == 0)){
        var res2 = i.toString();
        var ress2 = document.writeln(res2.replace(res2, 'Ping'));
    }
    else {
        document.writeln(i);
    }
};

$(document).ready(function () {
    $("form#form").submit(function (event) {
        event.preventDefault();
        //inputs
        var num = $("input#number").val();

        //display results
        $(".output").text(num);
        for (var i = 1; i <= num; i++) {
            ping(i);
        }
    });
});
