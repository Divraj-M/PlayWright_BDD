  import { Before, After, BeforeAll, AfterAll, Status } from '@cucumber/cucumber';
  import { chromium, Browser, Page, BrowserContext } from '@playwright/test';
  import { pageFixture } from '../hooks/pageFixture';
  import { Timer } from '../helper/timer';
  let browser: Browser;
  let context:BrowserContext;

  BeforeAll(async function () {
    browser = await chromium.launch({ headless: false });
    Timer.setStartTime();

  });

  Before(async function () {
    context = await browser.newContext();
    const page = await context.newPage();
    pageFixture.page = page;
    
  });

  After(async function ({pickle,result}) {
    console.log(result?.status);
    if (result?.status == Status.FAILED && pageFixture.page) {
      const screenshot = await pageFixture.page.screenshot({path:`./test-result/screenshots/${pickle.name}.png`,type: 'png'});
      this.attach(screenshot, 'image/png');
    }
    if (pageFixture.page) {
      await pageFixture.page.close();
    }
    await context.close();
  });

  AfterAll(async function () {
    await browser.close();
  });
