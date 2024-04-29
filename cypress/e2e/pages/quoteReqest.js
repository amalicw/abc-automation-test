class QuoteRequest {
  // Locators
  quotePopupForm = ".overlay-content-module__content__1uX9d"
  quotePopupFormTitle = ".main-title-module__title__3NdVm"

  // form fields

  fullNameTextField =
    '[for="name"] > .input-with-label-module__wrapper__3g6TX > .input-module__inputBox__2ANN1 > .input-module__input__23B1-'
  emailTextField =
    ":nth-child(1) > .input-module__inputBox__2ANN1 > .input-module__input__23B1-"
  phoneNumberTextField =
    '[for="phone"] > .input-with-label-module__wrapper__3g6TX > .input-module__inputBox__2ANN1 > .input-module__input__23B1-'
  messageTextField = ".textarea-module__textarea__2Ylyu"
  submitQuoteRequestBtn =
    '[data-test="pro-contact-form"] > .button-module__button__Z8rEw'

  // after quote submit
  quoteSubmitSuccessMessage = ".pro-contact-form-module__response__2QeDZ > h2"

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
