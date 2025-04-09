import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditTodo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todoText, setTodoText] = useState("");

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      setTodoText(todo.text);
    } else {
      // If todo not found, redirect to home page
      navigate("/");
    }
  }, [id, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoText.trim()) return;

    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: todoText.trim() } : todo
    );

    localStorage.setItem("todos", JSON.stringify(newTodos));
    navigate("/");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full border border-gray-300 rounded py-2 px-3 mb-4 focus:outline-none focus:ring focus:border-blue-300"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditTodo;
