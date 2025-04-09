import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function TodoList({ filter }) {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // Load todos from localStorage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(storedTodos);
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Filter todos based on current filter
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true; // 'all' filter
  });

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    const newTodos = [
      ...todos,
      {
        id: Date.now().toString(),
        text: newTodo.trim(),
        completed: false,
        createdAt: new Date().toISOString(),
      },
    ];

    setTodos(newTodos);
    setNewTodo("");
  };

  const toggleComplete = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="p-4">
      <form onSubmit={addTodo} className="flex mb-4">
        <input
          type="text"
          className="flex-1 border border-purple-300 rounded-l py-2 px-3 focus:outline-none focus:ring focus:border-purple-400"
          placeholder="Add a new task..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded-r hover:bg-purple-700 focus:outline-none"
        >
          Add
        </button>
      </form>

      {filteredTodos.length === 0 ? (
        <p className="text-purple-500 text-center py-4">No tasks found.</p>
      ) : (
        <ul className="divide-y divide-purple-200">
          {filteredTodos.map((todo) => (
            <li key={todo.id} className="py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo.id)}
                    className="h-5 w-5 text-purple-600 focus:ring-purple-500"
                  />
                  <span
                    className={`${
                      todo.completed
                        ? "line-through text-purple-400"
                        : "text-purple-800"
                    }`}
                  >
                    {todo.text}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <Link
                    to={`/edit/${todo.id}`}
                    className="text-purple-600 hover:text-purple-800"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 text-sm text-purple-600">
        {todos.length} task{todos.length !== 1 ? "s" : ""} total •{" "}
        {todos.filter((t) => !t.completed).length} active •{" "}
        {todos.filter((t) => t.completed).length} completed
      </div>
    </div>
  );
}

export default TodoList;
