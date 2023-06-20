import * as React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import mateoWebGif from '../images/gif-mateo.gif'


const FashionModelPortfolio = ({ data, location }) => {  

  return (
    <>
    <div>
      <Navbar></Navbar>
    </div>
    <div className="spaceheader">
        <div className="body-global-wrapper">
          <div className="row">
            <div className="description">
              <p>About Fashion Model Portfolio:</p>
              <p> Built with Gatsby.js, using Node, React and CSS. <br></br>Deployment performed with Netlify.</p>
              <p>🔗<a href="https://mateoradovich.netlify.app">mateoradovich.netlify.app</a></p>
            </div>
          </div>
          <div className="row">
            <h3>📎 Fashion Model Portfolio</h3>
          </div>
          <div className="row">
            <p className="clear-tags">Visit the <a href="https://mateoradovich.netlify.app">website</a> or the <a href="https://github.com/valenradovich/fashion-model-portfolio">Github repository</a>  to get the source code.</p>
          </div>
          <div className="row">
            <h4>Description:</h4>
          </div>
          <div className="row">
            <p className="clear-tags">Simple, informative, minimalist and full responsive website about the fashion model Mateo Radovich. The main objective of this website is to show the model's work in a simple and minimalist way, with a modern design and a very intuitive interface. Show less, say more and keep it simple to the user.</p>
          </div>
          <div className="row">
            <h4>Includes:</h4>
          </div>
          <div className="row">
            <p className="clear-tags">
              <ul>
                <li>Home page with a very modern photo gallery that gives the model a visibility that is appropriate and eye-catching for your work.</li>
                <li>About page with a brief description of the model.</li>
                <li>Contact button that opens a new tab to send an email to the model.</li>
                <li>Instagram button that opens a new tab to the model's Instagram profile.</li>
              </ul>
            </p>
          </div>
          <div className="row">
            <h4>Website Images:</h4>
          </div>
          <div className="row image-container">
            <img src={mateoWebGif} alt="webgif" />
          </div>
          <div className="row">
            <h4>Technologies:</h4>
          </div>
          <div className="row">
            <p className="clear-tags">
              <ul>
                <li>Built with Gatsby.js, using Node, React and CSS.</li>
                <li>Deployment performed with Netlify.</li>
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

export default FashionModelPortfolio

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
