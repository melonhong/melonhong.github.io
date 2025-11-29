import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const navItems = [
    { title: "About", id: "about" },
    { title: "Skills", id: "skills" },
    { title: "Projects", id: "projects" },
    { title: "Philosophy", id: "philosophy" },
    { title: "Contact", id: "contact" },
  ];
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav
      className="fixed w-full z-50 h-20 backdrop-blur-md bg-white/10 dark:bg-[#0f0720]/15 border-b border-white/30 dark:border-white/10 shadow-sm transition-all duration-300"
      id="navbar"
    >
      <div className="max-w-6xl mx-auto px-6 h-full flex justify-between items-center">
        <a
          href="#"
          className="text-light-primary dark:text-[#d8b4fe] font-mono text-xl font-bold border-2 border-light-primary dark:border-[#d8b4fe] p-1 rounded hover:bg-light-primary/10 dark:hover:bg-[#d8b4fe]/10 transition-colors"
        >
          J.Dev
        </a>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center space-x-8 text-sm font-mono">
            {navItems.map((n, i) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="hover:text-light-primary dark:hover:text-[#d8b4fe] transition-colors"
              >
                <span className="text-light-primary dark:text-[#d8b4fe]">
                  {("0" + (i + 1)).slice(-2)}.
                </span>{" "}
                {n.title}
              </button>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
