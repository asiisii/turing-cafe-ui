import reservations from '../fixtures/example'
const baseURL = 'http://localhost:3001/api/v1/reservations'

Cypress.Commands.add('checkReservationsData', () => {
  cy.intercept(baseURL, reservations)
    .visit('http://localhost:3000/')
})