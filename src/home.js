

function init(){
    let w = $(window).width()
    let h = $(window).height()
    bGImage(w,h);
    toggleBtn(w,h);
    instaFeed();

    $(".navbar a, footer a[href='#home']").on('click', function(event) {
     
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top -75
        }, 900, function(){
          window.location.hash = hash;
        });
    });
}


// set the correct bg image based on screen size
// Put the banner in the correct place
function bGImage(docWidth,docHeight){

     showTitleSlides(titleSlideIndex);
    let navHeight = $(".navbar").outerHeight();
    $(".bg").css("height",docHeight - navHeight + 18)

}

function toggleBtn(docWidth,docHeight){

    let navHeight = $(".navbar").outerHeight();
    let toggleBtnHeight = $(".navbar-toggler").outerHeight()
    let mTop = 0
    if(navHeight > toggleBtnHeight){
        mTop += 0.5 * (navHeight - toggleBtnHeight)
    }
    $(".navbar-toggler").css("margin-top", mTop + "px");
}

function centerInsta(docWidth,docHeight){
    let width = $("#instadeed img").first().width() || 150;
    $(".photoCenter").css("width", parseInt(docWidth/width) * 150 + "px");

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
    toggleBtn(w,h);
    centerInsta(w,h);
});