# Moodle Proctor — Browser Extension

[![Chrome](https://img.shields.io/badge/Chrome-MV3-4285F4?style=flat-square&logo=googlechrome&logoColor=white)](https://developer.chrome.com/docs/extensions/mv3/)
[![Edge](https://img.shields.io/badge/Edge-Compatible-0078D7?style=flat-square&logo=microsoftedge&logoColor=white)](https://www.microsoft.com/edge)
[![Moodle](https://img.shields.io/badge/Moodle-5.2%2B-orange?style=flat-square&logo=moodle)](https://moodle.org)
[![Branch](https://img.shields.io/badge/Branch-MOODLE__52-green?style=flat-square)](https://github.com/Johnrivera7/moodle_proctor_extension/tree/MOODLE_52)
[![Version](https://img.shields.io/badge/Version-1.1.0-informational?style=flat-square)](manifest.json)
[![License](https://img.shields.io/badge/License-GPL--3.0-blue?style=flat-square)](LICENSE)

Extensión **Chromium MV3** para browser lock durante exámenes. **Opcional** — desde v1.4.0 la suite funciona en todos los navegadores sin extensión (verificación de identidad y proctoring básico en el navegador).

| | |
|---|---|
| **Autor** | [John Rivera](https://github.com/Johnrivera7) |
| **Contacto** | [johnriveragonzalez7@gmail.com](mailto:johnriveragonzalez7@gmail.com) |
| **Repositorio** | https://github.com/Johnrivera7/moodle_proctor_extension |
| **Rama** | **`MOODLE_52`** |
| **Versión** | 1.1.0 |

> Moodle 4.5: rama [`MOODLE_45`](https://github.com/Johnrivera7/moodle_proctor_extension/tree/MOODLE_45)

---

## Estado actual

| Función | Sin extensión (v1.4.0) | Con extensión |
|---------|------------------------|---------------|
| Verificación cédula + rostro | ✅ Navegador | — |
| Webcam durante quiz | ✅ | ✅ |
| Bloqueo pestañas / atajos | ⚠️ Parcial (JS) | ✅ Reforzado |
| Publicación Chrome Web Store | — | Pendiente |

La extensión está **desactivada por defecto** en el núcleo (`enableextension = 0`).

---

## Instalación manual (desarrollo / IT)

```bash
git clone -b MOODLE_52 https://github.com/Johnrivera7/moodle_proctor_extension.git
# chrome://extensions → Modo desarrollador → Cargar descomprimida
```

Guía detallada: [INSTALL_CHROME.md](INSTALL_CHROME.md)

---

## Instalación para estudiantes (producción)

1. Publicar como **no listada** en Chrome Web Store
2. Admin pega URL en **Moodle Proctor → Chrome Web Store URL**
3. Página: `/local/moodle_proctor/extension_install.php?courseid=ID`

---

## Funciones

| Función | Descripción |
|---------|-------------|
| Browser lock | Bloquea cambio de pestaña |
| Atajos | Ctrl+C/V/P bloqueados |
| Detección | Página install + quiz attempt |

---

## Suite MOODLE_52

| Repo | Rol |
|------|-----|
| [moodle_proctor](https://github.com/Johnrivera7/moodle_proctor/tree/MOODLE_52) | Config + página install |
| [moodle_quizaccess_proctor](https://github.com/Johnrivera7/moodle_quizaccess_proctor/tree/MOODLE_52) | Integración quiz |
| [moodle_block_proctor](https://github.com/Johnrivera7/moodle_block_proctor/tree/MOODLE_52) | Bloque |
| [moodle_proctor_python](https://github.com/Johnrivera7/moodle_proctor_python/tree/MOODLE_52) | Python |
| **moodle_proctor_extension** | ← Extensión |

---

## Licencia

GPL-3.0+ — [LICENSE](LICENSE)

## Soporte

- **Autor:** [John Rivera](https://github.com/Johnrivera7) · [johnriveragonzalez7@gmail.com](mailto:johnriveragonzalez7@gmail.com)
- **Issues:** https://github.com/Johnrivera7/moodle_proctor_extension/issues
