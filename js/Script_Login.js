const emailsPermitidos = [
  { email: 'Leandro@gmail.com', password: 'Prueba00' },
  { email: 'Dossend@gmail.com', password: 'Prueba01' },
  { email: 'Garcia@gmail.com', password: 'Prueba02' }
];

let email;
let password;

function validaremail(event) {
  event.preventDefault();

  email = document.getElementById("email").value;
  password = document.getElementById("password").value;

  return new Promise((resolve, reject) => {
    if ((validarLongitud() === true) && (validarMinMay() === true) &&
      (validar2Numeros() === true) && (validarIngreso() === true)) {
      setTimeout(() => {
        resolve();
      }, 2000);
    }
  })
    .then(() => {
      window.location.href = 'index.html';
    })
    .catch((error) => {
      alert(error);
    });
}

function validarLongitud() {
  if (password.length < 8)
    alert('La contraseña debe tener al menos 8 caracteres.');
  else
    return true;
}

function validarMinMay() {
  if (!/[a-z]/.test(password) || !/[A-Z]/.test(password))
    return true;
  else
    alert('La contraseña debe contener al menos una minúscula y una mayúscula.');
}

function validar2Numeros() {
  if ((password.match(/\d/g) || []).length < 2)
    alert('La contraseña debe contener mínimo 2 números.');
  else
    return true;
}
function validarIngreso() {
  var usuarioValido = emailsPermitidos.some(function (usuario) {
    return usuario.email === email && usuario.password === password;
  });

  if (usuarioValido) {
    alert('¡Inicio de sesión exitoso!');
    return true;
  } else {
    alert('Usuario o contraseña incorrectos. Inténtalo de nuevo.');
    return false;
  }
}



function limpiarCampos() {
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
}