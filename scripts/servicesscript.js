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

const slider = document.getElementById("slider");
let isDown = false;
let startX;
let scrollLeft;

function cloneAndAppend() {
  const cards = slider.children;
  const clone = cards[0].cloneNode(true);
  slider.appendChild(clone);
  slider.scrollLeft += cards[0].offsetWidth; // Move smoothly
  slider.removeChild(cards[0]); // Remove first card to keep loop seamless
}

// Auto-slide with looping effect
setInterval(() => {
  cloneAndAppend();
}, 2000);

// Mouse events for sliding
slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("cursor-grabbing");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("cursor-grabbing");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("cursor-grabbing");
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // Scroll speed
  slider.scrollLeft = scrollLeft - walk;
});

// Pagination Dots Functionality
const dots = document.querySelectorAll(".dot");

function updateDots(index) {
  dots.forEach((dot, i) => {
    dot.classList.toggle("bg-blue-400", i === index);
    dot.classList.toggle("bg-gray-500", i !== index);
  });
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    slider.scrollTo({
      left: index * slider.offsetWidth,
      behavior: "smooth",
    });
    updateDots(index);
  });
});

// Auto-update dots on scroll
slider.addEventListener("scroll", () => {
  const scrollPosition = slider.scrollLeft;
  const index = Math.round(scrollPosition / slider.offsetWidth);
  updateDots(index);
});


document.querySelectorAll("#blink").forEach(anchor => {
  // Create the blinking dot dynamically for each link
  const dot = document.createElement("div");
  dot.className = "w-1.5 h-1.5 bg-orange-400 rounded-full animate-blink mr-1 hidden"; // Initially hidden

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
