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
- **Trading Interface**: Simulate trading actions with real-time updates.

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
## Running tests
  ```npm run test
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

## To run tests
``` npm run test
```

## Assumptions
- Authentication
  User authentication is currently minimal (e.g., local state or mock login) and not connected to a real backend.

- Market Data
  Cryptocurrency data comes from a third-party API (like CoinGecko or CoinMarketCap).
  Assumes API has reasonable rate limits and returns data in JSON.
  Data latency is acceptable since it’s not a real-money trading app.

- Trading Simulation
  All trades are simulated; no actual transactions occur on blockchain or exchanges.
  Portfolio balance is stored in local state or Redux, not persisted in a database.

- Technology Stack
  Vite is assumed to be used for local development and GitHub Pages for deployment. 
  Tailwind CSS is used across the app; assumes developers are comfortable with utility-first CSS.
  Redux is assumed to be sufficient for current state management, though it could become heavy with scaling.

- Testing
  Tests are written using React Testing Library + Jest (or Vitest if integrated).
  Coverage is for only one component and page, not end-to-end flows yet.

## Trade-offs

- Vite vs Create React App

  - Faster builds, better DX with Vite.
  - Some Jest configurations may need tweaking (since Jest doesn’t natively support import.meta.env).

- Redux vs Context API

  - Redux makes state predictable, easier to debug, and scalable as app grows.
  - Boilerplate and more setup compared to simple Context + Hooks.

- Tailwind CSS vs Styled Components

  - Tailwind allows rapid prototyping and consistent design.
  - Can make JSX verbose and harder to read without abstractions.

- Mocked Trading vs Real Exchange API

  - Safer for beginners, avoids legal/financial risks.
  - Not realistic for users wanting real trading features.

- Static Deployment (GitHub Pages) vs Backend Integration

  - Easier, cheaper, and no backend management.
  - Limited — no persistent data, no authentication beyond client-side mock.

## Potential features for future:
- Authentication

  - Add JWT-based authentication with a backend.
  - OAuth (Google, GitHub, MetaMask for crypto login).

- Portfolio Persistence
  - Save portfolio data in a database (Firebase, MongoDB, Supabase).
