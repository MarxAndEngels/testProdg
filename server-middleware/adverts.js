const axios = require('axios')
export default async function (req, res, next) {
  let link = ''
  if(req.headers.host === 'xn--d1acacgb3b.xn--p1ai'){
    link = 'https://api.genzes.ru/feeds/yandex/xml/genzez-rf/main'
  }
  if(req.headers.host === 'xn--d1acac0byab.xn--p1ai'){
    link = 'https://api.genzes.ru/feeds/yandex/xml/genses-rf/main'
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