import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from '../components/Banner';
import Services from '../components/services';
import About from '../components/About';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Banner/>
    <Services/>
    <About/>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
