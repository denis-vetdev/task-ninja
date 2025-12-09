export default function TaskItem({ task }: any) {
  return (
    <div className="p-3 border rounded flex justify-between bg-white shadow-sm">
      <span className={task.done ? "line-through text-gray-400" : ""}>
        {task.title}
      </span>
    </div>
  );
}
