import qs from 'qs'

const config = {
  apiHost: getApiHost()
}

function getApiHost () {
  let apiHostFromLocalStorage = localStorage.apiHost
  const apiHostFromURL =
      window.location.search && qs.parse(window.location.search.slice(1)).apiHost

  if (!apiHostFromLocalStorage && !apiHostFromURL) {
    // Production api url here
    return 'https://jsonplaceholder.typicode.com'
  }

  if (apiHostFromURL) {
    localStorage.apiHost = apiHostFromURL
    apiHostFromLocalStorage = localStorage.apiHost
  }

  return apiHostFromLocalStorage
}

export default config
