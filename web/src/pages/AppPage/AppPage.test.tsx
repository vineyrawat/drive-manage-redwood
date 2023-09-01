import { render } from '@redwoodjs/testing/web'

import AppPage from './AppPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AppPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AppPage />)
    }).not.toThrow()
  })
})
