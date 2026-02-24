// src/app/page.tsx

import InViewSlideSection from "./components/InViewSlideSection";

export default function Page() {
  return (
    <div>
      {/* 스크롤 테스트를 위한 긴 컨텐츠 */}
      <div className="p-4">
        <h1 className="mb-4 text-2xl font-bold">스크롤 테스트</h1>

        {[...Array(50)].map((_, i) => (
          <p key={i} className="mb-4">
            테스트 문단 {i + 1}. 스크롤을 내려서 슬라이드인을 확인해보세요.
          </p>
        ))}

        {/* 첫 번째 섹션: 왼쪽에서 오른쪽으로 */}
        <InViewSlideSection
          direction="left"
          className="mb-8 rounded-lg bg-blue-100 p-6"
        >
          <h2 className="mb-2 text-xl font-bold">왼쪽에서 슬라이드</h2>
          <p>이 섹션은 왼쪽에서 슬라이드됩니다.</p>
        </InViewSlideSection>

        {/* 두 번째 섹션: 위에서 아래로 */}
        <InViewSlideSection
          direction="top"
          className="mb-8 rounded-lg bg-purple-100 p-6"
        >
          <h2 className="mb-2 text-xl font-bold">위에서 슬라이드</h2>
          <p>이 섹션은 위에서 아래로 슬라이드됩니다.</p>
        </InViewSlideSection>

        {/* 세 번째 섹션: 아래에서 위로 */}
        <InViewSlideSection
          direction="bottom"
          className="mb-8 rounded-lg bg-green-100 p-6"
        >
          <h2 className="mb-2 text-xl font-bold">아래에서 슬라이드</h2>
          <p>이 섹션은 아래에서 위로 슬라이드됩니다.</p>
        </InViewSlideSection>
      </div>
    </div>
  );
}
