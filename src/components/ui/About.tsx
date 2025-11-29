import type { PortfolioData } from "../../types/portfolio";

/**
 * About 컴포넌트
 * 자기소개 및 경력을 표시함
 */
export function About({ data: _data }: { data: Pick<PortfolioData, "about"> }) {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto fade-in-section">
        <div className="flex items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-light-heading dark:text-dark-heading mr-4">
            <span className="text-light-primary dark:text-dark-primary font-mono text-xl mr-2">
              01.
            </span>{" "}
            About Me
          </h2>
          <div className="h-px bg-gray-300 dark:bg-gray-700 flex-grow max-w-xs"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 text-light-text dark:text-dark-text space-y-4 text-lg leading-relaxed font-sans">
            {/* 본문 자기소개 ... */}
            {_data.about.split("\n").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
          <div className="relative group">
            <div className="absolute inset-0 border-2 border-light-primary dark:border-dark-primary rounded translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div className="relative bg-gray-200 dark:bg-gray-700 rounded overflow-hidden aspect-square grayscale hover:grayscale-0 transition-all duration-300 shadow-xl">
              <img
                src="https://ui-avatars.com/api/?name=Me&background=random&color=fff&size=512"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
