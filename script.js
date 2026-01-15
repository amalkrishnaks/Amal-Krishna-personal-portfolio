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

    // Typing Animation
    const multipleText = document.querySelector('.multiple-text');
    const textArray = ['Software Engineer', 'MERN Stack Developer', 'Frontend Enthusiast'];
    let textIndex = 0;
    let charIndex = 0;
    let currentText = '';
    let isDeleting = false;
    const typingSpeed = 150;
    const erasingSpeed = 100;
    const delayBetweenTexts = 2000; 
    function type() {
        if (textIndex >= textArray.length) {
            textIndex = 0;
        }
        currentText = textArray[textIndex];
        if (!isDeleting && charIndex <= currentText.length) {
            multipleText.textContent = currentText.substring(0, charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else if (isDeleting && charIndex >= 0) {
            multipleText.textContent = currentText.substring(0, charIndex);
            charIndex--;
            setTimeout(type, erasingSpeed);
        } else {
            isDeleting = !isDeleting;   
            if (!isDeleting) {
                textIndex++;
            }
            setTimeout(type, delayBetweenTexts);
        }
    }
    type();


});
