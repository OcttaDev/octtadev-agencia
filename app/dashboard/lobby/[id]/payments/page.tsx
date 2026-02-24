import { auth } from "@/app/_lib/auth";
import prisma from "@/app/_lib/prisma";
import { headers } from "next/headers";
import Payments from "./_components/payments";

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
        include: {
          payment: true,
        },
      },
    },
  });
  return (
    <div>
     <Payments payments={account?.calls || []}/>
    </div>
  );
}
