const puppeteer = require('puppeteer');

//Funcion autoejecutada
(async ()=>{
    console.log('Launching browser');
    const browser = await puppeteer.launch({headless: false});
    
    const page = await browser.newPage();
    await page.goto('https://es.wikipedia.org/wiki/Node.js');

    let titulo1 = await page.evaluate(()=>{
        const h1 = document.querySelector('h1');
        console.log(h1.innerHTML);

        return h1.innerHTML;
    })

    console.log(titulo1);
    
    console.log('Closing browser');
    browser.close();
    console.log('Browser closed');
    
})();