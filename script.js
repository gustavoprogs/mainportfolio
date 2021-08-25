$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    // Criando o Menu Toggle
    $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.home .home-content .text-4').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
    });

});