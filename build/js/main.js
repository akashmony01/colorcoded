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
        var currentSlider = $(this).parents(".cImgSlider");

        // set thumb active
        $(this).siblings(".tmbImg").removeClass("border-primary opacity-60");
        $(this).addClass("border-primary opacity-60");

        // set src for main img
        $(currentSlider).find('#mainImg').attr('src', curentImg);

    });
});

// toggle box open close
$(document).ready(function(){
    // main alert box
    $(".alrtBtn").click(function(){
        var currentBox = $(this).parents(".alrtBox");
        // set thumb active
        $(currentBox).find(".alrtCnt").toggleClass("max-h-screen oveflow-y-scroll");
    });

    // checkbox toggle open close
    $(".chkToggleBtn").change(function() {
        var currentBox = $(this).parents(".chkToggleBox");
        // set thumb active
        $(currentBox).find(".chkToggleCnt").toggleClass("max-h-screen oveflow-y-scroll");
    }).triggerHandler('click');
});