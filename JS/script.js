// Slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n)
{
    showSlides(slideIndex += n);
}

function currentSlide(n)
{
    showSlides(slideIndex = n);
}


function showSlides(n)
{
    var i;
    var slides = document.getElementsByClassName("taco-picture-slide");

    if(n > slides.length) {slideIndex = 1}
    if(n < 1) {slideIndex = slides.length}
    for(i=0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
//End of slider


// Map-Location of Restaurant
// API: AIzaSyCvyY8eACcw2Snc8zGuocwQn454ms3b3IU

function initMap()
{
    var location = {lat:19.432608  ,  lng:-99.133209};
    var map = new google.maps.Map(document.getElementById("map"),
    {
        center: location,
        zoom: 8
    });
    var marker = new google.maps.Marker({
        position:location,
        map:map
    });
}
