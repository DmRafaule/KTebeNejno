//let nextComment = document.getElementById('nextComment');
//let currentComment =  document.getElementById('comment'); 
//
//function GetNextComment(params) {
//   console.log("Click") 
//}
//
//
//nextComment.addEventListener("click", GetNextComment)
const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel__button--right");
const slideWidth = slides[0].getBoundingClientRect().width;



const setSlidePosition = (slide, index) => {
   slide.style.left = slideWidth * index + "px";
};

slides.forEach(setSlidePosition);


// Slide to new comment
nextButton.addEventListener("click", e => {
   var currentSlide = track.querySelector(".current-slide");
   var nextSlide = currentSlide.nextElementSibling; 
   if (nextSlide == null){
      nextSlide = track.children[0]
      console.log(track.children[0])
   }
   const amountToMove = nextSlide.style.left;
   track.style.transform = "translateX(-" + amountToMove + ")";
   currentSlide.classList.remove("current-slide");
   nextSlide.classList.add("current-slide");
})