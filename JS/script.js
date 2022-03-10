//Menu
const menu = 
[{
    id: 1,
    title: "Tacos al pastor",
    category: "Tacos",
    price: "15.99",
    img: "/IMG/tacos-al-pastor.jpg"
},
{
    id: 2,
    title: "Tacos de camaron",
    category: "Tacos",
    price: "12.99",
    img: "/IMG/tacos-de-camaron.jpg"
},
{
    id: 3,
    title: "Torta de bistec",
    category: "Tortas",
    price: "15.99",
    img: "/IMG/torta-de-bistec.jpg"
},
{
    id: 4,
    title: "Torta de jamon",
    category: "Tortas",
    price: "15.99",
    img: "/IMG/torta-de-jamon.jpg"
},
{
    id: 5,
    title: "Cocacola",
    category: "Drinks",
    price: "4.99",
    img: "/IMG/cocacola.jpg"
},
{
    id: 6,
    title: "Pepsi",
    category: "Drinks",
    price: "4.99",
    img: "/IMG/pepsi.jpg"
},
];
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


//Menu functions

const menuButtons = document.querySelector(".menu-choices-btns");
const foodSection = document.querySelector(".food-section");

//load the items
window.addEventListener('DOMContentLoaded', function()
{
    displayMenuItems(menu);
    displayMenuButtons();
})

function displayMenuItems(menuItems)
{
    let displayMenu = menuItems.map(function(item)
    {
        return ` <div class="food-section">
        <img src="${item.img}" alt="menu item">
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price"> ${item.price}</h4>
            </header>
        </div>
    </div>`
    });

    displayMenu = displayMenu.join("");
    foodSection.innerHTML = displayMenu;
}