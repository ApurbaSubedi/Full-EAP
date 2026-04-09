                import { expect, Page } from '@playwright/test';

                export async function eapactpro(page: Page, testData: any) {

                await page.locator(`[name="early_action_implementation_process"]`).fill("Test");
                await expect(page.locator(`[name="early_action_implementation_process"]`)).toHaveValue("Test");

                // File Upload 1
                const fileInput1 = page.locator('input[type="file"]').nth(0);
                await expect(fileInput1).toBeEnabled();
                await fileInput1.setInputFiles("C:\\Users\\appus\\Downloads\\earthquake.jpeg");
                await page.locator('[name="0"]').nth(0).fill("Test caption");
                await expect(page.locator('[name="0"]').nth(0)).toHaveValue("Test caption");

                // File Upload 2
                const fileInput2 = page.locator('input[type="file"]').nth(0);
                await expect(fileInput2).toBeEnabled();
                await fileInput2.setInputFiles("C:\\Users\\appus\\Downloads\\earthquake.jpeg");
                await page.locator('[name="1"]').nth(0).fill("Test caption");
                await expect(page.locator('[name="1"]').nth(0)).toHaveValue("Test caption");

                await page.getByRole('button', { name: 'Remove' }).nth(0).click();
                                
                await page.locator(`[name="trigger_activation_system"]`).fill("Test");
                await expect (page.locator(`[name="trigger_activation_system"]`)).toHaveValue("Test");

                // File Upload 3
                const fileInput3 = page.locator('input[type="file"]').nth(1);
                await expect(fileInput3).toBeEnabled();
                await fileInput3.setInputFiles("C:\\Users\\appus\\Downloads\\earthquake.jpeg");
                await page.locator('[name="0"]').nth(1).fill("Test caption");
                await expect(page.locator('[name="0"]').nth(1)).toHaveValue("Test caption");

                await page.locator(`[name="people_targeted"]`).fill("100");
                await expect(page.locator(`[name="people_targeted"]`)).toHaveValue("100");
                await page.locator(`[name="selection_of_target_population"]`).fill("Test");
                await expect(page.locator(`[name="selection_of_target_population"]`)).toHaveValue("Test");
                await page.locator(`[name="stop_mechanism"]`).fill("100");
                await expect(page.locator(`[name="stop_mechanism"]`)).toHaveValue("100");

                // File Upload 4
                const fileInput4 = page.locator('input[type="file"]').nth(1);
                await expect(fileInput4).toBeEnabled();
                await fileInput4.setInputFiles("C:\\Users\\appus\\Downloads\\blank.pdf");

                await page.getByRole('button', { name: 'Add' }).nth(0).click();
                await page.locator(`[name="source_name"]`).fill("Test");
                await expect(page.locator(`[name="source_name"]`)).toHaveValue("Test");
                await page.locator(`[name="source_link"]`).fill("https://Test.com");
                await expect(page.locator(`[name="source_link"]`)).toHaveValue("https://Test.com");

                await page.getByRole('button', { name: 'Next' }).click();

                }