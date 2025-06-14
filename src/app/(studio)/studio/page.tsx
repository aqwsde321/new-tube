

export const dynamic = "force-dynamic"; // Disable static rendering for this page
interface PageProps {
  searchParams: Promise<{
    categoryId?: string;
  }>
};

const Page = async ({ searchParams }: PageProps) => {


  return (
    <div>studio</div>
  );
};

export default Page;
