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
import {  useSession } from "@/app/_lib/auth-client";
import { stringToColor } from "@/app/_lib/color-generator";
import { iconMap } from "@/app/_lib/icon-map";
import { NavigationItem } from "@/app/generated/prisma/client";
import * as Icons from "lucide-react";

export function AppSidebar({
  navigationItems,
  rule,
}: {
  navigationItems: NavigationItem[];
  rule: string | null;
}) {
  const { data: session } = useSession();

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
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <Icon className="size-4" />
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
