"use client";

import { trpc } from "@/trpc/client";

export default function Home() {
  const { data } = trpc.hello.useQuery({ text: "Antonio2" });

  return (
    <div>
      <p className="text-xl font-semibold tracking-tight">
        Client component says: {data?.greeting}
      </p>
    </div>
  );
}
