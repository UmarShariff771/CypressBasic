import { login } from "../../support/commands";

describe("Place and order in storefront", () => {
    beforeEach(() => {
        cy.navigate_to_the_page('https://rc.inksoft.com/jerrys_salesdoc/shop/home');
    })

    //Select and Enter the product values
    it("Select and enter product values", () => {
        // cy.storefront_login('qaadmin@inksoft.com', 'test1234');
        // cy.search_and_select_product('CB10025');
        // cy.get('product-card > div > div > product-image > img').click();
        cy.navigate_to_the_page('https://rc.inksoft.com/jerrys_salesdoc/shop/product-detail/1000063');
        cy.wait(5000);
        cy.add_product_to_cart('S','12');
    });
});