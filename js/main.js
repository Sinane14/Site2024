$(document).ready(function(){

    $('i.icon').click(function(){
        $('.nav-list').slideToggle()
    });
    
    // $(windows).scroll(function(){
    //     var sc = $(this).scrollTop();
    //     if(sc > 50){
    //         $('header').addClass('sticky');
    //     }else{
    //         $('header').removeClass('sticky');
    //     }
    // })
})