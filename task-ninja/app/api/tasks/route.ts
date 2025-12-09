let tasks = [
  { id: 1, title: "Estudar Next.js", done: false },
  { id: 2, title: "Estudar TypeScript", done: false },
];

export async function GET() {
  return Response.json(tasks);
}

export async function POST(request: Request) {
  const body = await request.json();
  const newTask = {
    id: tasks.length + 1,
    title: body.title,
    done: false,
  };

  tasks.push(newTask);
  return Response.json(newTask, { status: 201 });
}
