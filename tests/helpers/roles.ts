import { Role, t } from "testcafe";
import loginPage from "../pages/login.page";

const username = "ryanterronez@proton.me"
const password = "ymb*kaq8cgc.QZT3mht"

export const ValidUser = Role (loginPage.url, async t => {
    await loginPage.login(username, password)
    },
    { preserveUrl: true }
);
