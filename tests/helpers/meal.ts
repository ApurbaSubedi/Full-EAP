                import { expect, Page } from '@playwright/test';

                export async function meal(page: Page, testData: any) {

                await page.locator(`[name="meal"]`).nth(1).fill("Test");
                await expect(page.locator(`[name="meal"]`).nth(1)).toHaveValue("Test");

                // File Upload 1
                const fileInput1 = page.locator('input[type="file"]');
                await expect(fileInput1).toBeEnabled();
                await fileInput1.setInputFiles("C:\\Users\\appus\\Downloads\\blank.pdf");

                await page.getByRole('button', { name: 'Add' }).click();
                await page.locator(`[name="source_name"]`).nth(0).fill("Test");
                await expect(page.locator(`[name="source_name"]`).nth(0)).toHaveValue("Test");
                await page.locator(`[name="source_link"]`).nth(0).fill("https://Test.com");
                await expect(page.locator(`[name="source_link"]`).nth(0)).toHaveValue("https://Test.com");

                await page.getByRole('button', { name: 'Add' }).click();
                await page.locator(`[name="source_name"]`).nth(1).fill("Test");
                await expect(page.locator(`[name="source_name"]`).nth(1)).toHaveValue("Test");
                await page.locator(`[name="source_link"]`).nth(1).fill("https://Test.com");
                await expect(page.locator(`[name="source_link"]`).nth(1)).toHaveValue("https://Test.com");
                await page.getByText('ABOUT GO').click();
                await page.getByRole('button', { name: 'Next' }).click();


                }