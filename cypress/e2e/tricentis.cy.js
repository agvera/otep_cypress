import Navigations from '../POM/assertNavigations'

describe('template spec', () => {
    it('AssertNavigation', ()=> {
      cy.fixture('example'). then ((data)=> {
        cy.visit(data.baseurl)
        const navigation = new Navigations()
        navigation.assertNavigationsAreVisible()
      })
    })
})