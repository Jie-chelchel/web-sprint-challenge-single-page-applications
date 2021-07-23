const pizzaNameInput = () => cy.get("input[name='pizzaName']");
const sizeInput = () => cy.get("select[name='size']");

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
});
