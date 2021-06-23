const puppeteer = require('puppeteer');
(async () => {
 // launch and create a new page
 const browser = await puppeteer.launch();
 const page = await browser.newPage();
 // go to page in resumeonly mode, wait for any network events to settle
 await page.goto("http://localhost:3000?resumeonly=true", {
  waitUntil: "networkidle2"
 });
 await page.emulateMediaType('screen');
 // output to a local file
 await page.pdf({
  path: "output/resume.pdf",
  format: "letter",
  printBackground: true
 });
 // close
 await browser.close();
})();