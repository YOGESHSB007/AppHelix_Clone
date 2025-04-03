document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".scroll-trigger");

  function handleScroll() {
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight * 0.75) {
        // Adjust 0.75 for when the effect triggers
        element.classList.add("opacity-100", "translate-y-0");
        element.classList.remove("opacity-0", "translate-y-10");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Trigger on page load
});
document.querySelectorAll("h3").forEach((h3) => {
  h3.addEventListener("mouseover", function () {
    let line = this.querySelector("span");
    line.style.width = "100%";
    line.style.left = "0";
  });
  h3.addEventListener("mouseout", function () {
    let line = this.querySelector("span");
    line.style.width = "0";
    line.style.left = "100%";
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.feature-card');

  cards.forEach(card => {
      card.addEventListener('mouseover', function() {
          this.style.boxShadow = '0px 0px 20px rgba(0, 204, 255, 0.6)';
          this.style.transform = 'scale(1.05)';
      });

      card.addEventListener('mouseout', function() {
          this.style.boxShadow = 'none';
          this.style.transform = 'scale(1)';
      });
  });
});
