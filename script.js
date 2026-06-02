/**
 * Veltrix UI Execution Module
 */
document.documentElement.classList.remove('no-js');

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Theme Controls
    const themeToggleBtns = document.querySelectorAll('[id^="theme-toggle"]');
    const themeIcons = document.querySelectorAll('[id^="theme-icon"]');

    const toggleTheme = () => {
        const isDark = document.documentElement.classList.toggle('dark');
        themeIcons.forEach(icon => {
            icon.classList.toggle('fa-sun', isDark);
            icon.classList.toggle('fa-moon', !isDark);
        });
    };

    themeToggleBtns.forEach(btn => btn.addEventListener('click', toggleTheme));

    // 2. Mobile Sidebar Menu
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    // ... (keep your existing mobile menu logic here)

    // 3. Project Grid Accordions
    // ... (keep your existing accordion logic here)

    // 4. Form Submission
    const contactForm = document.getElementById('contact-form');
    // ... (keep your existing form logic here)

});
    // ==========================================
    // 1. VISUAL THEME CONTROLS (DARK/LIGHT)
    // ==========================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleMobileBtn = document.getElementById('theme-toggle-mobile');
    const themeIcon = document.getElementById('theme-icon');
    const themeIconMobile = document.getElementById('theme-icon-mobile');

    /**
     * Safely updates theme icons without depending on replace()
     */
    const updateThemeIcons = (isDark) => {
        const updateIcon = (iconEl) => {
            if (!iconEl) return;
            if (isDark) {
                iconEl.classList.remove('fa-moon');
                iconEl.classList.add('fa-sun');
            } else {
                iconEl.classList.remove('fa-sun');
                iconEl.classList.add('fa-moon');
            }
        };
        updateIcon(themeIcon);
        updateIcon(themeIconMobile);
    };

    const toggleTheme = () => {
        const docClass = document.documentElement.classList;
        docClass.toggle('dark');
        updateThemeIcons(docClass.contains('dark'));
    };

    if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
    if (themeToggleMobileBtn) themeToggleMobileBtn.addEventListener('click', toggleTheme);


    // ==========================================
    // 2. MOBILE SIDEBAR MENU HANDLERS
    // ==========================================
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (mobileMenuToggle && mobileMenu) {
        const closeMobileMenu = () => {
            mobileMenu.classList.add('hidden');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            if (menuIcon) {
                menuIcon.classList.remove('fa-xmark');
                menuIcon.classList.add('fa-bars');
            }
        };

        mobileMenuToggle.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                mobileMenuToggle.setAttribute('aria-expanded', 'true');
                if (menuIcon) {
                    menuIcon.classList.remove('fa-bars');
                    menuIcon.classList.add('fa-xmark');
                }
            } else {
                closeMobileMenu();
            }
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
    }


    // ==========================================
    // 3. PROJECT GRID ACCORDIONS
    // ==========================================
    const viewMoreBtn = document.getElementById('view-more-projects-btn');
    const extendedGrid = document.getElementById('extended-projects-grid');
    const btnText = document.getElementById('btn-text');
    const btnIcon = document.getElementById('btn-icon');

    if (viewMoreBtn && extendedGrid) {
        viewMoreBtn.addEventListener('click', () => {
            const isHidden = extendedGrid.classList.contains('hidden');

            if (isHidden) {
                extendedGrid.classList.remove('hidden');
                extendedGrid.classList.add('grid');
                
                setTimeout(() => {
                    extendedGrid.classList.remove('opacity-0', 'translate-y-4');
                    extendedGrid.classList.add('opacity-100', 'translate-y-0');
                }, 20);

                if (btnText) btnText.textContent = "Show Less";
                if (btnIcon) {
                    btnIcon.classList.remove('fa-arrow-down');
                    btnIcon.classList.add('fa-arrow-up');
                }
            } else {
                extendedGrid.classList.remove('opacity-100', 'translate-y-0');
                extendedGrid.classList.add('opacity-0', 'translate-y-4');

                setTimeout(() => {
                    extendedGrid.classList.remove('grid');
                    extendedGrid.classList.add('hidden');
                }, 400);

                if (btnText) btnText.textContent = "View All Projects";
                if (btnIcon) {
                    btnIcon.classList.remove('fa-arrow-up');
                    btnIcon.classList.add('fa-arrow-down');
                }
            }
        });
    }


    // ==========================================
    // 4. CLIENT CONTACT FORM SUBMISSION HOOK
    // ==========================================
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    if (contactForm) {
        contactForm.addEventListener('submit', async (event) => {
            // Prevent default routing so we can handle the UI states gracefully
            event.preventDefault();

            const nameValue = document.getElementById('user-name')?.value || '';
            const submitButton = contactForm.querySelector('button[type="submit"]');
            
            // Set Loading UI
            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = "Sending...";
            }

            try {
                const payload = {
                    name: document.getElementById('user-name')?.value || '',
                    email: document.getElementById('user-email')?.value || '',
                    project_type: document.getElementById('project-type')?.value || '',
                    scope_summary: document.getElementById('scope-summary')?.value || ''
                };

                const response = await fetch(contactForm.action, {
                    method: contactForm.method,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });

                if (response.ok) {
                    contactForm.reset();
                    if (formFeedback) {
                        formFeedback.classList.remove('hidden', 'bg-red-100', 'text-red-800');
                        formFeedback.classList.add('bg-emerald-100', 'text-emerald-800');
                        formFeedback.textContent = `Thank you, ${nameValue}. Your project inquiry has been received. Our team will contact you shortly.`;
                        formFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }
                } else {
                    throw new Error("Network response was not OK");
                }
            } catch (error) {
                // Fallback UI for submission errors
                if (formFeedback) {
                    formFeedback.classList.remove('hidden', 'bg-emerald-100', 'text-emerald-800');
                    formFeedback.classList.add('bg-red-100', 'text-red-800');
                    formFeedback.textContent = "Oops! There was a problem submitting your form. Please try again or call us directly.";
                }
            } finally {
                // Reset Button UI
                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.textContent = "Submit Quote Request";
                }
            }
        });
    };