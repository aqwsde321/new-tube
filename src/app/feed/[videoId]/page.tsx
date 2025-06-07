
interface PageProps {
    params: Promise<{videoId: string}>;
}


const Page = async ({ params }: PageProps) => {
    const { videoId } = await params;
    console.log("Video ID:", videoId);

    return (
        <div>
            Video Id: {videoId}
        </div>
        
    );
}
export default Page;