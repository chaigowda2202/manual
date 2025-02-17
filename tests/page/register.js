export class LoginPage {
    constructor(page) {
        this.page = page;
        this.registerlink = page.locator("//a[text()='Register']");
        this.femalebtn = page.locator('//input[@value="F"]');
        this.firstName = page.locator('//input[@id="FirstName"]');
        this.lastName = page.locator('//input[@id="LastName"]');
        this.email = page.locator('//input[@id="Email"]');
        this.password = page.locator('//input[@id="Password"]');
        this.confirmpass = page.locator('//input[@id="ConfirmPassword"]');
        this.regbtn = page.locator('//input[@id="register-button"]');
        this.successmessage = page.locator('//div[@class="result"]');
        // this.successmessage = page.locator("//div[contains(text(),'Your registration completed')]")
        this.continueBtn = page.locator('//input[@value="Continue"]');
    }

    async navigate(url) {
        await this.page.goto(url);
    }

    async myloginObj(FN, LN, EMAIL, PASS, CONPASS) {
        await this.registerlink.click();
        await this.femalebtn.click();
        await this.firstName.fill(FN);
        await this.lastName.fill(LN);
        await this.email.fill(EMAIL);
        await this.password.fill(PASS);
        await this.confirmpass.fill(CONPASS);
        await this.regbtn.click(); 
        await this.pause(2000)    
    }

    async verifyRegistrationSuccess() {
        await this.successmessage.waitFor({ state: "visible", timeout: 50000 }); 
        await expect(this.successmessage).toContainText("Your registration completed");
    }
    
}