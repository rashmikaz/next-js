<h1>What is Next.js?</h1>
Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.It adds features and tools on top of React that make development easier, faster, and more powerful.

## 🔑 Key Features of Next.js

- **Server-Side Rendering (SSR)**  
  Pages can be rendered on the server before being sent to the browser, making apps faster and SEO-friendly.

- **Static Site Generation (SSG)**  
  Pre-generate pages at build time for great performance (like a static site) while still enjoying React’s interactivity.

- **API Routes**  
  Create backend endpoints directly inside your project without needing a separate server.

- **File-Based Routing**  
  No manual route setup needed — the folder/file structure in `pages/` (or `app/` with the new App Router) automatically generates routes.

- **Optimized Performance**  
  Features like `next/image` (image optimization), automatic code splitting, and fast refresh ensure efficient apps.

- **Full-Stack Capabilities**  
  Build both frontend and backend within the same project.

- **TypeScript Support**  
  Comes with seamless TypeScript integration out of the box.



````markdown

## ✅ Requirements

Before installing **Next.js**, make sure you have the following:

 
  👉 Check your version with:

  ```bash
  node -v
````

* **npm** (comes bundled with Node.js) or an alternative package manager like **yarn** or **pnpm**
  👉 Check your version with:

  ```bash
  npm -v
  ```
  ## Installation

You can create a new Next.js project in one command:

```bash
npx create-next-app@latest my-app
```

You can create a new Next.js project in one command:

## ⚙️ Setup Steps
Go inside your project folder:

```bash
cd my-app
```
Start the development server
```bash
npm run dev
```
Open in your browser 🎉
Visit: http://localhost:3000

## Installation

You can create a new Next.js project in one command:

```bash
npx create-next-app@latest my-app
```

You can create a new Next.js project in one command:

## ⚙️ Setup Steps
Go inside your project folder:

```bash
cd my-app
```
Start the development server
```bash
npm run dev
```
Open in your browser 🎉
Visit: http://localhost:3000

## Next.js Routing
1️⃣ **Basic Routing**  
Next.js uses file-based routing. Each file inside the `pages/` (or `app/`) folder automatically becomes a route.  
- `index.js` represents the root route (`/`).

2️⃣ **Nested Routes**  
Create subfolders inside `pages/` to group related pages.  
Files inside subfolders represent **nested routes**.


3️⃣ **Grouped Pages**  
You can logically group pages using folders to keep your project organized.  
- Folder name = first part of URL  
- File name = second part of URL  


## 🌐 Project Pages & URLs

| Page             | URL                                |
|-----------------|------------------------------------|
| Home             | `http://localhost:3000/`           |
| Service          | `http://localhost:3000/service`    |
| Product          | `http://localhost:3000/product`    |
| About - Carrers  | `http://localhost:3000/about/carrers` |
| About - Socials  | `http://localhost:3000/about/socials` |
| About - Branches | `http://localhost:3000/about/branches` |
| Contact Us       | `http://localhost:3000/contact`    |
| Login - New User | `http://localhost:3000/newUser`    |
| Signup           | `http://localhost:3000/signup`     |

---
