# MicroFrontend_Demo
In this project, learn how microfrontend works and interconnected with each other. How we can share common libraries 


# Ecommerce Microfrontend Project

This repository demonstrates a **microfrontend architecture** for an ecommerce platform. Each feature (e.g., Products, Cart, Container) is developed and deployed independently, using [Webpack Module Federation](https://webpack.js.org/concepts/module-federation/).

---

## Project Structure

```
ecommerce/
├── container/      # Main shell application
├── products/       # Products microfrontend
├── cart/           # Cart microfrontend
└── README.md
```

---

## Microfrontend Approach

- **Independent builds:** Each microfrontend has its own `node_modules`, webpack config, and can be developed separately.
- **Module Federation:** Enables sharing components and dependencies between apps at runtime.
- **Loose coupling:** Teams can work on features without affecting others.

---

## Getting Started

### 1. Install dependencies

Navigate to each microfrontend folder and run:

```bash
npm install
```

### 2. Start development servers

Start each microfrontend independently:

```bash
# In /products
npm start

# In /cart
npm start

# In /container
npm start
```

Each app will run on its own port (configured in `webpack.config.js`).

---

## How Module Federation Works Here

- **Exposes:** Each microfrontend exposes its main components (e.g., `ProductsList`).
- **Shared dependencies:** Common libraries (like React, @faker-js/faker) are shared to avoid duplication.
- **Remote loading:** The container app loads remote modules from other microfrontends at runtime.

---

## Adding a New Microfrontend

1. Create a new folder (e.g., `wishlist/`).
2. Scaffold with its own `package.json`, `webpack.config.js`, and source code.
3. Configure Module Federation to expose and share modules.
4. Register the remote in the container’s webpack config.

---

## Useful Commands

- `npm install` – Install dependencies
- `npm start` – Start the dev server
- `npm run build` – Build for production

---

## Troubleshooting

- If `node_modules` is tracked by git, run:
  ```bash
  git rm -r --cached node_modules
  ```
- Ensure shared dependencies match across microfrontends.
- Use `@faker-js/faker` for dummy data generation.

---

## License

ISC