# React + Vite Project

This README file provides an overview of your React project built using Vite, along with a detailed list of dependencies and instructions for getting started.

---

## Project Description
This project is a React application scaffolded with Vite. It includes various libraries and tools to enable efficient development and build processes. The application supports routing, internationalization, and advanced UI components.

---

## Features
- **Fast Development**: Powered by Vite for lightning-fast hot module replacement.
- **Routing**: Uses `react-router-dom` for seamless client-side navigation.
- **Internationalization (i18n)**: Integrates `i18next` and `react-i18next` for multilingual support.
- **UI Components**: Built with `antd` for a robust and customizable design system.
- **Carousel Support**: Includes `react-slick` and `slick-carousel` for creating sleek carousels and sliders.

---

## Prerequisites
Ensure you have the following installed on your system:
- Node.js (v14 or higher)
- npm or yarn

---

## Getting Started

### 1. Clone the Repository
```bash
git clone <repository-url>
cd <project-directory>
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Run the Development Server
```bash
npm run dev
# or
yarn dev
```
The application will be available at `http://localhost:5173` by default.

### 4. Build for Production
```bash
npm run build
# or
yarn build
```
The optimized production build will be located in the `dist` folder.

### 5. Preview the Production Build
```bash
npm run preview
# or
yarn preview
```

---

## Project Structure
```
├── public/         # Static assets
├── src/
│   ├── assets/    # Images and other static files
│   ├── components/ # Reusable React components
│   ├── router/    # Routing configuration
│   ├── i18n/      # Internationalization configuration
│   ├── App.jsx    # Root component
│   └── main.jsx   # Entry point
├── package.json    # Project dependencies and scripts
└── vite.config.js  # Vite configuration file
```

---

## Dependencies
Below is the list of main dependencies used in this project:

### Core
- **React**: `^18.3.1`
- **React DOM**: `^18.3.1`

### Routing
- **React Router DOM**: `^7.1.1`

### Internationalization
- **i18next**: `^24.2.1`
- **React i18next**: `^15.4.0`

### UI Components
- **Ant Design (antd)**: `^5.23.0`

### Carousel
- **React Slick**: `^0.30.3`
- **Slick Carousel**: `^1.8.1`

---

## Scripts
Below are the main scripts defined in `package.json`:
- `dev`: Start the development server
- `build`: Build the project for production
- `preview`: Preview the production build


