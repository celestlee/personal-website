document.addEventListener('DOMContentLoaded', () => {
    const text = "Hi, I'm Celest"; 
    const typingSpeed = 150; 
    const typewriterTextContent = document.querySelector('.typewriter-text-content');
  
    let index = 0;
  
    function typeText() {
      if (index < text.length) {
        typewriterTextContent.textContent += text[index];
        index++;
        setTimeout(typeText, typingSpeed);
      }
    }
  
    typeText();
  });