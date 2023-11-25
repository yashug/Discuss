"use client";

import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import UserNav from "@/components/user-nav";
import * as actions from "@/actions";

export default function HeaderAuth() {
  const session = useSession();

  let authContent: React.ReactNode;
  if (session.status === "loading") {
    authContent = null;
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
