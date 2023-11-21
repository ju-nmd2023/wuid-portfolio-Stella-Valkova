document
  .getElementById("contact-button")
  .addEventListener("click", function () {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;

    if (fname + lname !== "") {
      //This is checking if 'fname' and 'lname' input form is not empty
      alert("Thank you for your message, " + fname + " " + lname + "!");
    }
  });
