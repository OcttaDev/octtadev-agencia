"use client"


import { SidebarProvider, SidebarTrigger } from "../_components/ui/sidebar";
import { useIsMobile } from "../_hooks/use-mobile";
import { AppSidebar } from "./_components/app-sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobile = useIsMobile();
  return (
    <SidebarProvider open={!isMobile}>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
