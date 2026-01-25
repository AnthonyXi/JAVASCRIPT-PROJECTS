function countdown() { // Countdown Timer
    var seconds = document.getElementById("seconds").value;

    function tick() {  // Decrease the seconds and update the display
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000); // Call tick() every second
        if (seconds == -1) {
            alert("Time's up!"); // Alert when countdown reaches zero
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick(); // Start the countdown
}
let slideIndex = 1; // Slideshow
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) { // Display the slides
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 } // Loop back to first slide
    if (n < 1) { slideIndex = slides.length } // Loop to last slide
    for (i = 0; i < slides.length; i++) { // Hide all slides
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");// Remove "active" class from dots
    }
    slides[slideIndex - 1].style.display = "block"; // Show the current slide
    dots[slideIndex - 1].className += " active";
}