import { Selector, t } from "testcafe";

export class VerifyAddress {
  constructor() {
    this.recentlyCreatedAddress = Selector("body > div");
    this.firstName = Selector(
      "body > div > p:nth-child(2) > span.col.offset-1.offset-sm-0"
    );
    this.lastName = Selector(
      "body > div > p:nth-child(3) > span.col.offset-1.offset-sm-0"
    );
    this.streetAddress = Selector(
      "body > div > p:nth-child(4) > span.col.offset-1.offset-sm-0"
    );
    this.secondaryStreetAddress = Selector(
      "body > div > p:nth-child(5) > span.col.offset-1.offset-sm-0"
    );
    this.city = Selector(
      "body > div > p:nth-child(6) > span.col.offset-1.offset-sm-0"
    );
    this.state = Selector(
      "body > div > p:nth-child(7) > span.col.offset-1.offset-sm-0"
    );
    this.zipcode = Selector(
      "body > div > p:nth-child(8) > span.col.offset-1.offset-sm-0"
    );
    this.country = Selector(
      "body > div > p:nth-child(9) > span.col.offset-1.offset-sm-0"
    );
    this.age = Selector(
      "body > div > p:nth-child(12) > span.col.offset-1.offset-sm-0"
    );
    this.website = Selector(
      "body > div > p:nth-child(13) > span.col.offset-1.offset-sm-0"
    );
    this.phone = Selector(
      "body > div > p:nth-child(14) > span.col.offset-1.offset-sm-0"
    );
  }

  async verifyAfterCreation() {
    await t
      .expect(this.firstName.innerText)
      .eql(process.env.FIRSTNAME)
      .expect(this.lastName.innerText)
      .eql(process.env.LASTNAME)
      .expect(this.streetAddress.innerText)
      .eql(process.env.ADDRESS_1)
      .expect(this.secondaryStreetAddress.innerText)
      .eql(process.env.ADDRESS_2)
      .expect(this.city.innerText)
      .eql(process.env.CITY)
      .expect(this.state.innerText)
      .eql(process.env.STATE)
      .expect(this.country.innerText)
      .eql(process.env.COUNTRY)
      .expect(this.age.innerText)
      .eql(process.env.AGE)
      .expect(this.website.innerText)
      .eql(process.env.WEBSITE)
      .expect(this.phone.innerText)
      .eql(process.env.PHONE);
  }

  async verifyAfterEdit() {
    const addressWasUpdated = Selector("body > div > div.alert.alert-notice");

    await t
      .expect(addressWasUpdated.exists)
      .ok()
      .expect(this.firstName.innerText)
      .eql(process.env.NEWFIRSTNAME)
      .expect(this.lastName.innerText)
      .eql(process.env.NEWLASTNAME)
      .expect(this.streetAddress.innerText)
      .eql(process.env.NEWADDRESS_1)
      .expect(this.secondaryStreetAddress.innerText)
      .eql(process.env.NEWADDRESS_2)
      .expect(this.city.innerText)
      .eql(process.env.NEWCITY)
      .expect(this.state.innerText)
      .eql(process.env.NEWSTATE)
      .expect(this.country.innerText)
      .eql(process.env.NEWCOUNTRY)
      .expect(this.age.innerText)
      .eql(process.env.NEWAGE)
      .expect(this.website.innerText)
      .eql(process.env.NEWWEBSITE)
      .expect(this.phone.innerText)
      .eql(process.env.NEWPHONE);
  }
}
