const basicContent = [
  {
    type: 'course',
    slug: 'fundamentals-of-testing-in-javascript'
  },
  {
    type: 'course',
    slug: 'static-analysis-testing-javascript-applications'
  },
  {
    title: 'Building Mocks for JavaScript Testing',
    type: 'course',
    slug: 'javascript-mocking-fundamentals'
  }
]

const proContent = [
  {
    type: 'course',
    slug: 'configure-jest-for-testing-javascript-applications'
  },
  {
    type: 'course',
    slug:
      'use-jest-dom-testing-library-jest-dom-and-react-testing-library-to-test-react'
  },
  {
    type: 'course',
    slug: 'use-dom-testing-library-to-test-any-js-framework'
  },
  {
    type: 'course',
    slug: 'install-configure-and-script-cypress-for-javascript-web-applications'
  }
]

exports.basicBundle = {
  title: 'Beginner',
  description: 'This is a beginner course full of interesting testing stuff',
  content: basicContent,
  duration: 135,
  sellableType: 'Playlist',
  sellableID: '1',
  purchaseURL: 'http://egghead.af:5000/api/v1/sellable_purchases'
}

exports.proBundle = {
  title: 'Professional',
  description: 'This is some professional content',
  content: [...basicContent, ...proContent],
  duration: 685,
  sellableType: 'Playlist',
  sellableID: '2',
  purchaseURL: 'http://egghead.af:5000/api/v1/sellable_purchases'
}
