describe('add show to saved folder',function()
    {   
        it('verify the title of page',function()
        {
            cy.visit("https://www.yahoo.com/")//open the page
            cy.title().should('eq','Welcome to Philo')//verify page title is correct
            cy.wait(20000)//wait for 20 seconds to manually sign in philo with phone no and verification code
        })
    })