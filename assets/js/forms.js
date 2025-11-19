<script src="assets/js/forms.js"></script>
// ENQUIRY FORM
const enquiryForm = document.querySelector("#enquiryForm");
const enquiryResponse = document.querySelector("#enquiryResponse");

if (enquiryForm) {
  enquiryForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const phone = document.querySelector("#phone").value.trim();
    const type = document.querySelector("#type").value;
    const details = document.querySelector("#details").value.trim();

    // Basic validation
    if (!name || !email || !phone || !type || details.length < 10) {
      enquiryResponse.textContent = "Please complete all fields correctly.";
      enquiryResponse.classList.add("error");
      return;
    }

    // Dynamic response based on enquiry type
    let message = "";

    switch (type) {
      case "service":
        message = "Thank you! Our workshop team will contact you with pricing and available dates.";
        break;
      case "product":
        message = "Thank you! A product specialist will confirm availability and delivery options.";
        break;
      case "volunteer":
        message = "Thank you for your interest! We will send you our volunteer application form.";
        break;
      case "sponsor":
        message = "Thank you! Our sponsorship coordinator will share our sponsorship packages.";
        break;
    }

    enquiryResponse.textContent = message;
    enquiryResponse.classList.remove("error");
    enquiryResponse.classList.add("success");

    enquiryForm.reset();
    
  });
}

const contactForm = document.querySelector("#contactForm");
const contactStatus = document.querySelector("#contactStatus");

if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.querySelector("#cname").value.trim();
    const email = document.querySelector("#cemail").value.trim();
    const type = document.querySelector("#ctype").value;
    const message = document.querySelector("#cmessage").value.trim();

    if (!name || !email || !type || message.length < 10) {
      contactStatus.textContent = "Please fill in all fields correctly.";
      contactStatus.classList.add("error");
      return;
    }

    // Compile email body
    const subject = encodeURIComponent(`Message from ${name} (${type})`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMessage Type: ${type}\n\nMessage:\n${message}`
    );

    // Open email client
    window.location.href = `mailto:brewandbloom@contact.com?subject=${subject}&body=${body}`;

    contactStatus.textContent = "Your message has been prepared. Please send through your email client.";
    contactStatus.classList.remove("error");
    contactStatus.classList.add("success");
     });
}