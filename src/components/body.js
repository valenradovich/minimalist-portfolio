/* Create Body component using react, it's a responsive body, with 2 columns */
import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { useEffect } from 'react';

const Body = () => {
    useEffect(() => {
        // Scroll al inicio de la página cuando se carga una nueva URL
        window.scrollTo(0, 0);
      }, []);
      
    const data = useStaticQuery(graphql`
        query BodyQuery {
        site {
            siteMetadata {
            author {
                name
                summary
            }
            social {
                twitter
            }
            }
        }
        }
    `)
    
    
    return (
        <div className="spaceheader">
            <div className="body-global-wrapper">
                <div className="row">
                    <div className="description">
                        <p>Software Developer · Argentina</p> 
                        <p>
                        I'm about to finish the University Degree in Programming at the National Technological University of Argentina. I am passionate about everything related to technology and design, from software engineering to UI/UX.
                        Besides my love for technology and design, I'm also interested in and my hobby is photography.
                        Below are some of the projects I have developed.
                        </p>                                               
                    </div>
                </div>
                <div className="row">
                    <div className="description">
                        <h5>🔧 Projects</h5>                    
                        <p>
                        By clicking on a project you will be able to see a detailed description of the project, a link to the online demo and the source code.
                        </p>
                    </div>                                       
                </div> 
                <div className="row">
                    <div className="column">                        
                        <div className="card">
                            <Link to="fashion-model-portfolio" target="_blank" rel="noopener noreferrer">
                                <div className="image">
                                    <StaticImage                                
                                        src="../images/mateo-website.png"
                                        width={500}
                                        quality={95}
                                        formats={["AUTO", "WEBP", "AVIF"]}
                                        alt="Mateo Radovich Website"
                                        placeholder="none"
                                        imgStyle={{
                                            maxWidth: "100%",
                                            maxHeight: "100%",
                                            objectFit: "cover",
                                        }}
                                    />
                                </div>                                
                                <div className="skills">
                                    <span className="title-card">
                                        Fashion Model Portfolio
                                        <a href="https://mateoradovich.netlify.app" target="_blank" rel="noopener noreferrer">
                                        <label className="skill-item-demo">
                                            
                                                <StaticImage
                                                    src="../images/online-icon.svg"
                                                    width={15}
                                                    quality={95}
                                                    formats={["AUTO", "WEBP", "AVIF"]}
                                                    alt="Web Design"
                                                    placeholder="none"
                                                    style={{marginRight: 10, verticalAlign: "middle"}}
                                                />                            
                                            Online Demo                                        
                                        </label>
                                    </a>
                                    </span>                                                                        
                                    <label className="skill-item">
                                        <StaticImage
                                            src="../images/pen-icon.svg"
                                            width={15}
                                            quality={95}
                                            formats={["AUTO", "WEBP", "AVIF"]}
                                            alt="UX/UI"
                                            placeholder="none"
                                            style={{marginRight: 10, verticalAlign: "middle"}}
                                        />                            
                                        UX/UI 
                                    </label>
                                    <label className="skill-item">
                                        <StaticImage
                                            src="../images/react-icon.svg"
                                            width={18}
                                            quality={95}
                                            formats={["AUTO", "WEBP", "AVIF"]}
                                            alt="Web Design"
                                            placeholder="none"
                                            style={{marginRight: 10, verticalAlign: "middle"}}
                                        />                            
                                        React
                                    </label>
                                    <label className="skill-item">
                                        <StaticImage
                                            src="../images/css-icon.svg"
                                            width={15}
                                            quality={95}
                                            formats={["AUTO", "WEBP", "AVIF"]}
                                            alt="Web Design"
                                            placeholder="none"
                                            style={{marginRight: 10, verticalAlign: "middle"}}
                                        />                            
                                        CSS
                                    </label>
                                    <label className="skill-item">
                                        <StaticImage
                                            src="../images/node-icon.svg"
                                            width={15}
                                            quality={95}
                                            formats={["AUTO", "WEBP", "AVIF"]}
                                            alt="Web Design"
                                            placeholder="none"
                                            style={{marginRight: 10, verticalAlign: "middle"}}
                                        />                            
                                        Node.js
                                    </label>
                                </div>
                            </Link>                            
                        </div>                         
                    </div>               
                    <div className="column">                        
                        <div className="card">
                            <Link to="mar-del-plata-website" target="_blank" rel="noopener noreferrer">                            
                                <div className="image">
                                    <StaticImage                                
                                        src="../images/mardelplata-website.png"
                                        width={500}
                                        quality={95}
                                        formats={["AUTO", "WEBP", "AVIF"]}
                                        alt="Mar del Plata Website"
                                        placeholder="none"
                                        imgStyle={{
                                            maxWidth: "100%",
                                            maxHeight: "100%",
                                            objectFit: "cover",
                                        }}
                                    />
                                </div>                            
                                <div className="skills">
                                    <span className="title-card">
                                        Mar del Plata Website
                                        <a href="https://mar-del-plata.netlify.app" target="_blank" rel="noopener noreferrer">
                                        <label className="skill-item-demo">
                                            
                                                <StaticImage
                                                    src="../images/online-icon.svg"
                                                    width={15}
                                                    quality={95}
                                                    formats={["AUTO", "WEBP", "AVIF"]}
                                                    alt="Web Design"
                                                    placeholder="none"
                                                    style={{marginRight: 10, verticalAlign: "middle"}}
                                                />                            
                                            Online Demo                                        
                                        </label>
                                    </a>
                                    </span>
                                    <label className="skill-item">
                                        <StaticImage
                                            src="../images/pen-icon.svg"
                                            width={15}
                                            quality={95}
                                            formats={["AUTO", "WEBP", "AVIF"]}
                                            alt="UX/UI"
                                            placeholder="none"
                                            style={{marginRight: 10, verticalAlign: "middle"}}
                                        />                            
                                        UX/UI 
                                    </label>
                                    <label className="skill-item">
                                        <StaticImage
                                            src="../images/react-icon.svg"
                                            width={18}
                                            quality={95}
                                            formats={["AUTO", "WEBP", "AVIF"]}
                                            alt="React"
                                            placeholder="none"
                                            style={{marginRight: 10, verticalAlign: "middle"}}
                                        />                            
                                        React
                                    </label>
                                    <label className="skill-item">
                                        <StaticImage
                                            src="../images/css-icon.svg"
                                            width={15}
                                            quality={95}
                                            formats={["AUTO", "WEBP", "AVIF"]}
                                            alt="CSS"
                                            placeholder="none"
                                            style={{marginRight: 10, verticalAlign: "middle"}}
                                        />                            
                                        CSS
                                    </label>
                                    <label className="skill-item">
                                        <StaticImage
                                            src="../images/node-icon.svg"
                                            width={15}
                                            quality={95}
                                            formats={["AUTO", "WEBP", "AVIF"]}
                                            alt="Node JS"
                                            placeholder="none"
                                            style={{marginRight: 10, verticalAlign: "middle"}}
                                        />                            
                                        Node.js
                                    </label>
                                    <label className="skill-item">
                                        <StaticImage
                                            src="../images/weather-icon.svg"
                                            width={15}
                                            quality={95}
                                            formats={["AUTO", "WEBP", "AVIF"]}
                                            alt="Weather"
                                            placeholder="none"
                                            style={{marginRight: 10, verticalAlign: "middle"}}
                                        />                            
                                        Weather API
                                    </label>
                                </div>
                            
                            </Link>
                        </div>                         
                    </div>                                   
                </div>               
                <div className="row">
                    <div className="column">                        
                        <div className="card">
                            <Link to="is-live-on-twitch" target="_blank" rel="noopener noreferrer">                            
                                <div className="image">
                                    <StaticImage                                
                                        src="../images/islive-app.png"
                                        width={500}
                                        quality={95}
                                        formats={["AUTO", "WEBP", "AVIF"]}
                                        alt="Is Live App"
                                        placeholder="none"
                                        imgStyle={{
                                            maxWidth: "100%",
                                            maxHeight: "100%",
                                            objectFit: "cover",
                                        }}
                                    />
                                </div>                            
                                <div className="skills">
                                    <span className="title-card">Is Live on Twitch?</span>
                                    <label className="skill-item">
                                        <StaticImage
                                            src="../images/python-icon.svg"
                                            width={15}
                                            quality={95}
                                            formats={["AUTO", "WEBP", "AVIF"]}
                                            alt="Python"
                                            placeholder="none"
                                            style={{marginRight: 10, verticalAlign: "middle"}}
                                        />                            
                                        Python 
                                    </label>
                                    <label className="skill-item">
                                        <StaticImage
                                            src="../images/twitch-icon.svg"
                                            width={18}
                                            quality={95}
                                            formats={["AUTO", "WEBP", "AVIF"]}
                                            alt="Twitch"
                                            placeholder="none"
                                            style={{marginRight: 10, verticalAlign: "middle"}}
                                        />                            
                                        Twitch API
                                    </label>
                                    <label className="skill-item">
                                        <StaticImage
                                            src="../images/object-group-regular.svg"
                                            width={20}
                                            quality={95}
                                            formats={["AUTO", "WEBP", "AVIF"]}
                                            alt="Tkinter"
                                            placeholder="none"
                                            style={{marginRight: 10, verticalAlign: "middle"}}
                                        />                            
                                        CustomTkinter
                                    </label>
                                    
                                </div>
                            
                            </Link>
                        </div>                         
                    </div>               
                    <div className="column">                        
                        <div className="card">
                            <Link to="pet-hero" target="_blank" rel="noopener noreferrer">
                            
                                <div className="image">
                                    <StaticImage                                
                                        src="../images/pet-hero-home.png"
                                        width={500}
                                        quality={95}
                                        formats={["AUTO", "WEBP", "AVIF"]}
                                        alt="Valentin Radovich"
                                        placeholder="none"
                                        imgStyle={{
                                            maxWidth: "100%",
                                            maxHeight: "100%",
                                            objectFit: "cover",
                                        }}
                                    />
                                </div>                            
                                <div className="skills">
                                    <span className="title-card">Pet Hero</span>
                                    <label className="skill-item">
                                        <StaticImage
                                            src="../images/pen-icon.svg"
                                            width={15}
                                            quality={95}
                                            formats={["AUTO", "WEBP", "AVIF"]}
                                            alt="UX/UI"
                                            placeholder="none"
                                            style={{marginRight: 10, verticalAlign: "middle"}}
                                        />                            
                                        UX/UI 
                                    </label>
                                    <label className="skill-item">
                                        <StaticImage
                                            src="../images/php-icon.svg"
                                            width={25}
                                            quality={95}
                                            formats={["AUTO", "WEBP", "AVIF"]}
                                            alt="PHP"
                                            placeholder="none"
                                            style={{marginRight: 10, verticalAlign: "middle"}}
                                        />                            
                                        PHP
                                    </label>
                                    <label className="skill-item">
                                        <StaticImage
                                            src="../images/html-icon.svg"
                                            width={15}
                                            quality={95}
                                            formats={["AUTO", "WEBP", "AVIF"]}
                                            alt="HTML"
                                            placeholder="none"
                                            style={{marginRight: 10, verticalAlign: "middle"}}
                                        />                            
                                        HTML
                                    </label>
                                    <label className="skill-item">
                                        <StaticImage
                                            src="../images/css-icon.svg"
                                            width={15}
                                            quality={95}
                                            formats={["AUTO", "WEBP", "AVIF"]}
                                            alt="CSS"
                                            placeholder="none"
                                            style={{marginRight: 10, verticalAlign: "middle"}}
                                        />                            
                                        CSS
                                    </label>
                                    <label className="skill-item">
                                        <StaticImage
                                            src="../images/mysql-icon.svg"
                                            width={15}
                                            quality={95}
                                            formats={["AUTO", "WEBP", "AVIF"]}
                                            alt="MySQL"
                                            placeholder="none"
                                            style={{marginRight: 10, verticalAlign: "middle"}}
                                        />                            
                                        MySQL
                                    </label>
                                </div>
                            </Link>
                        </div>                         
                    </div>                                   
                </div>               
            </div>                                                                              
            </div> 
    )
}

export default Body
