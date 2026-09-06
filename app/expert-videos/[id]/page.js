import { notFound } from "next/navigation";
import { VIDEOS } from "@/components/new-home/videos";
import VideoDetailContent from "./VideoDetailContent";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const video = VIDEOS.find((v) => String(v.id) === id);

  if (!video) {
    return { title: "Video Not Found | MSME Ki Baat" };
  }

  return {
    title: `${video.title} | MSME Ki Baat`,
    description: video.title,
  };
}

const page = async ({ params }) => {
  const { id } = await params;
  const video = VIDEOS.find((v) => String(v.id) === id);

  if (!video) {
    notFound();
  }

  return <VideoDetailContent video={video} />;
};

export default page;
