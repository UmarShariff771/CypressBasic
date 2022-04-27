import { login } from "../../support/commands";

describe("Place and order in storefront", () => {
    
    //Select and Enter the product values
    it("Select and enter product values", () => {
        cy.navigate_to_the_page('https://stores.inksoft.com/auto_ghost/shop/home');
        cy.storefront_login('qaadmin@inksoft.com', 'test1234');
        cy.search_and_select_product('String');
    });
});