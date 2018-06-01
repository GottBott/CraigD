var titleSlideIndex = 1;

function plusTitleSlides(n) {
    showTitleSlides(titleSlideIndex += n);
}

function currentTitleSlide(n) {
    showTitleSlides(titleSlideIndex = n);
}

function showTitleSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { titleSlideIndex = 1 }
    if (n < 1) { titleSlideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[titleSlideIndex - 1].style.display = "block";
    dots[titleSlideIndex - 1].className += " active";
}

$("#home").touchwipe({
    wipeLeft: function()  { plusTitleSlides(-1) },
    wipeRight: function() { plusTitleSlides(1) },
    min_move_x: 20,
    min_move_y: 20,
    preventDefaultEvents: true
});