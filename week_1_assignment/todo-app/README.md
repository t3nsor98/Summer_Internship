##Live_site - https://summer-internship-lac.vercel.app/
# React Todo App

A feature-rich Todo application built with React, JavaScript, TailwindCSS, and React Router with local storage for data persistence.

## Features

- **Task Management**: Create, read, update, and delete todos
- **Task Status**: Mark tasks as complete or active
- **Filtering**: Filter tasks by their completion status (All, Active, Completed)
- **Persistence**: Data is saved to the browser's local storage
- **Responsive UI**: Clean, modern interface styled with TailwindCSS
- **Routing**: Navigate between different views using React Router

## Technologies Used

- **React**: A JavaScript library for building user interfaces
- **React Router**: For navigation and routing
- **TailwindCSS**: A utility-first CSS framework for styling
- **Local Storage**: For persisting todo data in the browser

## Project Structure

```
my-todo-app/
├── src/
│   ├── components/
│   │   ├── TodoApp.jsx     # Main app container with router setup
│   │   ├── TodoList.jsx    # Component to display and manage todo items
│   │   └── EditTodo.jsx    # Component for editing individual todos
│   ├── App.jsx             # Root component
│   ├── index.js            # Entry point
│   └── index.css           # Global styles with Tailwind imports
└── ...
```

## Component Breakdown

### App.jsx
The root component that renders TodoApp.

### TodoApp.jsx
Sets up the application structure, including:
- Router configuration
- Navigation links
- Route definitions for different views

### TodoList.jsx
Manages the display and operations of todo items:
- Adding new todos
- Displaying todos based on filter criteria
- Toggling completion status
- Deleting todos
- Statistics about todo counts

### EditTodo.jsx
Provides functionality for editing existing todos:
- Form for modifying todo text
- Saving updates to local storage
- Navigation between views

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine

### Installation
1. Clone the repository or download the source code
2. Navigate to the project directory
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
5. Open your browser and navigate to `http://localhost:3000`

## Usage

- **Adding a Todo**: Type in the input field and press Enter or click Add
- **Completing a Todo**: Click the checkbox next to a todo
- **Editing a Todo**: Click the "Edit" button on a todo
- **Deleting a Todo**: Click the "Delete" button on a todo
- **Filtering Todos**: Use the navigation links at the top to filter todos

## Local Storage

The app uses the browser's localStorage API to persist todos between sessions. Todos are automatically saved whenever they are created, updated, or deleted.

## Future Enhancements

Potential improvements for the future:
- Due dates for todos
- Todo categories or tags
- Priority levels
- User authentication
- Cloud synchronization
- Dark mode support

## License

This project is open source and available under the [MIT License](LICENSE).
