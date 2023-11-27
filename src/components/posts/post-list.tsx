import type { PostWithData } from "@/db/queries/posts";
import Link from "next/link";
import paths from "@/paths";
import { CardTitle, CardHeader, Card, CardFooter } from "@/components/ui/card";

interface PostListProps {
  fetchData: () => Promise<PostWithData[]>;
}

export default async function PostList({ fetchData }: PostListProps) {
  const posts = await fetchData();

  const renderedPosts = posts.map((post) => {
    const topicSlug = post.topic.slug;

    if (!topicSlug) {
      throw new Error("Need a slug to link to a post");
    }

    return (
      <section key={post.id} className="flex flex-col gap-4">
        <Link href={paths.postShow(topicSlug, post.id)}>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">{post.title}</CardTitle>
            </CardHeader>
            <CardFooter>
              <div className="flex flex-row gap-8">
                <p className="text-xs">By {post.user.name}</p>
                <p className="text-xs">{post._count.comments} comments</p>
              </div>
            </CardFooter>
          </Card>
        </Link>
      </section>
    );
  });

  return <div className="space-y-2">{renderedPosts}</div>;
}
