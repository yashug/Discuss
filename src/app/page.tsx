import TopicCreateForm from "@/components/topics/topic-create-form";
import TopicsList from "@/components/topics/topics-list";
import { Separator } from "@/components/ui/separator";

export default async function Home() {
  return (
    <section className="container grid grid-cols-4 gap-4 px-6 pt-8 md:pt-12">
      <div className="col-span-3">
        <h1 className="text-xl font-semibold mb-4">Top Posts</h1>
      </div>
      <div className="border shadow py-3 px-2">
        <TopicCreateForm />
        <Separator className="my-2"/>
        <h3 className="text-lg font-semibold mb-4">Topics</h3>
        <TopicsList />
      </div>
    </section>
  );
}
