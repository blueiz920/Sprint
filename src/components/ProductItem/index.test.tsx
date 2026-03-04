// 1. 현재 상품의 `title`과 `description`에 입력한 내용이 제대로 렌더링이 되는지 확인하기
// 2. 증가 버튼과 감소 버튼, 초기 숫자인 1이 존재하는지 확인하기
// 3. 구매하기 버튼이 존재하는지 확인하기
// 4. 상품이 품절 상태(`isSoldOut={true}`)일 때 “품절” 텍스트가 렌더링되는지 확인하기
// 5. 상품이 품절 상태(`isSoldOut={true}`)일 때 버튼이 비활성화(`disabled`)되고, CSS 클래스명에 `opacity-50`과 `cursor-not-allowed`가 포함되는지 확인하기

import { render, screen } from "@testing-library/react";
import ProductItem from "./index";

test("상품의 제목과 설명에 입력한 내용이 제대로 렌더링이 되는지 확인하기", () => {
  const title = "상품 제목";
  const description = "상품 설명";

  render(<ProductItem title={title} description={description} />);

  const titleElement = screen.getByText(title);
  expect(titleElement).toBeInTheDocument();

  const descriptionElement = screen.getByText(description);
  expect(descriptionElement).toBeInTheDocument();
});

test("증가 버튼과 감소 버튼, 초기 숫자인 1이 존재하는지 확인하기", () => {
  render(<ProductItem title="상품 제목" description="상품 설명" />);

  const increaseButton = screen.getByRole("button", { name: "+" });
  expect(increaseButton).toBeInTheDocument();

  const decreaseButton = screen.getByRole("button", { name: "-" });
  expect(decreaseButton).toBeInTheDocument();

  const initialNumber = screen.getByText("1");
  expect(initialNumber).toBeInTheDocument();
});

test("구매하기 버튼이 존재하는지 확인하기", () => {
  render(<ProductItem title="상품 제목" description="상품 설명" />);

  const buyButton = screen.getByRole("button", { name: "구매하기" });
  expect(buyButton).toBeInTheDocument();
});

test("상품이 품절 상태(`isSoldOut={true}`)일 때 “품절” 텍스트가 렌더링되는지 확인하기", () => {
  render(
    <ProductItem title="상품 제목" description="상품 설명" isSoldOut={true} />,
  );

  const soldOutText = screen.getByText("품절");
  expect(soldOutText).toBeInTheDocument();
});

test("상품이 품절 상태(`isSoldOut={true}`)일 때 버튼이 비활성화(`disabled`)되고, CSS 클래스명에 `opacity-50`과 `cursor-not-allowed`가 포함되는지 확인하기", () => {
  render(
    <ProductItem title="상품 제목" description="상품 설명" isSoldOut={true} />,
  );

  //css클래스명에 opacity-50과 cursor-not-allowed가 포함된지 확인하기

  const buyButton = screen.getByRole("button", { name: "구매하기" });
  expect(buyButton).toHaveClass("opacity-50 cursor-not-allowed");
  expect(buyButton).toBeDisabled();
});
