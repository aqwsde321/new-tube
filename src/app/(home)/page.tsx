import { trpc } from "@/trpc/server";

export default async function Home() {
  const data = await trpc.hello({ text: "Antonio2" });

  return (
    <div>
      <p className="text-xl font-semibold tracking-tight">
        Client component says: {data.greeting}
      </p>
    </div>
  );
}
