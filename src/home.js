function init(){
   
    bGImage();
    toggleBtn();

    $(".navbar a, footer a[href='#home']").on('click', function(event) {
     
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function(){
          window.location.hash = hash;
        });
    });
    var feed = new Instafeed({
        //get: 'tagged',
        //tagName: 'iceclimbing',
        clientId: '111680786b694bc1b47154dba7ffbfbe',
        accessToken: '3522981484.1116807.ac98862469174adab8a7741c5c29a2fa',
        userId:'3522981484',
        get: 'user'
    });
    feed.run();
}


// set the correct bg image based on screen size
// Put the banner in the correct place
function bGImage(){

    let docHeight = $(window).height()
    let docWidth = $(window).width()
    $(".bg").css("height",docHeight)

    let navHeight = $(".navbar").outerHeight();


    let imgSrc = "url(../CraigDemo/assets/home_background_mobile.jpg)"
    if(docHeight > docWidth){
        $(".bg").css("background-image", imgSrc);
    }
    else{
        imgSrc = "url(../CraigDemo/assets/home_background.jpg)"
        $(".bg").css("background-image", imgSrc);
    }
    $(".bg").css("margin-top", -30 + "px");

    // let right = 0
    // if(docWidth > $(".bg").width() ){
    //     right += 0.5 * (docWidth - $(".bg").width())
    // }
    // $(".craig-banner").css("right", right + 20 + "px")
    // $(".craig-banner").css("top", navHeight + 20 + "px")

    let left = 0
    //if(docWidth > $(".bg").width() ){
        left += docWidth
        left -=  $(".craig-banner img").width()
        left -= (0.5 * (docWidth - $(".bg").width()))
   // }
    let top = 0
    top -= $(".bg").height()
    $(".craig-banner").css("margin-left", left - 20 +"px")
    $(".craig-banner").css("margin-top", top + navHeight  + "px")
    

}

function toggleBtn(){
    let docHeight = $(window).height()
    let docWidth = $(window).width()

    let navHeight = $(".navbar").outerHeight();
    let toggleBtnHeight = $(".navbar-toggler").outerHeight()
    let mTop = 0
    if(navHeight > toggleBtnHeight){
        mTop += 0.5 * (navHeight - toggleBtnHeight)
    }
    $(".navbar-toggler").css("margin-top", mTop + "px");
}


$(document).ready(function(){
    init()
})
$(window).on('activate.bs.scrollspy', function (e) {
    history.replaceState({}, "",  $('.nav-item .active').attr("href"));
});
$(window).resize(function() {
    init()
});