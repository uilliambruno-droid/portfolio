(function () {
  const form = document.getElementById('contactForm');
  const statusEl = document.getElementById('formStatus');

  if (!form || !statusEl) return;

  const submitButton = form.querySelector('.btn-send');
  const endpoint = form.dataset.endpoint;

  function setStatus(message, type) {
    statusEl.textContent = message;
    statusEl.classList.remove('is-success', 'is-error', 'is-loading');

    if (type) {
      statusEl.classList.add(type);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!endpoint) {
      setStatus('Form endpoint is not configured.', 'is-error');
      return;
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus('Please fill in all required fields correctly.', 'is-error');
      return;
    }

    const previousLabel = submitButton ? submitButton.textContent : '';

    try {
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
      }

      setStatus('Sending your message...', 'is-loading');

      const formData = new FormData(form);
      formData.append('_subject', 'New Portfolio Contact Message');
      formData.append('_captcha', 'false');
      formData.append('_template', 'table');

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: formData
      });

      const payload = await response.json().catch(() => ({}));

      if (!response.ok || payload.success === 'false') {
        throw new Error(payload.message || 'Unable to send message at the moment.');
      }

      form.reset();
      setStatus('Message sent successfully. I will get back to you soon.', 'is-success');
    } catch (error) {
      setStatus(error.message || 'Something went wrong while sending your message.', 'is-error');
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = previousLabel || 'Send Message';
      }
    }
  }

  form.addEventListener('submit', handleSubmit);
})();
