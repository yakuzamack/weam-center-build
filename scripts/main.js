/**
 * Al Weam Center - Main JavaScript
 * Modern, optimized, and accessible functionality
 */

(function() {
    'use strict';
    
    // DOM elements
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.navbar');
    
    // Mobile navigation toggle
    function initMobileNavigation() {
        if (!navToggle || !navMenu) return;
        
        navToggle.addEventListener('click', function() {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
            
            // Animate hamburger menu
            navToggle.classList.toggle('active');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navbar.contains(event.target) && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Close mobile menu on window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
    
    // Smooth scrolling for anchor links
    function initSmoothScrolling() {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        
        anchorLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                if (href === '#') return;
                
                const target = document.querySelector(href);
                
                if (target) {
                    e.preventDefault();
                    
                    const offsetTop = target.offsetTop - (navbar ? navbar.offsetHeight : 0);
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (navMenu && navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        navToggle.classList.remove('active');
                        navToggle.setAttribute('aria-expanded', 'false');
                    }
                }
            });
        });
    }
    
    // Navbar scroll effect
    function initNavbarScrollEffect() {
        if (!navbar) return;
        
        let lastScrollY = window.scrollY;
        
        function updateNavbar() {
            const currentScrollY = window.scrollY;
            
            // Add shadow when scrolled
            if (currentScrollY > 10) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            lastScrollY = currentScrollY;
        }
        
        // Throttle scroll events for better performance
        let ticking = false;
        
        window.addEventListener('scroll', function() {
            if (!ticking) {
                requestAnimationFrame(function() {
                    updateNavbar();
                    ticking = false;
                });
                
                ticking = true;
            }
        });
    }
    
    // Form validation and submission
    function initFormHandling() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(function(form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const formData = new FormData(form);
                const button = form.querySelector('button[type="submit"], input[type="submit"]');
                
                if (button) {
                    button.classList.add('loading');
                    button.disabled = true;
                    
                    // Simulate form submission (replace with actual endpoint)
                    setTimeout(function() {
                        button.classList.remove('loading');
                        button.disabled = false;
                        
                        // Show success message
                        showNotification('Thank you! Your message has been sent successfully.', 'success');
                        
                        // Reset form
                        form.reset();
                    }, 2000);
                }
            });
        });
    }
    
    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Add styles
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '15px 20px',
            backgroundColor: type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#007bff',
            color: 'white',
            borderRadius: '5px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            zIndex: '10000',
            maxWidth: '400px',
            fontSize: '14px',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease'
        });
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }
    
    // Lazy loading for images
    function initLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        const src = img.getAttribute('data-src');
                        
                        if (src) {
                            img.src = src;
                            img.removeAttribute('data-src');
                            img.classList.add('loaded');
                        }
                        
                        observer.unobserve(img);
                    }
                });
            });
            
            const lazyImages = document.querySelectorAll('img[data-src]');
            lazyImages.forEach(function(img) {
                imageObserver.observe(img);
            });
        }
    }
    
    // Animation on scroll
    function initScrollAnimations() {
        if ('IntersectionObserver' in window) {
            const animationObserver = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });
            
            const elementsToAnimate = document.querySelectorAll('.service-card, .feature, .hero-content');
            elementsToAnimate.forEach(function(element) {
                element.classList.add('animate-on-scroll');
                animationObserver.observe(element);
            });
        }
    }
    
    // Performance monitoring
    function initPerformanceMonitoring() {
        // Monitor Core Web Vitals
        if ('web-vital' in window) {
            return; // Skip if already loaded
        }
        
        // Simple performance logging
        window.addEventListener('load', function() {
            const navigationTiming = performance.getEntriesByType('navigation')[0];
            
            if (navigationTiming) {
                const loadTime = navigationTiming.loadEventEnd - navigationTiming.fetchStart;
                
                // Log performance data (replace with your analytics)
                console.log('Page load time:', Math.round(loadTime), 'ms');
            }
        });
    }
    
    // Accessibility enhancements
    function initAccessibility() {
        // Skip link functionality
        const skipLink = document.querySelector('.skip-link');
        if (skipLink) {
            skipLink.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector('#main-content');
                if (target) {
                    target.focus();
                    target.scrollIntoView();
                }
            });
        }
        
        // Enhanced keyboard navigation
        document.addEventListener('keydown', function(e) {
            // Close mobile menu with Escape key
            if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.focus();
            }
        });
        
        // Focus management for screen readers
        const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        
        // Trap focus in mobile menu when open
        if (navMenu) {
            navMenu.addEventListener('keydown', function(e) {
                if (e.key === 'Tab' && navMenu.classList.contains('active')) {
                    const focusable = navMenu.querySelectorAll(focusableElements);
                    const firstFocusable = focusable[0];
                    const lastFocusable = focusable[focusable.length - 1];
                    
                    if (e.shiftKey) {
                        if (document.activeElement === firstFocusable) {
                            e.preventDefault();
                            lastFocusable.focus();
                        }
                    } else {
                        if (document.activeElement === lastFocusable) {
                            e.preventDefault();
                            firstFocusable.focus();
                        }
                    }
                }
            });
        }
    }
    
    // Mobile-responsive map handling
    function initMobileMapHandling() {
        const mapContainers = document.querySelectorAll('.map-container');
        
        mapContainers.forEach(function(container) {
            const iframe = container.querySelector('iframe');
            if (!iframe) return;
            
            // Add touch handling for mobile
            container.addEventListener('click', function() {
                iframe.style.pointerEvents = 'auto';
            });
            
            // Reset pointer events when clicking outside
            document.addEventListener('click', function(e) {
                if (!container.contains(e.target)) {
                    iframe.style.pointerEvents = 'none';
                }
            });
            
            // Better mobile experience
            if (window.innerWidth <= 768) {
                iframe.style.pointerEvents = 'none';
                
                const overlay = container.querySelector('.map-overlay');
                if (overlay) {
                    overlay.style.cursor = 'pointer';
                    overlay.addEventListener('click', function(e) {
                        e.stopPropagation();
                        iframe.style.pointerEvents = 'auto';
                        setTimeout(() => {
                            iframe.style.pointerEvents = 'none';
                        }, 5000);
                    });
                }
            }
        });
    }
    
    // Language detection and direction handling
    function initLanguageSupport() {
        const html = document.documentElement;
        const isRTL = html.dir === 'rtl' || html.lang === 'ar';
        
        // Add language-specific classes
        document.body.classList.add(isRTL ? 'rtl-layout' : 'ltr-layout');
        
        // Adjust animations for RTL
        if (isRTL) {
            const style = document.createElement('style');
            style.textContent = `
                .service-link::before {
                    content: '←';
                }
                .nav-menu {
                    flex-direction: row-reverse;
                }
                .hero-actions {
                    justify-content: flex-end;
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // Enhanced form validation for Arabic content
    function initEnhancedFormHandling() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(function(form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Check for Arabic/English content validation
                const inputs = form.querySelectorAll('input[type="text"], textarea');
                let hasValidation = false;
                
                inputs.forEach(function(input) {
                    const value = input.value.trim();
                    if (value) {
                        // Basic validation for both languages
                        const hasArabic = /[\u0600-\u06FF]/.test(value);
                        const hasLatin = /[a-zA-Z]/.test(value);
                        
                        if (hasArabic || hasLatin) {
                            hasValidation = true;
                            input.classList.remove('error');
                        } else {
                            input.classList.add('error');
                        }
                    }
                });
                
                if (hasValidation) {
                    const formData = new FormData(form);
                    const button = form.querySelector('button[type="submit"], input[type="submit"]');
                    
                    if (button) {
                        button.classList.add('loading');
                        button.disabled = true;
                        
                        // Simulate form submission
                        setTimeout(function() {
                            button.classList.remove('loading');
                            button.disabled = false;
                            
                            // Show success message in appropriate language
                            const isArabicPage = document.documentElement.lang === 'ar';
                            const message = isArabicPage ? 
                                'شكراً لك! تم إرسال رسالتك بنجاح.' : 
                                'Thank you! Your message has been sent successfully.';
                            
                            showNotification(message, 'success');
                            form.reset();
                        }, 2000);
                    }
                }
            });
        });
    }
    
    // FAQ accordion functionality
    function initFAQAccordion() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(function(item, index) {
            const question = item.querySelector('h3');
            const answer = item.querySelector('p');
            
            if (question && answer) {
                // Make questions clickable
                question.style.cursor = 'pointer';
                question.style.position = 'relative';
                
                // Add expand/collapse icon
                const icon = document.createElement('i');
                icon.className = 'fas fa-chevron-down';
                icon.style.position = 'absolute';
                icon.style.right = document.documentElement.dir === 'rtl' ? '0' : 'auto';
                icon.style.left = document.documentElement.dir === 'rtl' ? 'auto' : '0';
                icon.style.top = '50%';
                icon.style.transform = 'translateY(-50%)';
                icon.style.transition = 'transform 0.3s ease';
                question.appendChild(icon);
                
                // Initially collapse answers (except first one)
                if (index > 0) {
                    answer.style.maxHeight = '0';
                    answer.style.overflow = 'hidden';
                    answer.style.transition = 'max-height 0.3s ease';
                    icon.style.transform = 'translateY(-50%) rotate(-90deg)';
                }
                
                question.addEventListener('click', function() {
                    const isCollapsed = answer.style.maxHeight === '0px';
                    
                    if (isCollapsed) {
                        answer.style.maxHeight = answer.scrollHeight + 'px';
                        icon.style.transform = 'translateY(-50%) rotate(0deg)';
                    } else {
                        answer.style.maxHeight = '0';
                        icon.style.transform = 'translateY(-50%) rotate(-90deg)';
                    }
                });
            }
        });
    }
    
    // Initialize all functionality when DOM is ready
    function init() {
        // Check if DOM is already loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                initializeApp();
            });
        } else {
            initializeApp();
        }
    }
    
    function initializeApp() {
        // Initialize all features
        initMobileNavigation();
        initSmoothScrolling();
        initNavbarScrollEffect();
        initEnhancedFormHandling(); // Use enhanced version
        initLazyLoading();
        initScrollAnimations();
        initAccessibility();
        initPerformanceMonitoring();
        initLanguageSupport(); // Add language support
        initMobileMapHandling(); // Add mobile map handling
        initFAQAccordion(); // Add FAQ functionality
        
        // Add loaded class to body for CSS animations
        document.body.classList.add('js-loaded');
    }
    
    // Error handling
    window.addEventListener('error', function(e) {
        console.error('JavaScript error:', e.error);
        // Log to your error tracking service here
    });
    
    // Start the application
    init();
    
    // Expose necessary functions globally if needed
    window.AlWeamCenter = {
        showNotification: showNotification
    };
    
})();

// Additional CSS for animations (can be moved to CSS file)
const animationStyles = `
    .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .animate-on-scroll.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .navbar.scrolled {
        background-color: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
    }
    
    .loading {
        position: relative;
        pointer-events: none;
    }
    
    .loading::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 20px;
        height: 20px;
        margin: -10px 0 0 -10px;
        border: 2px solid transparent;
        border-top-color: currentColor;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    @media (prefers-reduced-motion: reduce) {
        .animate-on-scroll {
            transition: none;
        }
        
        .loading::after {
            animation: none;
        }
    }
`;

// Inject animation styles
const styleSheet = document.createElement('style');
styleSheet.textContent = animationStyles;
document.head.appendChild(styleSheet);