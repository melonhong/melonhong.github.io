import type { Skill } from "../../types/portfolio";

/**
 * Skills 컴포넌트
 * 기술 스택을 카테고리별로 표시함
 */
export function Skills({ skills }: { skills: Skill[] }) {
  // Group skills by category
  const categories = Array.from(new Set(skills.map((s) => s.category)));
  const skillsMap: Record<string, Skill[]> = {};
  categories.forEach((cat) => {
    skillsMap[cat] = skills.filter((s) => s.category === cat);
  });
  return (
    <section id="skills" className="py-24 px-6 bg-purple-50 dark:bg-[#160d35]">
      <div className="max-w-4xl mx-auto fade-in-section">
        <div className="flex items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-light-heading dark:text-dark-heading mr-4">
            <span className="text-light-primary dark:text-[#d8b4fe] font-mono text-xl mr-2">
              02.
            </span>{" "}
            Tech Stack
          </h2>
          <div className="h-px bg-gray-300 dark:bg-gray-700 flex-grow max-w-xs"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat}
              className="bg-light-card dark:bg-dark-card p-6 rounded shadow-card flex flex-col items-center"
            >
              <h3 className="text-light-heading dark:text-dark-heading font-bold mb-2 font-sans">
                {cat}
              </h3>
              <ul className="font-mono text-sm text-light-text dark:text-dark-text space-y-1 text-center">
                {skillsMap[cat].map((s, idx) => (
                  <li key={idx}>{s.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
