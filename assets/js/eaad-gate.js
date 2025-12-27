function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const gate = document.getElementById("password-gate");
  const content = document.getElementById("protected-content");
  const error = document.getElementById("error");

  if (input === "showme!") {
    gate.remove();                 // mata el gate
    content.style.display = "block"; // muestra el contenido REAL
    document.body.style.overflow = "auto";
  } else {
    error.style.display = "block";
  }
}
