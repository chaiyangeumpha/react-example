import React, { useState } from "react";

const TodoList = () => {
  const [todoText, setTodoText] = useState("");

  const [todos, setTodos] = useState<
    { id: number; text: string; completed: boolean }[]
  >([
    // {
    //   id: 1,
    //   text: "Todo 1",
    //   completed: false,
    // },
    // {
    //   id: 2,
    //   text: "Todo 2",
    //   completed: false,
    // },
  ]);

  const handleAddTodo = () => {
    const newTodoId = Math.floor(Math.random() * 1000000000) + 1;
    const newTodo = {
      id: newTodoId,
      text: todoText,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTodoText(""); // รีเซ็ตค่า text input
  };

  const handleCompleteTodo = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = true;
        }
        return todo;
      })
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>รายการสิ่งที่ต้องทำ</h1>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />

      <button onClick={handleAddTodo}>เพิ่มรายการ</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCompleteTodo(todo.id)}
            />
            {todo.text}
            <button onClick={() => handleDeleteTodo(todo.id)}>ลบ</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
