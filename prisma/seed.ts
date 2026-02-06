import prisma from "@/app/_lib/prisma";
import { Rule } from "@/app/generated/prisma/enums";


async function main() {
  await prisma.navigationItem.createMany({
    data: [
      {
        title: "Chamados atendidos",
        url: "/lobby/[id]/history-calls",
        requiredRule: Rule.CLIENT,
        icon: "Database",
        order: 1,
      },
      {
        title: "Chamados abertos",
        url: "/lobby/[id]/history-calls",
        requiredRule: Rule.CLIENT,
        icon: "Inbox",
        order: 2,
      },
      {
        title: "Pagamentos",
        url: "/lobby/[id]/payments",
        requiredRule: Rule.CLIENT,
        icon: "BanknoteArrowUp",
        order: 3,
      },
      {
        title: "Chamados abertos",
        url: "/administration/called/open-calls",
        requiredRule: Rule.ADMIN,
        icon: "Inbox",
        order: 4,
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
