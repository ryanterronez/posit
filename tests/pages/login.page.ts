import { ok } from "assert";
import { Selector, t } from "testcafe"

import workspacePage from "./workspace.page.";

class LoginPage {
    url: string;
    inputEmail: Selector;
    inputPassword: Selector;
    buttonContinue: Selector;
    buttonLogIn: Selector;
    linkRStudioCloud: Selector;


    constructor() {
        this.url = "https://login.posit.cloud/"
        this.inputEmail = Selector("input").withAttribute("name", "email");
        this.inputPassword = Selector("input").withAttribute("name", "password");
        this.buttonContinue = Selector("button").withText("Continue");
        this.buttonLogIn = Selector("button").withAttribute("type", "submit");
        this.linkRStudioCloud = Selector("a[href*='/projects']");
    }

    async login(username: string, password: string) {
        await t
            .typeText(this.inputEmail, username)
            .click(this.buttonContinue)
            .expect(this.inputPassword.exists).ok("Password input not found.")
        await t
            .typeText(this.inputPassword, password)
            .click(this.buttonLogIn)
            .expect(this.linkRStudioCloud.exists).ok("RStudio cloud link not found")
        await t
            .click(this.linkRStudioCloud)
            .expect(workspacePage.buttonNewSpace.exists).ok()
    }
}

export default new LoginPage();