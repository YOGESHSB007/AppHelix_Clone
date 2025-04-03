const button = document.getElementById("hover-btn");

button.addEventListener("mousemove", (e) => {
  
  const rect = button.getBoundingClientRect();
  const x = `${e.clientX - rect.left}px`;
  console.log(x)
  const y = `${e.clientY - rect.top}px`;
  button.style.setProperty("--x", x);
  button.style.setProperty("--y", y);
});