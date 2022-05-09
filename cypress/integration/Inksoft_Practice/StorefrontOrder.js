import { login } from "../../support/commands";

describe("Place and order in storefront", () => {
    
//Select and Enter the product values
it("Select and enter product values", () => {
    cy.navigate_to_the_page('https://stores.inksoft.com/auto_ghost/shop/home');
    // cy.storefront_login('qaadmin@inksoft.com', 'test1234');
    cy.search_and_select_product('DSTRPCproduct');
    cy.get('product-art-image .product-image-wrap > img:nth-child(1)').invoke('attr', 'src').then(($text) => {
            const cdnText = $text.substring($text.indexOf('//') + 2, $text.indexOf('m') + 1);
            expect(cdnText).equal('cdn.inksoft.com');
        });
    cy.get('product-art-image .product-image-wrap > img:nth-child(1)').click();
    cy.wait(3000);
    cy.get('#sizeDropdown').click();
    cy.get('#sizeDropdown-panel > mat-option > span > span > span').invoke('text').then(($els) => {
        for(let i=0; i<$els.length; i++){
            let sizeM = $els[i];
            if(sizeM == 'M')
            {
                cy.log(sizeM);
                cy.log(i);
                cy.log($els);
                cy.get('#sizeDropdown-panel > mat-option > span > span > span').eq(i).click();
                break;
            }
        }
    });
});
});