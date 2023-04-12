import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("estou na página {string}", (page) => {
    cy.visit('/supplier/register')
});

When("eu preencho o campo Name com o valor {string}", (name) => {
    cy.get('#name').type('ldcn@cin.ufpe.br')
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

When("eu preencho o campo Endereço com o valor {string}", (address) =>{
    cy.get('#address').type('Rua algo')
});

When("eu preencho o campo Complemento com o valor {string}", (complement) =>{
    cy.get('#complement').type('100')
});

When("eu preencho o campo CNPJ com o valor {string}", (cnpj) =>{
    cy.get('#confirmPassword').type('123')
});

When("eu preencho o campo Foto de Perfil com o valor {string}", (picture) =>{
    cy.get('#picture').type('123')
});

When("eu seleciono em registrar",() => {
    cy.get('#register').click()
});

Then("eu sou redirecionado para a página Login",() => {
    cy.url().should('match', /supplier/login);
});

/////////////

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

When("eu preencho o campo Endereço com o valor {string}", (address) =>{
    cy.get('#address').type('Rua algo')
});

When("eu preencho o campo Complemento com o valor {string}", (complement) =>{
    cy.get('#complement').type('100')
});

When("eu preencho o campo Foto de Perfil com o valor {string}", (picture) =>{
    cy.get('#picture').type('123')
});

When("eu seleciono em registrar",() => {
    cy.get('#register').click()
});

Then("eu sou alertado de que",() => {
    cy.get('#register').should('exist')
    cy.log('O elemento #register não já existe')
});  

/////////////

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

When("eu preencho o campo CNPJ com o valor {string}", (cnpj) =>{
    cy.get('#confirmPassword').type('123')
});

When("eu preencho o campo Endereço com o valor {string}", (address) =>{
    cy.get('#address').type('Rua algo')
});

When("eu preencho o campo Complemento com o valor {string}", (complement) =>{
    cy.get('#complement').type('100')
});

When("eu preencho o campo Foto de Perfil com o valor {string}", (picture) =>{
    cy.get('#picture').type('123')
});

When("eu seleciono em registrar",() => {
    cy.get('#register').click()
});

Then("eu sou alertado de que",() => {
    cy.get('#register').should('exist')
    cy.log('Preencha/corrija todos os dados obrigatórios')
});

/////////////

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

When("eu preencho o campo CNPJ com o valor {string}", (cnpj) =>{
    cy.get('#confirmPassword').type('123')
});

When("eu preencho o campo Endereço com o valor {string}", (address) =>{
    cy.get('#address').type('Rua algo')
});

When("eu preencho o campo Complemento com o valor {string}", (complement) =>{
    cy.get('#complement').type('100')
});

When("eu preencho o campo Foto de Perfil com o valor {string}", (picture) =>{
    cy.get('#picture').type('321')
});

When("eu seleciono em registrar",() => {
    cy.get('#register').click()
});

Then("eu sou alertado de que",() => {
    cy.get('#register').should('exist')
    cy.log('Senhas diferentes')
});