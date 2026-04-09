                import { expect, Page } from '@playwright/test';

                export async function finance(page: Page, testData: any) {

                await page.getByRole('button', { name: 'Section Quality Criteria' }).click();
                await expect(page.getByText('Quality Criteria: Finance and logistics')).toBeVisible();
                await page.getByRole('button', { name: 'Close' }).click();

                await page.locator(`[name="budget_description"]`).fill("Test");
                await expect(page.locator(`[name="budget_description"]`)).toHaveValue("Test");

                // File Upload 1
                const fileInput1 = page.locator('input[type="file"]');
                await expect(fileInput1).toBeEnabled();
                await fileInput1.setInputFiles("C:\\Users\\appus\\Downloads\\blank.pdf");

                await page.locator(`[name="readiness_budget"]`).fill("10000");
                await expect(page.locator(`[name="readiness_budget"]`)).toHaveValue("10000");
                await page.locator(`[name="readiness_cost_description"]`).fill("Test");
                await expect(page.locator(`[name="readiness_cost_description"]`)).toHaveValue("Test");

                await page.locator(`[name="pre_positioning_budget"]`).fill("10000");
                await expect(page.locator(`[name="pre_positioning_budget"]`)).toHaveValue("10000");
                await page.locator(`[name="prepositioning_cost_description"]`).fill("Test");
                await expect(page.locator(`[name="prepositioning_cost_description"]`)).toHaveValue("Test");

                await page.locator(`[name="early_action_budget"]`).fill("10000");
                await expect(page.locator(`[name="early_action_budget"]`)).toHaveValue("10000");
                await page.locator(`[name="early_action_cost_description"]`).fill("Test");
                await expect(page.locator(`[name="early_action_cost_description"]`)).toHaveValue("Test");
                
                await page.locator(`[name="eap_endorsement"]`).fill("Test");
                await expect(page.locator(`[name="eap_endorsement"]`)).toHaveValue("Test");
                await page.pause();

                }