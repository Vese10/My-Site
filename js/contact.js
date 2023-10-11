function sendMail() {
  var params = {
    name: document.getElementById("user_name").value,
    email: document.getElementById("user_email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "my_site";
  const templateID = "template_mysite";

  emailjs
    .send(serviceID,templateID,params)
    .then(res) = {
      document:getElementById("user_name").value = "",
      document:getElementById("user_email").value = "",
      document:getElementById("message").value = "",
      console:log(res),
      alert:("Your message sent successfully")
    }
    .catch((err) => console.log(err));
}