const toggleBtn = document.querySelector(".hamburger-menu");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".navigation-sidebar");

toggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");

  // Select all elements
  var allElements = document.querySelectorAll(".navigation-sidebar-option *");

  // Loop through each element and change text color to white
  allElements.forEach(function (element) {
    element.style.color = "white";
  });
  
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
