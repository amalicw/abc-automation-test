class HomePage {
  // Locators
  quoteRequestBtn = '[data-test="nav-bar-button"]'

  // Actions
  visit() {
    cy.visit("https://abc-company.com")
  }

  clickRequestQuoteBtn() {
    cy.get(this.quoteRequestBtn).should("exist").click()
  }
}

export default new HomePage()
