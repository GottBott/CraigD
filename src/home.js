



function init(){

    
   
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


$(window).resize(function() {
    init()
  });

init()