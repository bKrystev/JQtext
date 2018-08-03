$(".btn1").click(function () {
    $(".submitP").text("");

})


$(".inp1").focus(function () {
    $(".inp1").val("");
})

$(".inp1").blur(function () {
    $(".inp1").val("   Write down something to see it in pretty text");
})

$(".inp1").keyup(function () {
    $(".submitP").text($(".inp1").val()) 
})


$(".toggler").click(function () {
    $(".submitP").toggle();
})


$(".animBtn").click(function () {
    
    $(".submitP").animate({ top: "+=10px" }, 20);
    
    $(".submitP").animate({ top: "-=10px" }, 20);
    $(".submitP").animate({ left: "+=10px" }, 20);
    $(".submitP").animate({ left: "-=10px" }, 20);
    $(".submitP").animate({ top: "+=10px" }, 20);
    $(".submitP").animate({ top: "-=10px" }, 20);

});
$("#left").click(function () {
    $(".submitP").animate({ right: "+=10px" });
})

$("#right").click(function () {
    $(".submitP").animate({ left: "+=10px" });
})
$("#down").click(function () {
    $(".submitP").animate({ top: "+=10px" });
})
$(".up").click(function () {
    $(".submitP").animate({ bottom: "+=10px" });
})

