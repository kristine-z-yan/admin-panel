// app/(panel)/index.tsx

import { AppPanelShell } from '@/shared/components/layout/AppPanelShell'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AppPanelShell>{children}</AppPanelShell>
}
