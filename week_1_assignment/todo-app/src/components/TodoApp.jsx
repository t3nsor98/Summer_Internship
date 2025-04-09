import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import TodoList from "./TodoList";
import EditTodo from "./EditTodo";
import Clock from "./Clock";
import Quote from "./Quote";

function TodoApp() {
  return (
    <Router>
      <div className="min-h-screen bg-purple-100 py-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <header className="bg-purple-600 p-4">
            <h1 className="text-white text-3xl font-extrabold text-center">
              Awesome Todo App
            </h1>

            <nav className="mt-4 flex justify-center space-x-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-200 font-bold bg-purple-800 p-2 rounded"
                    : "text-white hover:text-purple-200 p-2 rounded"
                }
              >
                All Tasks
              </NavLink>
              <NavLink
                to="/active"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-200 font-bold bg-purple-800 p-2 rounded"
                    : "text-white hover:text-purple-200 p-2 rounded"
                }
              >
                Active
              </NavLink>
              <NavLink
                to="/completed"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-200 font-bold bg-purple-800 p-2 rounded"
                    : "text-white hover:text-purple-200 p-2 rounded"
                }
              >
                Completed
              </NavLink>
            </nav>
          </header>
          <Clock />
          <Routes>
            <Route path="/" element={<TodoList filter="all" />} />
            <Route path="/active" element={<TodoList filter="active" />} />
            <Route
              path="/completed"
              element={<TodoList filter="completed" />}
            />
            <Route path="/edit/:id" element={<EditTodo />} />
          </Routes>
        </div>
        <Quote />
      </div>
    </Router>
  );
}

export default TodoApp;
