# Moodle Proctor — Browser Extension

[![Chrome](https://img.shields.io/badge/Chrome-MV3-4285F4?style=flat-square&logo=googlechrome&logoColor=white)](https://developer.chrome.com/docs/extensions/mv3/)
[![Edge](https://img.shields.io/badge/Edge-Compatible-0078D7?style=flat-square&logo=microsoftedge&logoColor=white)](https://www.microsoft.com/edge)
[![License](https://img.shields.io/badge/License-GPL--3.0-blue?style=flat-square)](LICENSE)
[![Moodle](https://img.shields.io/badge/Integrates-quizaccess__moodle__proctor-orange?style=flat-square&logo=moodle)](https://github.com/Johnrivera7/moodle_quizaccess_proctor)
[![Version](https://img.shields.io/badge/Version-1.0.0-informational?style=flat-square)](manifest.json)

Extensión **Chromium MV3** para browser lock durante exámenes supervisados. Complementa el JavaScript del plugin Moodle.

| | |
|---|---|
| **Repositorio** | https://github.com/Johnrivera7/moodle_proctor_extension |
| **Autor** | [John Rivera](https://github.com/Johnrivera7) |
| **Tipo** | Extensión navegador (no plugin Moodle) |

> 🌐 **Separado a propósito** — se instala en el navegador del estudiante, no en Moodle.

---

## Requisitos

| Requisito | Detalle |
|-----------|---------|
| Navegador | Chrome, Edge, Brave (Chromium) |
| Moodle | `quizaccess_moodle_proctor` activo en el quiz |
| HTTPS | Recomendado |

---

## Instalación

### Modo desarrollador / institucional

1. Abrir `chrome://extensions`
2. Activar **Modo de desarrollador**
3. **Cargar descomprimida** → seleccionar esta carpeta

### Empaquetar para distribución interna

```bash
zip -r moodle_proctor_extension.zip manifest.json background.js content.js icons/
```

Distribuir el ZIP por política IT de la institución.

---

## Configuración Moodle

1. **Administración → Moodle Proctor → Require browser extension** = Sí
2. En el cuestionario → **Require browser extension** = Sí

---

## Funciones

| Función | Descripción |
|---------|-------------|
| 🔒 Browser lock | Impide cambiar de pestaña activa |
| 🚫 Nuevas pestañas | Cierra pestañas abiertas durante examen |
| ⌨️ Atajos | Bloquea Ctrl+C, Ctrl+V, Ctrl+P, etc. |
| 📋 Copiar/pegar | Deshabilitado en página del quiz |
| 📡 Ping | Responde a señales del AMD de Moodle |

---

## Páginas afectadas

Solo se activa en:

```
*/mod/quiz/attempt.php*
```

---

## Suite Moodle Proctor

| Repo | Rol |
|------|-----|
| [moodle_proctor](https://github.com/Johnrivera7/moodle_proctor) | Núcleo |
| [moodle_quizaccess_proctor](https://github.com/Johnrivera7/moodle_quizaccess_proctor) | Detecta extensión |
| [moodle_block_proctor](https://github.com/Johnrivera7/moodle_block_proctor) | Aviso en curso |
| [moodle_proctor_python](https://github.com/Johnrivera7/moodle_proctor_python) | Análisis facial |
| **moodle_proctor_extension** | ← Esta extensión |

---

## Limitaciones

- No reemplaza **Safe Exam Browser (SEB)**
- El estudiante puede desinstalar la extensión — combinar con políticas institucionales
- Firefox no soportado (solo Chromium MV3)

---

## Licencia

GPL-3.0+ — [LICENSE](LICENSE)
