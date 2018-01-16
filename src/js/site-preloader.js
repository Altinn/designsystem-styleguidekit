function timeOutPreloaderAnimation() {
  $('.a-sg-content-preloader:first').fadeIn('slow');
  setTimeout(function() {
    $('.a-sg-content-preloader-status:first').fadeIn(350);
  }, 2000);
}

$('#sg-viewport').on('load', function() {
  var $mainBody = '#patternlab-body';
  $($mainBody).css({ overflow: 'hidden' });
  $('.a-sg-content-preloader-status:first').fadeOut();
  $('.a-sg-content-preloader:first').delay(350).fadeOut('slow');
  $($mainBody).delay(350).css({ overflow: 'visible' });
});

document.addEventListener('DOMContentLoaded', function() {
  timeOutPreloaderAnimation();
}, false);
 
