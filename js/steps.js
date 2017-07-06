$(document).ready(function() {
  console.log('Java Loaded');
  var width = 0;
  var button = $('.step button');
  var progressBar = $('.progress-bar');
  button.on('click', function() {
    var nextStep = $(this).closest('.step').next('.step');
    nextStep.fadeIn('slow');
    nextStep.removeClass('hidden');
    $(this).fadeOut('slow',function() {
      $(this).remove();
    });
    if (width < 100) {
      width += 25;
      progressBar.css('width', width + '%');
      progressBar.text(width + '%')
    }
  });
});
