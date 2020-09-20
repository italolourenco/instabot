const puppeteer = require("puppeteer-extra")

const pluginStealth = require("puppeteer-extra-plugin-stealth")
puppeteer.use(pluginStealth())

const account = require("./config/account.json")

const BASE_URL = "https://www.instagram.com/"

async function firstConnection(){

    try {
        const browser = await puppeteer.launch({headless:false, args: ['--start-maximized']})
        const page = await browser.newPage()
        await page.goto(BASE_URL)
        await page.waitFor(2000)
        await page.focus('#loginForm > div > div:nth-child(1) > div > label > input')
        await page.waitFor(2000)
        await page.keyboard.type(account.login)
        await page.waitFor(2000)
        await page.focus('#loginForm > div > div:nth-child(2) > div > label > input')
        await page.waitFor(2000)
        await page.keyboard.type(account.password)
        await page.waitFor(2000)
        await page.click('#loginForm > div > div:nth-child(3) > button')


    }
    catch(error){
        console.log(error)
    }
}

async function run(){
    await firstConnection()
}


run()