"use client";

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
import { useSession } from "@/app/_lib/auth-client";
import { stringToColor } from "@/app/_lib/color-generator";
import { iconMap } from "@/app/_lib/icon-map";
import { NavigationItem } from "@/app/generated/prisma/client";
import * as Icons from "lucide-react";
import { usePathname } from "next/navigation";

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

  const avatarColor = stringToColor(userIdentifier);

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div
                  style={{ backgroundColor: avatarColor }}
                  className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg"
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
                item.url.replace("/lobby/[email]", ""),
              );

              return (
                <SidebarMenuItem
                  key={item.title}
                  className={`
                   ${
                     rule?.toUpperCase() !== item.requiredRule?.toUpperCase() &&
                     !item.isActive &&
                     "hidden"
                   }

                   `}
                >
                  <SidebarMenuButton
                    asChild
                    isActive={isActive}
                    className="data-[active=true]:bg-primary/5 data-[active=true]:text-primary relative"
                  >
                    <a href={item.url} >
                      {isActive && (
                        <span className="h-[70%] w-2 left-0 rounded-r-sm bg-primary absolute"/>
                      
                      )}
                      <Icon className="size-4 ml-2" />
                      {item.title}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
