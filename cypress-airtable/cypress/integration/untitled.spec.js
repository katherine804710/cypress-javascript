// untitled.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('sign in page',function()
{   it('sign in from airtable',function(){
    cy.visit('https://airtable.com/')
    cy.get('.css-10n548d').click()
    cy.get(':nth-child(1) > .signupInputField').type('qa.test@gmail.com')
    cy.get(':nth-child(2) > .signupInputField').type('Test.12345')
    cy.get('.py1-and-half').click()
    cy.get(':nth-child(1) > .flex-auto > .my2.mx-auto').click()
    cy.wait(2000)
    //cy.get('.p2 > .width-full > .flex-auto').should('have.text', 'Untitled\u00a0Base')//verfify new base is created,Untitled base is present
    cy.get('.flex-inline > .relative > .items-center > .truncate').should('have.text', 'Untitled Base')//verfify new base is created,Untitled base is present
    cy.get('.parentColoredText').click({force: true})//click share, use force ture to ignore the error
    cy.get('.justify-end > .text-dark').click()//click "skip for now" button
    cy.get('.pt2 > :nth-child(3) > :nth-child(2)').click()//choose base 
    cy.get('.py1 > .flex-inline').click()//click invite by email 
    const collaboratorEmail='qa.test.01@gmail.com'// create a vairbale for collabortor email
    cy.get('span.flex > .white > .flex').click().type(collaboratorEmail)//click text field and enter email address
    cy.get('.flex.flex-none > .selectMenu > .focus-container > .items-center').click()//click creator
    //cy.get('.hdropdown > :nth-child(2)').click()
    //cy.get('.flex.flex-none > .selectMenu > .focus-container > .items-center').contains('Editor').click()//should('have.value','Editor')//Select Editor
    
    cy.get('.hdropdown > :nth-child(2) > :nth-child(1)').contains('Editor').click({ force: true })//select "editor" from drop down list
    //const permission='Editor'
    //cy.get('.hdropdown > :nth-child(2)').trigger('mousemove').click()//use mouseover to select menu item: editor
    cy.get('[style="width: 112px;"] > .blue').click()//click'send invite'
    cy.wait(2000)
    cy.get('section.flex:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)')
    .should('have.text', collaboratorEmail)//Verify the newly collaborated user email is displayed under “Base Collaborators”

    //cy.get('[aria-labelledby="id_5288f81a819999fcbd3011a6843ae8e1"] > .py1 > :nth-child(3) > :nth-child(1) > .selectMenu > .focus-container > .items-center > .flex-auto')
    cy.get('section.flex:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > span:nth-child(1) > div:nth-child(1) > div:nth-child(1)')
    .should('have.text', "Editor")//Verify the collaborator has “Editor” role displayed under “Base Collaborators”
    







    


})
})   
 