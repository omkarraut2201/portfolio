
// typewriter start 
let name1 = document.getElementById("typedtext");
let text = "Fullstack Developer";
// console.log(typeof text);
// let len = text.length;
// console.log(len);

let i = 0;

setInterval(typeHere, 200);

function typeHere() {
   if (i == text.length) {
      name1.innerHTML = "";
      i = 0;
   } 
    name1.innerHTML += text[i];
    //    console.log(i);
   i++;
  

}
// typewriter end


// data aos initialize
{/* <script>
  AOS.init();
</script> */}

document.addEventListener("DOMContentLoaded", function() {
   AOS.init({
     duration: 1000,
     easing: 'ease',  
   });
 });