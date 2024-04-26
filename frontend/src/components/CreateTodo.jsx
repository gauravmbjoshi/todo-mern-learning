import React from "react";
import { useState } from "react";
export default function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <div className='container input-group d-flex justify-content-center mt-3'>
        <input
          className='form-control shadow-none'
          type='text'
          placeholder='Title for todo'
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <input
          className='form-control shadow-none'
          type='text'
          placeholder='Description for todo'
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <button
          onClick={() => {
            fetch("http://localhost:3000/todo", {
              method: "POST",
              body: JSON.stringify({ title: title, description: description }),
              headers: {
                "Content-Type": "application/json",
              },
            }).then(async (res) => {
              const data = await res.json();
              alert("todo Added");
            });
          }}
          className='btn btn-outline-secondary shadow-none'
        >
          Create Todo
        </button>
      </div>
    </div>
  );
}
