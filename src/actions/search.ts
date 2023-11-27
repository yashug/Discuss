"use server";

import { redirect } from "next/navigation";

export async function search(formData: FormData) {
  const term = formData.get("term");

  if (typeof term !== "string" || !term) {
    redirect("/");
  } else {
    redirect(`/search?term=${term}`);
  }
}
