
var moveSlider = function(){

  var slider = document.getElementById("slider");
  var sliderWidth = slider.offsetWidth;
  var slideList = document.getElementById("sliderWrapper");
  var count = 1;
  var items = slideList.querySelectorAll("li").length;
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");

  window.addEventListener('resize', function(){
    slliderWidth = slider.offsetWidth;
  });

  var prevSlide = function(){
    if(count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * slliderWidth + "px";
      count++;
    } else if (count = 1){
      count = item - 1;
      slideList.style.left = "-" + count * slliderWidth + "px"
      count++;
    }
  };
  var nextSlide = function() {
   if(count < items) {
     slideList.style.left = "-" + count * sliderWidth + "px";
     count++;
   }
   else if(count = items) {
     slideList.style.left = "0px";
     count = 1;
   }
 };

 next.addEventListener("click", function() {
   nextSlide();
 });

 prev.addEventListener("click", function() {
   prevSlider();
 });

 setInterval(function() {
   nextSlide()
 }, 3000);

};

window.onload = function() {
 moveSlider();
}
