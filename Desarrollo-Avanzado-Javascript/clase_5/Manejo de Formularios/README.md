# Formulario de Registro de Eventos

Formulario web funcional para el registro de asistentes a eventos. Captura datos personales, intereses, horario preferido, fecha y documento opcional, con validaciones inline y mensajes personalizados.

## Características

- Nombre completo, correo electrónico y teléfono
- Selección de intereses (casillas de verificación)
- Horario preferido (botones de radio)
- Fecha del evento
- Carga opcional de identificación (JPG, PNG, PDF — máx. 5 MB)
- Validaciones inline con mensajes personalizados
- Separación de responsabilidades: HTML, CSS y JS en archivos independientes

## Estructura

```
index.html      — Estructura del formulario
styles.css      — Estilos visuales
script.js       — Lógica de validación
```

## Validaciones

| Campo     | Validación                                     |
|-----------|------------------------------------------------|
| Nombre    | Mín. 3 caracteres, solo letras y espacios      |
| Correo    | Formato usuario@dominio.com                    |
| Teléfono  | Exactamente 10 dígitos                         |
| Intereses | Al menos uno seleccionado                      |
| Horario   | Obligatorio                                    |
| Fecha     | No puede ser anterior a hoy                    |
| Archivo   | Tamaño máximo 5 MB (opcional)                  |

## Uso

Abrir `index.html` en cualquier navegador moderno. No requiere servidor ni dependencias externas.
