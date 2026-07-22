import { expect, test } from "@playwright/test";
import { testQuestions } from "#/test-data/testQuestions.gen";
import { CenterPerm } from "#/utils/trainer/skewbUtils";

function getRandomCenterPerm() {
    const centerPerms = Object.values(CenterPerm) as CenterPerm[];
    return centerPerms[Math.floor(Math.random() * centerPerms.length)];
}

test("all correct answers", async ({ page }) => {
    await page.goto("/skewb-resources/trainer");
    await expect(page.getByText("Skewb Trainer")).toBeVisible();
    let i = 0;
    for (i = 0; i < 50; i++) {
        await expect(
            page.getByText(`${i}/${i} answered correctly`),
        ).toBeVisible();
        const { correctAnswer } = testQuestions[i];
        await page.getByText(correctAnswer, { exact: true }).click();
    }
    await expect(page.getByText(`${i}/${i} answered correctly`)).toBeVisible();
});

test("some wrong answers", async ({ page }) => {
    await page.goto("/skewb-resources/trainer");
    await expect(page.getByText("Skewb Trainer")).toBeVisible();
    let i = 0;
    let correctAnswers = 0;
    for (i = 0; i < 20; i++) {
        await expect(
            page.getByText(`${correctAnswers}/${i} answered correctly`),
        ).toBeVisible();
        const { correctAnswer } = testQuestions[i];
        const randomAnswer = getRandomCenterPerm();
        await page.getByText(randomAnswer, { exact: true }).click();
        if (randomAnswer === correctAnswer) {
            correctAnswers++;
        } else {
            await expect(
                page.getByText(`${correctAnswers}/${i + 1} answered correctly`),
            ).toBeVisible();
            const randomAnswer2 = getRandomCenterPerm();
            await page.getByText(randomAnswer2, { exact: true }).click();
            if (randomAnswer2 !== correctAnswer) {
                await expect(
                    page.getByText(
                        `${correctAnswers}/${i + 1} answered correctly`,
                    ),
                ).toBeVisible();
                await page.getByText(correctAnswer, { exact: true }).click();
            }
        }
    }
    await expect(
        page.getByText(`${correctAnswers}/${i} answered correctly`),
    ).toBeVisible();
});
