window.addEventListener("scroll", function () {
    var backToTopButton = document.getElementById("back-to-top");
    if (window.pageYOffset > 200 && window.pageYOffset !== 0) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });
  
  document.getElementById("back-to-top").addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });