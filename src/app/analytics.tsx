import Script from 'next/script'

const Analytics = () => {
  if (process.env.NODE_ENV !== 'production') return null

  return (
    <Script
      async
      data-website-id='89ba49be-721f-471f-9700-eddec1d632dc'
      src='https://umami.trev.fyi/script.js'
    />
  )
}

export default Analytics
