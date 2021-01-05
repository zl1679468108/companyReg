let index=0;
let time = setInterval(move, 3000);
$(".imgSlider").hover(function(){
    clearInterval(time)
},function(){
    time = setInterval(move, 3000);
})
$(".sliderIcon li").mousemove(function(){
    
})
$(".imgSlider .next").click(function(){
    move()
})
$(".imgSlider .prev").click(function(){
    moveL()
})
function move(){
    index++
    if(index==4){
        index=0
    }
    let x =0;
    switch(index){
        case 0:x =0;
            break
        case 1:x =-1180;
            break
        case 2:x =-2360;
            break
        case 3:x =-3540;
            break
    }
    // translate3d(-2360px, 0px, 0px)
    $(".slider .allImg").css({"transform":`translate3d(${x}px,0px,0px)`})
    $(".sliderIcon li").eq(index).addClass("current").siblings().removeClass("current");
    
}
function moveL(){
    index--
    if(index==-1){
        index=3
    }
    let x =0;
    switch(index){
        case 0:x =0;
            break
        case 1:x =-1180;
            break
        case 2:x =-2360;
            break
        case 3:x =-3540;
            break
    }
    $(".slider .allImg").css({"transform":`translate3d(${x}px,0px,0px)`})
    $(".sliderIcon li").eq(index).addClass("current").siblings().removeClass("current");
    
}



// let index=0;
// let time = setInterval(move, 2000);
// $(".imgSlider").hover(function(){
//     clearInterval(time)
// },function(){
//     time = setInterval(move, 2000);
// })
// $(".sliderIcon li").mousemove(function(){
//     $(this).addClass("current").siblings().removeClass("current");
//     index = $(this).index()
//     $(".slider img").eq(index).stop().fadeIn(500).siblings().stop().fadeOut(500)
// })
// $(".imgSlider .next").click(function(){
//     move()
// })
// $(".imgSlider .prev").click(function(){
//     moveL()
// })

// function move(){
//     index++;
//     if(index==4){
//          index=0;
//     }
//     $(".sliderIcon li").eq(index).stop().addClass("current").siblings().removeClass("current")
//     $(".slider img").eq(index).stop().fadeIn(500).siblings().stop().fadeOut(500)
// }
// function moveL(){
//     index--;
//     if(index==-1){
//          index=3;
//     }
//     $(".sliderIcon li").eq(index).stop().addClass("current").siblings().removeClass("current")
//     $(".slider img").eq(index).stop().fadeIn(500).siblings().stop().fadeOut(500)
// }

$(window).scroll(function () {
    // console.log($(this).scrollTop());
    if ($(this).scrollTop() > 300) {
        $('.wrapper').stop().slideDown()
    } else {
        $('.wrapper').stop().slideUp()
    }
  });