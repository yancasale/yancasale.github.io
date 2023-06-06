window.onscroll = function () {
  myFunction()
};

let navbar = document.getElementById("stickytop");
let sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    navbar.classList.add("redbg")
  } else {
    navbar.classList.remove("sticky")
    navbar.classList.remove("redbg")
  }
}

