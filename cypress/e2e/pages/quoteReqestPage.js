class QuoteRequestPage {
  // Locators
  quotePopupForm = '[data-test="pro-contact-form"]'
  quotePopupFormTitle = '[data-test="pro-contact-form"]'

  // form fields
  fullNameTextField = '[data-test="pro-contact-form"]'
  emailTextField = '[data-test="pro-contact-form"]'
  phoneNumberTextField = '[data-test="pro-contact-form"]'
  messageTextField = '[data-test="pro-contact-form"]'
  submitQuoteRequestBtn = '[data-test="pro-contact-form"]'

  // after quote submit
  quoteSubmitSuccessMessage = '[data-test="pro-contact-form"]'

  // Actions
  verifyQuotePopup() {
    cy.get(this.quotePopupForm).should("be.visible")
    cy.get(this.quotePopupFormTitle).contains("Legen Sie jetzt los!")
  }

  submitQuoteRequest(request) {
    cy.get(this.fullNameTextField).should("exist").type(request.fullName)
    cy.get(this.emailTextField).should("exist").type(request.email)
    cy.get(this.phoneNumberTextField).should("exist").type(request.phoneNumber)
    cy.get(this.messageTextField).should("exist").type(request.message)
    cy.get(this.submitQuoteRequestBtn).should("exist").click()
  }

  verifyRequestSubmittedSuccesfully() {
    cy.get(this.quoteSubmitSuccessMessage).should("exist")
  }
}

export default new QuoteRequest()
