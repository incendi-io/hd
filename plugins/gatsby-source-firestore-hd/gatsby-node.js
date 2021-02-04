const report = require('gatsby-cli/lib/reporter')
const firebaseAdmin = require('firebase-admin')
require('firebase/firestore')

const applyConditions = (collection, conditions) => {
  if (!conditions || !conditions.length) {
    return collection
  }
  return conditions.reduce((coll, condition) => coll.where.apply(coll, condition), collection)
}

exports.sourceNodes = async ({ actions, createContentDigest }, { types, credential }) => {
  let firebase = firebaseAdmin

  try {
    if (!firebase?.apps?.length) {
      firebase.initializeApp({
        credential: firebase.credential.cert(credential),
      })
    }
  } catch (e) {
    report.warn(e)
    return
  }

  const db = firebase.firestore()

  const { createNode } = actions

  const promises = types.map(async ({ collection, type, map = (node) => node, conditions, limit }) => {
    const limitedCollection = limit ? db.collection(collection).limit(parseInt(limit)) : db.collection(collection);
    const conditionedCollection = applyConditions(limitedCollection, conditions)
    const snapshot = await conditionedCollection.get()
    for (let doc of snapshot.docs) {
      const nodeData = map(doc.data())
      const nodeMeta = {
        id: doc.id,
        parent: null,
        children: [],
        internal: {
          type,
          contentDigest: createContentDigest(nodeData),
        },
      }
      createNode(Object.assign({}, nodeData, nodeMeta))
      Promise.resolve()
    }
  })

  await Promise.all(promises)

  return
}
