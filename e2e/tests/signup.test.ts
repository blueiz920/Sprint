import { test, expect } from "@playwright/test";

test.describe("회원가입 페이지 E2E 테스트", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/auth/signup");
  });
  test("회원가입 페이지가 올바르게 렌더링되는지 테스트", async ({ page }) => {
    // 회원가입 페이지를 방문
    //회원가입 페이지 텍스트가 보이는지 확인
    const heading = page.getByRole("heading", { name: "회원가입 페이지" });
    await expect(heading).toBeVisible();
  });
  test("로그인 링크 클릭 시 로크인 페이지로 이동하는지 확인", async ({
    page,
  }) => {
    const loginLink = await page.getByRole("link", {
      name: "로그인 페이지로 이동",
    });
    await expect(loginLink).toBeVisible();
    await loginLink.click();
    await expect(page).toHaveURL("http://localhost:3000/auth/login");
  });
  test("회원가입 폼이 올바르게 작동하는지 확인", async ({ page }) => {
    const emailInput = await page.getByPlaceholder("이메일");
    const passwordInput = await page.getByPlaceholder("비밀번호", {
      exact: true,
    });
    const confirmPasswordInput = await page.getByPlaceholder("비밀번호 확인");
    const submitButton = await page.getByRole("button", {
      name: "회원가입",
    });
    //입력

    await emailInput.fill("test@Test.com");
    await passwordInput.fill("password");
    await confirmPasswordInput.fill("password");
    await submitButton.click();
    // 회원가입 완료 후 회원가입 페이지로 이동
    await expect(page).toHaveURL(`/auth/login`);
  });
});
