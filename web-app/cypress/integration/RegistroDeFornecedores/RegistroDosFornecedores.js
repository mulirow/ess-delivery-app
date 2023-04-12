import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("estou na página {string}", (page) => {
    cy.visit('/supplier/register')
});

When("eu preencho o campo Email com o valor {string}", (email) => {
    cy.get('#email').type('ldcn@cin.ufpe.br')
});

When("eu preencho o campo Senha com o valor {string}", (password) =>{
    cy.get('#password').type('123456')
});

When("eu preencho o campo Confirmar Senha com o valor {string}", (confirmPassword) =>{
    cy.get('#confirmPassword').type('123456')
});

When("eu preencho o campo CNPJ com o valor {string}", (cnpj) =>{
    cy.get('#confirmPassword').type('123')
});

When("eu preencho o campo Foto de Perfil com o valor {string}", (picture) =>{
    cy.get('#picture').type('123')
});

When("eu preencho o campo Descrição com o valor {string}", (description) =>{
    cy.get('#picture').type('empresa de leonidas')
});

When("eu seleciono em registrar",() => {
    cy.get('#register').click()
});

Then("eu sou redirecionado para a página Login",() => {
    cy.get('#register').should('not.exist')
});

/////////////

Given("estou na página {string}", (page) => {
    cy.visit('/supplier/login')
});
    
When("eu preencho o campo Email com o valor {string}", (email) => {
    cy.get('#email').type('rebecca@gmail.com')
});

When("eu preencho o campo Senha com o valor {string}", (password) =>{
    cy.get('#password').type('1234abc')
});

When("eu seleciono a opção Login",() => {
    cy.get('#login').click()
});

Then("eu continuo na página de Login",() => {
    cy.get('#login').should('exist')
});
   
    