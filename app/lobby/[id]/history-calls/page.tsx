import { auth } from "@/app/_lib/auth";
import prisma from "@/app/_lib/prisma";
import { headers } from "next/headers";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const account = await prisma.account.findFirst({
    where: {
      userId: session?.user.id,
    },
    select: {
      rule: true,
    },
  });

  return (
    <div>
      {account?.rule === "admin" && <h1>Owner History Calls</h1>}
      {account?.rule === "client" && <h1>Client History Calls</h1>}
    </div>
  );
}
