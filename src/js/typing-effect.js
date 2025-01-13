document.addEventListener('DOMContentLoaded', () => {
    const text = "Hi, I'm Celest"; // The text to display
    const typingSpeed = 150; // Typing speed in milliseconds
    const typewriterTextContent = document.querySelector('.typewriter-text-content');
  
    let index = 0;
  
    function typeText() {
      if (index < text.length) {
        typewriterTextContent.textContent += text[index];
        index++;
        setTimeout(typeText, typingSpeed);
      }
    }
  
    typeText(); // Start the typing effect
  });