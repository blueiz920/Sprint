import { render, screen } from "@testing-library/react";
import TodoItem from "./index";

test("할 일 항목 상태 테스트", () => {
  render(<TodoItem task="저녁먹기" completed={true} />);

  const taskText = screen.getByText("저녁먹기");
  expect(taskText).toHaveTextContent("저녁먹기");

  //체크박스가 체크가 되어 있는지?

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).toBeChecked();

  // 체크박스가 비활성화 되어 있는지?

  expect(checkbox).toBeDisabled();

  // 수정 버튼이 비활성화되어 있는지 확인
  const editButton = screen.getByRole("button", { name: "수정" });
  expect(editButton).toBeDisabled();

  // 항목에 'completed' 클래스가 있는지 확인
  const listItem = screen.getByRole("listitem");
  expect(listItem).toHaveClass("completed");
});
