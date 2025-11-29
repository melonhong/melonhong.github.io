export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="py-24 px-6 bg-purple-50 dark:bg-[#160d35]"
    >
      <div className="max-w-4xl mx-auto fade-in-section">
        <h2 className="text-2xl md:text-3xl font-bold text-light-heading dark:text-dark-heading mb-12 text-center">
          <span className="text-light-primary dark:text-[#d8b4fe] font-mono text-xl mr-2">
            04.
          </span>{" "}
          Work Philosophy
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-light-card dark:bg-dark-card p-8 rounded border-t-4 border-light-primary dark:border-dark-primary shadow-card flex flex-col items-center hover:scale-105 transition-all duration-300">
            <div className="text-light-primary dark:text-[#d8b4fe] text-3xl mb-4">
              <i className="fa-solid fa-handshake-angle"></i>
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">
              Effective Collaboration
            </h3>
            <p className="text-light-text dark:text-dark-text leading-relaxed text-center">
              &quot;투명한 정보 공유&quot;와 &quot;기술적 합의&quot;를
              중시합니다.
            </p>
          </div>
          <div className="bg-light-card dark:bg-dark-card p-8 rounded border-t-4 border-light-primary dark:border-dark-primary shadow-card flex flex-col items-center hover:scale-105 transition-all duration-300">
            <div className="text-light-primary dark:text-[#d8b4fe] text-3xl mb-4">
              <i className="fa-solid fa-rocket"></i>
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">
              Fearless Challenge
            </h3>
            <p className="text-light-text dark:text-dark-text leading-relaxed text-center">
              갑작스러운 외부 요구사항 변경에도 당황하지 않습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
