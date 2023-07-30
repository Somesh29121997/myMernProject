/** @format */

import React, { useState } from "react";
import Task from "./Task";

export default function Home() {
  const [tasks, setTask] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    setTask([...tasks, { title, description }]);
  };

    const deleteTask=(index)=>{
        const filteredarr = tasks.filter((val,i)=>{
            return i !==index;
        })
        console.log(filteredarr)
        setTask(filteredarr)
    };

        return (
    <div className='container'>
      <h1>Daily Goals</h1>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Description'></textarea>
        <button type='submit' >ADD</button>
      </form>
      {tasks.map((item, index) => (
        <Task key={index} title={item.title} description={item.description} deleteTask={deleteTask} index={index} />
      ))}
    </div>
  );
}
