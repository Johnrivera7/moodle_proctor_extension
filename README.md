# Moodle Proctor — Browser extension (Chrome MV3)

Extensión Chromium para browser lock durante exámenes supervisados en Moodle.

- **Repositorio:** https://github.com/Johnrivera7/moodle_proctor_extension

## Instalación (desarrollo / institucional)

1. Chrome → `chrome://extensions`
2. Activar **Modo desarrollador**
3. **Cargar descomprimida** → seleccionar esta carpeta

## Funciones

- Bloqueo de cambio de pestaña durante intento
- Bloqueo de nuevas pestañas
- Deshabilita Ctrl+C / Ctrl+V / clic derecho
- Responde a ping de `quizaccess_moodle_proctor` AMD

## Configuración Moodle

**Administración → Moodle Proctor → Require browser extension**

## Empaquetado

```bash
zip -r moodle_proctor_extension.zip manifest.json background.js content.js icons/
```

## Licencia

GPL-3.0+
