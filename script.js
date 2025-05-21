// script.js
document.addEventListener('DOMContentLoaded', () => {
    // --- Page Content Definitions ---
    const pages = {
        home: `
            <section class="text-center py-10 md:py-16 bg-white rounded-lg shadow-lg">
                <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Welcome to ThinkTank!</h1>
                <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Your daily dose of development tips, tutorials, and tech news.</p>
                <a href="#" data-page="blog" class="site-link bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-150 ease-in-out">Explore Blog Posts</a>
            </section>

            <section class="py-12 md:py-16">
                <h2 class="text-3xl font-semibold text-center text-gray-700 mb-10">Featured Insights</h2>
                <div class="slider-container h-64 md:h-96 max-w-4xl mx-auto shadow-xl">
                    <img src="https://placehold.co/1200x600/3B82F6/FFFFFF?text=Modern+JavaScript" alt="Slide 1: Modern JavaScript" class="slide active">
                    <img src="https://placehold.co/1200x600/10B981/FFFFFF?text=Web+Performance" alt="Slide 2: Web Performance" class="slide">
                    <img src="https://placehold.co/1200x600/F59E0B/FFFFFF?text=Backend+Development" alt="Slide 3: Backend Development" class="slide">
                    <img src="https://placehold.co/1200x600/EC4899/FFFFFF?text=UI/UX+Trends" alt="Slide 4: UI/UX Trends" class="slide">
                </div>
            </section>

            <section class="py-12 md:py-16 bg-white rounded-lg shadow-lg">
                <h2 class="text-3xl font-semibold text-center text-gray-700 mb-10">Latest Posts</h2>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <article class="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <img src="https://placehold.co/600x400/6366F1/FFFFFF?text=Post+Thumbnail+1" alt="Blog Post 1" class="rounded-md mb-4 w-full h-48 object-cover">
                        <h3 class="text-xl font-semibold text-blue-600 mb-2">Understanding Async/Await in JS</h3>
                        <p class="text-gray-600 text-sm mb-3">Published on: May 18, 2025</p>
                        <p class="text-gray-700 mb-4">A deep dive into asynchronous JavaScript and how async/await simplifies your code...</p>
                        <a href="#" data-page="blog" class="site-link text-blue-500 hover:text-blue-700 font-medium">Read More &rarr;</a>
                    </article>
                    <article class="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <img src="https://placehold.co/600x400/8B5CF6/FFFFFF?text=Post+Thumbnail+2" alt="Blog Post 2" class="rounded-md mb-4 w-full h-48 object-cover">
                        <h3 class="text-xl font-semibold text-blue-600 mb-2">CSS Grid vs. Flexbox: When to Use Which</h3>
                         <p class="text-gray-600 text-sm mb-3">Published on: May 15, 2025</p>
                        <p class="text-gray-700 mb-4">Explore the differences and best use cases for CSS Grid and Flexbox layouts...</p>
                        <a href="#" data-page="blog" class="site-link text-blue-500 hover:text-blue-700 font-medium">Read More &rarr;</a>
                    </article>
                    <article class="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-1">
                        <img src="https://placehold.co/600x400/D946EF/FFFFFF?text=Post+Thumbnail+3" alt="Blog Post 3" class="rounded-md mb-4 w-full h-48 object-cover">
                        <h3 class="text-xl font-semibold text-blue-600 mb-2">Top 5 VS Code Extensions for Productivity</h3>
                         <p class="text-gray-600 text-sm mb-3">Published on: May 12, 2025</p>
                        <p class="text-gray-700 mb-4">Boost your development workflow with these essential VS Code extensions...</p>
                        <a href="#" data-page="blog" class="site-link text-blue-500 hover:text-blue-700 font-medium">Read More &rarr;</a>
                    </article>
                </div>
            </section>
        `,
        about: `
            <section class="bg-white rounded-lg shadow-lg p-8 md:p-12">
                <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About DevInsights</h1>
                <div class="space-y-6 text-gray-700 leading-relaxed">
                    <p>Welcome to ThinkTank, your go-to resource for insightful articles, tutorials, and discussions on all things web development and software engineering. Our mission is to empower developers of all levels by sharing knowledge, exploring new technologies, and fostering a community of continuous learning.</p>
                    <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0 my-8 shadow">
                      <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto md:mx-0" src="https://placehold.co/384x512/0EA5E9/FFFFFF?text=Author+Alex" alt="Alex, the author" width="384" height="512">
                      <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <blockquote>
                          <p class="text-lg font-medium">
                            “Coding is not just about commands and syntax; it's about solving problems creatively and building things that make a difference. I started DevInsights to share that passion.”
                          </p>
                        </blockquote>
                        <figcaption class="font-medium">
                          <div class="text-sky-500 dark:text-sky-400">
                            Alex Doe
                          </div>
                          <div class="text-slate-700 dark:text-slate-500">
                            Founder & Lead Developer, ThinkTank
                          </div>
                        </figcaption>
                      </div>
                    </figure>
                    <p>At ThinkTank, we cover a wide range of topics, including:</p>
                    <ul class="list-disc list-inside pl-4 space-y-2">
                        <li>Frontend frameworks and libraries (React, Vue, Angular)</li>
                        <li>Backend technologies (Node.js, Python, Java, Go)</li>
                        <li>Database management and design</li>
                        <li>DevOps practices and cloud computing</li>
                        <li>Software architecture and design patterns</li>
                        <li>UI/UX principles and best practices</li>
                        <li>Career advice and industry trends</li>
                    </ul>
                    <p>Whether you're a beginner taking your first steps in coding, an experienced developer looking to stay updated, or a tech enthusiast curious about the latest innovations, ThinkTank has something for you. Join us on this exciting journey of exploration and growth in the ever-evolving world of technology!</p>
                </div>
            </section>
        `,
        blog: `
            <section class="bg-white rounded-lg shadow-lg p-8 md:p-12">
                <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-10">All Blog Posts</h1>
                <div class="grid md:grid-cols-2 gap-x-8 gap-y-10">
                    <article class="flex flex-col bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <img src="https://placehold.co/600x350/34D399/FFFFFF?text=Full+Post+1" alt="Blog Post 1" class="rounded-md mb-4 w-full h-52 object-cover">
                        <h2 class="text-2xl font-semibold text-blue-600 mb-2">Mastering Responsive Design Principles</h2>
                        <p class="text-gray-600 text-sm mb-3">Published on: May 20, 2025 by Jane Smith</p>
                        <p class="text-gray-700 mb-4 flex-grow">Learn the core concepts of responsive web design to ensure your websites look great on all devices, from desktops to mobile phones. We cover media queries, flexible grids, and responsive images.</p>
                        <a href="#" data-page="blog" class="site-link text-blue-500 hover:text-blue-700 font-medium self-start mt-auto">Read Full Article &rarr;</a>
                    </article>
                    <article class="flex flex-col bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <img src="https://placehold.co/600x350/F472B6/FFFFFF?text=Full+Post+2" alt="Blog Post 2" class="rounded-md mb-4 w-full h-52 object-cover">
                        <h2 class="text-2xl font-semibold text-blue-600 mb-2">An Introduction to State Management with Redux</h2>
                        <p class="text-gray-600 text-sm mb-3">Published on: May 17, 2025 by John Baker</p>
                        <p class="text-gray-700 mb-4 flex-grow">Managing state in large React applications can be challenging. This post introduces Redux, a predictable state container, and explains its core concepts like actions, reducers, and the store.</p>
                        <a href="#" data-page="blog" class="site-link text-blue-500 hover:text-blue-700 font-medium self-start mt-auto">Read Full Article &rarr;</a>
                    </article>
                    <article class="flex flex-col bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <img src="https://placehold.co/600x350/6366F1/FFFFFF?text=Full+Post+3" alt="Blog Post 3" class="rounded-md mb-4 w-full h-52 object-cover">
                        <h2 class="text-xl font-semibold text-blue-600 mb-2">Understanding Async/Await in JS</h2>
                        <p class="text-gray-600 text-sm mb-3">Published on: May 18, 2025 by Alex Doe</p>
                        <p class="text-gray-700 mb-4 flex-grow">A deep dive into asynchronous JavaScript and how async/await simplifies your code, making it more readable and maintainable. Includes practical examples.</p>
                        <a href="#" data-page="blog" class="site-link text-blue-500 hover:text-blue-700 font-medium self-start mt-auto">Read Full Article &rarr;</a>
                    </article>
                    <article class="flex flex-col bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <img src="https://placehold.co/600x350/8B5CF6/FFFFFF?text=Full+Post+4" alt="Blog Post 4" class="rounded-md mb-4 w-full h-52 object-cover">
                        <h2 class="text-xl font-semibold text-blue-600 mb-2">CSS Grid vs. Flexbox: When to Use Which</h2>
                         <p class="text-gray-600 text-sm mb-3">Published on: May 15, 2025 by Sarah Lee</p>
                        <p class="text-gray-700 mb-4 flex-grow">Explore the differences and best use cases for CSS Grid and Flexbox layouts. Understand how to combine them for powerful and flexible web designs.</p>
                        <a href="#" data-page="blog" class="site-link text-blue-500 hover:text-blue-700 font-medium self-start mt-auto">Read Full Article &rarr;</a>
                    </article>
                     <article class="flex flex-col bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <img src="https://placehold.co/600x350/FBBF24/FFFFFF?text=Full+Post+5" alt="Blog Post 5" class="rounded-md mb-4 w-full h-52 object-cover">
                        <h2 class="text-2xl font-semibold text-blue-600 mb-2">Getting Started with Docker for Web Developers</h2>
                        <p class="text-gray-600 text-sm mb-3">Published on: May 10, 2025 by Mike Chen</p>
                        <p class="text-gray-700 mb-4 flex-grow">Docker can significantly simplify your development workflow. This guide provides a beginner-friendly introduction to Docker, covering key concepts and practical examples for web developers.</p>
                        <a href="#" data-page="blog" class="site-link text-blue-500 hover:text-blue-700 font-medium self-start mt-auto">Read Full Article &rarr;</a>
                    </article>
                     <article class="flex flex-col bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <img src="https://placehold.co/600x350/D946EF/FFFFFF?text=Full+Post+6" alt="Blog Post 6" class="rounded-md mb-4 w-full h-52 object-cover">
                        <h3 class="text-xl font-semibold text-blue-600 mb-2">Top 5 VS Code Extensions for Productivity</h3>
                         <p class="text-gray-600 text-sm mb-3">Published on: May 12, 2025 by Chris Taylor</p>
                        <p class="text-gray-700 mb-4 flex-grow">Boost your development workflow with these essential VS Code extensions. From code snippets to Git integration, these tools will save you time and effort.</p>
                        <a href="#" data-page="blog" class="site-link text-blue-500 hover:text-blue-700 font-medium self-start mt-auto">Read Full Article &rarr;</a>
                    </article>
                </div>
                <nav class="mt-12 flex justify-center" aria-label="Pagination">
                    <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        Previous
                    </a>
                    <a href="#" aria-current="page" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-50 text-sm font-medium text-blue-600">
                        1
                    </a>
                    <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                        2
                    </a>
                    <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        Next
                    </a>
                </nav>
            </section>
        `,
        contact: `
            <section class="bg-white rounded-lg shadow-lg p-8 md:p-12">
                <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Get In Touch</h1>
                <div class="max-w-xl mx-auto">
                    <p class="text-gray-600 mb-8 text-center">Have a question, suggestion, or just want to say hi? Fill out the form below, and we'll get back to you as soon as possible.</p>
                    <form id="contactForm" class="space-y-6">
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input type="text" name="name" id="name" required class="form-input mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="John Doe">
                            <p class="error-message mt-1"></p>
                        </div>
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input type="email" name="email" id="email" required class="form-input mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="you@example.com">
                            <p class="error-message mt-1"></p>
                        </div>
                        <div>
                            <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                            <input type="text" name="subject" id="subject" required class="form-input mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Regarding your article on...">
                             <p class="error-message mt-1"></p>
                        </div>
                        <div>
                            <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea id="message" name="message" rows="5" required class="form-input mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Your message here..."></textarea>
                            <p class="error-message mt-1"></p>
                        </div>
                        <div>
                            <button type="submit" class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        `
    };

    // --- DOM Elements ---
    const mainContent = document.getElementById('mainContent');
    const navLinks = document.querySelectorAll('.nav-link');
    // Note: siteLinks querySelectorAll was removed as it's covered by the body event listener
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const currentYearSpan = document.getElementById('currentYear');

    // --- Custom Message Box Logic ---
    const messageBoxOverlay = document.getElementById('customMessageBoxOverlay');
    const messageTitleElement = document.getElementById('customMessageTitle');
    const messageTextElement = document.getElementById('customMessageText');
    const messageOkButton = document.getElementById('customMessageOkButton');

    let imageSliderInterval = null; // To store the interval ID for the image slider

    function showMessage(title, message) {
        messageTitleElement.textContent = title;
        messageTextElement.textContent = message;
        messageBoxOverlay.classList.add('visible');
    }

    if (messageOkButton) {
        messageOkButton.addEventListener('click', () => {
            messageBoxOverlay.classList.remove('visible');
        });
    }


    // --- Router/Page Loading Logic ---
    function loadPage(pageName) {
        if (pages[pageName]) {
            mainContent.innerHTML = pages[pageName];
            window.scrollTo(0, 0); // Scroll to top on page change

            // Update active state for navigation links
            navLinks.forEach(link => {
                if (link) { // Check if link exists
                    link.classList.toggle('active', link.dataset.page === pageName);
                }
            });

            // Close mobile menu if open
            if (mobileMenu && mobileMenuButton) { // Check if elements exist
                mobileMenu.classList.remove('open');
                mobileMenuButton.innerHTML = `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>`;
            }

            // Clear previous image slider interval if it exists
            if (imageSliderInterval) {
                clearInterval(imageSliderInterval);
                imageSliderInterval = null;
            }

            // Re-initialize page-specific JavaScript
            if (pageName === 'home') {
                initImageSlider();
            } else if (pageName === 'contact') {
                initContactForm();
            }
        } else {
            mainContent.innerHTML = `<p class="text-center text-red-500 text-xl">Error: Page not found.</p>`;
            console.error(`Page "${pageName}" not found.`);
        }
    }

    // Event listeners for navigation (delegated to body for dynamically added content)
    document.body.addEventListener('click', function(e) {
        const link = e.target.closest('a[data-page]');
        if (link) {
            e.preventDefault();
            const pageName = link.dataset.page;
            if (pageName) {
                // Update URL hash, which will trigger the 'hashchange' listener
                window.location.hash = pageName;
            }
        }
    });


    // --- Mobile Menu Toggle ---
    if (mobileMenuButton && mobileMenu) { // Check if elements exist
        mobileMenuButton.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.toggle('open');
            if (isOpen) {
                mobileMenuButton.innerHTML = `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`; // Close icon
            } else {
                mobileMenuButton.innerHTML = `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>`; // Hamburger icon
            }
        });
    }

    // --- Image Slider Logic (for Home Page) ---
    function initImageSlider() {
        const sliderContainer = mainContent.querySelector('.slider-container');
        if (!sliderContainer) return;
        const slides = sliderContainer.querySelectorAll('.slide');
        if (!slides.length) return;

        let currentSlide = 0;
        slides.forEach(s => s.classList.remove('active')); // Ensure only one is active
        slides[currentSlide].classList.add('active');

        function nextSlide() {
            if (!mainContent.contains(slides[currentSlide])) return; // Stop if slides are no longer in DOM
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }
        // Clear existing interval before setting a new one
        if (imageSliderInterval) {
            clearInterval(imageSliderInterval);
        }
        imageSliderInterval = setInterval(nextSlide, 4000); // Change slide every 4 seconds
    }

    // --- Contact Form Validation Logic (for Contact Page) ---
    function initContactForm() {
        const form = mainContent.querySelector('#contactForm');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (validateForm(form)) {
                showMessage('Message Sent!', 'Thank you for your message. We will get back to you shortly.');
                form.reset();
                form.querySelectorAll('.error-message').forEach(el => el.textContent = '');
                form.querySelectorAll('.form-input.error').forEach(el => el.classList.remove('error'));
            } else {
                 showMessage('Validation Error', 'Please correct the errors in the form and try again.');
            }
        });

        form.querySelectorAll('.form-input[required]').forEach(input => {
            input.addEventListener('blur', () => validateField(input));
            input.addEventListener('input', () => validateField(input)); // Validate as user types
        });
    }

    function validateForm(form) {
        let isValid = true;
        const inputs = form.querySelectorAll('.form-input[required]');
        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });
        return isValid;
    }

    function validateField(input) {
        const errorElement = input.parentElement.querySelector('.error-message');
        let message = '';
        let fieldValid = true;

        // Trim value for all checks
        const value = input.value.trim();

        if (input.hasAttribute('required') && value === '') {
            message = `${input.previousElementSibling.textContent || input.name || 'This field'} is required.`;
            fieldValid = false;
        } else if (input.type === 'email' && value !== '') { // only validate non-empty emails
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                message = 'Please enter a valid email address.';
                fieldValid = false;
            }
        }
        // Add more specific validation rules here if needed (e.g., minlength)

        if (errorElement) {
             errorElement.textContent = message;
        }
        input.classList.toggle('error', !fieldValid);
        return fieldValid;
    }


    // --- Footer Year ---
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Initial Page Load & Hash Routing ---
    function handleRouteChange() {
        let pageName = window.location.hash.substring(1) || 'home';
        if (!pages[pageName]) {
            pageName = 'home'; // Fallback to home if hash is invalid
            window.location.hash = pageName; // Correct the hash
        }
        loadPage(pageName);
    }

    // Listen for hash changes (e.g., browser back/forward)
    window.addEventListener('hashchange', handleRouteChange);

    // Load initial page based on current hash or default to home
    handleRouteChange();

});
