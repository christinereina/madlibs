$(document).ready(function() {
    $(".btn").click(function(){
        var name = $("input#name").val();
        var person1 = $("input#person1").val();
        var noun = $("input#noun").val();
        console.log("noun");
        $(".name").prepend(name);
        $(".person1").text(person1);
        $(".noun").text(noun);
        
        $("#story").show();
        event.preventDefault();
    });
});
