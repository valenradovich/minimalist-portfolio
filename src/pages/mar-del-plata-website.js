import * as React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import MDPWebsite from '../images/mardelplata-website.png'


const MarDelPlataWebsite = ({ data, location }) => {  

  return (
    <>
    <div>
      <Navbar></Navbar>
    </div>
    <div className="spaceheader">
        <div className="body-global-wrapper">
          <div className="row">
            <div className="description">
              <p>About Mar del Plata's information website:</p>
              <p>Built with Gatsby.js, using Node, React and CSS. <br></br>Deployment performed with Netlify.</p>
              <p>🔗<a href="https://mar-del-plata.netlify.app">mar-del-plata.netlify.app</a></p>
            </div>
          </div>
          <div className="row">
            <h3>📎 Mar del Plata Website</h3>
          </div>
          <div className="row">
            <p className="clear-tags">Visit the <a href="https://mar-del-plata.netlify.app">website</a> or the <a href="https://github.com/valenradovich/mardelplata_website">Github repository</a>  to get the source code.</p>
          </div>
          <div className="row">
            <h4>Description:</h4>
          </div>
          <div className="row">
            <p className="clear-tags">Simple, informative and minimalist website about the city of <a href="https://mar-del-plata.netlify.app">Mar del Plata</a> in real time.</p>
          </div>
          <div className="row">
            <h4>Functionalities:</h4>
          </div>
          <div className="row">
            <p className="clear-tags">
              <ul>
                <li>We can find the display of data of the city in real time such as: day and time, temperature, sunrise, sunset and rain probabilities.</li>
                <li>On the right side of the screen you can appreciate the appearance of an icon style image, respective to the weather that the city is experiencing in real time.</li>
              </ul>
            </p>
          </div>
          <div className="row">
            <h4>Website Images:</h4>
          </div>
          <div className="row image-container">
            <img src={MDPWebsite} alt="mdpwebsite" />
          </div>
          <div className="row">
            <h4>Technologies:</h4>
          </div>
          <div className="row">
            <p className="clear-tags">
              <ul>
                <li>Built with Gatsby.js, using Node, React and CSS.</li>
                <li>Deployment performed with Netlify.</li>
                <li>The website uses the OpenWeatherMap API to extract weather information.</li>
              </ul>
            </p>
          </div>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div></>          
  )
}

export default MarDelPlataWebsite

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Project" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
