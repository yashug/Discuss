import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import db from "@/db";
import paths from "@/paths";

export default async function TopicsList() {
  const topics = await db.topic.findMany();

  const renderedTopics = topics.map((topic) => (
    <Link href={paths.topicShow(topic.slug)} key={topic.id}>
      <Badge variant="destructive">{topic.slug}</Badge>
    </Link>
  ));

  return <div className="flex flex-row flex-wrap gap-2">{renderedTopics}</div>;
}
