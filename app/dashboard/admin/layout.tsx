import { headers } from "next/headers";
import { SidebarProvider, SidebarTrigger } from "../../_components/ui/sidebar";
import { auth } from "../../_lib/auth";
import prisma from "../../_lib/prisma";
import { AppSidebar } from "../_components/app-sidebar";
import { redirect } from "next/navigation";

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

  if (!session?.user?.id) {
    return redirect("/authentication/sign-in");
  }

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

      <body className="w-full">
        <header className="bg-muted w-full p-2 fixed md:hidden">
          <SidebarTrigger />
        </header>

        <main className="w-full mt-10 sm:mt-0 px-4 py-6">{children}</main>
      </body>
    </SidebarProvider>
  );
}
