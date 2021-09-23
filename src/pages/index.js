import * as React from "react"
import Layout from "../components/layout"
import Banner from "../components/mainBanner"
import Products from "../components/produtcs"

//import * as containerStyles from "./main.module.css"

const IndexPage = () => (
  <div>
    <Layout>
      <Banner></Banner>
      <Products></Products>
    </Layout>
  </div>
)

export default IndexPage
