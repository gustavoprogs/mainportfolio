$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Scroll Up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0})
    });

    // Textos com animação
    var typed = new Typed(".typing", {
        strings: ["Front-end;", "Freelancer;", "Junior;", "Criativo!"],
        typeSpeed: 100,
        backSpeed: 60,
        loop:true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Front-end;", "Freelancer;", "Junior;", "Criativo!"],
        typeSpeed: 100,
        backSpeed: 60,
        loop:true
    });

    // Criando o Menu Toggle
    $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.home .home-content .text-4').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
    });

    // Script do carrosel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 200,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});