$(document).ready(function () {
  $(".more_btn").click(function () {
    $(this).toggleClass("active");
    $("#gnb").toggleClass("active");
  });
});
