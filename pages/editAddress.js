import { Selector, t } from "testcafe";

export class EditAddress {
  constructor() {
    this.address = 1;
    this.country = ["us", "canada"];
    this.interests = ["climb", "dance", "read"];

    this.addressNavBarLink = Selector(
      "#navbar > div.navbar-nav.mr-auto > a:nth-child(2)"
    );
    this.addressTable = Selector("body > div > table > tbody");
    this.editButton = Selector(
      `body > div > table > tbody > tr:nth-child(${this.address}) > td:nth-child(6) > a`
    );
    this.firstNameInput = Selector("#address_first_name");
    this.lastNameInput = Selector("#address_last_name");
    this.address1Input = Selector("#address_street_address");
    this.address2Input = Selector("#address_secondary_address");
    this.cityInput = Selector("#address_city");
    this.stateDropdown = Selector("#address_state");
    this.stateOption = Selector("#address_state > option:nth-child(49)");
    this.zipcodeInput = Selector("#address_zip_code");
    this.countrySelector = Selector(`#address_country_${this.country[0]}`);
    this.ageInput = Selector("#address_age");
    this.websiteInput = Selector("#address_website");
    this.phoneInput = Selector("#address_phone");
    this.interestsCheck = Selector(`#address_interest_${this.interests[1]}`);
    this.noteTextareaInput = Selector("#address_note");
    this.updateAddressButton = Selector(".btn-primary");
  }

  async edit() {
    const message = "I live pretty far now";

    await t
      .click(this.addressNavBarLink)
      .expect(this.addressTable.exists)
      .ok()
      .click(this.editButton)
      .typeText(this.firstNameInput, process.env.NEWFIRSTNAME, {
        replace: true,
      })
      .typeText(this.lastNameInput, process.env.NEWLASTNAME, { replace: true })
      .typeText(this.address1Input, process.env.NEWADDRESS_1, { replace: true })
      .typeText(this.address2Input, process.env.NEWADDRESS_2, { replace: true })
      .typeText(this.cityInput, process.env.NEWCITY, { replace: true })
      .click(this.stateDropdown)
      .click(this.stateOption)
      .typeText(this.zipcodeInput, process.env.NEWZIPCODE, { replace: true })
      .click(this.countrySelector)
      .typeText(this.ageInput, process.env.NEWAGE, { replace: true })
      .typeText(this.websiteInput, process.env.NEWWEBSITE, { replace: true })
      .typeText(this.phoneInput, process.env.NEWPHONE, { replace: true })
      .click(this.interestsCheck)
      .typeText(this.noteTextareaInput, message, { replace: true })
      .click(this.updateAddressButton);
  }
}
