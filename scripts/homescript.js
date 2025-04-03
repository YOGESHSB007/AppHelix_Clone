
function updateCount(elements) {
  const maxValue = Math.max(
    ...elements.map((el) => parseInt(el.dataset.value))
  ); // Get max value
  const duration = 2000; // Total animation duration in ms
  const intervalTime = 10; // Update interval (ms)
  const steps = duration / intervalTime; // Total number of increments

  elements.forEach((element) => {
    const targetValue = parseInt(element.dataset.value);
    let currentValue = 0;
    const increment = targetValue / steps; // Adjust speed for equal duration

    const increaseCount = setInterval(() => {
      currentValue += increment;
      if (currentValue >= targetValue) {
        element.textContent = targetValue;
        clearInterval(increaseCount);
      } else {
        element.textContent = Math.floor(currentValue); // Round down for a smoother effect
      }
    }, intervalTime);
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const numbers = [...document.querySelectorAll("#number1")]; // Get all counters
        numbers.forEach((num) => num.classList.add("animate-once"));
        updateCount(numbers);
        observer.disconnect(); // Stop observing after animation triggers
      }
    });
  },
  { threshold: 0.5 }
); // Trigger when 50% of the elements are visible

observer.observe(document.querySelector("#number1")); 

const button = document.getElementById("hover-btn");

button.addEventListener("mousemove", (e) => {
  
  const rect = button.getBoundingClientRect();
  const x = `${e.clientX - rect.left}px`;
  console.log(x)
  const y = `${e.clientY - rect.top}px`;
  button.style.setProperty("--x", x);
  button.style.setProperty("--y", y);
});


