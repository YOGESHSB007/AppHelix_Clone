document.addEventListener("DOMContentLoaded", function () {
  const dropdownButton = document.getElementById("dropdownButton");
  const dropdownMenu = document.getElementById("dropdownMenu");

  // Toggle dropdown on button click
  dropdownButton.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent click from bubbling up
    dropdownMenu.classList.toggle("hidden");
  });

  // Keep dropdown open when clicking inside
  dropdownMenu.addEventListener("click", function (event) {
    event.stopPropagation(); 
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function () {
    if (!dropdownMenu.classList.contains("hidden")) {
      dropdownMenu.classList.add("hidden");
    }
  });
});
