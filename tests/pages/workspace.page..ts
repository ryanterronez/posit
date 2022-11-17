import { Selector, t } from "testcafe"

class WorkspacePage {
    url: string;
    buttonNewSpace: Selector;
    modal: Selector;
    inputName: Selector;
    buttonCreate: Selector;
    headerTitle: Selector;
    buttonNewProject: Selector;
    inputDeleteSpace: Selector;
    buttonDeleteSpace: Selector;
    divMessage: Selector;


    constructor() {
        this.url = "https://rstudio.cloud/content/yours?sort=name_asc"
        this.buttonNewSpace = Selector("button.newSpace.menuItem");
        this.modal = Selector("div.modalDialog");
        this.buttonCreate = Selector("button").withText("Create");
        this.headerTitle = Selector("#headerTitle");
        this.headerTitle = Selector("button.menuDropDown");
        this.inputDeleteSpace = Selector("input#deleteSpaceTest");
        this.inputDeleteSpace = Selector("button#deleteSpaceSubmit");
        this.divMessage = Selector("div.message");
    }
}

export default new WorkspacePage();