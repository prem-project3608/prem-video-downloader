const axios = require('axios');

const apiBaseUrl = 'https://nayan-video-downloader.vercel.app/';

module.exports = {
  prem_ndown: createRequest('prem_ndown'),
  prem_instagram: createRequest('prem_instagram'),
  prem_tikdown: createRequest('prem_tikdown'),
  prem_ytdown: createRequest('prem_ytdown'),
  prem_threads: createRequest('prem_threads'),
  prem_twitterdown: createRequest('prem_twitterdown'),
  prem_fbdown2: createRequest('prem_fbdown2', (url, key) => ({ url, key })),
  prem_GDLink: createRequest('prem_GDLink'),
  prem_pintarest: createRequest('prem_pintarest'),
  prem_capcut: createRequest('prem_capcut'),
  prem_likee: createRequest('prem_likee'),
  prem_alldown: createRequest('prem_alldown'),
  prem_spotifySearch: createRequest('prem_spotify-search', (name, limit) => ({ name, limit })),
  prem_spotifyDl: createRequest('prem_spotifyDl', (url) => ({ url }))
};

function createRequest(endpoint, formatData) {
  return (url, key) => {
    return new Promise(async (resolve) => {
      try {
        const params = formatData ? formatData(url, key) : { url };
        const response = await axios.get(`${apiBaseUrl}${endpoint}`, { params });
        resolve(response.data);
      } catch (error) {
        resolve({
          developer: 'PREM BABU',
          status: false,
          msg: `${capitalize(endpoint.replace(/^\w/, c => c.toUpperCase()))} API error`,
        });
      }
    });
  };
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
