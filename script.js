$(document).ready(function(){

    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items:1,
        smartSpeed:1000,
        dots:false,
        navText: ['PREV' ,'NEXT' ],
        responsive:{
            0:{
               nav:false, 
            },
            768:{
                nav:true,
            },
           
        }
    });

    // Project Slider

    $('#project-slider').owlCarousel({
        loop:true,
        margin:24,
        nav:true,
        smartSpeed:1000,
        dots:false,
        navText: ['PREV' ,'NEXT' ],
        responsive:{
            0:{
               nav :false,
               items:1,
               margin:0,
            },
            768:{
                items:2,
            },
           1140:{
             items:2,
             center:true,
             dots:true,
             
           }
        }
    })


    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        items:1,
        smartSpeed:800,
       
    })
})