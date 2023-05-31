describe('Alerts', () => {
    it.skip('Js alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click();

        cy.on('window:alert', (t) => {
            expect(t).contains('I am a JS Alert');
        })

        //alert window automatic close by cypress

        cy.get('#result').should('have.text', 'You successfully clicked an alert');
    });

    it('Js alert - OK', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm', (t) => {
            expect(t).contains('I am a JS Confirm');
        })

        //cypress automatically close alert window by using ok button

        cy.get('#result').should('have.text', 'You clicked: Ok');
    });

    it('Js alert - Cancel', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm', (t) => {
            expect(t).contains('I am a JS Confirm');
        })

        cy.on('window:confirm', ()=> false) //cypress automatically close alert window by using cancel button

        cy.get('#result').should('have.text', 'You clicked: Cancel');

        
    });




})