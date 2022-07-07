/*
This page (command.js) contains the custom commands written by the automation engineer
to be implemented in the script as re-usable step.
Just add a command and implement in the script
*/

//Custom Command to Navigate to a page
Cypress.Commands.add('navigate_to_the_page', (url) => {
    cy.visit(url);
});

//Force Click Custom Command
Cypress.Commands.add('forceClick', {
    prevSubject: 'element'
}, (subject, options) => {
    cy.wrap(subject).click({
        force: true
    })
});

//Custom Command to login page from storefront
Cypress.Commands.add('storefront_login', (email, password) => {

    //Check the sign in header is present and click
    cy.get('#signInHeaderLink').should('be.visible');
    cy.get('#signInHeaderLink').click();

    //Enter Email & Password
    cy.get('#emailAddress').type(email);
    cy.get('#password').type(password);

    //Check and click the log in button
    cy.get('#password').should('be.visible').and('be.enabled');
    cy.get('#loginButton').click();
});

//Custom Command to search and select product from the All Products
Cypress.Commands.add('search_and_select_product', (product_name) => {

    //mousehover the products header and select the "View All Products" option
    cy.get('.nav-links > #categoryHeaderLink').trigger('onmouseover')
        .trigger('mouseenter')
        .invoke('trigger', 'contextmenu')
        .rightclick();
    cy.get('#viewAllProductsBtn').should('be.visible')
        .invoke('text').should('eq', 'View All Products');
    cy.wait(2000);
    cy.get('#viewAllProductsBtn').click();
    cy.wait(5000);

    //Search the product in the search input field
    cy.get('mat-form-field > div > div > div > input').eq(0)
        .invoke('attr', 'data-placeholder')
        .should('eq', 'Search all products');
    cy.get('mat-form-field > div > div > div > input').eq(0).type(product_name)
        .eq(0).type('{enter}');
    cy.wait(3000);
    cy.get('.product-list-wrap > div > p > span').invoke('text').should('contain', 'Results for "' + product_name + '"');
});

//Add to cart a product fromm details page
Cypress.Commands.add('add_product_to_cart', (productSize, productQty) => {

    //Add size to the product
    cy.get('#sizeDropdown').click();
    cy.wait(5000);
    var sizeList = [];
    cy.get('#sizeDropdown-panel > mat-option > span > span > span:nth-child(1)').invoke('text').each(($ele) => {
        sizeList.push($ele.text().trim());
    }).then(() => {
        cy.log(sizeList);
    });
})
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })