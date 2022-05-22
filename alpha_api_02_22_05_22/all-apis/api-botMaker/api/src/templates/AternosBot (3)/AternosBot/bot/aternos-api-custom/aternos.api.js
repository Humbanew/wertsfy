const puppeteer = require('puppeteer');
const argv  = require('yargs');

const webdriver = require('chrome-aws-lambda');

const credentials = { user: "HNServers", password: "HNSERVERS2101" }

async function conectar() {

  const browser = await puppeteer.launch({headless: true, ignoreDefaultArgs: true, args: ['--enable-automation']});

  const page = await browser.newPage();
  await page.setViewport({ width: 500, height: 700 });

  await page.goto('https://aternos.org/go/');
  await page.waitForTimeout(1500);
  await page.type("#user", credentials.user, { delay: 50 });
  await page.type("#password", credentials.password, { delay: 50 });
  await page.waitForTimeout(1500);
  await page.click("#login");


  return console.info("[Connect with Aternos] Its Ok!");
} 
  
function iniciar() { 
  return conectar();
}

function fechar() {

}

function reiniciar() {

}

argv.iniciar = iniciar();

argv.iniciar10s = setTimeout(() => { iniciar(); }, 10000);

argv.iniciar30s = setTimeout(() => { iniciar(); }, 30000);

argv.iniciar45s = setTimeout(() => { iniciar(); }, 45000);

argv.iniciar1m = setTimeout(() => { iniciar(); }, 60000);

argv.fechar = fechar();

argv.fechar10s = setTimeout(() => { fechar(); }, 10000);

argv.fechar30s = setTimeout(() => { fechar(); }, 30000);

argv.fechar45s = setTimeout(() => { fechar(); }, 45000);

argv.fechar1m = setTimeout(() => { fechar(); }, 60000);

argv.reiniciar = reiniciar();

argv.reiniciar10s = setTimeout(() => { reiniciar(); }, 10000);

argv.reiniciar30s = setTimeout(() => { reiniciar(); }, 30000);

argv.reiniciar45s = setTimeout(() => { reiniciar(); }, 45000);

argv.reiniciar1m = setTimeout(() => { reiniciar(); }, 60000);

module.exports = { iniciar, fechar, reiniciar };