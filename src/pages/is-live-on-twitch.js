import * as React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import isliveImage from '../images/islive-app.png'
import notificationImage from '../images/notification-image.png'


const IsLiveOnTwitch = ({ data, location }) => {  

  return (
    <>
    <div>
      <Navbar></Navbar>
    </div>
    <div className="spaceheader">
        <div className="body-global-wrapper">
          <div className="row">
            <div className="description">
              <p>About "Is live on Twitch?" Application:</p>
              <p>It is a desktop application that will send you a notification in case the streamer you have selected is live. <br></br>For its creation I mainly used Python and the Twitch API.</p>
              <p>🔗<a href="https://github.com/valenradovich/is-live-on-twitch-windows">source code</a></p>
            </div>
          </div>
          <div className="row">
            <h3>📎 Is Live On Twitch? - Desktop Application</h3>
          </div>
          <div className="row">
            <p className="clear-tags">Visit the <a href="https://github.com/valenradovich/is-live-on-twitch-windows">Github repository</a>  to get the source code.</p>
          </div>
          <div className="row">
            <h4>Description:</h4>
          </div>
          <div className="row">
            <p className="clear-tags">"Is live on Twitch?" It's a desktop application that will send you a notification in case the streamer you have selected is live on Twitch. For this creation I mainly used Python (and some usefull libraries), Winotify (python library that handles windows notifications) and Twitch API.</p>
          </div>
          <div className="row">
            <h4>How it works:</h4>
          </div>
          <div className="row">
            <p className="clear-tags">
                You type the name of your favorite streamer, and in case he/she is live, Windows will pop up a notification. In case it is not live at the moment, the application will run in the background to send you the notification when the streamer has gone live on Twitch.
            </p>
          </div>
          <div className="row">
            <h4>App Images:</h4>
          </div>
          <div className="row image-container">
            <img src={isliveImage} alt="is live on twitch?" />
          </div>
          <br></br>
          <div className="row image-container">
            <img src={notificationImage} alt="is live on twitch?" />
          </div>
          <div className="row">
            <h4>Technologies:</h4>
          </div>
          <div className="row">
            <p className="clear-tags">
              <ul>
                <li>Language: 100% Python.</li>
                <li>Libraries: Twitch API, Winotify, Customtkinter and some usefull python libraries (os, requests, webbrowser, json, time)</li>
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

export default IsLiveOnTwitch

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
