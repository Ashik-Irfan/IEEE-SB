document.querySelector('.hamburger').addEventListener('click', (e)=>{
console.log("clicked!");
  document.querySelector('.navRight-mobile').classList.toggle('hidden-nav')
  let i=0;
  document.querySelectorAll('.hamburger span').forEach((span)=>{  
    span.classList.toggle(`close-${++i}`);
  })
})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if(document.body.scrollTop > 120 || document.documentElement.scrollTop > 120){
    document.querySelector(".nav").style.height = "12vh";
    // document.querySelector(".nav").style.background = "#fff";
  } else {
    document.querySelector(".nav").style.height = "10vh";
    // document.querySelector(".nav").style.background = "transparent";

  }
  if(document.body.scrollTop > 120 || document.documentElement.scrollTop > 120){
    document.querySelector(".top").classList.add('show-top');
  } else {
    document.querySelector(".top").classList.remove('show-top');
  }
} 

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}