
describe('Log in page test', () => {
  it('Get http request', () => {
    cy.visit('http://localhost:3000')
  })
  it('Has sign in button and it works', () => {
    cy.contains('Sign in').click()
  })
  it('Has has username and password input working', () => {
    cy.get('.input-username')
      .type('dickPeterson@mail.com')
    cy.get('.input-password')
      .type('peanutbutter{enter}')
  })  
})

describe('My events page', () => {
  it('Includes my events page', () => {
    cy.url()
    .should('include', '/Myevents')
  })
  it('Should contain add evets button', () => {
    cy.contains('Add Events').click()
  })
  it('Includes Addevent page', () => {
    cy.url()
    .should('include', '/Addevents')  
  })
  it('Has Occasion and Location inputs', () => {
    cy.get('.input-occasion')
      .type('Downtown')
    cy.get('.input-location')
      .type('Codeworks graduation')
      cy.get('.input-date')
      .type('2021-12-12')
    })
  it('Checks the Submit button and adds the event', () => {
    cy.contains('Submit').click()
  })
  it('Includes my events page', () => {
    cy.url()
    .should('include', '/Myevents')
  })
  it('Should delete an event', () => {
    cy.contains('DELETE').click()
  })  
})

describe('Checks Event Details', () => {
  it('Should click on the More Details page', () => {
    cy.contains('More Details').click()
  })
  it('Should render Myevents page', () => {
    cy.url()
      .should('include', '/Eventdetails')
  })
  it('Has TODO input', () => {
    cy.get('.todo-input')
      .type('Do not forget to eat lunch')
  })
  it('Should click on the Add task button', () => {
    cy.contains('Add task').click()
  })
  it('Should mark down added TODO list', () => {
    cy.contains('Do not forget to eat lunch').click()
    cy.contains('Do not forget to eat lunch').click()
  })
  it('Should click on my events page', () => {
    cy.contains('My Events').click()
  })
  it('Should render Myevents page', () => {
    cy.url()
      .should('include', '/Myevents')
  })
})