import { ClientFunction, Selector, t } from "testcafe"

class WorkspacePage {
    url: string;
    testSpaceName: string;
    buttonNewSpace: Selector;
    modal: Selector;
    inputName: Selector;
    buttonCreate: Selector;
    headerTitle: Selector;
    buttonNewProject: Selector;
    inputDeleteSpace: Selector;
    buttonDeleteSpace: Selector;
    divMessage: Selector;
    buttonEllipses: Selector;
    dropDownButtonDeleteSpace: Selector;
    buttonNewRStudioProject: Selector;
    spanDeployingProject: Selector;
    buttonProjectTitle: Selector;
    divShellWidget: Selector;
    divSpaceName: Selector;
    iframeIDE: Selector;


    constructor() {
        this.url = "https://rstudio.cloud/content/yours?sort=name_asc";
        this.testSpaceName = "testSpaceName"
        this.buttonNewSpace = Selector("button.newSpace.menuItem");
        this.modal = Selector("div.modalDialog");
        this.inputName = Selector("input#name");
        this.buttonCreate = Selector("button").withAttribute("type", "submit");
        this.headerTitle = Selector("#headerTitle");
        this.buttonNewProject = Selector("button.menuDropDown");
        this.inputDeleteSpace = Selector("input#deleteSpaceTest");
        this.buttonDeleteSpace = Selector("button#deleteSpaceSubmit");
        this.divMessage = Selector("div.message");
        this.buttonEllipses = Selector("button.action.moreActions");
        this.dropDownButtonDeleteSpace = Selector("button#headerDeleteSpaceButton");
        this.buttonNewRStudioProject = Selector("button.action.newRStudioProject");
        this.spanDeployingProject = Selector("span").withText("Deploying Project");
        this.buttonProjectTitle = Selector("button.projectTitle");
        this.divShellWidget = Selector("div#rstudio_shell_widget");
        this.divSpaceName = Selector("div.spaceNameWithOwner");
        this.iframeIDE = Selector("iframe#contentIFrame");
    }

    async createSpace(spaceName: string) {
        await t
            .click(this.buttonNewSpace)
            .expect(this.modal.exists).ok("Modal not found")
        await t
            .typeText(this.inputName, spaceName)
            .click(this.buttonCreate)
            .expect(this.headerTitle.withText(spaceName).exists).ok("Title header not found")
    }

    async deleteSpace(spaceName: string) {
        await t
            .click(this.divSpaceName.withText(this.testSpaceName))
            .click(this.buttonEllipses)
            .click(this.dropDownButtonDeleteSpace)
            .typeText(this.inputDeleteSpace, `Delete ${spaceName}`)
            .click(this.buttonDeleteSpace)
            .expect(this.divMessage.withText("Space has been successfully deleted").exists).ok("Delete message header not found")
    }

    async createProject() {
        await t
            .click(this.buttonNewProject)
            .click(this.buttonNewRStudioProject)
            .expect(this.spanDeployingProject.exists).ok()
        await t.expect(this.spanDeployingProject.exists).notOk({ timeout: 45000 })
        await t.expect(this.buttonProjectTitle.withText("Untitled Project").exists).ok()
    }

    async verifyIDE() {
        await t.expect(this.iframeIDE.visible).ok({ timeout: 45000 })
    }
}

export default new WorkspacePage();