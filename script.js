document.addEventListener('DOMContentLoaded', () => {
    // Popup Logic
    const contactForm = document.getElementById('contactForm');
    const hiddenIframe = document.getElementById('hidden_iframe');
    const successPopup = document.getElementById('successPopup');
    const closePopupBtn = document.getElementById('closePopup');

    let submitted = false;

    contactForm.addEventListener('submit', () => {
        submitted = true;
    });

    hiddenIframe.addEventListener('load', () => {
        if (submitted) {
            successPopup.classList.add('show');
            contactForm.reset();
            submitted = false;
        }
    });

    closePopupBtn.addEventListener('click', () => {
        successPopup.classList.remove('show');
    });

    // Close popup if clicking outside content
    successPopup.addEventListener('click', (e) => {
        if (e.target === successPopup) {
            successPopup.classList.remove('show');
        }
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Smooth Scrolling for anchor links (optional polyfill if needed, but CSS handles mostly)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
