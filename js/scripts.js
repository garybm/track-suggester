$(document).ready(function() {
  $("form#survey").submit(function(event) {
    var location = parseInt($("#location").val());
    var company = parseInt($("#company").val());
    var teams = parseInt($("#teams").val());
    var projects = parseInt($("#projects").val());
    var words = parseInt($("#words").val());
    var result = location + company + teams + projects + words;

    if (result < 9) {
    $('#result1').show();
    $('#result2').hide();
    $('#result3').hide();
  } else if (result > 8) {
    $('#result1').hide();
    $('#result2').show();
    $('#result3').hide();
  } else {
    $('#result1').hide();
    $('#result2').hide();
    $('#result3').show();
  }
    $("#location").val("");
    $("#company").val("");
    $("#teams").val("");
    $("#projects").val("");
    $("#words").val("");

    $(".name").text(name);
  $("#confirm").show();
  event.preventDefault();
  });
});
