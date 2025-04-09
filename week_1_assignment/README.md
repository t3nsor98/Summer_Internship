# 🚀 React.js Basics – A Beginner's Guide

This guide will help you understand the **core concepts of React.js**, including **components**, **props**, **state**, **hooks**, **React Router**, and how to make **API calls** using `fetch` and `axios`.

---

## 🔹 1. What is React?

**React** is a JavaScript library used for building **user interfaces**. It helps create fast and interactive UIs by breaking the UI into small, reusable **components**.

---

## 📦 2. Components in React

A **component** is like a reusable function that returns JSX (HTML in JS).

### 🔸 Functional Component Example:

```jsx
function Welcome() {
  return <h1>Hello, world!</h1>;
}
```

### 🔸 Why Components?
- Reusability
- Easier to manage
- Component-driven architecture

---

## 🎁 3. Props (Properties)

**Props** are how you pass data from one component to another (from parent to child).

```jsx
function Greeting(props) {
  return <h2>Hello, {props.name}!</h2>;
}

// Usage
<Greeting name="Digbijaya" />
```

✅ Props are **read-only** and help keep components **pure**.

---

## 🧠 4. State in React

**State** is used to manage data **inside a component**. It can change over time (like user input or API response).

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
```

---

## 🧩 5. React Hooks

**Hooks** let you use state and lifecycle features in functional components.

### Most used hooks:
- `useState()` – to store and update local state.
- `useEffect()` – to run side effects (like fetching data, DOM updates).

```jsx
import { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
```

---

## 🌐 6. React Router

React Router helps with **navigating between pages** in a single-page app (SPA).

### Install:
```bash
npm install react-router-dom
```

### Basic Setup:
```jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

## 📡 7. API Calls – Fetch vs Axios

### ✅ Fetch (Built-in):
```jsx
fetch('https://api.example.com/data')
  .then(res => res.json())
  .then(data => console.log(data));
```

### ✅ Axios (Third-party):
```bash
npm install axios
```

```jsx
import axios from 'axios';

axios.get('https://api.example.com/data')
  .then(res => console.log(res.data));
```

### 💡 When to use?
- **Fetch** is good for basic needs.
- **Axios** is preferred for cleaner syntax, better error handling, and advanced features.

---

## 🎯 Summary

| Topic         | Description                                  |
|---------------|----------------------------------------------|
| Components    | Reusable building blocks                     |
| Props         | Passing data to components                   |
| State         | Local data management                        |
| Hooks         | Use state/effect in functional components    |
| React Router  | Navigation between pages                     |
| API Calls     | Fetch or Axios to get data from servers      |

---

## 🌟 Final Thoughts

In this guide, we covered the core concepts of React.js, including components, props, state, hooks, React Router, and how to make API calls using `fetch` and `axios`.

If you have any questions or need help, don't hesitate to reach out.

Happy Coding! 💙



