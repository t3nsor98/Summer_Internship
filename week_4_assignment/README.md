# Week 4: Full Stack Integration (Connecting MERN)

This README explains the theory, architecture, and practical solutions for integrating the frontend and backend in a MERN stack application, with a focus on building a Task Manager App featuring CRUD (Create, Read, Update, Delete) operations. It also covers the optional use of Redux Toolkit for state management.

---

## What is the MERN Stack?

The MERN stack is a collection of four powerful JavaScript technologies used for building full-stack web applications:

- **MongoDB:** NoSQL database for flexible, scalable data storage using JSON-like documents.
- **Express.js:** Lightweight web framework running on Node.js, simplifying HTTP routing and API development.
- **React.js:** Frontend library for building dynamic, component-based user interfaces.
- **Node.js:** JavaScript runtime for executing server-side code, enabling scalable backend development.

All components use JavaScript, making development seamless across client and server.

---

## Theory: How Full Stack Integration Works

A MERN application typically consists of three main layers:

- **Frontend (React):** Handles UI, user interactions, and makes HTTP requests to the backend.
- **Backend (Express/Node.js):** Processes requests, implements business logic, and communicates with the database.
- **Database (MongoDB):** Stores and retrieves application data.

**Integration** means connecting the React frontend to the Express backend, which in turn interacts with MongoDB. This is achieved using RESTful APIs: React sends HTTP requests (often via Axios or Fetch) to Express endpoints, which then read/write data in MongoDB and return responses to the frontend.

---

## Step-by-Step Solution

### 1. Set Up the Backend

- **Initialize a Node.js project** and install Express and Mongoose.
- **Connect to MongoDB** using Mongoose.
- **Create RESTful API routes** for CRUD operations (e.g., `/tasks` for managing tasks).
- **Implement controllers** to handle logic for creating, reading, updating, and deleting tasks.

### 2. Set Up the Frontend

- **Create a React app** using Create React App or Vite.
- **Build UI components** for listing, adding, editing, and deleting tasks.
- **Use Axios** to make HTTP requests to the backend API endpoints.

### 3. Connect Frontend to Backend

- In React components, use Axios to call Express API endpoints for CRUD operations.
- Display data from the backend and update the UI based on API responses.

### 4. (Optional) Add Redux Toolkit for State Management

#### Why Use Redux Toolkit?

Redux Toolkit simplifies state management in React apps, especially when multiple components need to share or update data. It reduces boilerplate and provides best practices for handling async logic and side effects.

#### Basic Concepts

- **Store:** Centralized state container.
- **Slice:** A piece of state logic (e.g., for tasks), created with `createSlice`.
- **Actions \& Reducers:** Define how state changes in response to events.
- **Async Thunks:** Handle async operations like API calls[^5].

#### Example Workflow

- **Install dependencies:** `@reduxjs/toolkit`, `react-redux`, `axios`.
- **Set up the store:** Configure the Redux store and provide it to your React app.
- **Create slices:** Use `createSlice` to manage tasks state and actions.
- **Integrate with components:** Use `useSelector` to read state and `useDispatch` to trigger actions (including async thunks for API calls).

---

## Example: Task Manager App (CRUD)

**Features:**

- **List Tasks:** Fetch and display all tasks.
- **Add Task:** Submit a new task via a form.
- **Edit Task:** Update an existing task’s details.
- **Delete Task:** Remove a task from the list.

**Workflow:**

- The React frontend sends API requests to Express endpoints.
- Express processes requests, interacts with MongoDB, and returns results.
- Redux Toolkit (optional) manages the state of tasks in the frontend, ensuring UI stays in sync with the backend.

---

## Resources

- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Axios Guide](https://axios-http.com/docs/intro)

---

## Summary

By integrating React with Express and MongoDB, you create a robust full-stack application. Redux Toolkit can further streamline state management, especially for complex or collaborative apps. This week’s focus on connecting all layers of the MERN stack prepares you to build scalable, maintainable web applications with modern best practices.
