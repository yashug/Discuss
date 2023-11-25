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

export default function TopicCreateForm() {
  const [formState, action] = useFormState(actions.createTopic, {
    errors: {},
  });
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Create a Topic</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[475px]">
        <DialogHeader>
          <DialogTitle>Create Topic</DialogTitle>
        </DialogHeader>
        <form action={action}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" autoFocus placeholder="Name" />
              <span className="text-red-400">
                {formState.errors.name?.join(", ")}
              </span>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Describe your topic"
              />
              <span className="text-red-400">
                {formState.errors.description?.join(", ")}
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
