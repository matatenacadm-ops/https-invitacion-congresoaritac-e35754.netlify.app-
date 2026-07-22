# 🎫 Invitación Congreso ARITAC 2026

Sitio web oficial de la invitación para el **Congreso ARITAC 2026** - *Transformación Organizacional: Sinergia entre Talento y Tecnología*

## 📅 Información del Evento

- **Fechas:** 20 y 21 de Agosto, 2026
- **Ubicación:** Exhacienda del Carmen, Toluca
- **Tema:** Transformación Organizacional - Sinergia entre Talento y Tecnología
- **Conmemoración:** ARITAC 60 Aniversario

## 🎯 Agenda

### Jueves 20 de Agosto
- **9:30 - 10:30:** Rogelio Salcedo Villacampa
- **10:30 - 11:30:** PANEL
- **12:00 - 1:00:** Alberto del Castillo Roman
- **2:30 - 3:30:** Martha Hernández Reyes
- **3:30 - 4:30:** Jimena Osio Rioseco

### Viernes 21 de Agosto
- **9:00 - 10:00:** Juan Pablo Ventosa Franqués
- **10:00 - 11:00:** Fernando Soto Vilchis
- **11:30 - 12:30:** José Balam Hernández Aguilar / Samuel Adrian Fernández Ubando
- **12:30 - 1:30:** Miguel Ángel Andrade García Alonso

## 🚀 Características

- ✨ Diseño moderno con efecto glassmorphism
- ⏱️ Contador regresivo dinámico
- 📱 Totalmente responsivo
- 🎨 Animaciones suaves
- 🔗 Integración con WhatsApp para RSVP
- 📊 Meta tags para compartir en redes sociales

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3 (Glassmorphism, Gradients, Animations)
- JavaScript Vanilla
- Google Fonts (Cinzel, Inter)
- Netlify (Hosting)

## 📝 Archivos Principales

- `index.html` - Página principal con estructura HTML
- `styles.css` - Estilos y animaciones
- `script.js` - Lógica del sitio (contador, formulario, etc.)
- `og-image.html` - Generador de imagen para redes sociales
- `.netlify.toml` - Configuración de Netlify

## 🔧 Instrucciones de Uso

### 1. Clonar el repositorio
```bash
git clone https://github.com/matatenacadm-ops/https-invitacion-congresoaritac-e35754.netlify.app-.git
cd https-invitacion-congresoaritac-e35754.netlify.app-
```

### 2. Abrir localmente
Simplemente abre `index.html` en tu navegador:
```bash
open index.html
```

O usa un servidor local:
```bash
python -m http.server 8000
# Luego abre http://localhost:8000
```

### 3. Desplegar en Netlify
El repositorio está conectado a Netlify. Los cambios se despliegan automáticamente.

## 📤 Compartir en Redes Sociales

El sitio incluye meta tags de Open Graph para una vista previa hermosa:

- **Facebook:** Muestra título, descripción e imagen personalizada
- **Twitter:** Optimizado con Twitter Card
- **LinkedIn:** Compatible con meta tags profesionales
- **WhatsApp:** Muestra la miniatura al compartir el link

## 🎨 Personalización

### Cambiar Colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --bg-dark: #0a0f1a;
    --primary: #4a90e2;
    --accent: #20c997;
    --gold: #d4af37;
}
```

### Cambiar Conferencistas
Actualiza el array `agendaData` en `script.js`:
```javascript
const agendaData = {
    jueves: [
        { time: '9:30 a 10:30', speaker: 'Nombre', type: 'speaker' }
    ],
    viernes: [...]
};
```

### Cambiar Número de WhatsApp
En `script.js`, actualiza:
```javascript
const whatsappNumber = '527291026359'; // Tu número aquí
```

## 📱 Funcionalidades

### Contador Regresivo
Se actualiza cada segundo y muestra días, horas, minutos y segundos hasta el evento.

### Tabs de Agenda
Navega entre Jueves y Viernes con animaciones suaves.

### Formulario RSVP
Los datos se envían directamente a WhatsApp con formato personalizado.

### Scroll Reveal
Los elementos se animan al hacer scroll.

## 🔗 Enlaces Útiles

- 🌐 [Sitio Web](https://invitacion-congresoaritac-e35754.netlify.app/)
- 🏢 [ARITAC](https://www.aritac.com.mx)
- 📞 **WhatsApp:** +52 729-102-6359

## 📧 Contacto

Para consultas sobre el evento:
- **Email:** contacto@aritac.com.mx
- **WhatsApp:** +52 729-102-6359

## 📄 Licencia

Este proyecto es propiedad de ARITAC. Todos los derechos reservados.

## 👥 Contribuidores

- **Diseño & Desarrollo:** ARITAC Ops Team

---

**Última actualización:** 22 de Julio, 2026

¡Nos vemos el 20 y 21 de Agosto en la Exhacienda del Carmen! 🎉