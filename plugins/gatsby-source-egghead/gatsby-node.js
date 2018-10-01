const crypto = require('crypto')
const fetch = require('node-fetch')
const queryString = require('query-string')

const { basicBundle, proBundle } = require('../../data/bundles')

const buildBundleNode = async (bundleData, createNodeId) => {
  const courseContent = bundleData.content.filter(
    content => content.type === 'course'
  )

  const courses = await Promise.map(courseContent, async course => {
    const apiUrl = `https://egghead.io/api/v1/series/${course.slug}`
    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log(data)
    return data
  })

  const bundleNode = {
    ...bundleData,
    courses
  }

  const nodeContent = JSON.stringify(bundleNode)
  const nodeContentDigest = crypto
    .createHash('md5')
    .update(nodeContent)
    .digest('hex')

  const node = {
    id: createNodeId(bundleData.title),
    ...bundleNode,
    parent: null,
    children: [],
    content: nodeContent,
    internal: {
      type: 'Bundle',
      contentDigest: nodeContentDigest
    }
  }
  console.log({ id: node.id, title: node.title })
  return node
}

exports.sourceNodes = async (
  { actions: { createNode }, createNodeId },
  { plugins, ...options }
) => {
  const apiOptions = queryString.stringify(options)
  const apiUrl = `https://egghead.io/api/v1/lessons/?${apiOptions}`
  const response = await fetch(apiUrl)
  const data = await response.json()

  const basicBundleNode = await buildBundleNode(basicBundle, createNodeId)
  createNode(basicBundleNode)
  const proBundleNode = await buildBundleNode(proBundle, createNodeId)
  createNode(proBundleNode)

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
