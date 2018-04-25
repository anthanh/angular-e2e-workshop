import { browser } from 'protractor';
import { TariffDetail } from './tariffdeatail.po';


const tariffName = 'fibra-optica/gigas-infinitos-fibra-300mb';

describe('Tariff Detail', () => {
  let page: TariffDetail;

  beforeAll(async () => {
    // Ensure defined screen size
    await browser.driver.manage().window().setSize(1280, 1024);
  });

  describe('with infinita tariff', () => {

    beforeEach(async () => {
      page = new TariffDetail(tariffName);
      await page.navigateTo();
      await page.waitUntilReady();
    });

    it('title is correct', async () => {
      const title = await page.getTitle();
      expect(title.toLowerCase()).toBe('gigas infinitos en tu móvil y 300 mb de fibra');
    });

    it('mobiledata is correct', async () => {
      const mobileData = await page.getMobileData();
      expect(mobileData.toLowerCase()).toBe('gb infinit∞s');
    });

  });

});
