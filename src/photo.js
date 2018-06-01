
var instaSlideIndex = 0;

let options = {
    //get: 'tagged',
    //tagName: 'iceclimbing',
    clientId: '111680786b694bc1b47154dba7ffbfbe',
    accessToken: '3522981484.1116807.ac98862469174adab8a7741c5c29a2fa',
    userId:'3522981484',
    get: 'user',
    limit: '12'
}


let thumbTemplate = `<a class="thumbSlide"><img src="{{image}}" /></a>`

let fullTemplate = `<div class="instaSlide fade">
<div class="numbertext" >{{model.created_time}}</div>
<img src={{image}} style="width:90%; margin:auto; max-width:644px;">
<div class="caption-container">
<p>{{caption}}</p>
</div>
</div>`

function instaFeed(){
    let thumbOptions = jQuery.extend({}, options)
    thumbOptions.target = 'thumbnailFeed'
    thumbOptions.template = thumbTemplate
    thumbOptions.after = function(){ numberSlides()} 
    let thumbnailFeed = new Instafeed(thumbOptions);
    thumbnailFeed.run();

    let fullOptions = jQuery.extend({}, options)
    fullOptions.template = fullTemplate
    fullOptions.resolution = 'standard_resolution'
    fullOptions.target = 'fullInstaSlideShow'
    fullOptions.after = function(){ addDots()}
    var fullFeed = new Instafeed(fullOptions);
    fullFeed.run();
}



function numberSlides(){

    let w = $(window).width()
    let h = $(window).height()
    centerInsta(w,h);

    $(".thumbSlide").each(function( index ) {
        $(this).click(function(){
            openModal();
            currentInstaSlide(index)
        })
       
    })
}

function addDots(){
    $(".instaSlide").each(function( index ) {
        let html = `  <span class="dot instaDot" onclick="currentInstaSlide(${index})"></span>`
        $("#instaDots").append(html)
        let rawTime = $(this).find(".numbertext").html()
        $(this).find(".numbertext").html(formatDate(rawTime))
    })
}

function formatDate(d){
    d = parseInt(d)
    let date = new Date(d*1000);

		m = date.getMonth();
		d = date.getDate();
		y = date.getFullYear();

		let month_names = new Array ( );
		month_names[month_names.length] = "Jan";
		month_names[month_names.length] = "Feb";
		month_names[month_names.length] = "Mar";
		month_names[month_names.length] = "Apr";
		month_names[month_names.length] = "May";
		month_names[month_names.length] = "Jun";
		month_names[month_names.length] = "Jul";
		month_names[month_names.length] = "Aug";
		month_names[month_names.length] = "Sep";
		month_names[month_names.length] = "Oct";
		month_names[month_names.length] = "Nov";
		month_names[month_names.length] = "Dec";

		let thetime = month_names[m] + ' ' + d + ' ' + y;

		return thetime;

}

function plusInstaSlides(n) {
    showInstaSlides(instaSlideIndex += n);
}

function currentInstaSlide(n) {
    showInstaSlides(instaSlideIndex = n);
}

function showInstaSlides(n) {
    var i;
    var slides = document.getElementsByClassName("instaSlide");
    var dots = document.getElementsByClassName("instaDot");
    if (n > slides.length-1) { instaSlideIndex = 0 }
    if (n < 0) { instaSlideIndex = slides.length -1}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[instaSlideIndex].style.display = "block";
    dots[instaSlideIndex].className += " active";
}


function openModal() {
    document.getElementById('fullInstaSlideShowModal').style.display = "block";
    $("body").addClass("modal-open");
    location.hash = "#photos";
    let y = $(window).scrollTop();
    $(window).scrollTop(y-100);

  }
  
  function closeModal() {
    document.getElementById('fullInstaSlideShowModal').style.display = "none";
    $("body").removeClass("modal-open")
  }

  $("#fullInstaSlideShowModal").touchwipe({
    wipeLeft: function() { plusInstaSlides(-1) },
    wipeRight: function() { plusInstaSlides(1) },
    min_move_x: 20,
    min_move_y: 20,
    preventDefaultEvents: true
});