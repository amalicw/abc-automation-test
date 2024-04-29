class HomePage {
  // Locators
  quoteRequestBtn = '[data-test="nav-bar-button"]'

  // Actions
  visit() {
    cy.visit(
      "https://qa-interview.app.omni.one/dashboards/do-not-use-qa-dashboard-popcorn-18388"
    )
  }

  clickRequestQuoteBtn() {
    cy.get(this.quoteRequestBtn).should("exist").click()
  }
}

export default new HomePage()
