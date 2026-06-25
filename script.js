document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // Mobile Menu Logic
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavClose = document.querySelector('.mobile-nav-close');

    if (mobileMenuBtn && mobileNav && mobileNavClose) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileNav.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        });

        mobileNavClose.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        // Close menu when a link is clicked
        const mobileLinks = mobileNav.querySelectorAll('.nav-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // Intro Screen Logic (Only runs if intro screen exists on the page)
    const introScreen = document.querySelector('.intro-screen');
    if (introScreen) {
        setTimeout(() => {
            introScreen.classList.add('hidden');
        }, 2000);

        setTimeout(() => {
            introScreen.style.display = 'none';
        }, 2800);
    }

    // 3D Card Logic (for Home page)
    const card = document.querySelector('.id-card');
    if (card) {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -15;
            const rotateY = ((x - centerX) / centerX) * 15;

            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            card.style.transition = 'none';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateX(0deg) rotateY(0deg)';
            card.style.transition = 'transform 0.5s ease';
        });
    }

    // Portfolio Tabs Logic (for Portfolio page)
    const portfolioTabs = document.querySelectorAll('.portfolio-tab');
    if (portfolioTabs.length > 0) {
        const tabContents = {
            'Projects': document.getElementById('projects-content'),
            'Certificates': document.getElementById('certificates-content'),
            'Tech Stack': document.getElementById('tech-stack-content')
        };

        portfolioTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs
                portfolioTabs.forEach(t => t.classList.remove('active'));
                // Add active class to clicked tab
                tab.classList.add('active');

                // Hide all contents
                Object.values(tabContents).forEach(content => {
                    if (content) content.style.display = 'none';
                });

                // Show target content
                const targetText = tab.innerText.trim();
                if (tabContents[targetText]) {
                    tabContents[targetText].style.display = 'block';
                }
            });
        });
    }
});
