const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector(".submit-btn");
const nameInput = document.querySelector("#user_name");
const emailInput = document.querySelector("#user_email");
const messageInput = document.querySelector("#message");

const publicKey = "tMJ6iLYRPLiPo_2pi";
const serviceID = "my_site";
const templateID = "template_mysite";

emailjs.init(publicKey);

contactForm.addEventListener("submit"), e =>
  e.preventDefault();
  submitBtn.innerText = "Just a moment...";

const inputFields = {
  name: nameInput.value,
  email: emailInput.value,
  message: messageInput.value
}

emailjs.send(serviceID, templateID, inputFields)
  .then(() => {
    submitBtn.innerText = "Message sent successfully";
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  }, (error) => {
      console.log(error);
      submitBtn.innerText = "Somthing went wrong";
  });