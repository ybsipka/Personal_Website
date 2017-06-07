
$(document).ready(function(){
  //var object = document.getElementbyId('pic1');
  //object.style.transform="rotate(7deg)";
  /*var options = [
       {selector: '#courses-t', offset: 600, callback: function(el) {
         Materialize.toast("courses should pop up!", 1500 );
         Materialize.showStaggeredList('#courses-t');
       } },
       {selector: '#objective-t', offset: 100, callback: function(el) {
         Materialize.toast("objective should pop up!", 1500 );
         Materialize.showStaggeredList('#objective-t');
       } },
       {selector: '#skills-t', offset: 1500, callback: function(el) {
         Materialize.toast("skills should pop up!", 1500 );
         Materialize.showStaggeredList('#skills-t');
       } }
     ];
     Materialize.scrollFire(options);
     */
       			// Activate the side menu
            $(".button-collapse").sideNav();

              // Show sideNav
              $('.button-collapse').sideNav('show');
              // Hide sideNav
              $('.button-collapse').sideNav('hide');
              // Destroy sideNav
              $('.button-collapse').sideNav('destroy');

              $('.scrollspy').scrollSpy({
                scrollOffset: 0
              }
              );
          $('.slider').slider({height: 400});
          //$('ul.tabs').tabs({swipeable: true}); //causes problems with the images
          //$('ul.tabs').tabs({responsiveThreshold: 200});
});
