const crypto = require('crypto')
const fetch = require('node-fetch')
const queryString = require('query-string')
const assert = require('assert')

const { basicBundle, proBundle } = require('../../data/bundles')

const buildBundleNode = async (bundleData, id) => {
  const courseContent = bundleData.content.filter(
    content => content.type === 'course'
  )

  assert(
    process.env.BUNDLE_BUDDY_TOKEN !== undefined,
    'You must have the BUNDLE_BUDDY_TOKEN env variable set!'
  )

  const getCourseData = async course => {
    const apiUrl = `${process.env.AUTH_DOMAIN}/api/v1/series/${course.slug}`
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${process.env.BUNDLE_BUDDY_TOKEN}`,
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    return data
  }

  const courses = await Promise.map(courseContent, getCourseData)

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
