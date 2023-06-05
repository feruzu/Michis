// Form controlado
(function () {
  "use strict";

  var forms = document.querySelectorAll(".needs-validation");
  var contactanos = document.querySelector("#contactanos h3");
  var div = document.querySelector("#form-info");

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } 
      
        event.preventDefault();
        form.classList.add("was-validated");
        form.style.display = "none";
        contactanos.style.display = "none";

        const gracias = document.createElement("h3");
        gracias.textContent =
          "Gracias por contactarnos, nos pondremos en contacto a la brevedad.";
        gracias.style.fontFamily = "'Tenor Sans', sans-serif";
        gracias.style.fontWeight = "bold";
        gracias.style.color = "#FA5F1A";
        gracias.style.textAlign = "center";
        gracias.style.fontSize = "24px";
        gracias.style.padding = "5%";
        div.appendChild(gracias);
       
      },
      false
    );
  });
})();




