# Validación de Formularios con Zod

Proyecto de práctica para validar un formulario de registro usando la librería **Zod** desde CDN.

## Demo

Abrí `index.html` en tu navegador. El formulario valida nombre, correo electrónico y contraseña antes de aceptar el envío.

## Estructura

```
├── index.html   # HTML con el formulario
├── style.css    # Estilos visuales y estados de error
└── script.js    # Esquema Zod y lógica de validación
```

## Esquema de validación

| Campo      | Regla                          |
|------------|---------------------------------|
| `name`     | Cadena no vacía                 |
| `email`    | Formato de correo electrónico   |
| `password` | Mínimo 6 caracteres             |

## Funcionamiento

1. El usuario completa el formulario y presiona **Registrar**.
2. Se ejecuta `registerSchema.parse(formData)` dentro de un `try/catch`.
3. Si los datos son válidos → muestra `alert("¡Registro exitoso!")`.
4. Si hay errores → se muestran mensajes debajo de cada campo y el input se resalta en rojo.

## Recursos

- [Zod Documentation](https://zod.dev/)
- [Zod CDN](https://cdn.jsdelivr.net/npm/zod@3.21.4/lib/index.umd.min.js)
