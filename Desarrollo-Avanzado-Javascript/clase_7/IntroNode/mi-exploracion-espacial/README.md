# Mi Exploración Espacial 🌌🚀

**Bienvenido, Explorador Estelar.**

Este proyecto nace de un taller práctico de Node.js y npm, donde aprendimos a configurar un proyecto desde cero, usar módulos, crear scripts personalizados y compartir información directo en la consola. Todo mientras exploramos el cosmos y registramos nuestros planetas favoritos.

## ¿Qué hace esto?

Imagina que eres un explorador espacial. Has viajado por la galaxia y has descubierto mundos increíbles. Necesitas una bitácora para registrar tus hallazgos y poder compartirlos con otros exploradores. Eso es exactamente esto: una bitácora espacial que se ejecuta en tu terminal.

Cuando ejecutas el proyecto, verás algo como esto:

```
🚀 REPORTE DE EXPLORACIÓN ESPACIAL 🚀

✨ Planeta: Titán
📝 Descripción: La luna más grande de Saturno, con lagos de metano.
📅 Descubierto en: 1655
------------------------------------

✨ Planeta: Próxima Centauri b
📝 Descripción: Un exoplaneta rocoso en la zona habitable de su estrella.
📅 Descubierto en: 2016
------------------------------------
...
📊 Total de planetas descubiertos: 5
🌟 Misión cumplida. ¡Hasta la próxima, explorador! 🌟
```

Todo esto acompañado de una vaquita astronáutica (gracias al paquete `cowsay`) que celebra tus descubrimientos contigo.

## ¿Cómo usarlo?

Antes de comenzar, asegúrate de tener **Node.js** instalado en tu computadora. Si no lo tienes, ve a [nodejs.org](https://nodejs.org/), descarga la versión LTS e instálala. Esto también instala npm automáticamente.

Para verificar que todo está listo, abre tu terminal y escribe:

```bash
node --version
npm --version
```

Si ves dos números de versión, estás listo para despegar.

Ahora sí, sigue estos pasos para iniciar tu misión:

### 1. Consigue el proyecto

Tienes dos formas de obtenerlo:

-   **Opción A — Lo tienes en tu computadora:** El proyecto ya está en la carpeta `mi-exploracion-espacial`. Solo navega hasta ella.

-   **Opción B — Lo clonas de GitHub (si está publicado):**

    ```bash
    git clone <url-del-repositorio>
    cd mi-exploracion-espacial
    ```

### 2. Navega a la carpeta del proyecto

En tu terminal, escribes:

```bash
cd ruta/donde/esta/mi-exploracion-espacial
```

Por ejemplo, si el proyecto está en tu escritorio:

```bash
cd Desktop/mi-exploracion-espacial
```

### 3. Instala las dependencias

El proyecto usa un paquete externo llamado `cowsay` para mostrar mensajes divertidos. Para instalarlo (junto con todas sus dependencias), ejecuta:

```bash
npm install
```

Este comando lee el archivo `package.json`, busca la sección `"dependencies"` y descarga todo lo necesario dentro de una carpeta llamada `node_modules/`. Verás una salida similar a:

```
added 41 packages, and audited 42 packages in 2m
found 0 vulnerabilities
```

Eso significa que todo salió bien. Si ves errores, revisa que tengas una conexión a internet estable y que Node.js esté correctamente instalado.

### 4. Ejecuta el programa

Ahora viene lo emocionante. Para lanzar la exploración espacial, escribe:

```bash
npm run explorar
```

Este comando hace lo siguiente:

1.  npm busca en el `package.json` un script llamado `"explorar"`.
2.  Encuentra que `"explorar"` ejecuta `node index.js`.
3.  Node.js ejecuta `index.js`, que a su vez importa los datos de `planetas.js` y el paquete `cowsay`.
4.  En tu consola se imprime el reporte completo de los planetas descubiertos, con una vaquita astronáutica dándote la bienvenida y un dragón celebrando al final.

### 5. Disfruta el resultado

Verás algo como esto (con una vaquita simbólica gracias a cowsay):

```
 _____________________________________
< 🚀 REPORTE DE EXPLORACIÓN ESPACIAL 🚀 >
 -------------------------------------
        \   ^__^
         \  (oO)\_______
            (__)\       )\/\
             U ||----w |
                ||     ||

✨ Planeta: Titán
📝 Descripción: La luna más grande de Saturno, con lagos de metano.
📅 Descubierto en: 1655
------------------------------------

✨ Planeta: Próxima Centauri b
📝 Descripción: Un exoplaneta rocoso en la zona habitable de su estrella.
📅 Descubierto en: 2016
------------------------------------

✨ Planeta: Kepler-442b
📝 Descripción: Un super-Tierra en la zona habitable, a 1200 años luz.
📅 Descubierto en: 2015
------------------------------------

✨ Planeta: TRAPPIST-1e
📝 Descripción: Planeta rocoso del sistema TRAPPIST-1, potencialmente habitable.
📅 Descubierto en: 2017
------------------------------------

✨ Planeta: Marte
📝 Descripción: El planeta rojo, próximo destino de la exploración humana.
📅 Descubierto en: Antigüedad
------------------------------------

📊 Total de planetas descubiertos: 5
```

### 6. Vuelve a ejecutarlo cuando quieras

Cada vez que quieras ver tu bitácora espacial, solo repite el paso 4:

```bash
npm run explorar
```

No necesitas volver a instalar dependencias a menos que borres la carpeta `node_modules/` o agregues nuevos paquetes.

### ¿Qué hago si algo sale mal?

-   **"npm no se reconoce como un comando":** Node.js no está instalado o no está en tu PATH. Vuelve a nodejs.org e instálalo.
-   **"module not found: cowsay":** Olvidaste ejecutar `npm install`. Hazlo y vuelve a intentar.
-   **"Cannot find module './planetas'":** Asegúrate de estar en la carpeta correcta (`mi-exploracion-espacial`) y que `planetas.js` exista junto a `index.js`.

Para salir de dudas rápidamente, también puedes ejecutar el programa directamente sin el script npm:

```bash
node index.js
```

Esto hace exactamente lo mismo que `npm run explorar`, pero sin pasar por el script de npm.

## ¿Cómo se construyó?

Este taller lo armamos paso a paso:

1.  **`npm init -y`** para crear el archivo `package.json` que le da vida al proyecto.
2.  **`planetas.js`** — un módulo que exporta un array de objetos. Cada objeto es un planeta con nombre, descripción y año de descubrimiento.
3.  **`index.js`** — el centro de comunicaciones. Importa los datos desde `planetas.js` y los muestra en pantalla con un formato amigable.
4.  **Script en `package.json`** — agregamos `"explorar": "node index.js"` dentro de la sección `"scripts"`. Así, con un simple `npm run explorar`, ejecutamos todo.
5.  **Dependencias externas** — instalamos `cowsay` para darle personalidad al reporte. La vaquita aparece al inicio y al final, y si hay más de 3 planetas descubiertos, ¡hasta se convierte en un dragón!

## Funcionalidades extra

Además de lo básico del taller, este proyecto incluye:

-   **Módulo `cowsay` integrado** para mostrar mensajes con animales astronáuticos.
-   **Contador de planetas antiguos** — detecta qué planetas fueron descubiertos en la antigüedad (cuando su año no es un número).
-   **Mascota dinámica** — la vaquita aparece al inicio; al final, si descubriste más de 3 planetas, aparece un dragón celebrando contigo.
-   **`.gitignore`** — evita que la carpeta `node_modules/` se suba al repositorio.

## Tecnologías usadas

-   **Node.js** — para ejecutar JavaScript fuera del navegador.
-   **npm** — para gestionar dependencias y scripts.
-   **cowsay** — para darle un toque divertido a la salida en consola.

## ¿Quieres contribuir?

Si eres un explorador aventurero y quieres agregar más planetas o nuevas funcionalidades, siéntete libre de hacer un fork del proyecto y enviar tus sugerencias. El espacio es vasto y hay muchos mundos por descubrir.

---

**Hecho con ❤️ y mucho café interestelar por un explorador en formación.**
