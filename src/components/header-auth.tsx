"use client";

import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import UserNav from "@/components/user-nav";
import * as actions from "@/actions";
import { Skeleton } from "./ui/skeleton";

export default function HeaderAuth() {
  const session = useSession();

  let authContent: React.ReactNode;
  if (session.status === "loading") {
    authContent = <Skeleton className="w-8 h-8 rounded-full"/>;
  } else if (session.data?.user) {
    authContent = (
      <UserNav
        imageUrl={session.data.user.image || ""}
        username={session.data.user.name || ""}
      />
    );
  } else {
    authContent = (
      <form action={actions.signIn}>
        <Button type="submit">Log In</Button>
      </form>
    );
  }

  return authContent;
}
