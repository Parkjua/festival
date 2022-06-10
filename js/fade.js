window.addEventListener("DOMContentLoaded", function () {
  window.onscroll = function () {
    console.log(window.scrollY);
    if (window.scrollY > 450) {
      document.getElementById("pro_1").classList.add("active");
    } else {
      document.getElementById("pro_1").classList.remove("active");
    }
    if (window.scrollY > 650) {
      document.getElementById("pro_2").classList.add("active");
    } else {
      document.getElementById("pro_2").classList.remove("active");
    }
    if (window.scrollY > 850) {
      document.getElementById("pro_3").classList.add("active");
    } else {
      document.getElementById("pro_3").classList.remove("active");
    }
    if (window.scrollY > 1050) {
      document.getElementById("pro_4").classList.add("active");
    } else {
      document.getElementById("pro_4").classList.remove("active");
    }
  };
});
