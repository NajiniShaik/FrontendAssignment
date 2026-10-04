````markdown
# Tulas International School - Frontend Assignment

A modern, animated, and responsive homepage redesign for Tulas International School (TIS), developed as part of a Frontend Developer assignment.

The project focuses on creating a modern web experience while retaining the core branding, content, and purpose of the original TIS website.

## Live Demo

Live Website:
https://frontend-assignment-blue.vercel.app/

## GitHub Repository

Repository:
https://github.com/NajiniShaik/FrontendAssignment

## Original Website

The redesign is based on the Tulas International School website:

https://tis.edu.in/

## Project Overview

The objective of this project was to redesign the TIS homepage into a modern, visually engaging, and high-converting web experience.

The implementation focuses on:

- Modern UI design
- Responsive layouts
- Reusable React components
- Smooth animations
- Scroll-based interactions
- Clear content hierarchy
- Admission-focused call-to-action sections
- Mobile and tablet compatibility
- Clean separation of JSX and CSS

## Tech Stack

- React.js
- Vite
- JavaScript
- CSS
- Framer Motion
- Swiper.js
- Lucide React
- Vercel

## Key Features

### 1. Scroll-Triggered Animations

Framer Motion is used to create smooth entrance animations as sections and content elements enter the viewport.

Animations include:

- Fade-in effects
- Vertical reveal animations
- Scale animations
- Staggered card animations
- Hover interactions

The animations are configured to run efficiently using viewport-based triggers.

### 2. Scroll Progress Bar

A scroll progress indicator is implemented using the `ScrollProgress` component.

The progress bar provides visual feedback about the user's position on the page while scrolling.

### 3. Theme Switcher

The navigation includes a theme switching option that allows users to switch between light and dark visual modes.

### 4. Responsive Design

The homepage is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile devices

The layout uses flexible grids, responsive sections, and scalable typography to provide a consistent experience across different screen sizes.

### 5. Animated Hero Section

The hero section introduces the school with animated content, a primary admission call-to-action, and a secondary exploration action.

### 6. Sports and Facilities Section

The sports section presents the school's facilities using reusable cards with icons, descriptions, and animations.

### 7. Parent Reviews

Parent testimonials are presented using a Swiper carousel with autoplay and pagination.

### 8. Admission Enquiry

The enquiry section provides a simple admission enquiry form with fields for:

- Parent / Student Name
- Phone Number
- Grade / Class

### 9. Campus Video

A dedicated video section allows users to experience the TIS campus through an embedded video.

## Project Structure

```text
UIAssignment/
│
├── src/
│   │
│   ├── components/
│   │   └── animation/
│   │       └── ScrollProgress.jsx
│   │
│   ├── layout/
│   │   │
│   │   ├── Footer/
│   │   │   ├── index.css
│   │   │   └── index.jsx
│   │   │
│   │   └── Navbar/
│   │       ├── index.css
│   │       └── index.jsx
│   │
│   └── sections/
│       │
│       ├── EnquiryCTA/
│       │   ├── index.css
│       │   └── index.jsx
│       │
│       ├── Hero/
│       │   ├── index.css
│       │   └── index.jsx
│       │
│       ├── Reviews/
│       │   ├── index.css
│       │   └── index.jsx
│       │
│       ├── SportsGrid/
│       │   ├── index.css
│       │   └── index.jsx
│       │
│       ├── Stats/
│       │   ├── index.css
│       │   └── index.jsx
│       │
│       └── VideoSection/
│           ├── index.css
│           └── index.jsx
│
├── App.css
├── App.jsx
├── index.css
├── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── README.md
````

## Component Structure

The application is divided into reusable sections and layout components.

### Layout

* `Navbar` - Main navigation, theme switching, and responsive navigation.
* `Footer` - Contact information, navigation links, and footer content.

### Sections

* `Hero` - Main landing section and primary call-to-action.
* `Stats` - Displays key school statistics.
* `SportsGrid` - Displays sports and facilities.
* `VideoSection` - Campus video section.
* `Reviews` - Parent testimonial carousel.
* `EnquiryCTA` - Admission enquiry form.

### Animation

* `ScrollProgress` - Displays the user's scroll progress through the page.

## Installation

Clone the repository and navigate into the project directory.

Install the required dependencies:

```bash
npm install
```

## Run Locally

Start the Vite development server:

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

## Production Build

To create an optimized production build:

```bash
npm run build
```

## Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Deployment

The project is deployed using Vercel.

Production URL:

https://frontend-assignment-blue.vercel.app/

The deployment is configured to build the React/Vite application and serve the generated production build.

## Code Quality

The project follows a component-based architecture with separate JSX and CSS files for individual sections.

The codebase focuses on:

* Reusable components
* Clear folder organization
* Separation of presentation and component logic
* Semantic HTML
* Avoiding unnecessary duplication
* Responsive layouts
* Optimized animations
* Maintainable CSS

## Assignment Requirements Covered

| Requirement                        | Implementation                         |
| ---------------------------------- | -------------------------------------- |
| React.js / Next.js / Vue.js        | React.js                               |
| CSS / Tailwind / Styled Components | CSS                                    |
| Animation Library                  | Framer Motion                          |
| Deployment                         | Vercel                                 |
| Scroll-Triggered Reveals           | Framer Motion                          |
| Scroll Progress Bar                | ScrollProgress component               |
| Responsive Design                  | Desktop, Tablet and Mobile layouts     |
| Clean Component Structure          | Separate layout and section components |
| README                             | Included                               |

## Submission

The final submission includes:

1. Public GitHub repository
2. Deployed Vercel website
3. Completed submission form

GitHub Repository:

https://github.com/NajiniShaik/FrontendAssignment

Live Website:

https://frontend-assignment-blue.vercel.app/

````

### How to submit

You have essentially **three things to submit**:

**1. GitHub Repository**

Use your public repository:

[GitHub Repository](https://github.com/NajiniShaik/FrontendAssignment?utm_source=chatgpt.com)

Make sure the latest code and the README above are pushed.

**2. Live Deployment**

Your Vercel deployment is:

[Live Website](https://frontend-assignment-blue.vercel.app/?utm_source=chatgpt.com)

Open it in an incognito window and make sure it works without your local environment.

**3. Google Form**

Open the submission form from the assignment email:

[Submission Form](https://forms.gle/1njGvsG8a2MW8cRR7?utm_source=chatgpt.com)

Fill in the requested details, especially the **public GitHub repository link** and **deployed live link**.

### One important point

Before submitting, I would make sure your GitHub repository contains:

```text
README.md
package.json
package-lock.json
src/
public/        (if used)
index.html
vite.config.js (if present)
eslint.config.js
.gitignore
````

and **does not contain**:

```text
node_modules/
.env
.env.local
```

Your README now directly maps your implementation to the evaluator's requirements, which is better than a generic React README because the reviewer can quickly see **where and how you satisfied the brief**.
