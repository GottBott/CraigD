var titleSlideIndex = 1;
var bgPlaying = true



function playSlideShow() {
    setTimeout(() => {
        if (bgPlaying) {
            showTitleSlides(titleSlideIndex += 1);
            playSlideShow()
        }
    }, 12000);
}

function plusTitleSlides(n) {
    bgPlaying = false
    showTitleSlides(titleSlideIndex += n);
}

function currentTitleSlide(n) {
    showTitleSlides(titleSlideIndex = n);
}

function showTitleSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > 4) { titleSlideIndex = 1 }
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


$(".mySlides").on("swiped-left", function () {
    plusTitleSlides(1)
})

$(".mySlides").on("swiped-right", function () {
    plusTitleSlides(-1)
})

playSlideShow()