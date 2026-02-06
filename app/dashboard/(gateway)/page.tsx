// app/redirect/page.tsx

import { auth } from "@/app/_lib/auth";
import prisma from "@/app/_lib/prisma";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Loading from "../../loading";

export default async function DashboardLayout() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user?.id) {
    redirect("/auth");
  }

  const account = await prisma.account.findFirst({
    where: {
      userId: session.user.id,
    },
  });

  if (!account) {
    redirect("/authentication/sign-in");
  }

  if (account.rule === "ADMIN") {
    redirect("/dashboard/admin/called/open-calls");
  }

  if (account.rule === "CLIENT") {
    redirect(`/dashboard/lobby/${session.user.id}/history-calls`);
  }

  return <Loading />;
}
