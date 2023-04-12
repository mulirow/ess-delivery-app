import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("estou na página {string}", (page) => {
    cy.visit('/supplier/login')
});

When("eu preencho o campo Email com o valor {string}", (email) => {
    cy.get('#email').type(email)
});

When("eu preencho o campo Senha com o valor {string}", (password) => {
    cy.get('#password').type(password)
});

When("eu seleciono a opção Login", () => {
    cy.get('#login').click()
});

Then("eu sou redirecionado para a página Supplier", () => {
    cy.get('#login').should('not.exist')
});

/////////////
Given("estou na página {string}", (page) => {
    cy.visit('/supplier/login')
});


When("eu seleciono a opção Login", () => {
    cy.get('#login').click()
});

Then("eu continuo na página de Login", () => {
    cy.get('#login').should('exist')
});