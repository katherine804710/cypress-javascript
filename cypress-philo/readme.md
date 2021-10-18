I use cypress/Javascript for the automation test. In order to run the test, Cypress is required to install. 
I have included node_modules in the zip file. As I use node_modules to run the test. Test report screenshot is also include in cypress folder.
how to run the test:
1. install node.js. I use visual studio as IDE, which is not required. 
2. run npm install cypress —save-dev to install cypress
3. run npm init to generate package.json
4. Open terminal, locate to the folder, eg. philo. 
5. run node_modules/.bin/cypress open (for mac only, in windows use command:node_modules\.bin\cypress open ) to open test runner, then click the test to run. Tests starts executing in chrome browser.
6. In order to run the test scripts, sign in philo is required. I use cy.wait(20000) to pause 20 seconds, so tester can have time to enter phone no and verification code. This should be long enough but if there is delay receiving the code, or the sign in process costs more than 20 seconds, this will cause test failed. Because cypress can only find the elements after users sign in Philo. In this case, try to run the test again and sign in Philo with another phone no, this should work. 

Test cases include:
1. verify the title of the page
2. verify copylink: verify the link copied to clipboard should be the same as the page link.
3. verify save the show: Once the show is saved, the save button should change to "Saved" and mause over to the button, it should display "unsave".
Go to save folder, verify the title of the show is the same as the hero title of the show in previous page. 

Tests are saved in integration/examples

