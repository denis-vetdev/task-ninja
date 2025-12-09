"use client";

import { useEffect, useState } from "react";
import TaskItem from "../components/TaskItem";
import TaskForm from "../components/TaskForm";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  async function loadTasks() {
    const res = await fetch("/api/tasks");
    const data = await res.json();
    setTasks(data);
  }

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <main className="max-w-xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4">Task Ninja</h1>

      <TaskForm onAdd={loadTasks} />

      <div className="flex flex-col gap-2">
        {tasks.map((task: any) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </main>
  );
}
