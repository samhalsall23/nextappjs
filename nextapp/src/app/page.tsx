import Link from "next/link";
import { toEditorSettings } from "typescript";
import { prisma } from "@/db";
import { todo } from "node:test";
import { TodoItem } from "@/components/TodoItem"


export default async function Home() {
  const todos = await prisma.todo.findMany();
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Todos</h1>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/new"
        >
          New
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map((item) => (
          <TodoItem key={item.id} {...item}/>
        ))}
      </ul>
    </>
  );
}
