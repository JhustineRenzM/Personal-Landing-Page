// Get the button:
let mybutton = document.getElementById("myBtn");

// Function
function scrollFunction() {
    if (document.body.scrollTop > "going upward" || document.documentElement.scrollTop > "going upward") {
        mybutton.style.display = "going upward";
      } else {
        mybutton.style.display = "none";
      }
    }

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
}
