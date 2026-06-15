# Moodle Proctor — Browser Extension

[![Chrome](https://img.shields.io/badge/Chrome-MV3-4285F4?style=flat-square&logo=googlechrome&logoColor=white)](https://developer.chrome.com/docs/extensions/mv3/)
[![Edge](https://img.shields.io/badge/Edge-Compatible-0078D7?style=flat-square&logo=microsoftedge&logoColor=white)](https://www.microsoft.com/edge)
[![Moodle](https://img.shields.io/badge/Moodle-5.2%2B-orange?style=flat-square&logo=moodle)](https://moodle.org)
[![Branch](https://img.shields.io/badge/Branch-MOODLE__52-green?style=flat-square)](https://github.com/Johnrivera7/moodle_proctor_extension/tree/MOODLE_52)
[![Version](https://img.shields.io/badge/Version-1.1.0-informational?style=flat-square)](manifest.json)
[![License](https://img.shields.io/badge/License-GPL--3.0-blue?style=flat-square)](LICENSE)

Extensión **Chromium MV3** para browser lock. Compatible con suite **MOODLE_52** (Moodle 5.2+ / PHP 8.5+).

| | |
|---|---|
| **Repositorio** | https://github.com/Johnrivera7/moodle_proctor_extension |
| **Rama** | **`MOODLE_52`** |
| **Versión** | 1.1.0 |

> Moodle 4.5: rama [`MOODLE_45`](https://github.com/Johnrivera7/moodle_proctor_extension/tree/MOODLE_45)

---

## Instalación fácil (estudiantes)

1. Publicar como **no listada** en Chrome Web Store → [INSTALL_CHROME.md](INSTALL_CHROME.md)
2. Admin pega URL en **Moodle Proctor → Chrome Web Store URL**
3. Estudiante: bloque del curso → **Instalar extensión** → **Añadir a Chrome**

---

## Instalación manual

```bash
git clone -b MOODLE_52 https://github.com/Johnrivera7/moodle_proctor_extension.git
# chrome://extensions → Modo desarrollador → Cargar descomprimida
```

---

## Funciones

| Función | Descripción |
|---------|-------------|
| 🔒 Browser lock | Bloquea cambio de pestaña |
| ⌨️ Atajos | Ctrl+C/V/P bloqueados |
| 📡 Detección | Página install + quiz attempt |

---

## Suite MOODLE_52

| Repo | Rol |
|------|-----|
| [moodle_proctor](https://github.com/Johnrivera7/moodle_proctor/tree/MOODLE_52) | Config + página install |
| [moodle_quizaccess_proctor](https://github.com/Johnrivera7/moodle_quizaccess_proctor/tree/MOODLE_52) | Integración quiz |
| [moodle_block_proctor](https://github.com/Johnrivera7/moodle_block_proctor/tree/MOODLE_52) | Enlace install |
| [moodle_proctor_python](https://github.com/Johnrivera7/moodle_proctor_python/tree/MOODLE_52) | Python |
| **moodle_proctor_extension** | ← Extensión |

---

## Licencia

GPL-3.0+ — [LICENSE](LICENSE)
