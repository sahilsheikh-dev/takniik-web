class MailAPI {
  sendMail() {
    const scriptURL = "<Web-app-URL>";
    const form = document.forms["formName"];

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
          console.log(response);
          alert("Thank you! your form is submitted successfully.");
        })
        .then(() => {
          window.location.reload();
        })
        .catch((error) => alert("Error!" + error.message));
    });
  }
}

export default new MailAPI();
