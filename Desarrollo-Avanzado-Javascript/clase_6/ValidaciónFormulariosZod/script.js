const { z } = window.Zod;

const registerSchema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  email: z.string().email("Correo electrónico no válido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

const $ = (id) => document.getElementById(id);

function limpiarErrores() {
  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
  document.querySelectorAll("input").forEach((el) => el.classList.remove("error"));
  $("errors").textContent = "";
}

function mostrarErrores(error) {
  if (!(error instanceof z.ZodError)) return;
  error.errors.forEach((e) => {
    const campo = e.path[0];
    const span = $(`${campo}Error`);
    const input = $(campo);
    if (span) span.textContent = e.message;
    if (input) input.classList.add("error");
  });
}

$("registerForm").addEventListener("submit", (event) => {
  event.preventDefault();
  limpiarErrores();

  const formData = {
    name: $("name").value,
    email: $("email").value,
    password: $("password").value,
  };

  try {
    registerSchema.parse(formData);
    alert("¡Registro exitoso!");
  } catch (error) {
    mostrarErrores(error);
  }
});
