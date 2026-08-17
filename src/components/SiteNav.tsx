import { Link, useRouterState } from "@tanstack/react-router";
import logo from "@/assets/at-logo.png";

const links = [
  { to: "/", label: "الرئيسية" },
  { to: "/rules", label: "القوانين" },
  { to: "/store", label: "المتجر" },
  { to: "/discord", label: "الديسكورد" },
] as const;

export function SiteNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 sm:px-6 lg:px-8">
      <div className="mt-4 flex w-full items-center justify-between gap-4 rounded-2xl glass px-4 py-2.5 neon-ring">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="شعار مدينة Austin Town CFW RP"
            width={44}
            height={44}
            className="h-11 w-11 rounded-xl"
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-sm tracking-widest gradient-text">AUSTIN TOWN</span>
            <span className="text-[10px] tracking-[0.35em] text-muted-foreground">CFW RP</span>
          </span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative rounded-xl px-3 py-2 text-sm transition-all duration-300 sm:px-4 ${
                  active
                    ? "bg-primary/25 text-foreground neon-ring"
                    : "text-muted-foreground hover:-translate-y-0.5 hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
