import { auth } from "@/app/_lib/auth";
import prisma from "@/app/_lib/prisma";
import { headers } from "next/headers";
import ClientHistoryCalls from "./_components/client-history-calls";

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
      calls: true,
    },
  });

  return (
    <div>
      <ClientHistoryCalls calls={account?.calls || []} rule={account?.rule || ""} />
    </div>
  );
}
