const pizzaNameInput = () => cy.get("input[name='pizzaName']");
const nameID = () => cy.get("input[id='name-input']");
const specialInput = () => cy.get("input[id='special-text']");
const dropDown = () => cy.get("select[id='size-dropdown']");
const form = () => cy.get("form[id='pizza-form']");

const sizeInput = () => cy.get("select[name='size']");
const orderBtn = () => cy.get("a[id='order-pizza']");
const pepperoniCheckbox = () => cy.get("input[name='pepperoni']");
const hamCheckbox = () => cy.get("input[name='ham']");
const gbCheckbox = () => cy.get("input[name='ground_beef']");
const tomatoesCheckbox = () => cy.get("input[name='tomatoes']");
const JalapenosCheckbox = () => cy.get("input[name='Jalapenos']");
const submitBtn = () => cy.get("button[id='order-button']");

describe("Pizza Order", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });

  it("check for element showing right", () => {
    pizzaNameInput().should("exist");
  });
  it("can check checkbox", () => {
    pepperoniCheckbox().check();
    pepperoniCheckbox().uncheck();
    hamCheckbox().check();
    hamCheckbox().uncheck();
    tomatoesCheckbox().check();
    tomatoesCheckbox().uncheck();
    JalapenosCheckbox().check();
    JalapenosCheckbox().uncheck();
    gbCheckbox().check();
    gbCheckbox().uncheck();
  });

  it("form is invalid", () => {
    pizzaNameInput().type("sss");
    sizeInput().select("sm");
    submitBtn().should("exist");
    submitBtn().should("not.be.disabled");
  });

  it("order btn exist", () => {
    orderBtn().should("exist");
  });
  it("name ID exist", () => {
    nameID().should("exist");
  });
  it("special Input exist", () => {
    specialInput().should("exist");
  });
  it("drop down  exist", () => {
    dropDown().should("exist");
  });
  it("form  exist", () => {
    form().should("exist");
  });
});
