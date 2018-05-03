function ping(i){
    if (i % 3 == 0)
{
  var res = i.toString();
  var ress=document.writeln(res.replace(res,'Ping'));
}
else
{
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
        for(var i = 1; i <= num; i++){
           ping(i);
        } 
    });
});
