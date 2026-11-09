// SU Hotel: Bootstrap handles the carousel, navbar and FAQ accordion.
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("#mainNav .nav-link");
  const navCollapse = document.getElementById("mainNav");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.innerWidth < 992 && navCollapse.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
      }
    });
  });
});
