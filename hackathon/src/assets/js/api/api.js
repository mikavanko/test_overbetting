const YANDEX_API_KEY = 'd4eridc8huj6c6crgnpu'

export const uploadToGoogle = (ctx, {params}) => {
    return ctx.$axios.post('https://storage.googleapis.com/hakathon', params)
}

export const recognizeFile = (ctx, {params}) => {
  return fetch(`https://functions.yandexcloud.net/${YANDEX_API_KEY}?action=${params.action}&file=${params.file}`, {method: 'post'}).then(res=>res.json())
}

export const checkProgress = (ctx, {params}) => {
  return fetch(`https://functions.yandexcloud.net/${YANDEX_API_KEY}?action=${params.action}&operationId=${params.operationId}`, {method: 'get'}).then(res=>res.json())
}

export const getRecognitionResult = (ctx, {url}) => {
  return ctx.$axios.get(url).then(res => res.data)
}