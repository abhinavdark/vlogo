// script.js
const navLinks = document.querySelectorAll('nav a');
const homeSection = document.getElementById('home');
const blogSection = document.getElementById('blog');
const contactSection = document.getElementById('contact');

navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const href = link.getAttribute('href');
        if (href === '#home') {
            homeSection.scrollIntoView({ behavior: 'smooth' });
        } else if (href === '#blog') {
            blogSection.scrollIntoView({ behavior: 'smooth' });
        } else if (href === '#contact') {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
