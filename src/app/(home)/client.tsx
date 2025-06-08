"use client";

import { trpc } from "@/trpc/client";

export const PageClient = () => {

    const [data] = trpc.hello.useSuspenseQuery({
        text: "Antonio22",
    });

  return (
    <div>
      <p className="text-xl font-semibold tracking-tight">
        Client component says: {data.greeting}
      </p>
    </div>
  );
};
