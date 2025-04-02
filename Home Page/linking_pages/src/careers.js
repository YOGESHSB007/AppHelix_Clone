let nav = document.getElementById("clickToOpen");
let sidebar = document.getElementById("hiddensidebar");
let closeBtn = document.getElementById("close");
// let overlay = document.getElementById('overlay');

function showOverlay(element) {
    const overlay = element.querySelector('.overlay');
    overlay.style.opacity = '1';
    overlay.style.transform = 'translateY(0%)';
}

function hideOverlay(element) {
    const overlay = element.querySelector('.overlay');
    overlay.style.opacity = '0';
    overlay.style.transform = 'translateY(-100%)';
}

function adjustLayout() {
    const container = document.querySelector('.responsive-flex');
    const items = container.querySelectorAll('div[style*="position: relative;"]'); // Select the image divs

    if (window.innerWidth < 640) { // sm breakpoint
        container.style.display = 'grid';
        container.style.gridTemplateColumns = '1fr';
        items.forEach(item => {
            item.style.width = '50%'; // Ensure full width on grid
        });

    } else {
        container.style.display = 'flex';
        container.style.flexDirection = 'row';
        items.forEach(item => {
            item.style.width = '25%'; // 4 items in a row
        });
    }
}

function rotateCard(element, rotation) {
    element.style.transform = `rotate(${rotation}deg)`;
}

function resetCard(element) {
    const initialRotation = element.dataset.rotation;
    element.style.transform = `rotate(${initialRotation}deg)`;
}

function addGlow(element) {
    element.style.boxShadow = '0 0 20px 10px rgba(255, 255, 255, 0.5)';
}

function removeGlow(element) {
    element.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
}
function revealOnScroll() {
    const elements = document.querySelectorAll('.float-on-scroll');
    for (let i = 0; i < elements.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = elements[i].getBoundingClientRect().top;
        let elementVisible = 150; // Adjust this value as needed

        if (elementTop < windowHeight - elementVisible) {
            elements[i].classList.add('active');
        } else {
            elements[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Trigger on initial load
adjustLayout();
window.addEventListener('resize', adjustLayout);
