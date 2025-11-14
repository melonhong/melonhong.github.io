import { motion } from 'framer-motion';
import Section from '../components/common/Section';
import Container from '../components/common/Container';
import TimelineItem from '../components/ui/TimelineItem';

/**
 * About 페이지
 * 자기소개와 타임라인을 표시합니다.
 */
export default function About() {
  // 타임라인 데이터 (실제 프로젝트에서는 props나 API에서 가져옵니다)
  const timelineData = [
    {
      date: '2023 - 현재',
      title: '프론트엔드 개발자',
      description:
        '현대적인 웹 애플리케이션 개발에 집중하고 있습니다. React, TypeScript를 활용하여 사용자 경험을 중시하는 프로젝트를 진행하고 있습니다.',
    },
    {
      date: '2022',
      title: '웹 개발 부트캠프 수료',
      description:
        '웹 개발 기초부터 풀스택 개발까지 학습했습니다. 다양한 프로젝트를 통해 실무 경험을 쌓았습니다.',
    },
    {
      date: '2021',
      title: '학사 학위 취득',
      description:
        '컴퓨터 공학 학사 학위를 취득했습니다. 알고리즘, 자료구조, 소프트웨어 공학 등 다양한 과목을 이수했습니다.',
    },
    {
      date: '2020',
      title: '첫 웹 개발 프로젝트',
      description:
        'HTML, CSS, JavaScript를 배우기 시작하며 웹 개발의 세계에 입문했습니다.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* 자기소개 섹션 */}
      <Section title="자기소개" subtitle="About">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16"
            >
              {/* 프로필 이미지 (예시) */}
              <div className="flex justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-64 h-64 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-6xl font-bold shadow-xl"
                >
                  {/* 프로필 이미지가 있으면 img 태그로 대체하세요 */}
                  {/* <img src="/profile.jpg" alt="Profile" className="w-full h-full rounded-full object-cover" /> */}
                  ME
                </motion.div>
              </div>

              {/* 자기소개 텍스트 */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  안녕하세요!
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  저는 사용자 중심의 웹 애플리케이션을 개발하는 것을 좋아하는
                  프론트엔드 개발자입니다. 깔끔하고 효율적인 코드를 작성하고,
                  지속 가능한 솔루션을 만드는 것이 저의 목표입니다.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  새로운 기술을 배우고 실험하는 것을 즐기며, 오픈소스 커뮤니티에
                  기여하고 있습니다. 협업을 통해 더 나은 제품을 만들어가는 것을
                  중요하게 생각합니다.
                </p>
              </div>
            </motion.div>

            {/* 현재 관심사 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                현재 관심사
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-400 mr-2">
                    •
                  </span>
                  <span>
                    React와 Next.js를 활용한 서버 사이드 렌더링 및 최적화
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-400 mr-2">
                    •
                  </span>
                  <span>
                    TypeScript를 통한 타입 안정성 향상 및 개발 생산성 개선
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-400 mr-2">
                    •
                  </span>
                  <span>
                    사용자 경험(UX) 개선을 위한 애니메이션 및 인터랙션 디자인
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-400 mr-2">
                    •
                  </span>
                  <span>웹 접근성 및 성능 최적화</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* 타임라인 섹션 */}
      <Section
        id="timeline"
        title="타임라인"
        subtitle="Timeline"
        className="bg-gray-50 dark:bg-gray-900"
      >
        <Container>
          <div className="max-w-3xl mx-auto">
            {timelineData.map((item, index) => (
              <TimelineItem
                key={index}
                date={item.date}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}

