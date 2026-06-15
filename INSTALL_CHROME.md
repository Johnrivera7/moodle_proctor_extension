# Publicar e instalar la extensión Chrome

Guía para que los estudiantes instalen **con un clic** desde el navegador.

---

## Opciones de instalación (de más fácil a más técnica)

| Método | Experiencia estudiante | Requiere |
|--------|------------------------|----------|
| **1. Chrome Web Store (no listada)** | Un clic → “Añadir a Chrome” | Cuenta desarrollador Google (~5 USD único) |
| **2. Política empresarial (Google / Intune)** | Cero clics — IT la instala | Chrome Enterprise / Workspace |
| **3. Página Moodle + ZIP manual** | Descargar ZIP → cargar descomprimida | Modo desarrollador |
| **4. CRX + política** | Solo IT | ExtensionInstallForcelist |

---

## 1 · Chrome Web Store (recomendado)

Es la **única forma** de que un estudiante instale con un botón normal en Chrome/Edge **sin modo desarrollador**.

### Pasos para publicar

1. **Cuenta desarrollador**  
   https://developer.chrome.com/docs/webstore/register  
   Pago único ~5 USD.

2. **Empaquetar la extensión**

   ```bash
   cd moodle_proctor_extension
   zip -r moodle_proctor_extension.zip manifest.json background.js content.js icons/
   ```

3. **Subir a Chrome Web Store Developer Dashboard**  
   https://chrome.google.com/webstore/devconsole

   - Nuevo elemento → subir ZIP  
   - Permisos: explicar uso de `tabs` y `host_permissions` (supervisión de exámenes Moodle)  
   - Política de privacidad: URL de tu institución o README del repo  
   - Capturas: 1280×800 de la extensión activa en un quiz

4. **Visibilidad: No listada (Unlisted)**  
   - No aparece en búsquedas públicas  
   - Solo quien tiene el enlace puede instalar  
   - Ideal para instituciones

5. **Copiar URL de la tienda**  
   Formato:
   ```
   https://chrome.google.com/webstore/detail/nombre-extension/ABCDEF1234567890
   ```

6. **Configurar en Moodle**  
   **Administración → Plugins locales → Moodle Proctor → Chrome Web Store URL**  
   Pegar la URL.

7. **Estudiantes**  
   Bloque del curso → **Instalar extensión de navegador**  
   O directamente: `/local/moodle_proctor/extension_install.php`

### Edge

Microsoft Edge usa la **misma tienda** que Chrome para extensiones Chromium. El mismo enlace funciona en Edge (“Obtener”).

---

## 2 · Despliegue institucional (sin intervención del estudiante)

### Google Admin Console

```
Dispositivos → Chrome → Apps y extensiones → Usuarios y navegadores
→ Añadir extensión de Chrome Web Store por ID
→ Instalación forzada
```

Extension ID = último segmento de la URL de la tienda.

### Microsoft Intune (Edge)

Política **ExtensionInstallForcelist** con el ID de la extensión.

---

## 3 · Instalación manual (desarrollo / sin tienda)

1. Descargar ZIP desde GitHub o Moodle  
2. Descomprimir  
3. `chrome://extensions` → Modo desarrollador → **Cargar descomprimida**

⚠️ Chrome muestra aviso “desactivada en modo desarrollador” en perfiles gestionados.

---

## 4 · CRX (avanzado)

Chrome **bloqueó** arrastrar `.crx` desde 2018 para usuarios normales.

Solo funciona con política:

```json
{
  "ExtensionInstallForcelist": [
    "EXTENSION_ID;https://tuservidor/moodle_proctor.crx"
  ]
}
```

Opcional en Moodle: **CRX download URL** para que IT descargue el paquete.

Generar CRX (requiere Chrome):

```bash
# Desde chrome://extensions → Empaquetar extensión → clave privada .pem
# Genera moodle_proctor_extension.crx
```

---

## Integración con Moodle Proctor

| Ajuste Moodle | Valor |
|---------------|-------|
| Require browser extension | Sí |
| Chrome Web Store URL | URL no listada de la tienda |
| CRX download URL | (opcional) URL del .crx para IT |

Página estudiante: **`/local/moodle_proctor/extension_install.php?courseid=ID`**

---

## Resumen

| Pregunta | Respuesta |
|----------|-----------|
| ¿Instalar solo desde Moodle sin tienda? | No en un clic — Chrome lo impide |
| ¿Mejor opción para estudiantes? | **Chrome Web Store no listada** + URL en Moodle |
| ¿Mejor opción para universidad? | **Política empresarial** force-install |
| ¿Edge funciona? | Sí, mismo paquete MV3 |

---

## Enlaces

- [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
- [Publicar extensión MV3](https://developer.chrome.com/docs/webstore/publish)
- [Extensiones no listadas](https://developer.chrome.com/docs/webstore/cws-dashboard-listing#visibility)
