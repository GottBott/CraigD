
var instaSlideIndex = 0;

// TODO discuss tags and change instagram 
let options = {
    clientId: 'bed1cc4277c84daca3d28897c78c29a5',
    accessToken: '253757049.bed1cc4.2992b18b8a814342a4ff03d8166b6d56',
    get: 'user',
    userId:'253757049',
    // get:'tagged',
    // tagName:'arcteryx',

}


let thumbTemplate = `<a class="thumbSlide"><img src="{{image}}" /></a>`

let fullTemplate = `<div class="instaSlide fade">
<div class="numbertext" >{{model.created_time}}</div>
<img src={{image}} style="margin: auto; max-width: 90%; max-height: 75vh;">
<!--<div class="caption-container">
<p>{{caption}}</p>
</div> -->
</div>`

function instaFeed(limit){
    let thumbOptions = jQuery.extend({}, options)
    thumbOptions.limit = limit ? limit : 16
    thumbOptions.target = 'thumbnailFeed'
    thumbOptions.template = thumbTemplate
    thumbOptions.after = function(){ numberSlides()} 
    let thumbnailFeed = new Instafeed(thumbOptions);
    thumbnailFeed.run();

    let fullOptions = jQuery.extend({}, options)
    fullOptions.limit = limit ? limit : 16
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

    $("#fullInstaSlideShow img, #fullInstaSlideShow p").on("swiped-left", function(){
        plusInstaSlides(1)
    })
    
    $("#fullInstaSlideShow img, #fullInstaSlideShow p").on("swiped-right", function(){
        plusInstaSlides(-1)
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
    $(".wrapper").addClass("modal-open");
    setTimeout(function(){ $(".nav-link").removeClass("active") }, 100);

  }
  
  function closeModal(scrollFlag) {
    document.getElementById('fullInstaSlideShowModal').style.display = "none";
    $(".wrapper").removeClass("modal-open")
    if(!scrollFlag){
        location.hash = "#photos";
        let y = $(window).scrollTop();
        $(window).scrollTop(y-100);
    }
    
  }

