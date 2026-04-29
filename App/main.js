/* ==========================================================================
   WATUSAN - JAVASCRIPT LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Update current year in footer ---
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Header scroll effect ---
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Mobile Menu Toggle ---
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const icon = navToggle.querySelector('i');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
            
            // Switch icon between bars and times
            if (navMenu.classList.contains('show')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close menu when clicking on any link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // --- Active Link on Scroll (Intersection Observer) ---
    const sections = document.querySelectorAll('section[id]');
    
    const scrollActive = () => {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const sectionClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']');

            if (sectionClass) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    sectionClass.classList.add('active');
                } else {
                    sectionClass.classList.remove('active');
                }
            }
        });
    };

    window.addEventListener('scroll', scrollActive);

});
