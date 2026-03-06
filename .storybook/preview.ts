import type { Preview } from "@storybook/nextjs-vite";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        // background 혹은 color로 끝나는 단어는 컬러 피커(Color Picker) UI로 자동 연결
        color: /(background|color)$/i,
        // date로 끝나는 단어는 날짜 선택기 UI로 자동 연결
        date: /Date$/i,
      },
    },
    // 전체 스토리에 배경 설정
    backgrounds: {
      options: {
        red: {
          name: "red",
          value: "red",
        },
        blue: {
          name: "blue",
          value: "blue",
        },
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
