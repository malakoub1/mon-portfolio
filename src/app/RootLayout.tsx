import { Outlet, NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "text-indigo-600"
    : "text-gray-600 transition hover:text-indigo-600";

export default function RootLayout() {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
          <NavLink
              to="/"
             className="text-lg font-bold tracking-tight text-indigo-600"
            >
              <span className="text-slate-900">Malak Oubaha</span>
            </NavLink>

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
