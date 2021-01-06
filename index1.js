AOS.init()
window.onbeforeunload = function() {window.scrollTo(0, 0)};

window.onscroll = function() {scrollFunction2()}
    function myFunction(x) {
        x.classList.toggle("change");
        var topnav = document.getElementById("topnav")
        if (topnav.style.height == "60px") {
            topnav.style.height = "395px";
        }
        else {
            topnav.style.height = "60px";

        }
    }

    window.onscroll = function() {scrollFunction()};
document.body.style.background = "#320661"
function scrollFunction() {
  if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
    document.body.style.background = 'white'
    document.body.style.opacity = '1'
    document.getElementById('bar1').style.backgroundColor = 'Black'
    document.getElementById('bar2').style.backgroundColor = 'Black'
    document.getElementById('bar3').style.backgroundColor = 'Black'
    document.a.style.color = 'Black'
}
  else if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.body.style.background = 'black';
    document.body.style.opacity = '1';
    document.getElementById('bar1').style.backgroundColor = 'White'
    document.getElementById('bar2').style.backgroundColor = 'White'
    document.getElementById('bar3').style.backgroundColor = 'White'


}

  else if (document.body.scrollTop > 150   || document.documentElement.scrollTop > 150) {
    document.getElementById("topnav").style.width = "160px";
    document.getElementById("hamburger").style.marginLeft = "15px";
    document.getElementById("topnav").style.margin = "20px 0px";
    document.getElementById("horizontal_menu").style.display = "none";

  } else {
    document.getElementById("topnav").style.width = "100%";
    document.getElementById("hamburger").style.marginLeft = "-100px";
    document.getElementById("topnav").style.height = "60px";
    document.getElementById("topnav").style.margin = "20px 10px";
    document.getElementById("horizontal_menu").style.display = "block";
    document.body.style.background = "#320661"
  }
}

window.onload = function() {windowCollapse()};
window.onresize = function() {windowCollapse()};
function windowCollapse() {
  if (window.innerWidth < 1440) {
    document.getElementById("topnav").style.width = "190px";
    document.getElementById("hamburger").style.marginLeft = "15px";
    document.getElementById("topnav").style.margin = "20px 0px";
    document.getElementById("horizontal_menu").style.display = "none";
  }
  else {
    document.getElementById("topnav").style.width = "100%";
    document.getElementById("hamburger").style.marginLeft = "-100px"
    document.getElementById("topnav").style.height = "60px";
    document.getElementById("topnav").style.margin = "20px 10px";
    document.getElementById("horizontal_menu").style.display = "block";

  }
}
