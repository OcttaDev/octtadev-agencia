import prisma from "@/app/_lib/prisma";
import OpenCalls from "./_components/open-calls";
import { CallWithAccountUser } from "@/app/_types/call-with-account-user";

export default async function OpenCallsPage() {
  const calls: CallWithAccountUser[] = await prisma.call.findMany({
    where: {
      status: "PENDING",
    },
    include: {
      account: {
        include: {
          user: true,
        },
      },
    },
  });

  return (
    <div>
      <OpenCalls calls={calls} />
    </div>
  );
}
