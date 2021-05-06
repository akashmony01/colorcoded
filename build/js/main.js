// mobile menu
// ======================================================
$(document).ready(function(){
    $("#mobileBtn").click(function(){
        $(this).toggleClass("mobileActive");
        $("#mobileMenu").toggleClass("max-h-screen overflow-y-auto");
    });

    $(".subBtn").click(function(){
        $(this).siblings(".subMenu").toggleClass("max-h-screen overflow-y-auto");
    });
});

// home slider
// ======================================================
$(document).ready(function(){
    $('.homeSlider.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            640:{
                items: 2
            },
            768:{
                items: 3
            },
            1024:{
                items: 4
            }
        }
    })
});

// all products filter
// ======================================================
$(document).ready(function(){
    // main filter box
    $(".ftBtn").click(function(){
        $(this).siblings(".ftCnt").toggleClass("activeFilter");
    });

    // color icon
    $(".colorCnt").click(function(){
        $(this).siblings(".colorCnt").removeClass("border-secondery opacity-60");
        $(this).addClass("border-secondery opacity-60");
    });
});


// all products details slider
// ======================================================
$(document).ready(function(){
    // main filter box
    $(".tmbImg").click(function(){
        var curentImg = $(this).find("img").attr("src");

        // set thumb active
        $(".tmbImg").removeClass("border-primary opacity-60");
        $(this).addClass("border-primary opacity-60");

        // set src for main img
        $('#mainImg').attr('src', curentImg);

    });
});