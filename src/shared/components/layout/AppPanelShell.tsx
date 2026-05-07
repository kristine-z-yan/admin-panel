import { AppHeader } from "@/shared/components/layout/AppHeader";
import { AppSidebar } from "@/shared/components/layout/AppSidebar";

type AppPanelShellProps = Readonly<{
  children: React.ReactNode;
}>;

export function AppPanelShell({ children }: AppPanelShellProps) {
  return (
    <div className="grid min-h-screen grid-cols-[220px_1fr] grid-rows-[64px_1fr]">
      <AppSidebar />
      <AppHeader />
      <main className="p-6">{children}</main>
    </div>
  );
}
