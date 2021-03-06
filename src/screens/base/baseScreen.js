const {Integers} = require("../../resources/integers");
const {until, Key} = require("selenium-webdriver")

class BaseScreen {

    // region | Constructor --------------------------------------------------------------------------------------------

    constructor(driver, url) {
        this.driver = driver;
        this.url = url;
        this.articleName = "";
    }

    // endregion

    // region | Action Methods -----------------------------------------------------------------------------------------

    async click(matcher) {
        await this.driver.findElement(matcher).click();
    }

    async fetchArticleUrl() {
        return await this.driver.getCurrentUrl();
    }

    async typeText(matcher, text) {
        await this.driver.findElement(matcher).sendKeys(text);
    }

    async submitText(matcher, text) {
        await this.driver.findElement(matcher).sendKeys(text, Key.RETURN);
    }

    // endregion

    //region | Assertion Methods ---------------------------------------------------------------------------------------

    // endregion

    // region | Wait Methods -------------------------------------------------------------------------------------------

    async waitForTitle(title) {
        await this.driver.wait(until.titleContains(title), Integers.WAIT)
    }

    //endregion

    async confirmUrl(url) {
        const currentUrl = await this.driver.getCurrentUrl();
        return currentUrl === url;
    }

    urlContains(text) {
        return this.url.includes(text)
    }

    withUrl = (url) => {
        this.url = url
        return this;
    }
}

module.exports = BaseScreen;