import { fireEvent, render, screen } from "@testing-library/react";
import { Input } from "./index";
//input 컴포넌트 미입력 시 x버튼이 보이지 않아야 한다.
test("input 컴포넌트 미입력 시 x버튼이 보이지 않아야 한다.", () => {
  render(<Input />);
  // getByRole -> queryByRole 을 써야, 삭제 아이콘 없는 상황에서도 테스트 가능
  const deleteButton = screen.queryByRole("button");
  expect(deleteButton).not.toBeInTheDocument();
});

test("Input 컴포넌트에 입력값이 있을 때 X 버튼이 보이는지 확인한다.", () => {
  render(<Input defaultValue="초깃값" />);
  const input = screen.getByRole("textbox");
  const deleteButton = screen.getByRole("button");

  expect(input).toHaveValue("초깃값");
  expect(deleteButton).toBeInTheDocument();
});

test("x 버튼 클릭 시 입력값이 지워지는지 확인한다.", () => {
  render(<Input defaultValue="초깃값" />);

  const input = screen.getByRole("textbox");
  const deleteButton = screen.getByRole("button", { name: "입력값 지우기" });

  fireEvent.click(deleteButton);

  expect(input).toHaveValue("");
  expect(deleteButton).not.toBeInTheDocument();
});

test("input 컴포넌트에서 에러 발생 시 에러 메시지가 잘 보이는지 확인", () => {
  render(<Input isError={true} errorMessage="입력값에 문제가 있습니다." />);

  const errorMessage = screen.getByText("입력값에 문제가 있습니다.");
  expect(errorMessage).toBeInTheDocument();
});
