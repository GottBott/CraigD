



function init(){
   
    let docHeight = $(window).height()
    let docWidth = $(window).width()
   
    let navHeight = $("nav").height() + 5;
    $(".craig-banner img").css("top", navHeight + "px");



    let bgImageDiv = $(".mainBGImage-Div")
    let imgSrc="assets/home_background.jpg"
    if(docHeight > docWidth){
        imgSrc="assets/home_background_mobile.jpg"
    }

    $("#mainBGImage").on('load', function() {
        let bgImageHeight = this.height
        let calcHeight = (docHeight - bgImageHeight)
        if (calcHeight < 0){
            $(".mainBGImage-Div").css("margin-top", calcHeight + "px");
        }
        else{
             $(".mainBGImage-Div").css("margin-top","30px");
        }
      }).attr('src', imgSrc);
   
   

}


$(window).resize(function() {
    init()
  });

init()