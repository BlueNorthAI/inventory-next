import { TooltipProvider } from '@/components/ui/tooltip';
import { SidebarProvider } from '@/lib/hooks/use-sidebar';

export function Providers({ children, ...props }) {
  return (

      <SidebarProvider>
        <TooltipProvider>{children}</TooltipProvider>
      </SidebarProvider>
  );
}
