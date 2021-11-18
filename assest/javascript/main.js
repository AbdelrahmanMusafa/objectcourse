//slider testimonial
var swiper = new Swiper(".slider-testi", {
    slidesPerView: 1,
    spaceBetween: 20,
loop :true,
grabCursor:true,
centeredSlides:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
       
      },
      768: {
        slidesPerView: 3,
      
      },
      991: {
        slidesPerView: 3,
      
      },
    },
  });

  //input valition
function valition(){
  var form =document.getElementById("form");
  var inp =document.getElementById("inputvalue").value;
  var erorMesg =document.getElementById("error");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if(inp.match(pattern)){
erorMesg.innerHTML="Your Email Address is valid";
  }
  else if(inp.length == 0){
erorMesg.innerHTML="somthing went wrong";
  }
  else{
    erorMesg.innerHTML="Please enter a valid Email address";
  }

}

//PRALLEX ANIMATION 
document.addEventListener("mousemove",parallax)
function parallax(e){
    document.querySelectorAll(".object").forEach(function(move){
      var movingvalue= move.getAttribute("data-value");
      var x = e.clientX / movingvalue;
      var Y = e.clientY / movingvalue;
move.style.transform= "translateX("+x+"px) translateY("+Y+ "px)";
    })
}
//button to top
let btntop = document.getElementById("btntop")
window.onscroll= function(){
  if(document.body.scrollTop >20 || document.documentElement.scrollTop  >20){
btntop.classList.add('show')
  }
  else{
btntop.classList.remove('show')
  }
}
btntop.addEventListener("click",function(){
})
btntop.addEventListener('click',toTP)
function toTP(){
  window.scrollTo({top: 0, behavior: 'smooth'});
}

//navbar
let navul= document.querySelector(".navbar-nav")
let closrbtn = document.querySelector(".closesm")
let btnnav = document.querySelector(".btnnav")

closrbtn.addEventListener('click',hidenav)
function hidenav(){
  navul.classList.add('hide')
  navul.classList.remove('sh')

}
btnnav.addEventListener('click',show)
function show(){
  navul.classList.add('sh')
  navul.classList.remove('hide')

}
let btndrop = document.querySelectorAll(".nav-link"); 
btndrop.forEach(function(el) { 
    el.addEventListener("click", (e) => { 
        let showBox = e.currentTarget.nextElementSibling;
        showBox.classList.toggle("show"); 
    }); 
});


