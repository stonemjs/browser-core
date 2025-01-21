import { OutgoingBrowserResponse, OutgoingBrowserResponseOptions } from '../../src/events/OutgoingBrowserResponse'

// Mock options for OutgoingBrowserResponse
const mockOptions: OutgoingBrowserResponseOptions = {}

// Create an instance of OutgoingBrowserResponse for testing

describe('OutgoingBrowserResponse', () => {
  let response: OutgoingBrowserResponse

  beforeEach(() => {
    response = OutgoingBrowserResponse.create(mockOptions)
  })

  it('should create an instance of OutgoingBrowserResponse', () => {
    expect(response).toBeInstanceOf(OutgoingBrowserResponse)
  })

  it('should invoke isser\'s methods', () => {
    expect(response.isInvalid()).toBe(false)
    expect(response.is1xx()).toBe(false)
    expect(response.is2xx()).toBe(false)
    expect(response.isOk()).toBe(false)
    expect(response.is3xx()).toBe(false)
    expect(response.is4xx()).toBe(false)
    expect(response.isError()).toBe(true)
    expect(response.isNotError()).toBe(false)
    expect(response.isUnauthorized()).toBe(false)
    expect(response.isForbidden()).toBe(false)
    expect(response.isNotFound()).toBe(false)
    expect(response.is5xx()).toBe(true)
  })
})
