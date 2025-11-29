import { portfolioData } from "../../data/portfolioData";

export function Footer() {
  return (
    <footer className="py-6 text-center text-gray-500 font-mono text-xs">
      <div className="flex justify-center gap-6 text-xl mb-4">
        <a
          href="#"
          className="hover:text-light-primary dark:hover:text-[#d8b4fe] transition-colors"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="#"
          className="hover:text-light-primary dark:hover:text-[#d8b4fe] transition-colors"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          href="#"
          className="hover:text-light-primary dark:hover:text-[#d8b4fe] transition-colors"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
      <p>Designed &amp; Built by {portfolioData.name}</p>
      <p className="mt-2">Inspired by the community</p>
    </footer>
  );
}
