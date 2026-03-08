import { Outlet, NavLink } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "text-indigo-600"
    : "text-gray-600 transition hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400";

export default function RootLayout() {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur dark:bg-slate-950/70">
        <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
          <NavLink
            to="/"
            className="text-lg font-bold tracking-tight text-indigo-600"
          >
            Malak<span className="text-slate-900 dark:text-white">Oubaha</span>
          </NavLink>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-6 text-sm font-medium">
              <NavLink to="/projects" className={navLinkClass}>
                Projets
              </NavLink>

              <NavLink to="/competences" className={navLinkClass}>
                Compétences
              </NavLink>

              <NavLink to="/education" className={navLinkClass}>
                Formations
              </NavLink>

              <NavLink to="/certifications" className={navLinkClass}>
                Certifications
              </NavLink>

              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </div>

            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 p-6">
        <Outlet />
      </main>

      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} • Oubaha Malak
      </footer>
    </div>
  );
}