// Typewriter Effect (for "I'm a..." text)
let typewriterText = ["Web Developer", "IoT Enthusiast", "Hardware Hacker", "Problem Solver"];
let i = 0;
let j = 0;
let currentText = '';
let isDeleting = false;

function typeWriter() {
    const element = document.querySelector('.typewriter'); // Fixing the selector to match the element class name
    
    if (isDeleting) {
        currentText = typewriterText[i].substring(0, j--);
    } else {
        currentText = typewriterText[i].substring(0, j++);
    }
    
    element.textContent = currentText;

    if (!isDeleting && j === typewriterText[i].length) {
        setTimeout(() => {
            isDeleting = true;
        }, 1000);
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % typewriterText.length;
    }

    setTimeout(typeWriter, isDeleting ? 50 : 150); // Adjusting speed for better effect
}

// Call typewriter effect after page load
window.onload = () => {
    typeWriter();
};

// Hamburger Menu Toggle
function hamburg() {
    const links = document.querySelector('.links');
    links.classList.toggle('show');
}
function sendEmail() {
    const subject = "Your Subject Here";
    const body = "Your message body goes here.";

    // Open the user's default mail client with a pre-filled email
    window.location.href = `mailto:karanam.vadeendra123456@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
