import { ValidUser } from "../helpers/roles"
import workspacePage from "../pages/workspace.page."

fixture `Smoke`
    .beforeEach(async t => {
        await t
            .useRole(ValidUser)
            .maximizeWindow()
    })

// This test logs in, and then validates that a user can create a space
// As the user can have only one space, the after hook deletes the space whether the test
// passes or fails
test("Create space", async t => {
    await workspacePage.createSpace(workspacePage.testSpaceName);
}).after(async () => {
    await workspacePage.deleteSpace(workspacePage.testSpaceName);
})

// This test logs in, and then validates that the user can create a project in a newly created space
// It has the same after hook as the previous test
test("Create project in new space, verify IDE loads", async t => {
    await workspacePage.createSpace(workspacePage.testSpaceName);
    await workspacePage.createProject();
    await workspacePage.verifyIDE();
}).after(async () => {
    await workspacePage.deleteSpace(workspacePage.testSpaceName);
})

