import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";

import "./styles.css";

let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };
    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id);
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList
          title="Backlog"
          onAddTask={addTask}
          taskState="Backlog"
          tasks={tasks.filter((t) => t.state === "Backlog")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />

        <TaskList
          title="Em desenvolvimento"
          onAddTask={addTask}
          taskState="Em desenvolvimento"
          tasks={tasks.filter((t) => t.state === "Em desenvolvimento")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />

        <TaskList
          title="Teste"
          onAddTask={addTask}
          taskState="Teste"
          tasks={tasks.filter((t) => t.state === "Teste")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />

        <TaskList
          title="Pronto para produção"
          onAddTask={addTask}
          taskState="Pronto para produção"
          tasks={tasks.filter((t) => t.state === "Pronto para produção")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />

        <TaskList
          title="Arquivada"
          onAddTask={addTask}
          taskState="Arquivada"
          tasks={tasks.filter((t) => t.state === "Arquivada")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
      </div>
    </div>
  );
}
