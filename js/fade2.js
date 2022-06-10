window.addEventListener("DOMContentLoaded", function () {
  window.onscroll = function () {
    console.log(window.scrollY);
    if (window.scrollY > 200) {
      document.getElementById("s_f2").classList.add("active");
      document.getElementById("s_f3").classList.add("active");
      document.getElementById("s_f4").classList.add("active");
    } else {
      document.getElementById("s_f2").classList.remove("active");
      document.getElementById("s_f3").classList.remove("active");
      document.getElementById("s_f4").classList.remove("active");
    }
    if (window.scrollY > 500) {
      document.getElementById("s_f6").classList.add("active");
      document.getElementById("s_f7").classList.add("active");
      document.getElementById("s_f8").classList.add("active");
    } else {
      document.getElementById("s_f6").classList.remove("active");
      document.getElementById("s_f7").classList.remove("active");
      document.getElementById("s_f8").classList.remove("active");
    }
  };
});
