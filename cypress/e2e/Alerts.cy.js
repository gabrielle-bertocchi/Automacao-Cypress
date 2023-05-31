describe('Alerts', () => {
    it('Js alert', () => {
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

    

    it('Js prompt alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((win)=>{
            cy.stub(win, 'prompt').returns('Welcome');
        })

        cy.get("button[onclick='jsPrompt()']").click();

        cy.get('#result').should('have.text', 'You entered: Welcome');        
    });

    it('Authenticated alert', () => {

        cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:
                                                                 {username: "admin",
                                                                 password:"admin"}});
        
            //poderia usar tbm assim:
            //cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')

        cy.get('#content p').should('have.contain', 'Congratulations!');
    });





})