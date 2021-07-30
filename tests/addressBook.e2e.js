require("dotenv").config();

import { LoginPage, Addresses, VerifyAddress, EditAddress } from "../pages";

const login = new LoginPage();
const addresses = new Addresses();
const verifyAddress = new VerifyAddress();
const editAddress = new EditAddress();

fixture`Address Book`.page`http://a.testaddressbook.com/sign_in`;

test("Add an Address", async () => {
  await login.loginToSite(process.env.USERNAME, process.env.PASSWORD);
  await addresses.completeForm();
  await verifyAddress.verifyAfterCreation();
});

test.skip("Edit an Address", async () => {
  await login.loginToSite(process.env.USERNAME, process.env.PASSWORD);
  await editAddress.edit();
  await verifyAddress.verifyAfterEdit();
});
