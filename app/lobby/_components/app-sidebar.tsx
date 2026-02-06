"use client";

import { Button } from "@/app/_components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/app/_components/ui/sidebar";
import { signOut, useSession } from "@/app/_lib/auth-client";
import { stringToColor } from "@/app/_lib/color-generator";
import { iconMap } from "@/app/_lib/icon-map";
import { NavigationItem } from "@/app/generated/prisma/client";
import * as Icons from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";

export function AppSidebar({
  navigationItems,
  rule,
}: {
  navigationItems: NavigationItem[];
  rule: string | null;
}) {
  const { data: session } = useSession();
  const pathname = usePathname();
  const userIdentifier =
    session?.user?.email || session?.user?.name || "default";

  const avatarColor = session ? stringToColor(userIdentifier) : "#ccc";
  const router = useRouter();

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div
                  style={{ backgroundColor: avatarColor }}
                  className="text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg"
                >
                  {session?.user?.name[0].toUpperCase()}
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">{session?.user?.name}</span>
                  <span className="text-xs">{session?.user?.email}</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {navigationItems.map((item) => {
              const Icon = iconMap[item.icon ?? ""] || Icons.Circle;

              const isActive = pathname.includes(
                item.url.replace("/lobby/[id]", ""),
              );
              const realUrl = item.url.replace("[id]", session?.user?.id ?? "");

              return (
                <SidebarMenuItem
                  key={item.title}
                  className={`
                   ${
                     rule?.toUpperCase() !== item.requiredRule?.toUpperCase() &&
                     !item.isActive &&
                     "hidden"
                   }
                   mt-2
                   `}
                >
                  <SidebarMenuButton
                    asChild
                    isActive={isActive}
                    className="data-[active=true]:bg-primary/5 data-[active=true]:text-primary relative"
                  >
                    <Link href={realUrl}>
                      {isActive && (
                        <span className="h-[70%] w-2 left-0 rounded-r-sm bg-primary absolute" />
                      )}
                      <Icon className="size-4 ml-2" />
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>  
          <Button
            variant="outline"
            onClick={async () => {
              await signOut({
                fetchOptions: {
                  onError: (error) => {
                    toast.error(error.error.message, {
                      icon: <Icons.AlertOctagon className="w-4 h-4" />,
                      position: "top-center",
                      richColors: true,
                    });
                    router.push("/authentication/sign-in");
                  },
                  onSuccess: () => {
                    toast.success("Login realizado com sucesso!", {
                      icon: <Icons.CheckCircle className="w-4 h-4" />,
                      position: "top-center",
                      richColors: true,
                    });
                    router.push("/authentication/sign-in");
                  },
                },
              });
            }}
          >
            <Icons.LogOut className="size-4 ml-2" />
            Sair
          </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
