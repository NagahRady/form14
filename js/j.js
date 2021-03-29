
var firstnext = document.getElementById('firstnext'),
    secondnext = document.getElementById('secondnext'),
    firstback = document.getElementById('firstback'),
     secondback = document.getElementById('secondback'),
     first_form = document.getElementById('first_form'),
     second_form = document.getElementById('second_form'),
     third_form = document.getElementById('third_form'),
     progress_bar = document.getElementById("progress_bar");

    firstnext.onclick = function (e)
     {
     	e.preventDefault();

     	second_form.style.left ="0px";
     	first_form.style.left="400px";
     	third_form.style.left ="-400px"; 
        progress_bar.style.width = "66.6666%";  	

     }
         firstback.onclick = function (e)
     {
     	e.preventDefault();

     	second_form.style.left ="-400px";
     	first_form.style.left="0px";
     	third_form.style.left ="400px";
        third_form.style.opacity="0";
        first_form.style.opacity="1";
        progress_bar.style.width = "33.3333%";
     	
     	

     }
     secondnext.onclick = function (e)
     {
     	e.preventDefault();
        first_form.style.opacity ="0";
     	second_form.style.left ="400px";
     	first_form.style.left="-400px";
     	third_form.style.left ="0px";
        third_form.style.opacity ="1";
        progress_bar.style.width = "100%";

     	

     }

         secondback.onclick = function (e)
     {
     	e.preventDefault();

     	second_form.style.left ="0px";
     	first_form.style.left="400px";
     	third_form.style.left ="-400px";
        third_form.style.opacity="1";
        progress_bar.style.width = "66.6666%";
     	

     }