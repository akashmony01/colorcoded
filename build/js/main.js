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
$(document).ready(function(){
    $(".ftBtn").click(function(){
        $(this).siblings(".ftCnt").toggleClass("activeFilter");
    });
});