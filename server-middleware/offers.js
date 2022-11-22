const axios = require('axios')
export default async function (req, res, next) {
  let link = ''
  if(req.headers.host === 'genzes.ru'){
    link = 'https://api.genzes.ru/feeds/yandex/xml/genzes/main'
  }
  if(link !== ''){
    let response = await getXml(link)
    res.setHeader('Content-Type', response.headers['content-type']);
    res.end(response.data);
  }
  next()
}

async function getXml(link) {
  return axios({
    method: 'get',
    url: link
  });
}