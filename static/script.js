document.addEventListener("DOMContentLoaded", function () {
  let contactForm = document.getElementById("contactForm");
  let overlay = document.getElementById("overlay");
  let toggleContact = document.getElementById("toggleContact");
  let toggleContactFooter = document.getElementById("toggleContactFooter");
  let closeForm = document.getElementById("closeForm");
  let offcanvasNavbar = document.getElementById("offcanvasDarkNavbar");
  let offcanvasInstance =
    bootstrap.Offcanvas.getInstance(offcanvasNavbar) ||
    new bootstrap.Offcanvas(offcanvasNavbar);

  function showForm() {
    contactForm.classList.remove("d-none");
    overlay.classList.remove("d-none");
    setTimeout(() => {
      contactForm.classList.add("show");
      overlay.classList.add("show");
    }, 10);
  }

  function hideForm() {
    contactForm.classList.remove("show");
    overlay.classList.remove("show");
    setTimeout(() => {
      contactForm.classList.add("d-none");
      overlay.classList.add("d-none");
    }, 300);
  }

  function openContactForm(event) {
    event.preventDefault(); // Prevent navigation
    offcanvasInstance.hide(); // ✅ Close the offcanvas menu
    setTimeout(showForm, 300); // ✅ Delay opening the form slightly
  }

  // Ensure both buttons close the offcanvas before opening the form
  toggleContact.addEventListener("click", openContactForm);
  toggleContactFooter.addEventListener("click", openContactForm);

  closeForm.addEventListener("click", hideForm);
  overlay.addEventListener("click", hideForm);

  // ✅ Check for form errors and keep it open if errors exist
  let errorElements = document.querySelectorAll(".invalid-feedback");
  if (errorElements.length > 0) {
    showForm(); // If there are errors, keep the form open
  }
});

// Initialize Quill.js for rich text editing
document.addEventListener("DOMContentLoaded", function () {
  var quill = new Quill("#editor", {
    theme: "snow",
    placeholder: "Write your message...",
    modules: {
      toolbar: [
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link"],
        ["clean"],
      ],
    },
  });

  // Save Quill content into hidden input before submitting
  document.querySelector("form").onsubmit = function () {
    document.getElementById("hiddenMessage").value = quill.root.innerHTML;
  };
});
