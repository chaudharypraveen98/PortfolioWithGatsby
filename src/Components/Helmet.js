import React from "react"
import { Helmet } from "react-helmet"

const Helmet=()=>{
  return(
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="sdfg" />
        <meta name="description" content="dfgh" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <title>Praveen Chaudhary</title>
      </Helmet>
    </div>
  )
}

Helmet.defaultProps = {
  title: "Praveen Chaudhary",
  keywords: "Praveen Chaudhary, chaudharypraveen98",
  description: "Portfolio. Contains all projects of Praveen Chaudhary",
}

export default Helmet
