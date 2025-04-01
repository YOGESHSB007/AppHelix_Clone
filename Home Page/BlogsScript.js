let nav = document.getElementById("clickToOpen");
let sidebar = document.getElementById("hiddensidebar");
let closeBtn = document.getElementById("close");
// let overlay = document.getElementById('overlay');

nav.addEventListener("click", () => {
  sidebar.classList.remove("-translate-x-520");
  sidebar.classList.add("translate-x-0");
  // overlay.classList.add('block');
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("translate-x-0");
  sidebar.classList.add("-translate-x-520");
  // overlay.classList.add('hidden');
});

document.querySelectorAll("#blink").forEach((anchor) => {
    // Create the blinking dot dynamically for each link
    const dot = document.createElement("div");
    dot.className =
      "w-1.5 h-1.5 bg-orange-400 rounded-full animate-blink mr-1 hidden"; // Initially hidden
  
    // Wrap anchor inside a flex div
    const wrapper = document.createElement("div");
    wrapper.className = "flex items-center";
    wrapper.appendChild(dot);
    wrapper.appendChild(anchor.cloneNode(true)); // Clone to avoid moving existing anchor
  
    // Replace anchor with wrapper
    anchor.replaceWith(wrapper);
  
    // Event Listeners
    wrapper.addEventListener("mouseover", () => {
      // wrapper.querySelector("a").classList.add("text-white");
      dot.classList.remove("hidden");
    });
  
    wrapper.addEventListener("mouseout", () => {
      // wrapper.querySelector("a").classList.remove("text-white");
      dot.classList.add("hidden");
    });
  });


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
    event.stopPropagation(); // Prevent click from closing the menu
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function () {
    if (!dropdownMenu.classList.contains("hidden")) {
      dropdownMenu.classList.add("hidden");
    }
  });
});
