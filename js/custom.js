
// TODO: Add smoothscroll
//    var scroll = new SmoothScroll('a[href*="#"]', {
//        speed: 500,
//        speedAsDuration: true
//    });

function setDetails(open) {
    var i, a = document.getElementsByTagName('details');
    for (i in a) {
        a[i].open = open;
    }
}

// $('.ui.sticky')
//   .sticky({
//     context: '#'
//   })
// ;

$(document).ready(function(){
     $('.ui.sticky')
  .sticky({
    context: '#example1'
  });

 })
