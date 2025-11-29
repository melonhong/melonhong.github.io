import type { ContactInfo } from "../../types/portfolio";

/**
 * Contact 컴포넌트
 * 이메일 클릭 시 바로 메일 보내기 (mailto) 기능
 */
export function Contact({ contact }: { contact: ContactInfo }) {
  return (
    <section id="contact" className="py-32 px-6 text-center">
      <div className="max-w-2xl mx-auto fade-in-section">
        <p className="text-light-primary dark:text-[#d8b4fe] font-mono mb-6">
          05. What&apos;s Next?
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-light-heading dark:text-dark-heading mb-6">
          Get In Touch
        </h2>
        <p className="text-light-text dark:text-dark-text text-lg mb-10 leading-relaxed">
          저는 현재 기술적 도전과 성장이 있는 곳에서 새로운 기회를 찾고
          있습니다.
          <br />
          궁금한 점이 있거나 인사를 건네고 싶다면 언제든 연락주세요.
        </p>

        {/* 이메일 카드 섹션 (mailto 링크로 변경됨) */}
        <div className="flex justify-center mb-12">
          <a
            href={`mailto:${contact.email}`}
            className="group relative flex items-center gap-3 px-6 py-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl hover:border-light-primary dark:hover:border-[#d8b4fe] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            {/* 왼쪽 편지 아이콘 */}
            <span className="text-gray-400 group-hover:text-light-primary dark:group-hover:text-[#d8b4fe] transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </span>

            {/* 이메일 텍스트 */}
            <span className="text-lg md:text-xl font-medium text-light-heading dark:text-dark-heading group-hover:text-light-primary dark:group-hover:text-[#d8b4fe] transition-colors">
              {contact.email}
            </span>

            {/* 오른쪽 화살표 아이콘 (보내기 의미) */}
            <div className="ml-2 pl-4 border-l border-gray-200 dark:border-gray-700">
              <span className="text-gray-400 group-hover:text-light-primary dark:group-hover:text-[#d8b4fe] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </span>
            </div>
          </a>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href={`${contact.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-light-primary dark:border-[#d8b4fe] bg-light-primary/10 dark:bg-[#d8b4fe]/10 text-light-primary dark:text-[#d8b4fe] font-mono rounded hover:bg-light-primary/20 dark:hover:bg-[#d8b4fe]/20 transition-colors"
          >
            GitHub
          </a>
          <a
            href={`${contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-gray-400 dark:border-gray-600 text-light-text dark:text-dark-text font-mono rounded hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
