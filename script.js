 // Detect referral code from URL
        function getReferralCode() {
            const urlParams = new URLSearchParams(window.location.search);
            const refCode = urlParams.get('ref');
            return refCode || null;
        }

        // Smooth scroll animation for internal links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add scroll reveal animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                }
            });
        }, observerOptions);

        // Observe all sections
        document.querySelectorAll('.section, .brochure-card, .gallery-item').forEach(el => {
            observer.observe(el);
        });
