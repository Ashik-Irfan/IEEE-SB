var exist = document.querySelector("#card-grid")

var events=[
    {"Yessit" :  "./err.html"},
    {"Warros'21" : "./err.html"},
    {"Quizz O Grand" :"https://docs.google.com/document/d/1iOzZmMgX9CyRP-2od_qjsZaDDa0ZECL9rbmrdPTCPoE/edit?usp=sharing "},
    {"Technofest" :  "https://docs.google.com/document/d/1l0Wk0SwrZHJey4Tmnmc-czfjW5s9ep16gdqyixaj5Ro/edit?usp=sharing "},
    {"Mind Hack" : "./err.html"} ,
    {"Kalaisaral" : "https://docs.google.com/document/d/12V4UYW1PVQfSgGFChTcBxbGAoOgGv14zgqCDkAzpszU/edit?usp=sharing "} ,  
    {"Dynamic Programming" : "./err.html "} ,
    {"Cyber Security Essentials" : "https://docs.google.com/document/d/1BKcU3dM_GnNrM6L1F4geFgb6eZeem6Q1plYRj5bKLq8/edit?usp=sharing"},
    {"Design and Analysis of Robotic Arm for Industry 4.0" : "https://docs.google.com/document/d/1_0DitqQ0CifY3GSqIGfrwcRvCqUHrhGT/edit?usp=sharing&ouid=117021605503438718146&rtpof=true&sd=true"},
    {"ENtrepreneurship Devlopment" : "https://docs.google.com/document/d/1GdV7Hbq0hmBoLCy3P5LzOBa9K-2Ss2xg/edit?usp=sharing&ouid=117021605503438718146&rtpof=true&sd=true"},
    {"Exploring IEEE" : "https://docs.google.com/document/d/18EHwoPj_-Al9PcSuZY7rZlRDTWjFtkZgxNPG3UBkz68/edit?usp=sharing"},
    {"ForBy Series Java Fundamentals" : "https://docs.google.com/document/d/1-Dp-Oyuyoq7wACp7lLG7sllne6Xt1Kp4/edit?usp=sharing&ouid=117021605503438718146&rtpof=true&sd=true"},
    {"ForBy Series Shutter" : "https://docs.google.com/document/d/1T-GM0aqoASrKTuZhOGt19ILIAlc867nP/edit?usp=share_link&ouid=117021605503438718146&rtpof=true&sd=true"},
    {"ForBy Series Blender3D" : "https://docs.google.com/document/d/12vOmwvVA8J3E5t2uXFPC4soIjKtGZ2Wp/edit?usp=sharing&ouid=117021605503438718146&rtpof=true&sd=true"},
    {"ForBy Series Build Yourself – Leadership Talk" : "https://docs.google.com/document/d/1PBAFkbNh4jtAoFTUY1c_KnYRxMEprCkn/edit?usp=sharing&ouid=117021605503438718146&rtpof=true&sd=true"},
    {"ForBy Series Fundamentals of Cyber Security" :  "https://docs.google.com/document/d/10OBaQhWLU4pNpIO0n97-IYpfe63PO4lt/edit?usp=sharing&ouid=117021605503438718146&rtpof=true&sd=true "},
    {"ForBy Series Machine Learning Basics" : "https://docs.google.com/document/d/1svOLxOrHBL67-G_pd_mrm-guVzwCm_3f/edit?usp=sharing&ouid=117021605503438718146&rtpof=true&sd=true "} ,
    {"ForBy Series Networking OSI Model" : "https://docs.google.com/document/d/1t5S3F4q9d2OeYFQ3TzAqFJHcXb9N71nL/edit?usp=sharing&ouid=117021605503438718146&rtpof=true&sd=true "} ,
    {"ForBy Series Predective Learning Using Sci-Kit" : "https://docs.google.com/document/d/1GBlXmTd03RfUOx-P1mZrmHgzYcgD0SKZ/edit?usp=sharing&ouid=117021605503438718146&rtpof=true&sd=true "} ,
    {"ICCPC'22" : " https://docs.google.com/document/d/1HWg4DX2v17KcyGCJyYm5_LLgLQEyI1Vc/edit?usp=sharing&ouid=117021605503438718146&rtpof=true&sd=true"} ,
    {"IEEE Awareness Talk" : " https://docs.google.com/document/d/17t8r7a14JmLpNAbF5HpjixfZ4X187FQQ/edit?usp=sharing&ouid=117021605503438718146&rtpof=true&sd=true"} ,
    {"IEEE Day" : " https://docs.google.com/document/d/1eGkV9iC0UDSc38Z4LiNw-aRQX05vUo1s/edit?usp=sharing&ouid=117021605503438718146&rtpof=true&sd=true"} ,
    {"IEEE DS Series" : "https://docs.google.com/document/d/1jyIj9WoFxqltXhbjR_QSUR_z9tzA24rG/edit?usp=sharing&ouid=117021605503438718146&rtpof=true&sd=true " },
    {"IEEE Fiveathon" : "https://docs.google.com/document/d/1A3f_VqosIvHZXU_uuEDwylKUvHym1mom/edit?usp=sharing&ouid=117021605503438718146&rtpof=true&sd=true "} ,
    {"IEEE Sight HAC Project" : "https://docs.google.com/document/d/1G20T_yjsTCwipht3_4dEW0G84aqmCp8d/edit?usp=sharing&ouid=117021605503438718146&rtpof=true&sd=true "} ,
    {"IEEE Sight Visit" : "https://docs.google.com/document/d/1qeF1MFEd096HJ2FslCEJcLIfoYJmBttp/edit?usp=sharing&ouid=117021605503438718146&rtpof=true&sd=true "} ,
    {"IEEE Spectral Reading" : " https://docs.google.com/document/d/1PE8EmfkI5Vh-OXHGOeawqdgDbR4E9rO_4vFZMWn5X94/edit?usp=sharing "} ,
    {"IEEE SB Inaugration" : "https://docs.google.com/document/d/178xyQ72YyWjNWOkWLrzWg0fnXqCX7e67RDgvhgY_h_8/edit?usp=sharing "} ,
    {"IEEE Xtreme" : "https://docs.google.com/document/d/1mie1oX0Djh9kI7cbSDuQPs-q9vtZb4pb/edit?usp=sharing&ouid=117021605503438718146&rtpof=true&sd=true "} ,
    {"Insights of IEEE" : " https://docs.google.com/document/d/1mie1oX0Djh9kI7cbSDuQPs-q9vtZb4pb/edit?usp=sharing&ouid=117021605503438718146&rtpof=true&sd=true"} ,
    {"Tech Siesta" : "https://docs.google.com/document/d/18_tYQ4oK5Bnt5x97PQl1dXpv6EEbMcyc/edit?usp=share_link&ouid=117021605503438718146&rtpof=true&sd=true "} ,
    {"Webinar on Big Data & IoT" : " https://docs.google.com/document/d/1l0Wk0SwrZHJey4Tmnmc-czfjW5s9ep16gdqyixaj5Ro/edit?usp=sharing"} ,
  ]  

for(var i=0 ; i<events.length ;i++)
{

for (let event of Object.keys(events[i])) {
    // Create a new element
    const h = document.createElement("a");
    
    const newElement = document.createElement('a');
    newElement.classList.add("cards")

    // Set the text content of the new element to the object properties
    h.textContent = event;
    // Add the new class to the new element
    newElement.href = (events[i][event]);
    h.target = "_blank";
    h.classList.add("card-content")
  
    newElement.appendChild(h);

    
    
    // Add the new element to the main element
    exist.appendChild(newElement);
}
}

console.log(location.pathname)

