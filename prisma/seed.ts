import prisma from "@/app/_lib/prisma";
import { Rule } from "@/app/generated/prisma/enums";


async function main() {
  await prisma.navigationItem.createMany({
    data: [
      {
        title: "Chamados atendidos",
        url: "/lobby/[email]/history-calls",
        requiredRule: Rule.CLIENT,
        icon: "ClipboardClock",
        order: 1,
      },
      {
        title: "Chamados abertos",
        url: "/lobby/[email]/open-calls",
        requiredRule: Rule.CLIENT,
        icon: "Inbox",
        order: 2,
      },
    ],
    skipDuplicates: true,
  });

  console.log("✅ Navigation items criados");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
