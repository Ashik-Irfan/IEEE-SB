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

