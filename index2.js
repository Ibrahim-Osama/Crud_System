var demo1 = document.getElementById("demo");

demo1.addEventListener("click", change );


function change()
{
   document.body.style.direction = "rtl";
  
    demo1.innerHTML = "English";
    demo1.addEventListener("click", changel );
    

function changel()
{
    document.body.style.direction = "ltr";
    demo1.innerHTML = "عربي";
}
}
console.log(arr);