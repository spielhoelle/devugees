$('#ajax_partial_button').on('click', function () {
  $("#div1").load("demo_test.txt", function(responseTxt, statusTxt, xhr){
    if(statusTxt == "success")
      alert("External content loaded successfully!");
    if(statusTxt == "error")
      alert("Error: " + xhr.status + ": " + xhr.statusText);
  });
});



var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
$('#ajax_button').on('click', function () {
  var that = $(this);
  $.getJSON( flickerAPI, {
    tags: "Pancakes",
    tagmode: "any",
    format: "json"
  })
    .done(function( data ) {
      that.hide();
      $.each( data.items, function( i, item ) {
        $('#images').append('<div class="col-sm-3"><img class="img-responsive img-thumbnail" src="' + item.media.m + '"/></div>')
        if ( i === 10 ) {
          return false;
        }
      });
    })
    .fail(function( data ) {
      that.hide();
      $('#flashes').text('Error');
    });
});
