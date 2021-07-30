import { Selector, t } from "testcafe";

export class LoginPage {
  constructor() {
    this.signInContainer = Selector("#clearance");
    this.signInInput = Selector("#session_email");
    this.passwordInput = Selector("#session_password");
    this.signInButton = Selector(
      "#clearance > div > div > form > div:nth-child(5) > input"
    );
    this.verifyLoggedIn = Selector(
      "#navbar > div.navbar-nav.mr-auto > a:nth-child(2)"
    );
  }

  async loginToSite(username, password) {
    await t
      .expect(this.signInContainer.exists)
      .ok()
      .typeText(this.signInInput, username)
      .typeText(this.passwordInput, password)
      .click(this.signInButton)
      .expect(this.verifyLoggedIn.innerText)
      .eql("Addresses");
  }
}
