"use client";

import { useFormState } from "react-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import FormButton from "@/components/common/form-button";
import * as actions from "@/actions";

interface PostCreateFormProps {
  slug: string;
}

export default function PostCreateForm({ slug }: PostCreateFormProps) {
  const [formState, action] = useFormState(actions.createPost.bind(null, slug), {
    errors: {},
  });
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Create Post</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[475px]">
        <DialogHeader>
          <DialogTitle>Create a Post</DialogTitle>
        </DialogHeader>
        <form action={action}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" autoFocus placeholder="Title" />
              <span className="text-red-400">
                {formState.errors.title?.join(", ")}
              </span>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                name="content"
                placeholder="Content"
              />
              <span className="text-red-400">
                {formState.errors.content?.join(", ")}
              </span>
            </div>
            <span className="text-red-400">
              {formState.errors._form?.join(", ")}
            </span>
          </div>
          <DialogFooter>
            <FormButton>Submit</FormButton>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
