$(document).ready(function(){
$('#comments_submit_btn_js').click(function(){
  var commentValue=$('#Text_area_input').val();
  var hiddenDiv=$('.row.hidden');
  console.log(commentValue);
  var newComment=hiddenDiv.clone();
  console.log(newComment);
  hiddenDiv.before(newComment)
  newComment.removeClass("hidden");
  newComment.find('textarea').val(commentValue);
$("#Text_area_input").val(" ");
});

});
