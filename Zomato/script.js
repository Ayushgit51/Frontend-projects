
// Smooth scrolling behavior for any potential links in the header
document.querySelectorAll('header ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Animation for input focus
const searchInput = document.querySelector('main input');
searchInput.addEventListener('focus', () => {
    searchInput.style.boxShadow = '0px 8px 12px rgba(0, 0, 0, 0.3)';
});

searchInput.addEventListener('blur', () => {
    searchInput.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)';
});

// Logo animation on page load
window.addEventListener('load', () => {
    const logo = document.querySelector('main img');
    logo.style.transform = 'scale(0.8)';
    setTimeout(() => {
        logo.style.transition = 'transform 1s ease';
        logo.style.transform = 'scale(1)';
    }, 200);
});
