class Navigations {
    automobile='.main-navigation > ul > li > a#nav_automobile'
    truck='.main-navigation > ul > li > a#nav_truck'
    motorcycle='.main-navigation > ul > li > a#nav_motorcycle'
    camper='.main-navigation > ul > li > a#nav_camper'

    assertNavigationsAreVisible(){
        cy.get(this.automobile).should('be.visible')
        cy.get(this.truck).should('be.visible')
        cy.get(this.motorcycle).should('be.visible')
        cy.get(this.camper).should('be.visible')
        return this
    }

}

export default Navigations