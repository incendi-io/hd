import * as functions from 'firebase-functions'
import fetch from 'node-fetch'

exports.gatsbyBuildHook = functions.firestore.document('/eCommerce/{wildcard}').onWrite(async () => {
  try {
    await fetch(
      'https://webhook.gatsbyjs.com/hooks/data_source/publish/4a564d3a-7c5f-4f9d-a0d4-fa656f4ae1c0',
      { method: 'POST' }
    )
    functions.logger.info('The website build has been started')
  } catch (error) {
    functions.logger.error(error.message)
  }

})
