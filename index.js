// =========================================================================
// PARTNERS CONFIGURATION
// To add new partners, simply append an object to this list:
//   { name: "Partner Name", logo: "/assets/partners/logo-file.png" }
// =========================================================================
const PARTNERS = [
    {
        name: "Union Bank of India",
        logo: "/assets/partners/union-bank.png"
    },
    {
        name: "Next Perfumes & Deodorant",
        logo: "/assets/partners/next-perfumes.png"
    },
    {
        name: "Inflame Inspired Cooking",
        logo: "/assets/partners/inflame.png"
    }
];

/* --------------------------------------------------
   Negi Enterprises - Landing Page Interactive Logic
   Handles: Navigation, Filters, FAQs, Forms, WhatsApp
   -------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {

    // === Render Partners Logo Grid ===
    const partnersContainer = document.getElementById('partnersContainer');
    if (partnersContainer) {
        partnersContainer.innerHTML = PARTNERS.map(partner => `
            <div class="partner-logo-item" title="${partner.name}">
                <img src="${partner.logo}" alt="${partner.name} Logo">
            </div>
        `).join('');
    }

    // === 1. Mobile Menu Toggle ===
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const navItems = document.querySelectorAll('.nav-item');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('open');
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('open')) {
                icon.className = 'fa-solid fa-xmark';
            } else {
                icon.className = 'fa-solid fa-bars-staggered';
            }
        });

        // Close menu on clicking links
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('open');
                menuToggle.querySelector('i').className = 'fa-solid fa-bars-staggered';
            });
        });

        // Close menu on clicking anywhere outside
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                navLinks.classList.remove('open');
                menuToggle.querySelector('i').className = 'fa-solid fa-bars-staggered';
            }
        });
    }

    // Scroll Spy Navigation removed for multi-page routing



    // === 3. Portfolio Filters ===
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    item.classList.add('show');
                } else {
                    item.classList.remove('show');
                }
            });
        });
    });


    // === 4. FAQ Accordion ===
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            const answer = question.nextElementSibling;
            const isActive = item.classList.contains('active');

            // Collapse all other items first for exclusive accordion
            document.querySelectorAll('.faq-item').forEach(i => {
                i.classList.remove('active');
                i.querySelector('.faq-answer').style.maxHeight = null;
            });

            // Toggle active item
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });


    // === 5. Lead Form & WhatsApp Redirect System ===
    const quoteForm = document.getElementById('quoteForm');
    const successModal = document.getElementById('successModal');
    const modalClientName = document.getElementById('modalClientName');
    const modalServiceType = document.getElementById('modalServiceType');
    const modalRedirectBtn = document.getElementById('modalRedirectBtn');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    
    let whatsappURL = '';

    if (quoteForm) {
        quoteForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Retrieve fields
            const name = document.getElementById('clientName').value.trim();
            const phone = document.getElementById('clientPhone').value.trim();
            const service = document.getElementById('serviceType').value;
            const message = document.getElementById('clientMessage').value.trim() || 'No additional details provided.';

            // Validation check
            if (!name || !phone || !service) {
                alert('Please fill out all required fields.');
                return;
            }

            // Construct direct WhatsApp Message Link
            // Phone: 919815993335 (Negi Enterprises target)
            const targetPhone = '919815993335';
            const introMsg = `Hello Negi Enterprises,\n\nI have submitted an inquiry via your website. Here are my details:\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Service Required:* ${service}\n*Details:* ${message}\n\nPlease get back to me with pricing and templates.`;
            const encodedText = encodeURIComponent(introMsg);
            
            whatsappURL = `https://wa.me/${targetPhone}?text=${encodedText}`;

            // Update modal text fields
            if (modalClientName) modalClientName.textContent = name;
            if (modalServiceType) modalServiceType.textContent = service;

            // Show success modal
            if (successModal) {
                successModal.classList.add('open');
            }

            // Optional: Automatically trigger WhatsApp redirect in a new tab after 2 seconds
            // setTimeout(() => { window.open(whatsappURL, '_blank'); }, 2000);
        });
    }

    // Modal Actions
    if (modalRedirectBtn) {
        modalRedirectBtn.addEventListener('click', () => {
            if (whatsappURL) {
                window.open(whatsappURL, '_blank');
                // Close modal after redirection
                if (successModal) successModal.classList.remove('open');
                if (quoteForm) quoteForm.reset();
            }
        });
    }

    if (modalCloseBtn && successModal) {
        modalCloseBtn.addEventListener('click', () => {
            successModal.classList.remove('open');
            if (quoteForm) quoteForm.reset();
        });
    }

    // Close modal on clicking backdrop
    if (successModal) {
        successModal.addEventListener('click', (e) => {
            if (e.target === successModal) {
                successModal.classList.remove('open');
                if (quoteForm) quoteForm.reset();
            }
        });
    }
});
