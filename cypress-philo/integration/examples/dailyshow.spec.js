//import stateTaxes.json from fixture
describe('add show to saved folder',function()
    {   
        it('verify the title of page',function()
        {
            cy.visit("http://philo.tv/dailyshow")//open the page
            cy.title().should('eq','Welcome to Philo')//verify page title is correct
            cy.wait(20000)//wait for 20 seconds to manually sign in philo with phone no and verification code
        })
        it('verify copy link',function()
        {   
            cy.get('.share-copy').should('be.visible')//"copy" button should be visible
            cy.get('.share-link-text').should('have.text','Copy Link')//after 2 seconds,text "copied" changes to "copy link"
            navigator.clipboard.readText().then(text => {
                cy.get('.share-link-url').should('have.value',text)
            }).catch(err => {
                console.error('Failed to read clipboard contents: ', err);//verify the link copied to clipboard is the same as the page link
            });

        })
        it('verify save the show',function()
        {   
            cy.get('.tile-info-title-text').as('titles')

            cy.get('@titles').first().should('have.text','The Daily Show With Trevor Noah')//not necessary, 
            
            cy.get('.save-button').click({force: true})
            cy.get('.save-button-lable').should('have.text','Saved')//verify 'save' changes to 'saved'
            cy.get('.save-button').trigger('mouseover')//mouseover to saved button
            cy.get('.save-button').should('have.text','Unsave')//"saved" should change to "unsave"     
            cy.get('.nav-item-saved > .nav-icon').click //click saved folder on the top
            cy.wait(1000)
            cy.get('.tile-info-title-text').first().invoke('text').then(text => {
                cy.get('@titles').first().should('have.text',text)//verify the show is added in saved folder
            })
            
        })

    })
