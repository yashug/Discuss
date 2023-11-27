"use client";

import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";
import * as actions from "@/actions";

export function SearchInput() {
  const searchParams = useSearchParams();

  return (
    <form action={actions.search}>
      <Input
        type="search"
        name="term"
        placeholder="Search..."
        className="sm:w-[300px] focus-visible:ring-offset-0"
        defaultValue={searchParams.get("term") || ""}
      />
    </form>
  );
}
