import { auth } from "@/app/_lib/auth";
import prisma from "@/app/_lib/prisma";
import { headers } from "next/headers";
import ClientOpenCalls from "./_components/client-open-calls";
import { Status } from "@/app/generated/prisma/enums";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const account = await prisma.account.findFirst({
    where: {
      userId: session?.user.id,
    },
    select: {
      calls: {
        where: {
          status: Status.PENDING,
        }
      }
    },
  });

  return (
    <div>
      <ClientOpenCalls calls={account?.calls || []} />
    </div>
  );
}
