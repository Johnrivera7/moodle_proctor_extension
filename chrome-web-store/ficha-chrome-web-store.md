# Ficha para Chrome Web Store — Moodle Proctor 1.3.0

Copiar cada bloque en el campo indicado del panel de desarrollador.

## Ficha de Play Store (pestaña "Store listing")

**Nombre:** Moodle Proctor

**Descripción breve (máx. 132 caracteres):**
Supervisión de exámenes en Moodle: bloquea copiar/pegar, pestañas nuevas y herramientas de IA durante el cuestionario.

**Descripción detallada:**
Moodle Proctor es la extensión de navegador del sistema de supervisión de exámenes Moodle Proctor. Solo actúa mientras el estudiante está dentro de un intento de cuestionario supervisado en Moodle; fuera del examen no bloquea nada.

Durante el examen:
• Bloquea copiar, pegar, cortar, el menú contextual y los atajos de teclado.
• Mantiene el foco en la pestaña del examen y cierra pestañas nuevas.
• Cierra pestañas de herramientas de inteligencia artificial (ChatGPT, Claude, Gemini, Copilot, Perplexity, Poe).
• Detecta si hay más de una pantalla conectada.
• Avisa cuando el foco sale del navegador del examen (por ejemplo, al cambiar a otro navegador o aplicación).

Cada evento se informa a la página del examen en Moodle, que lo registra como incidencia para el docente.

En las páginas del curso, la extensión solo indica que está instalada, para que Moodle muestre su estado al estudiante. No necesita configuración y funciona en cualquier sitio Moodle que use el plugin Moodle Proctor.

La extensión no recopila, almacena ni envía datos personales; no se comunica con ningún servidor.

**Categoría:** Educación
**Idioma:** Español (agregar Inglés si se desea)

**Imágenes requeridas:**
- Ícono 128×128: incluido en el zip (icons/icon128.png).
- Al menos 1 captura de pantalla de 1280×800 (o 640×400): tomar una del examen o del bloque del curso en su Moodle, sin rostros de terceros.
- (Opcional) Imagen promocional pequeña 440×280.

## Prácticas de privacidad (pestaña "Privacy")

**Propósito único:**
Aplicar las restricciones de integridad académica (bloqueo de copiar/pegar, pestañas y herramientas de IA, detección de pantallas adicionales y de salida del navegador) durante un intento de cuestionario supervisado en Moodle.

**Justificación de permisos:**
- `tabs`: mantener activa la pestaña del examen, cerrar pestañas nuevas y detectar pestañas de herramientas de IA por su dirección durante el examen.
- `system.display`: detectar si hay más de una pantalla conectada durante el examen.
- Acceso a sitios (scripts en `/mod/quiz/attempt.php`, `/mod/quiz/view.php`, `/course/view.php` y `/local/moodle_proctor/*`): la extensión debe funcionar en el sitio Moodle de cualquier institución, cuyo dominio no se conoce de antemano. En el intento del cuestionario aplica el bloqueo; en las demás páginas solo indica que está instalada.

**¿Usa código remoto?** No.

**Uso de datos:** marcar que **no** recopila ninguna categoría de datos, y certificar las tres declaraciones (no vende datos a terceros, no los usa para fines ajenos al propósito único, no los usa para determinar solvencia crediticia).

**URL de la política de privacidad:** publicar el texto siguiente en una página pública (sitio de la institución, GitHub Pages o el README del repositorio) y pegar su URL.

## Política de privacidad (texto para publicar)

**Política de privacidad — extensión Moodle Proctor**

La extensión de navegador Moodle Proctor no recopila, almacena, transmite ni vende datos personales.

Funciona únicamente dentro del navegador del usuario. Durante un intento de cuestionario supervisado en Moodle detecta eventos (copiar/pegar, cambio de pestaña, apertura de herramientas de inteligencia artificial, pantallas adicionales, salida del navegador) y los comunica a la propia página del examen en Moodle. Es esa plataforma Moodle, administrada por la institución educativa, la que registra las incidencias según su propia política de privacidad.

La extensión no se conecta con servidores propios ni de terceros, no usa cookies y no guarda información en el navegador.

Contacto: johnriveragonzalez7@gmail.com

## Distribución (pestaña "Distribution")

- **Visibilidad:** No listada (solo accesible con el enlace).
- **Regiones:** todas (o solo Chile).
- **Precio:** gratis.
