describe('Homepage', () => {
  beforeEach(() => {
    cy.checkReservationsData()
  })

  describe('Onload', () => {
    it('should display cards on load', () => {
      cy.get('.app-title')
        .contains('Turing Cafe Reservations')
        .get('input')
        .should('have.length', 4)
        .get('button')
        .contains('Make reservation')
        .get('.card')
        .should('have.length', 3)
        .get('.card')
        .eq(0)
        .contains('Christie')
        .get('.card')
        .eq(0)
        .contains('12/29')
        .get('.card')
        .eq(0)
        .contains('7:00 pm')
        .get('.card')
        .eq(0)
        .contains('Number of guests: 12')
        .get('.card')
        .eq(1)
        .contains('Leta')
        .get('.card')
        .eq(1)
        .contains('4/5')
        .get('.card')
        .eq(1)
        .contains('7:00 pm')
        .get('.card')
        .eq(1)
        .contains('Number of guests: 2')

    })
  })

  describe.only('Input', () => {
    it('should have value on inputs when typed', () => {
      cy.get('input.name')
        .type('Ashish')
        .should('have.value', 'Ashish')
        .get('input.date')
        .type('9/4')
        .should('have.value', '9/4')
        .get('input.time')
        .type('11:00')
        .should('have.value', '11:00')
        .get('input.number')
        .type('2')
        .should('have.value', '2')
        
    })
  })

  // describe('User Flow', () => {
  //   it('should have value on inputs when typed', () => {
      
  //   })
  // })
})