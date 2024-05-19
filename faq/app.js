var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
















const observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
      console.log(entry)
      if(entry.isIntersecting) {
          entry.target.classList.add('show')
      }else{ entry.target.classList.remove('show');}

  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


// put this code under the "if" statement if you want animation to loop

//else{ entry.target.classList.remove('show');}




/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
var x = document.getElementById("myLinks");
if (x.style.display === "block") {
  x.style.display = "none";
} else {
  x.style.display = "block";
}
}