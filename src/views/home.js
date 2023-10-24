import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Principal Branding Designer</title>
        <meta property="og:title" content="Principal Branding Designer" />
      </Helmet>
    </div>
  )
}

export default Home
