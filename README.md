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

# 🚀 Navigation in Next.js

Next.js provides a special <Link> component for fast, client-side navigation (no full page reload).



## Usage

```python
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/about">Go to About Page</Link>
    </div>
  )
}
```
```python
<nav>
  <Link href="/">Home</Link>
  <Link href="/service">Service</Link>
  <Link href="/product">Product</Link>
  <Link href="/about/carrers">Carrers</Link>
  <Link href="/about/socials">Socials</Link>
  <Link href="/about/branches">Branches</Link>
  <Link href="/contact">Contact</Link>
  <Link href="/newUser">New User</Link>
  <Link href="/signup">Signup</Link>
</nav>
```
# Styling Navigation in Next.js


## 1️⃣ Global Styles (globals.css)
Global styles apply to everything.

## Usage

```python
/* styles/globals.css */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f4f4f9;
}

nav {
  background-color: #333;
  padding: 12px;
}

nav a {
  color: white;
  margin-right: 15px;
  text-decoration: none;
}

nav a:hover {
  color: yellow;
}
```


## 2️⃣ CSS Modules (Component-Specific Styles)
Each component can have its own CSS file ending with .module.css.

## Usage

```python
.navbar {
  background-color: #222;
  padding: 12px;
  display: flex;
}

.link {
  color: white;
  margin-right: 15px;
  text-decoration: none;
  font-weight: bold;
}

.link:hover {
  color: #00ffcc;
}
```

## 3️⃣ Navbar Component Using CSS Module


## Usage

```python
import Link from "next/link"
import styles from "./Navbar.module.css"

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.link}>Home</Link>
      <Link href="/service" className={styles.link}>Service</Link>
      <Link href="/product" className={styles.link}>Product</Link>
      <Link href="/about/carrers" className={styles.link}>Carrers</Link>
      <Link href="/about/socials" className={styles.link}>Socials</Link>
      <Link href="/about/branches" className={styles.link}>Branches</Link>
      <Link href="/contact" className={styles.link}>Contact</Link>
      <Link href="/newUser" className={styles.link}>New User</Link>
      <Link href="/signup" className={styles.link}>Signup</Link>
    </nav>
  )
}
```
globals.css → global styles (body, default nav, etc.)
Navbar.module.css → scoped styles only for Navbar





