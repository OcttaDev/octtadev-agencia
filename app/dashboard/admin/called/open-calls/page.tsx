import prisma from "@/app/_lib/prisma";
import OpenCalls from "./_components/open-calls";

export default async function OpenCallsPage() {
  const calls = await prisma.call.findMany({
    where: {
      status: "PENDING",
    },
  });

  return (
    <div>
      <OpenCalls calls={calls} />
    </div>
  );
}