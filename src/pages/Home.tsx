import { Hero } from "../components/ui/Hero";
import { About } from "../components/ui/About";
import { Skills } from "../components/ui/Skills";
import { Projects } from "../components/ui/Projects";
import { Contact } from "../components/ui/Contact";
import { Philosophy } from "../components/ui/Philosophy";
import { portfolioData } from "../data/portfolioData";

/**
 * Home 페이지 컴포넌트
 * 모든 섹션을 포함하는 메인 페이지임
 */
export function Home() {
  return (
    <>
      <Hero data={portfolioData} />
      <About data={portfolioData} />
      <Skills skills={portfolioData.skills} />
      <Projects projects={portfolioData.projects} />
      <Philosophy />
      <Contact contact={portfolioData.contact} />
    </>
  );
}
