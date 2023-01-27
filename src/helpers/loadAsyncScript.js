export const loadAsyncScript = () => {
  console.log(process.env.REACT_APP_API_JS_MAP)
  const src = `${process.env.REACT_APP_API_JS_MAP}?key=${process.env.REACT_APP_API_KEY_MAP}&libraries=places&v=weekly&language=es`
  return new Promise(resolve => {
    const isExist = document.getElementById('google_cloud_API')
    const script = document.createElement('script')

    if (!isExist) {
      Object.assign(script, {
        id: 'google_cloud_API',
        type: 'text/javascript',
        async: true,
        src
      })
    }

    script.addEventListener('load', () => resolve(script))
    document.head.appendChild(script)
  })
}
