const crypto = require('crypto')
const fetch = require('node-fetch')
const queryString = require('query-string')

exports.sourceNodes = async (
  { boundActionCreators: { createNode }, createNodeId },
  { plugins, ...options }
) => {
  const apiOptions = queryString.stringify(options)
  const apiUrl = `https://egghead.io/api/v1/lessons/?${apiOptions}`
  const response = await fetch(apiUrl)
  const data = await response.json()

  data.forEach(lesson => {
    const nodeContent = JSON.stringify(lesson)
    const nodeContentDigest = crypto
      .createHash('md5')
      .update(nodeContent)
      .digest('hex')
    return createNode({
      ...lesson,
      id: createNodeId(`egghead-lesson-${lesson.slug}`),
      parent: null,
      children: [],
      content: nodeContent,
      internal: {
        type: 'Lesson',
        contentDigest: nodeContentDigest
      }
    })
  })
}
