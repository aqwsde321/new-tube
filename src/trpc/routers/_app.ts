import { categoriesRouter } from '@/modules/categories/server/procedures';
import { createTRPCRouter } from '../init';

export const appRouter = createTRPCRouter({
  categories: categoriesRouter,
  // Add more routers here as needed
});
// export type definition of API
export type AppRouter = typeof appRouter;