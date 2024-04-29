import homePage from "../pages/homePage"
import quoteReqest from "../pages/quoteReqest"

describe("Quote Request Page", () => {
  beforeEach(() => {
    homePage.visit()
    homePage.clickRequestQuoteBtn()
  })

  it("should be able to submit quote successfully", () => {
    quoteReqest.verifyQuotePopup()
    quoteReqest.submitQuoteRequest({
      fullName: 'John Doe',
      email: 'johnDoe@gmail.com',
      phoneNumber: '0123456789',
      message: 'request a quote'
    })
    quoteReqest.verifyRequestSubmittedSuccesfully()
  })
})
