import React from "react";

export default function Todos({ todos }) {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div>
            <div className='container'>
              <h1>{todo.title}</h1>
              <p>{todo.description}</p>
              <button className='btn btn-outline-primary'>
                {todo.completed ? "Completed" : "Mark as complete"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
