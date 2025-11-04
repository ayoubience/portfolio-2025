function openModal() {
  document.getElementById("myModal").style.display = "block";
  document.body.style.overflow = "hidden"; // ADDED THIS LINE
  document.body.style.height = "100%"; // ADDED THIS LINE
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
  document.body.style.overflow = "auto"; // ADDED THIS LINE
  document.body.style.height = "auto"; // ADDED THIS LINE
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
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

//repeating for a second modal on the same page, duplicate and adjust as needed
//ensure you reflect the ID AND CLASS NAMES in the HTML you're working in after duplicating code

//2nd modal set on the same page
function openModalTwo() {
  document.getElementById("myModalTwo").style.display = "block";
  document.body.style.overflow = "hidden"; // ADDED THIS LINE
  document.body.style.height = "100%"; // ADDED THIS LINE
}
function closeModalTwo() {
  document.getElementById("myModalTwo").style.display = "none";
  document.body.style.overflow = "auto"; // ADDED THIS LINE
  document.body.style.height = "auto"; // ADDED THIS LINE
}
function currentSlideTwo(n) {
  showSlides(slideIndex = n);
}
function showSlidesTwo(n) {
  var slides = document.getElementsByClassName("mySlidesTwo");
}

//3rd modal set on the same page
function openModalThree() {
  document.getElementById("myModalThree").style.display = "block";
  document.body.style.overflow = "hidden"; // ADDED THIS LINE
  document.body.style.height = "100%"; // ADDED THIS LINE
}
function closeModalThree() {
  document.getElementById("myModalThree").style.display = "none";
  document.body.style.overflow = "auto"; // ADDED THIS LINE
  document.body.style.height = "auto"; // ADDED THIS LINE
}
function currentSlideThree(n) {
  showSlides(slideIndex = n);
}
function showSlidesThree(n) {
  var slides = document.getElementsByClassName("mySlidesThree");
}