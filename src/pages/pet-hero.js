import * as React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import petHeroImage from '../images/pet-hero-home.png'



const PetHero = ({ data, location }) => {  

  return (
    <>
    <div>
      <Navbar></Navbar>
    </div>
    <div className="spaceheader">
        <div className="body-global-wrapper">
          <div className="row">
            <div className="description">
              <p>About Pet Hero Website:</p>
              <p>University project. <br></br>Web application to connect pet owners with people who are willing to take care of their pet for a requested period of time.</p>
              <p>🔗<a href="https://github.com/valenradovich/pet-hero">source code</a></p>
            </div>
          </div>
          <div className="row">
            <h3>📎 Pet Hero Website</h3>
          </div>
          <div className="row">
            <p className="clear-tags">Visit the <a href="https://github.com/valenradovich/pet-hero">Github repository</a>  to get the source code.</p>
          </div>
          <div className="row">
            <h4>Description:</h4>
          </div>
          <div className="row">
            <p className="clear-tags">University project. Web application to connect pet owners with people who are willing to take care of their pet for a requested period of time.</p>
          </div>
          <div className="row">
            <h4>Funcionalities:</h4>
          </div>
          <div className="row">
            <ul>
                <p className="clear-tags">General:</p>
                <li>Registration.</li>
                <li>Profile creation and customization.</li>
                <br></br>
                <p className="clear-tags">As Owner:</p>
                <li>Search for keepers.</li>
                <li>View keepers profile.</li>
                <li>Create pet profile.</li>
                <li>Filter search by dates or availability.</li>
                <li>Generate a reservation.</li>
                <li>See your reservation's historial.</li>
                <br></br>
                <p className="clear-tags">As Keeper:</p>
                <li>Add and edit your available dates.</li>
                <li>Add and edit specs/conditions in order to get reservations.</li>
              </ul>
          </div>
          <div className="row">
            <h4>App Images:</h4>
          </div>
          <div className="row image-container">
            <img src={petHeroImage} alt="pet hero" />
          </div>
          
          <div className="row">
            <h4>Technologies:</h4>
          </div>
          <div className="row">
            <p className="clear-tags">
              <ul>
                <li>Back-end: PHP.</li>
                <li>Database: MySQL.</li>
                <li>Front-end: HTML, CSS and Bootstrap.</li>
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

export default PetHero

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
