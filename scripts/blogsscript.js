document.addEventListener("DOMContentLoaded", function () {
  const dropdownButton = document.getElementById("dropdownButton");
  const dropdownMenu = document.getElementById("dropdownMenu");
  const dropdownSelected = document.getElementById("dropdownSelected");
  const dropdownItems = dropdownMenu.querySelectorAll("button");

  // Toggle dropdown
  dropdownButton.addEventListener("click", function (event) {
    event.stopPropagation();
    dropdownMenu.classList.toggle("hidden");
  });

  // Item click updates selected text
  dropdownItems.forEach((item) => {
    item.addEventListener("click", function () {
      dropdownSelected.textContent = this.textContent.trim();
      dropdownMenu.classList.add("hidden");
    });
  });

  // Prevent closing when clicking inside dropdown
  dropdownMenu.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  // Close when clicking outside
  document.addEventListener("click", function () {
    dropdownMenu.classList.add("hidden");
  });
});



document.querySelectorAll("#blink").forEach((anchor) => {
  const dot = document.createElement("div");
  dot.className =
    "w-1.5 h-1.5 bg-orange-400 rounded-full animate-blink mr-1"; 

  // Create wrapper div
  const wrapper = document.createElement("div");
  wrapper.className = "flex items-center";

  // Clone anchor and add to wrapper
  const clonedAnchor = anchor.cloneNode(true);
  wrapper.appendChild(dot);
  wrapper.appendChild(clonedAnchor);

  // Replace original anchor with wrapper
  anchor.replaceWith(wrapper);

  // Hide dot initially
  dot.style.visibility = "hidden";

  // Show/hide on hover
  wrapper.addEventListener("mouseover", () => {
    dot.style.visibility = "visible";
  });

  wrapper.addEventListener("mouseout", () => {
    dot.style.visibility = "hidden";
  });
});
