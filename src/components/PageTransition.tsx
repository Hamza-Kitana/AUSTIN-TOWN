import { useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";

/** Re-mounts children on route change to play a 3D entrance animation. */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div key={pathname} className="animate-flip scene-3d">
      {children}
    </div>
  );
}
