import Link from "next/link";
import { Suspense } from "react";
import PostShow from "@/components/posts/post-show";
import CommentList from "@/components/comments/comment-list";
import CommentCreateForm from "@/components/comments/comment-create-form";
import PostShowLoading from "@/components/posts/post-show-loading";
import paths from "@/paths";

interface PostShowPageProps {
  params: {
    slug: string;
    postId: string;
  };
}

export default async function PostShowPage({ params }: PostShowPageProps) {
  const { slug, postId } = params;

  return (
    <section className="container px-6 pt-8 md:pt-12">
      <div className="space-y-3">
        <Link
          className="underline decoration-solid"
          href={paths.topicShow(slug)}
        >
          {"< "}Back to {slug}
        </Link>
        <Suspense fallback={<PostShowLoading />}>
          <PostShow postId={postId} />
        </Suspense>
        <CommentCreateForm postId={postId} startOpen />
        <CommentList postId={postId} />
      </div>
    </section>
  );
}
