import * as React from "react"
import Header from "./header"
import Footer from "./footer"
//import * as layoutsStyles from "./layout.css"

const Layout = props => {
  return (
    <div>
      <Header></Header>
      <div>{props.children}</div>
      <Footer></Footer>
    </div>
  )
}

export default Layout
