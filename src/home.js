

function init(){
    let w = $(window).width()
    let h = $(window).height()
    bGImage(w,h);
   // toggleBtn(w,h);
  //  if(w < 813){
  //   instaFeed(12);
  //  }
  //  else{
  //   instaFeed(16);
  //  }

   
    

    $(".navbar a, footer a[href='#home']").on('click', function(event) {
        closeModal(true)
        $("#navbarsExampleDefault").removeClass("show")
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top -75
        }, 900, function(){
          window.location.hash = hash;
        });
    });


    // $("video").click(function(e){

    //     // handle click if not Firefox (Firefox supports this feature natively)
    //     if (typeof InstallTrigger === 'undefined') {
    
    //         // get click position 
    //         var clickY = (e.pageY - $(this).offset().top);
    //         var height = parseFloat( $(this).height() );
    
    //         // avoids interference with controls
    //         if (clickY > 0.82*height) return;
    
    //         // toggles play / pause
    //         this.paused ? this.play() : this.pause();
    //     }
    // });
}


// set the correct bg image based on screen size
// Put the banner in the correct place
function bGImage(docWidth,docHeight){

     showTitleSlides(titleSlideIndex);
    let navHeight = $(".navbar").outerHeight();
    $(".bg").css("height",docHeight - navHeight + 18)

}

// function toggleBtn(docWidth,docHeight){

//     let navHeight = $(".navbar").outerHeight();
//     let toggleBtnHeight = $(".navbar-toggler").outerHeight()
//     let mTop = 0
//     if(navHeight > toggleBtnHeight){
//         mTop += 0.5 * (navHeight - toggleBtnHeight)
//     }
//     $(".navbar-toggler").css("margin-top", mTop + "px");
// }

function centerInsta(docWidth,docHeight){
    let pWidth = $("#photos").width() +20;
    let width = 160;
    $(".photoCenter").css("width", (parseInt(pWidth/width) * 160) +"px");
    $(".photoCenter").css("margin", "auto");

}


$(document).ready(function(){
    init()
})

$(window).on('activate.bs.scrollspy', function (e) {
    history.replaceState({}, "",  $('.nav-item .active').attr("href"));
});

$(window).resize(function() {
    let w = $(window).width()
    let h = $(window).height()
    bGImage(w,h);
    //toggleBtn(w,h);
    centerInsta(w,h);
});




$(window).scroll(function () {
    let y = $(window).scrollTop() + $(window).height() - 500;
  let windowHeight = $("body").height()
  if(y+($("#contact").height()) > windowHeight){
    $(".social-bar img").hide(1000) 
  }
  else{
    $(".social-bar img").show(1000)
  }
});

document.addEventListener('swiped-left', function(e) {});

document.addEventListener('swiped-right', function(e) {});