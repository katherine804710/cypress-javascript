/// <reference types="cypress" />
import ProductCatelog from '../pageObjects/productCatelog'


describe('order confirmation page',function()
{
    it('verify subtotal,taxes,total',function()
        {   
            const pc=new ProductCatelog()
            cy.fixture('states.json').its("states").each((state)=>{
            pc.visit()
            pc.fillQuantityZebra('23')
            pc.fillQuantityLion('12')
            pc.fillQuantityElephant('3')
            pc.fillQuantityGiraffe('15')
            pc.selectState(state)
            cy.get('select').find(':selected').invoke('text').as('state')
            pc.checkout()
            cy.get('.zebra > :nth-child(3)').should('have.text','23')
            cy.get('.lion > :nth-child(3)').should('have.text','12')
            cy.get('.elephant > :nth-child(3)').should('have.text','3')
            cy.get('.giraffe > :nth-child(3)').should('have.text','15')
            cy.get('h1').should('have.text','Please Confirm Your Order')
            cy.get(':nth-child(7) > [colspan="2"]').should('be.visible')
            cy.get(':nth-child(8) > [colspan="2"]').should('be.visible')
            cy.get(':nth-child(9) > [colspan="2"]').should('be.visible')
            cy.get('#subtotal').should('be.visible')
            cy.get('#taxes').should('be.visible')
            cy.get('#total').should('be.visible')
            var sum=0;
            //iterate table rows
            cy.get('body > table').find('tr').each(($el, $index) => {
                
                if($index!==0) {
                    //calculate the sum of the second column multiple third column
                    sum +=$el.find('td').eq(1).text() * $el.find('td').eq(2).text()      
                }
                if($index===5) {
                    //format the vaule with a leading dollar sign and a period that separates two decimal fraction
                    const formatter = new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 2
                      })
                      const s = sum
                      const subtotal = formatter.format(sum)
                    cy.get('#subtotal').should('have.text', subtotal)//verify subtotal amount is correct
                    //read tax rate from .json file
                    cy.fixture('stateTaxes.json').its(this.state).then((caTaxRate) => {
                        var t = s*caTaxRate
                        const tax=formatter.format(t)
                        cy.get('#taxes').should('have.text',tax)//verify tax is correct
                        const total=formatter.format(s+t)
                        cy.get('#total').should('have.text',total)//verify total amount is correct
                    })
                }                        
            })

  

    })
})
})