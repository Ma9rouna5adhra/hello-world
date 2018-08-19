$(document).ready(function(){
    $("#SB").hover(function(){
        $("#p-SB").slideToggle("slow");
    });
});
$(document).ready(function(){
    $("#BMY").hover(function(){
        $("#p-BMY").slideToggle("slow");
    });
});
$(document).ready(function(){
    $("#BSM").hover(function(){
        $("#p-BSM").slideToggle("slow");
    });
});
$(document).ready(function(){
    $("#design").hover(function(){
        $("#design").css("transform","translate(200px,0)");
        $("#design").css("opacity", 1);

    });
});
$(document).ready(function(){
    $("#development").hover(function(){
        $("#development").css("transform","translate(200px,0)");
        $("#development").css("opacity", 1);

    });
});
$(document).ready(function(){
    $("#marketing").hover(function(){
        $("#marketing").css("transform","translate(200px,0)");
        $("#marketing").css("opacity", 1);

    });
});
$(document).ready(function(){
    $("#PS-logo").click(function(){
        $("#lc").slideToggle("slow");
    });
});
$("#p6,#p2").click(function(){
    $("#i-lc").attr("src", "res/gall1.jpg");
});
$("#p5,#p1").click(function(){
    $("#i-lc").attr("src", "res/gall3.jpg");
});
$("#p7,#p4").click(function(){
    $("#i-lc").attr("src", "res/gall4.jpg");
});
$("#p3").click(function(){
    $("#i-lc").attr("src", "res/gall5.jpg");
});
