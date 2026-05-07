import { PanelSessionGuard } from '@/modules/auth/components/panel-session-guard'
import { AppPanelShell } from '@/shared/components/layout/AppPanelShell'

export default function PanelLayout({ children }: { children: React.ReactNode }) {
  return (
    <PanelSessionGuard>
      <AppPanelShell>{children}</AppPanelShell>
    </PanelSessionGuard>
  )
}
