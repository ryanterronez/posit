import { ValidUser } from "../helpers/roles"

fixture `Translations`
    .beforeEach(async t => {
        await t
            .useRole(ValidUser)
            .maximizeWindow()
    })

test("", async t => {
    await t.debug()
})

