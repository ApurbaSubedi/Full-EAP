                import { test, expect } from '@playwright/test';
                import allData from '../fixtures/testData.json';
                
                import { eapactpro } from './helpers/eapactpro';
                import { meal } from './helpers/meal';
                import { nsc } from './helpers/nsc';
                import { finance } from './helpers/finance';
                // import { fillPlannedOperations } from './helpers/plannedOperations';
                // import { fillenablingApproaches } from './helpers/enablingApproaches';
                // import { fillconditionsToDeliver } from './helpers/conditionsToDeliver';

                const scenarios = [
                { name: 'positive', data: allData.positive },
                // { name: 'negative', data: allData.negative },
                ];

                test.describe('EAP Form Validation', () => {

                for (const { name, data } of scenarios) {
                        test(`Login and submit EAP form - ${name} path`, async ({ page }) => {

                        async function clickRole(role: string, name: string) {
                                await page.getByRole(role as any, { name }).click();
                        }
                        async function locatorFill(name: string, value: string) {
                                await page.locator(`[name="${name}"]`).fill(value);
                        }
                        async function locatorClick(fieldName: string) {
                                await page.locator(`[name="${fieldName}"]`).click();
                        }

                        // LOGIN - always uses positive data
                        await page.goto('https://alpha-3.ifrc-go.dev.togglecorp.com/');
                        await clickRole('link', allData.positive.operation_overview.login);
                        await locatorFill('username', process.env.TEST_EMAIL!);
                        await locatorFill('password', process.env.TEST_PASSWORD!);
                        await clickRole('button', allData.positive.operation_overview.login);
                        await page.waitForTimeout(1000);
                        await clickRole('button', 'admin');
                        await clickRole('link', 'Account');
                        await clickRole('link', 'My Forms');
                        await clickRole('link', 'EAP Applications');
                        await page.goto('https://alpha-3.ifrc-go.dev.togglecorp.com/eap/4/full');
                        await page.getByRole('button', { name: 'EAP ACTIVATION' }).click();

                        await eapactpro(page, data);
                        await meal(page, data);
                        await nsc(page, data);
                        await finance(page, data);
                        // await fillEarlyActionIntervention(page, data);
                        // await fillPlannedOperations(page, data);
                        // await fillenablingApproaches(page, data);
                        // await fillconditionsToDeliver(page, data);
                        });
                }
                });