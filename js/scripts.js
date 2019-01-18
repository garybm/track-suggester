$(document).ready(function() {
  $("form#survey").submit(function(event) {
    var location = parseInt$('select#location').val();
    var company = parseInt$("select#company").val();
    var teams = parseInt$("select#teams").val();
    var projects = parseInt$("select#projects").val();
    var words = parseInt$("select#words").val();
    var result = location + company + teams + projects + words;

    if (result > 5) {
    $('#result1').show();
    $('#result2').hide();
    $('#result3').hide();

    event.preventDefault();
  });
});
