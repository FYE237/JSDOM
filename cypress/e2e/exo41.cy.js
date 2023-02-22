describe('My First Test', () => {
    it('Visits Exercice 1', () => {
      cy.visit('http://localhost:3000/Exercice-41')

      //We make a push and we check if one element has been added
      cy.get("#newItem").type("Hello")//We get the textzone with id newItem and we type Hello
      cy.get("[name='push']").click()//Click on the button
      cy.get("#lifo").children().should("have.length",1)

      cy.get("#newItem").type("Hello2")
      cy.get("[name='push']").click() // Click on the button
      cy.get("#lifo").children().should("have.length",2)

      //We make a pop and we check if one element has been removed
      cy.get("[name='pop']").click()
      cy.get("#lifo").children().should("have.length",1)

      //We click on peek  and we check if the list hasn't been changed
      cy.get("[name='peek']").click()
      cy.get("#lifo").children().should("have.length",1)

      //We check if the peek was good
      cy.get("#peek-area").contains("Hello")
      //Contains is  used to get the text inside the tag


      //We make a pop
      cy.get("[name='pop']").click()
      cy.get("#lifo").children().should("have.length",0)


    })
  })