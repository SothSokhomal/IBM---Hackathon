const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  const errors = [];
  page.on('pageerror', err => {
    errors.push(err.message + '\n' + err.stack);
  });
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
    }
  });

  try {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    
    // Login
    await page.fill('input[type="email"]', 'test@test.com');
    await page.fill('input[type="password"]', 'password');
    await page.click('button[type="submit"]');
    
    // Wait for Dashboard
    await page.waitForTimeout(500);
    
    // Click Crop Doctor AI
    // We can evaluate and find the button that says 'Crop Doctor AI'
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const btn = buttons.find(b => b.textContent.includes('Crop Doctor AI'));
      if (btn) btn.click();
    });
    
    await page.waitForTimeout(1000);
    
    console.log("ERRORS:", errors);
  } catch (e) {
    console.error("Script error:", e);
  }
  await browser.close();
})();
