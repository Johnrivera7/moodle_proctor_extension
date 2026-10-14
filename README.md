# Moodle Proctor — Browser Extension

[![Chrome](https://img.shields.io/badge/Chrome-MV3-4285F4?style=flat-square&logo=googlechrome&logoColor=white)](https://developer.chrome.com/docs/extensions/mv3/)
[![Edge](https://img.shields.io/badge/Edge-Compatible-0078D7?style=flat-square&logo=microsoftedge&logoColor=white)](https://www.microsoft.com/edge)
[![Moodle](https://img.shields.io/badge/Moodle-5.3-orange?style=flat-square&logo=moodle)](https://moodle.org)
[![Branch](https://img.shields.io/badge/Branch-MOODLE__53-green?style=flat-square)](https://github.com/Johnrivera7/moodle_proctor_extension/tree/MOODLE_53)
[![Version](https://img.shields.io/badge/Version-1.2.0-informational?style=flat-square)](manifest.json)
[![License](https://img.shields.io/badge/License-GPL--3.0-blue?style=flat-square)](LICENSE)

Extensión **Chromium MV3** (versión **1.2.0**) para reforzar el bloqueo del navegador durante el examen. Es **opcional**. La cámara, la identidad y el bloqueo de pantalla completa funcionan sin ella.

| | |
|---|---|
| **Autor** | [John Rivera](https://github.com/Johnrivera7) |
| **Contacto** | [johnriveragonzalez7@gmail.com](mailto:johnriveragonzalez7@gmail.com) |
| **Repositorio** | https://github.com/Johnrivera7/moodle_proctor_extension |
| **Rama** | **`MOODLE_53`** |
| **Versión** | 1.2.0 |

> Moodle 5.2: rama [`MOODLE_52`](https://github.com/Johnrivera7/moodle_proctor_extension/tree/MOODLE_52). Moodle 4.5: rama [`MOODLE_45`](https://github.com/Johnrivera7/moodle_proctor_extension/tree/MOODLE_45).

---

## Qué hace

| Función | Sin extensión | Con extensión 1.2.0 |
|---------|:-------------:|:-------------------:|
| Cédula, webcam e identidad | Sí | Sí |
| Pantalla completa, copiar/pegar y atajos | Sí (JavaScript de la página) | Sí |
| Volver el foco a la pestaña del examen | No | Sí |
| Cerrar pestañas nuevas | No | Sí |
| Cerrar pestañas de ChatGPT, Claude, Gemini, Copilot, Perplexity y Poe | No | Sí |
| Avisar si hay un segundo monitor | Solo `screen.isExtended` | Sí, con `chrome.system.display` |

La extensión no ve aplicaciones de escritorio, máquinas virtuales ni Alt+Tab.

---

## Instalar en Chrome o Edge (desarrollo)

1. Clonar la rama de Moodle 5.3:

```bash
git clone -b MOODLE_53 https://github.com/Johnrivera7/moodle_proctor_extension.git
```

2. Abrir `chrome://extensions` (en Edge: `edge://extensions`).
3. Activar **Modo de desarrollador**.
4. Pulsar **Cargar descomprimida** y elegir la carpeta del repositorio (la que contiene `manifest.json`).
5. La extensión queda en versión **1.2.0**. Si ya estaba cargada, pulsar **Actualizar** después de un `git pull`.

No hace falta publicarla en la Chrome Web Store para probarla en un equipo propio.

Guía de publicación institucional: [INSTALL_CHROME.md](INSTALL_CHROME.md).

---

## Activarla en Moodle

La extensión se carga sola en las páginas `mod/quiz/attempt.php`. Para **exigirla** al estudiante:

1. En el cuestionario, **Restricciones extra → Requerir extensión de navegador** = Sí.
2. Opcional: en **Plugins locales → Moodle Proctor**, pegar la URL de Chrome Web Store cuando exista. Mientras no haya tienda, el estudiante la carga descomprimida.

Página de ayuda: `/local/moodle_proctor/extension_install.php`.

---

## Suite MOODLE_53

| Repo | Rol |
|------|-----|
| [moodle_proctor](https://github.com/Johnrivera7/moodle_proctor/tree/MOODLE_53) | Config + página install |
| [moodle_quizaccess_proctor](https://github.com/Johnrivera7/moodle_quizaccess_proctor/tree/MOODLE_53) | Integración quiz |
| [moodle_block_proctor](https://github.com/Johnrivera7/moodle_block_proctor/tree/MOODLE_53) | Bloque |
| [moodle_proctor_python](https://github.com/Johnrivera7/moodle_proctor_python/tree/MOODLE_53) | Python legacy |
| **moodle_proctor_extension** | ← Extensión |

---

## Licencia

GPL-3.0+ — [LICENSE](LICENSE)

## Soporte

- **Autor:** [John Rivera](https://github.com/Johnrivera7) · [johnriveragonzalez7@gmail.com](mailto:johnriveragonzalez7@gmail.com)
- **Issues:** https://github.com/Johnrivera7/moodle_proctor_extension/issues
