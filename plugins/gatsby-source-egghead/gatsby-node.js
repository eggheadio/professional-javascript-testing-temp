const crypto = require('crypto')
const fetch = require('node-fetch')
const queryString = require('query-string')

const { basicBundle, proBundle } = require('../../data/bundles')

const buildBundleNode = async (bundleData, id) => {
  const courseContent = bundleData.content.filter(
    content => content.type === 'course'
  )

  const courses = await Promise.map(courseContent, async course => {
    const apiUrl = `https://egghead.io/api/v1/series/${course.slug}`
    const response = await fetch(apiUrl)
    const data = await response.json()
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
    id,
    ...bundleNode,
    parent: null,
    children: [],
    content: nodeContent,
    internal: {
      type: 'Bundle',
      contentDigest: nodeContentDigest
    }
  }
  return node
}

exports.sourceNodes = async (
  { actions: { createNode }, createNodeId },
  { plugins, ...options }
) => {
  const basicBundleNode = await buildBundleNode(
    basicBundle,
    createNodeId(basicBundle.title)
  )
  const proBundleNode = await buildBundleNode(
    proBundle,
    createNodeId(proBundle.title)
  )

  createNode(basicBundleNode)
  createNode(proBundleNode)
}
