import { headers } from "next/headers";
import { SidebarProvider, SidebarTrigger } from "../_components/ui/sidebar";
import { auth } from "../_lib/auth";
import prisma from "../_lib/prisma";
import { AppSidebar } from "./_components/app-sidebar";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [navigationItems, session] = await Promise.all([
    prisma.navigationItem.findMany({
      orderBy: {
        order: "asc",
      },
    }),
    auth.api.getSession({
      headers: await headers(),
    }),
  ]);

  if (!session?.user?.id) return null;

  const account = await prisma.account.findFirst({
    where: {
      userId: session.user.id,
    },
    select: {
      rule: true,
    },
  });

  return (
    <SidebarProvider>
      <AppSidebar navigationItems={navigationItems} rule={account?.rule!} />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
