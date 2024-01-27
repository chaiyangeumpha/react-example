import React, { useState } from "react";

const TodoList = () => {
  const [todoText, setTodoText] = useState("");

  const [todos, setTodos] = useState<
    { id: number; text: string; completed: boolean }[]
  >([
    {
      id: 1,
      text: "Todo 1",
      completed: false,
    },
    {
      id: 2,
      text: "Todo 2",
      completed: false,
    },
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
          todo.completed = !todo.completed; // เปลี่ยนค่า completed ตรงข้าม
        }
        return todo;
      })
    );
  };
  

  const handleDeleteTodo = (id: number) => {
    const isConfirmed = window.confirm("ยืนยันการลบรายการนี้?");
    if (isConfirmed) {
    setTodos(todos.filter((todo) => todo.id !== id))
    }
  }

  const handleDeleteSelectedTodos = () => {
    
    const isConfirmed = window.confirm("ยืนยันการลบรายการที่เลือก?");
    if (isConfirmed) {
    const selectedTodos = todos.filter((todo) => todo.completed);
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos); // ลบรายการที่เลือก
  }
  };

  const handleDeleteAllTodos = () => {
    const isConfirmed = window.confirm("ยืนยันการลบทั้งหมด?");

  if (isConfirmed) {
    setTodos([]); // ล้างข้อมูล todos ทั้งหมด
  }
   
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
      <button onClick={handleDeleteSelectedTodos}>ลบรายการที่เลือก</button>
      <button onClick={handleDeleteAllTodos}>ลบทั้งหมด</button>
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
