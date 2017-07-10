//window.onload = function(){


var btn = document.querySelector('.btn');
var a = document.querySelector('.a');
var w_height = window.innerHeight;
btn.classList.add('none');

window.onscroll = function () {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if(scrolled>100) {
    btn.classList.remove('none');
  } else {
    btn.classList.add('none');
  }
  a.innerHTML = scrolled;
}
//  
//  
//}
