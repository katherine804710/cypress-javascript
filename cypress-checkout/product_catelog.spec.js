/// <reference types="cypress" />
import ProductCatelog from '../pageObjects/productCatelog'
describe('product catelog page',function()
    {   const pc=new ProductCatelog()
        it('verify the title of page',function()
        {  //const pc=new ProductCatelog()
            pc.visit()
            cy.title().should('eq','JungleSocks')
        })
        it('select state drop down',function()
        {
            cy.get('select').should('have.value','')//state drop down displays empty value by default
            pc.checkout()
            //state is required field and if users forgot to select state, there should be warning message: 
            //please select your state.

            cy.get('h1').contains('Please select your state.')

        })
        it('warning message of product quantity',function()
        {
            pc.fillQuantityZebra('24')
            pc.checkout()
            //If customers entered a number bigger than in stock number, 
            //cythere should be a warning message popped out: We don’t have enough stock for the product you choose. Please enter correct quantity.
            cy.get('h1').should('have.text','We don’t have enough stock for the product you choose. Please enter correct quantity.')
            
        })
    })

    
    
    
    
    
    
    
    
    