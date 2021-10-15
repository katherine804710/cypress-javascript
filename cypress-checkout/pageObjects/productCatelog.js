/// <reference types="cypress" />
class ProductCatelog
{
visit()
{
    cy.visit("https://jungle-socks.herokuapp.com/")
}
fillQuantityZebra(value)
{
const field=cy.get('#line_item_quantity_zebra') 
field.clear()
field.type(value)
return this
}
fillQuantityLion(value)
{
const field=cy.get('#line_item_quantity_lion')
field.clear()
field.type(value)
return this
}
fillQuantityElephant(value)
{
const field=cy.get('#line_item_quantity_elephant')


field.clear()
field.type(value)
return this
}
fillQuantityGiraffe(value)
{
const field=cy.get('#line_item_quantity_giraffe')
field.clear()
field.type(value)
return this
}
selectState(value)
{
const field=cy.get('select')
field.select(value)
return this 

}
checkout()
{
    cy.get('[name="commit"]').click()
}

}
export default ProductCatelog