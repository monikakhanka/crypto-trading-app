# Crypto Trading App

A modern cryptocurrency trading platform built with React, Vite, Tailwind CSS, and Redux. This application allows users to explore cryptocurrency assets, manage their portfolios, and access trading features.

🔗 Live Demo: [https://monikakhanka.github.io/crypto-trading-app/](https://monikakhanka.github.io/crypto-trading-app/)

---

## Technologies Used

### React
- **Benefits**: A declarative and component-based JavaScript library that enables the development of interactive UIs. React's virtual DOM optimizes rendering performance, making applications faster and more responsive.
- **Drawbacks**: Requires a learning curve for newcomers, especially with hooks and state management.

### Vite
- **Benefits**: A next-generation, fast build tool that offers lightning-fast hot module replacement (HMR) and optimized production builds. Vite significantly reduces development startup time compared to traditional bundlers.
- **Drawbacks**: May have compatibility issues with certain legacy plugins or configurations.

### Tailwind CSS
- **Benefits**: A utility-first CSS framework that promotes rapid UI development by providing low-level utility classes. Tailwind allows for easy customization and consistent styling across the application.
- **Drawbacks**: Can lead to verbose HTML if not used with proper abstractions like components or templates.

### Redux
- **Benefits**: A predictable state container for JavaScript applications. Redux helps manage the application's state in a single immutable state tree, making it easier to debug and test.
- **Drawbacks**: Can introduce boilerplate code and complexity, especially in smaller applications.

---

## Features

- **Asset Exploration**: Browse a list of cryptocurrencies with real-time data.
- **Portfolio Management**: Track your cryptocurrency holdings and their values.
- **Trading Interface**: Simulate trading actions with real-time updates.
- **Responsive Design**: Optimized for both desktop and mobile devices.

---

## Local Development Setup

To run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/monikakhanka/crypto-trading-app.git
   ```
2. Navigate into the project directory:
  ```bash
   cd crypto-trading-app
   ```
3. Install dependencies:
  ```bash
   npm install
   ```
4. Start the development server:
  ```bash
    npm run dev
  ```
## Project Structure

crypto-trading-app/
- public/ # Static assets like index.html and images
- src/
  - components/ # Reusable UI components
  - routes/ # Application routes
  - pages/ # Page components
  - store/ # Redux store configuration
  - App.tsx # Main application component
  - main.tsx # Entry point for React
  - index.css # Global styles
- tailwind.config.js # Tailwind CSS configuration
- vite.config.ts # Vite build tool configuration
- package.json # Project metadata and dependencies

## Pages
- Home: Displays an overview of available cryptocurrencies and their details.
- Trade: Allows users to simulate buying and selling cryptocurrencies.
- Login: Provides authentication functionality for users.

## Components
- AssetsTableItem: Displays individual cryptocurrency data in a table format.
- ProtectedRoute: Ensures that certain routes are accessible only to authenticated users.
- AppLayout: Serves as the main layout wrapper for the application.

## Routing
Routing is managed using React Router. The application's routes are defined as follows:

- Home: Accessible at the root path (/).
- Trade: Accessible at /trade, protected by authentication.
- Login: Accessible at /login.