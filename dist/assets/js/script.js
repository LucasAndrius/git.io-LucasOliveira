
function openMenu() {
    let menuSelected = document.querySelector('.menu-list');
    if (menuSelected.classList.contains('opacity')==true){
        menuSelected.classList.remove('opacity');
    } else {
        menuSelected.classList.add('opacity');
    }
}




function scrollTo(element){
    document.querySelector(element).scrollIntoView({behavior:'smooth'});
}


document.querySelector('#toUp').addEventListener('click', function(event){
    event.preventDefault();
    scrollTo('#receiverToHome');
})

document.querySelector('#menuCurrent').addEventListener('click', function(event){
    event.preventDefault();
    scrollTo('#receiverToHome');
})


document.querySelector('#skills').addEventListener('click', function(event){
    event.preventDefault();
    scrollTo('#receiverSkills');
})
document.querySelector('#projects').addEventListener('click', function(event){
    event.preventDefault();
    scrollTo('#receiverProjects');
})





//accordion

const labels = document.querySelectorAll(".accordion-item__label");
const tabs = document.querySelectorAll(".accordion-tab");

function toggleShow()  {
    const target = this;
    const item = target.classList.contains("accordion-tab")
        ? target
        : target.parentElement;
    const group = item.dataset.actabGroup;
    const id = item.dataset.actabId;

    tabs.forEach(function(tab) {
        if (tab.dataset.actabGroup === group) {
            if (tab.dataset.actabId === id) {
                tab.classList.add("accordion-active");
            } else {
                tab.classList.remove("accordion-active");
            }
        }
    });

    labels.forEach(function(label) {
        const tabItem = label.parentElement;

        if (tabItem.dataset.actabGroup === group){
            if (tabItem.dataset.actabId === id){
                tabItem.classList.add("accordion-active");
            } else {
                tabItem.classList.remove("accordion-active");
            }
        }
    });
}

labels.forEach(function(label){
    label.addEventListener("click", toggleShow);
});

tabs.forEach(function(tab){
    tab.addEventListener("click", toggleShow);
});


//*carousel

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }