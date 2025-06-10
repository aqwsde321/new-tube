"use client";

import { trpc } from "@/trpc/client";

export const PageClient = () => {

    const [data] = trpc.categories.getMany.useSuspenseQuery();

  return (
    <div>
      <p className="text-xl font-semibold tracking-tight">
        {JSON.stringify(data)}
      </p>
    </div>
  );
};
