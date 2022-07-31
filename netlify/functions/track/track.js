const fetch = require('node-fetch')

const {
  TINYBIRD_TOKEN,
  TINYBIRD_API,
  TINYBIRD_DATASOURCE_NAME
} = process.env

exports.handler = function (event) {
  const url = `${TINYBIRD_API}?name=${TINYBIRD_DATASOURCE_NAME}&wait=false`

  const request = {
    method: 'POST',
    body: event.body,
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${TINYBIRD_TOKEN}`
    }
  }

  return fetch(url, request)
    .then(response => response.json())
    .then(onSuccess)
    .catch(onError)
}

function onSuccess(res) {
  return {
    statusCode: 200,
    body: JSON.stringify(res)
  }
}

function onError(error) {
  return {
    statusCode: 422,
    body: JSON.stringify(error)
  }
}
