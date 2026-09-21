# WebCraft 🌐

> A modern and interactive web development agency website built with HTML, CSS and JavaScript, featuring smooth scrolling, creative animations, custom cursor interactions and immersive visual effects.

## ✨ Overview

**WebCraft** is a creative agency-style website designed to present a modern web development brand and its digital services.

The project focuses on creating an engaging browsing experience rather than a simple static business website. It combines smooth scrolling, animated typography, interactive cursor effects, image transitions and carefully structured sections to create a visually rich web experience.

The website includes:

- Animated loading screen
- Custom mouse cursor interactions
- Smooth scrolling
- Interactive navigation
- Services showcase
- About section
- Service highlights
- Animated marquee sections
- Interactive footer
- Text animation on hover
- Image distortion/effects
- Responsive agency-style visual layout

---

## 🎯 Features

### 🚀 Animated Loader

The website starts with a custom loading animation containing:

- Animated headings
- Loading counter
- Sequential text animations
- GSAP timeline-based transitions
- Smooth transition from loader to the main page

The loader creates an engaging introduction before the main content appears.

### 🖱️ Custom Cursor

Custom cursor elements are used throughout the website to create a more interactive experience.

The cursor follows the user's mouse position using GSAP animations and changes its position according to the section being interacted with.

### 🎨 Interactive Image Effects

The project uses **Shery.js** for image effects and visual interactions.

The services section contains image-based cards with layered images and interactive effects.

### 🌀 Smooth Scrolling

**Locomotive Scroll** is used to provide smooth scrolling throughout the website.

The project also integrates Locomotive Scroll with **GSAP ScrollTrigger** using `scrollerProxy()` so that scroll-based animations can work correctly with the custom scrolling behavior.

### ⚡ GSAP Animations

GSAP is used for several animations, including:

- Loader animations
- Heading entrance animations
- Cursor movement
- Opacity transitions
- Position transitions
- Scroll-related animation integration

### ✨ Textillate Animation

The footer heading uses **Textillate.js** to create an animated text effect when the user hovers over the heading.

### 🧲 Magnetic Navigation

The navigation headings use **Shery.js magnetic effects**, giving the navigation a more interactive feel when the cursor moves around them.

---

## 📄 Website Sections

### 1. Home

The homepage introduces the WebCraft brand with large animated typography and a creative visual layout.

The main heading communicates the website's focus on creating unique web experiences.

### 2. Services

The Services section showcases different services offered by the agency:

- Website Design
- Web Development
- Responsive Design
- Hosting & Domain
- SSL & Security

Each service is presented with a short description and visual elements.

### 3. About

The About section introduces the agency and communicates its focus on:

- Designing
- Creating
- Developing
- Digital experiences
- Creative web projects

It also contains an image and additional agency information.

### 4. Creative / Marquee Section

The project contains animated horizontal text sections featuring phrases related to:

- Design
- Development
- Technology
- Coding
- Creativity

These sections help maintain the visual rhythm of the website.

### 5. Contact / Footer

The footer contains:

- Social media links
- Address information
- Support/enquiry information
- Email information
- Copyright information
- Animated "Let's Create" heading

---

## 🛠️ Tech Stack

### Frontend

- **HTML5** — Website structure and semantic content
- **CSS3** — Styling, layout, animations and visual design
- **JavaScript** — Interactions and functionality

### Libraries

- **GSAP** — High-performance animations
- **GSAP ScrollTrigger** — Scroll-based animation support
- **Locomotive Scroll** — Smooth scrolling
- **Shery.js** — Creative image and interaction effects
- **Three.js** — Used as part of the visual-effects stack
- **jQuery** — DOM manipulation and library integration
- **Textillate.js** — Text entrance/exit animations
- **Lettering.js** — Text animation support
- **Animate.css** — CSS animation utilities

---

## 📁 Project Structure

```text
WebCraft/
│
├── index.html
├── style.css
├── script.js
│
├── assets/
│   ├── page2_cover.jpg
│   ├── scrachcard.png
│   ├── service1.png
│   ├── service2.png
│   ├── service3.png
│   ├── service4.png
│   └── b&g_img.jpg
│
├── favicon.jpeg
└── README.md
```

> The exact asset filenames may change as the project evolves.

---

## 🔧 How It Works

### Locomotive Scroll + ScrollTrigger

Locomotive Scroll handles the smooth scrolling experience while GSAP ScrollTrigger is synchronized with it.

The project uses:

```javascript
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    }
});
```

This allows GSAP and Locomotive Scroll to work together instead of fighting over scroll positioning.

### GSAP Timeline

The loader is controlled through a GSAP timeline so that multiple animations run in a controlled sequence.

The animation flow includes:

```text
Loader Heading
      ↓
Second Heading
      ↓
Third Heading
      ↓
Counter Animation
      ↓
"Now" Animation
      ↓
Loader Disappears
      ↓
Main Page Appears
```

### Custom Cursor

Mouse movement is captured from the relevant section and the cursor position is animated using GSAP.

This gives the cursor a smooth movement instead of directly changing its position.

---

## 🎨 Design Philosophy

WebCraft follows a modern creative-agency visual style.

The design focuses on:

- Large typography
- Minimal but expressive layouts
- Strong visual hierarchy
- Smooth transitions
- Interactive elements
- Creative image presentation
- Motion-based storytelling
- Modern digital-agency aesthetics

The goal is to make the website feel like an interactive digital experience rather than a traditional business landing page.

---

## 💻 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/WebCraft.git
```

### 2. Open the project

```bash
cd WebCraft
```

### 3. Run the project

This is a frontend project using HTML, CSS and JavaScript, so no Node.js installation is required for the basic version.

You can open:

```text
index.html
```

directly in a browser.

For a better development experience, use **VS Code + Live Server**.

### 4. Using Live Server

1. Open the project in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

---

## 🌐 External Libraries

The project loads several libraries through CDN links, including:

```text
Locomotive Scroll
GSAP
GSAP ScrollTrigger
Three.js
Shery.js
jQuery
Lettering.js
Textillate.js
Animate.css
```

An internet connection may therefore be required for all external library features to work when running the project through the CDN setup.

---

## 📱 Responsive Design

The project is designed with a modern web layout and can be further optimized for different screen sizes.

Recommended testing:

- Desktop
- Laptop
- Tablet
- Mobile

Because the project uses custom animations and smooth scrolling, mobile testing is especially important when making future changes.

---

## 🔮 Future Improvements

Possible future improvements include:

- Fully responsive mobile navigation
- Mobile-specific animation optimization
- Working contact form
- Real social media links
- Client/project portfolio section
- Service detail pages
- SEO optimization
- Accessibility improvements
- Performance optimization
- Deployment configuration
- Dark/light theme support
- CMS or backend integration

---

## 📸 Preview
- Desktop Preview

<img width="1911" height="852" alt="image" src="https://github.com/user-attachments/assets/ef9a5d30-8ff4-4577-b4ee-35ef27fe0150" />

---

- Mobile Preview

<img width="250" height="550" alt="webcraft mobile" src="https://github.com/user-attachments/assets/0198629e-8a30-4c83-aaac-0ca525a3481a" />

```

### Live Demo

https://webcraft-umber-kappa.vercel.app/
```

Replace the URL above with your deployed Vercel URL.

---

## 🤝 Contributing

This project is primarily created as a personal web development project.

If you have suggestions or improvements, feel free to:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Commit your changes
5. Open a Pull Request

---

## 📄 License

This project is created for learning, experimentation and portfolio purposes.

If you reuse the project, make sure you have permission to use any third-party images, assets or libraries included in your version.

---

## 👨‍💻 Author

**Roshan Kumar**

- GitHub: `https://github.com/roshankumar65328`
- LinkedIn: `www.linkedin/in/roshan-kumar-gurugram`

---

## ⭐ Support

If you like this project, consider giving the repository a ⭐ on GitHub.

---

### Made with ❤️ using HTML, CSS & JavaScript
