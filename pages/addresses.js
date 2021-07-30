import { Selector, t } from "testcafe";

export class Addresses {
  constructor() {
    this.country = ["us", "canada"];
    this.interests = ["climb", "dance", "read"];

    this.addressesLink = Selector(
      "#navbar > div.navbar-nav.mr-auto > a:nth-child(2)"
    );
    this.newAddressButton = Selector("body > div > a");
    this.newAddressForm = Selector("#new_address");
    this.firstNameInput = Selector("#address_first_name");
    this.lastNameInput = Selector("#address_last_name");
    this.address1Input = Selector("#address_street_address");
    this.address2Input = Selector("#address_secondary_address");
    this.cityInput = Selector("#address_city");
    this.stateDropdown = Selector("#address_state");
    this.stateOption = Selector("#address_state > option:nth-child(10)");
    this.zipcodeInput = Selector("#address_zip_code");
    this.countrySelector = Selector(`#address_country_${this.country[0]}`);
    this.ageInput = Selector("#address_age");
    this.websiteInput = Selector("#address_website");
    this.phoneInput = Selector("#address_phone");
    this.interestsCheck = Selector(`#address_interest_${this.interests[0]}`);
    this.noteTextareaInput = Selector("#address_note");
    this.createAddressButton = Selector(
      "#new_address > div.form-group.row.justify-content-center > input"
    );
  }

  async completeForm() {
    const message = "I live close by now";

    await t
      .expect(this.addressesLink.exists)
      .ok()
      .click(this.addressesLink)
      .click(this.newAddressButton)
      .expect(this.newAddressForm.exists)
      .ok()
      .typeText(this.firstNameInput, process.env.FIRSTNAME)
      .typeText(this.lastNameInput, process.env.LASTNAME)
      .typeText(this.address1Input, process.env.ADDRESS_1)
      .typeText(this.address2Input, process.env.ADDRESS_2)
      .typeText(this.cityInput, process.env.CITY)
      .click(this.stateDropdown)
      .click(this.stateOption)
      .typeText(this.zipcodeInput, process.env.ZIPCODE)
      .click(this.countrySelector)
      .typeText(this.ageInput, process.env.AGE)
      .typeText(this.websiteInput, process.env.WEBSITE)
      .typeText(this.phoneInput, process.env.PHONE)
      .click(this.interestsCheck)
      .typeText(this.noteTextareaInput, message)
      .click(this.createAddressButton);
  }
}
