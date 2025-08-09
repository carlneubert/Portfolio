// Toggle Navigation Menu for Mobile
document.getElementById('nav-toggle').addEventListener('click', function() {
    const navList = document.getElementById('nav-list');
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
    navList.classList.toggle('show');
});

// Get the navigation header element
const header = document.querySelector('.header');

// Detect scroll event
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {  // Change this value to adjust when the effect triggers
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

