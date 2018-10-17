import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Well met!</h1>
    <p>My name is Chii-Jones Law,</p>
    <p>and I am ready for the Hackathon!</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
