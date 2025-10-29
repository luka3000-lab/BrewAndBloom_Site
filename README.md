## Brew & Bloom – Website Project 

### Project Overview 

Brew & Bloom is a fictional small business that combines a boutique café with a plant nursery. The website has been developed as part of a web development project to showcase the company’s services, products, and events. 

The site is fully coded using HTML, CSS, and JavaScript, with a focus on semantic structure, responsive design, and usability. It consists of six main web pages that are interconnected via a consistent navigation system. 

 

## File and Folder Structure 

BrewAndBloom/ 

│ 

├── index.html                # Homepage 

├── about.html                # About Us page 

├── shop.html                 # Shop main page 

├── events.html               # Events & Workshops page 

├── blog.html                 # Blog page 

├── contact.html              # Contact page 

├── account.html              # User login and payment plans 

 

│ 

├── /assets                   # All static assets 

│   ├── /css 

│   │   ├── style.css         # Main stylesheet 

│   │   └── responsive.css    # Styles for mobile/tablet 

│   │ 

│   ├── /js 

│   │   ├── script.js         # Main JavaScript file 

│   │   └── shop.js           # Shop/cart functionality 

│   │ 

│   ├── /images 

│   │   ├── logo.png          # Brew & Bloom logo 

│   │   ├── products/         # Product images (coffee, plants, accessories) 

│   │   └── events/           # Workshop images 

│   │ 

│   └── /fonts                # Custom fonts (if used) 

│ 

├── /data 

│   └── products.json         # Product details (id, name, price, description) 

│ 

├── /includes 

│   ├── header.html           # Navigation bar 

│   ├── footer.html           # Footer section 

│   └── sidebar.html          # (optional) Blog sidebar 

│ 

└── /admin                    # Admin/management area (optional) 

    ├── dashboard.html 

    └── styles.css 

 

## Pages 

Home (index.html) → Introduction, featured products, events. 

About (about.html) → Business story and values. 

Shop (shop.html) → Grid of coffee, plants, accessories. 

Events (events.html) → Upcoming workshops and RSVP buttons. 

Blog (blog.html) → Placeholder posts/articles. 

Contact (contact.html) → Contact form, business details, opening hours. 

Account (account.html) -> User logins, payment details and plans  

 

## Features 

Semantic HTML5 structure (header, nav, main, footer). 

Consistent navigation across all pages. 

Responsive design using CSS Flexbox/Grid. 

Contact form with input fields (non-functional, placeholder for backend). 

JavaScript for footer year update and future enhancements. 

 

## How to Run 

### Clone the repository:  

 https://github.com/luka3000-lab/BrewAndBloom_Site.git 

 ## Working Through Feedback from Part 1

### Feedback Summary
The feedback for Part 1 stated: *“Cannot access your GitHub repository.”*  
However, the repository was public and complete at the time of submission. The issue arose because the README file included a placeholder (`yourusername`) instead of my actual GitHub username.

### Corrections and Improvements
1. Updated the README file with the correct repository link:  
   [https://github.com/luka3000-lab/BrewAndBloom_Site](https://github.com/luka3000-lab/BrewAndBloom_Site)  
2. Verified that the repository is public and accessible from multiple devices and browsers.  
3. Re-uploaded all website files (HTML, CSS, JavaScript, assets, and documentation).  
4. Added clear indentation, code comments, and consistent formatting.  
5. Validated all HTML and CSS code using W3C validation tools and resolved minor issues.  
6. Tested all navigation links and image paths to confirm they function correctly.  
7. Added this changelog entry as part of Part 2’s improvement process.

### Result
The Brew & Bloom website is now fully accessible and well-documented.  
The repository link functions correctly, and the overall code quality and clarity have been improved to meet all Part 2 requirements.

## CSS Styling for Desktop Solution

- Created an external stylesheet named `style.css` and linked it to all HTML pages.
- Implemented a CSS reset for browser consistency.
- Defined a neutral color palette inspired by coffee and nature (#fff8f0, #a0522d, #3e2723).
- Applied consistent typography using ‘Poppins’ and ‘Playfair Display’.
- Used Flexbox and CSS Grid to build responsive layouts and evenly spaced navigation.
- Added hover and focus effects for interactivity.
- Ensured visual consistency across all pages.

## Responsive Design

This section focuses on making the Brew & Bloom website visually adaptive across all device sizes — desktop, tablet, and mobile — while preserving the original brand identity and design.

### 3.1 Breakpoints
The following key breakpoints were applied:
- **Large Desktop (≥1280px):**  
  Introduced a wider 3:1 content-to-sidebar layout for improved visual balance on large screens.
- **Desktop / Default (≥1024px):**  
  Two-column layout (main content + sidebar) for comfortable reading and structure.
- **Tablet (768px–1023px):**  
  Layout automatically adjusts to a single column; navigation wraps into multiple lines.
- **Mobile (<768px):**  
  All grids and flex containers collapse into a single column; navigation stacked vertically; typography scaled down.

### 3.2 Relative Units
- Replaced fixed pixel units with **relative units**:
  - `rem` for font sizes and spacing
  - `%` for layout widths and image containers
- This ensures a scalable, consistent layout across all devices.

### 3.3 Responsive Images
- All `<img>` elements use `max-width: 100%;` and `height: auto;` to maintain proportional scaling.
- Key images include the `loading="lazy"` attribute for faster performance on mobile.
- The site is structured to support `<picture>` and `srcset` for adaptive image sources in future updates.

### 3.4 Accessibility and Interactivity
- Added clear **focus** and **hover** states for all buttons and navigation links.
- Interactive elements use soft color transitions (`filter: brightness(1.1)`) for visual feedback.
- Maintained WCAG-friendly contrast between text and backgrounds.

### 3.5 Testing and Validation
- Tested using Chrome DevTools, Edge, and Firefox Responsive Design Mode.
- Verified smooth layout transitions across device widths.
- HTML and CSS validated using W3C Validator and Jigsaw Validator.
- Screenshots of desktop, tablet, and mobile versions are included in `/screenshots/`:
  - `desktop-view.png`
  - `tablet-view.png`
  - `mobile-view.png`

### 3.6 Design Principles
- **Content first:** Readability and hierarchy are maintained across all devices.
- **Simplicity:** Clean, spacious sections with accessible font sizes and padding.
- **Consistency:** Typography, color palette, and card visuals remain identical across breakpoints.



