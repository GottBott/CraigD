



function init(){
   
    bGImage()
    navBar()
    toggleBtn()
 
}

// Handel active link switching and loading the right active nav-item
function navBar(){

    let loc = location.hash;
    $(".navItems").find(".active").removeClass("active");
    $('.navItems .nav-link').each(function(){
        var $this = $(this);
        if($this.attr('href').indexOf(loc) !== -1){
            $this.addClass('active');
        }
    })

    $(".navItems .nav-link").on("click", function(){
        $(".navItems").find(".active").removeClass("active");
        $(this).addClass("active");
     });

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

    let right = 0
    if(docWidth > $(".bg").width() ){
        right += 0.5 * (docWidth - $(".bg").width())
    }
    $(".craig-banner").css("right", right + 20 + "px")
    $(".craig-banner").css("top", navHeight + 20 + "px")

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



$(window).resize(function() {
    init()
  });

init()