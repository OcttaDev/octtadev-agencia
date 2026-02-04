import { SidebarProvider, SidebarTrigger } from "../_components/ui/sidebar";
import { AppSidebar } from "./_components/app-sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
