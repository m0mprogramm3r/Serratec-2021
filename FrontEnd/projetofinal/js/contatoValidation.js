(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          event.preventDefault()
          event.stopPropagation()
  
          if (form.checkValidity()) {
              form.reset();
              document.getElementById('contatoMensagemEnviada').style.display = "block";
              document.getElementsByClassName('form-floating').style.display = "none";
              form.classList.add('was-validated');
          }
        }, false)
      })
  })()