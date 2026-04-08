const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileLinks = mobileMenu.querySelectorAll("a");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formMessage = document.getElementById('formMessage');
const buttonText = document.getElementById('button-text');
const loadingSpinner = document.getElementById('loading-spinner');

const apiBase = window.location.hostname === 'localhost' && window.location.port !== '3000'
  ? 'http://localhost:3000'
  : '';

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Clear previous messages
    formMessage.textContent = '';
    formMessage.className = 'mt-4 text-sm';
    formMessage.removeAttribute('role');

    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Basic client-side validation
    if (!data.name.trim()) {
      showError('Please enter your name.');
      document.getElementById('name').focus();
      return;
    }

    if (!data.email.trim() || !isValidEmail(data.email)) {
      showError('Please enter a valid email address.');
      document.getElementById('email').focus();
      return;
    }

    if (!data.message.trim()) {
      showError('Please enter your message.');
      document.getElementById('message').focus();
      return;
    }

    // Disable button and show loading
    submitBtn.disabled = true;
    buttonText.textContent = 'Sending...';
    loadingSpinner.classList.remove('hidden');
    submitBtn.setAttribute('aria-describedby', 'submit-status');

    try {
      // Send to backend
      const response = await fetch(`${apiBase}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        // Success
        showSuccess(result.message);
        contactForm.reset();
        // Focus on success message for screen readers
        formMessage.focus();
      } else {
        // Error
        showError(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showError('Network error. Please check your connection and try again.');
    } finally {
      // Re-enable button
      submitBtn.disabled = false;
      buttonText.textContent = 'Send Message';
      loadingSpinner.classList.add('hidden');
    }
  });
}

// Helper functions
function showSuccess(message) {
  formMessage.className = 'mt-4 text-sm text-green-600';
  formMessage.textContent = message;
  formMessage.setAttribute('role', 'status');
  formMessage.setAttribute('aria-live', 'polite');
}

function showError(message) {
  formMessage.className = 'mt-4 text-sm text-red-600';
  formMessage.textContent = message;
  formMessage.setAttribute('role', 'alert');
  formMessage.setAttribute('aria-live', 'assertive');
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}