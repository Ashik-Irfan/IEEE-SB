
document.querySelector('.hamburger').addEventListener('click', (e)=>{
    console.log("clicked!");
      document.querySelector('.navRight-mobile').classList.toggle('hidden-nav')
      let i=0;
      document.querySelectorAll('.hamburger span').forEach((span)=>{  
        span.classList.toggle(`close-${++i}`);
      })
    })
    
    var modal = document.getElementById("myModal");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if(document.body.scrollTop > 120 || document.documentElement.scrollTop > 120){
        document.querySelector(".nav").style.height = "12vh";
        document.querySelector(".nav").style.background = "#fff";
        var ele = document.getElementsByClassName('n-btn');
        for (var i = 0; i < ele.length; i++ ) {
          ele[i].style.color = "#07294D";
        }
        document.getElementById("nav-logo").src = "./images/logo.jpg";
      } else {
        document.querySelector(".nav").style.height = "10vh";
        document.querySelector(".nav").style.background = "transparent";
        var ele = document.getElementsByClassName('n-btn');
        for (var i = 0; i < ele.length; i++ ) {
          ele[i].style.color = "#fff";
        }
        document.getElementById("nav-logo").src = "./images/ieee bg white.png";
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
    
    function animateValue(obj, start, end, duration) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
    
    window.addEventListener('scroll', function(){
      var place = document.documentElement.scrollTop;
      var alertOn = document.getElementById('anotherElement').offsetTop;
      if(place > alertOn-500){
        const obj1 = document.getElementById("value1");
        animateValue(obj1, 0, 210, 1800);
    
        const obj2 = document.getElementById("value2");
        animateValue(obj2, 0, 9, 1800);
    
        const obj3 = document.getElementById("value3");
        animateValue(obj3, 0, 34, 1800);
    
        const obj4 = document.getElementById("value4");
        animateValue(obj4, 0, 120, 1800);
        this.removeEventListener('scroll', arguments.callee, false);
      }
    });
    
      