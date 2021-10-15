Environment set up:
1.use visual studio code as editor. From Visual studio code, open aritable-cypress-take-home-assignment folder. Open terminal, it will locate this folder path. 
2.Install node: 1.install homebrew: ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" 2.install npm: brew install node/ or download node 
3.run nmp init to generate package.json, enter information, eg keyword,description
4.run command: npm install cypress in terminal, this will create node_modules
5.run commnand:./node_modules/.bin/cypress open to run the tests, Cypress window will open and from there click .js file. 
6.Airtable site is open in Chrome. Use element slector to locate the element. Start writhing code and command+s will save the code and run the tests.
Test cases covered:
To verify'Untitled Base' displays i use cy.get('.p2 > .width-full > .flex-auto').should('have.text', 'Untitled\u00a0Base'). This reports an error:Timed out retrying after 4000ms: expected '<input.flex-auto.p1.border-none.border-none-focus.text-color-default.heading-size-default.truncate.rounded.grayLight2-hover.grayLight2-focus.stroked-blue-light1-focus>' to have text 'Untitled Base', but the text was '' 
Error:.should('have.text', 'Untitled\u00a0Base'
For collabrotor email and editor locator, cypress use ID. This will fail since they are dynamic elements and ID changes everytime run the tests. I use CSS selector to locate the dynamic elmement.
