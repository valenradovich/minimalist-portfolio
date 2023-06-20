import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

const Navbar = () => {
    const data = useStaticQuery(graphql`
        query NavbarQuery {
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
        <div>
            <nav className="menu">
                <input type="checkbox" id="check"></input>
                <label for="check" className="checkbtn">
                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"/></svg>
                </label>  
                <div className="enlace">
                    <Link to="/">
                        <StaticImage
                            src="../images/valenradovich_image.PNG"
                            width={100}
                            quality={95}
                            formats={["AUTO", "WEBP", "AVIF"]}
                            alt="Valentin Radovich"
                            placeholder="none"                          
                        />
                        <h4 className="nametitle">Valentin Radovich   
                             <StaticImage
                                src="../images/twitter.svg"
                                width={20}
                                quality={95}
                                formats={["AUTO", "WEBP", "AVIF"]}
                                alt="Twitter"
                                placeholder="none"
                                style={{marginLeft: 10, verticalAlign: "middle"}}

                            />
                        </h4>
                    </Link>                    
                </div>                                                  
                    <ul>
                    <li className="item">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <StaticImage
                                    src="../images/resume_icon.svg"
                                    width={15}
                                    quality={95}
                                    formats={["AUTO", "WEBP", "AVIF"]}
                                    alt="resume"
                                    placeholder="none"
                                    style={{marginRight: 10, verticalAlign: "middle"}}
                                />
                            </a>
                        </li>
                        <li className="item">
                            <a href="https://www.linkedin.com/in/valentin-fernandez-radovich/" target="_blank" rel="noopener noreferrer">
                                <StaticImage
                                    src="../images/linkedin_icon.svg"
                                    width={20}
                                    quality={95}
                                    formats={["AUTO", "WEBP", "AVIF"]}
                                    alt="resume"
                                    placeholder="none"
                                    style={{marginRight: 10, verticalAlign: "middle"}}
                                />
                            </a>
                        </li>
                        <li className="item">
                            <a href="https://github.com/valenradovich" target="_blank" rel="noopener noreferrer">
                                <StaticImage
                                    src="../images/github_icon.svg"
                                    width={20}
                                    quality={95}
                                    formats={["AUTO", "WEBP", "AVIF"]}
                                    alt="resume"
                                    placeholder="none"
                                    style={{marginRight: 10, verticalAlign: "middle"}}
                                />
                            </a>
                        </li>
                        
                        <li className="item contactbutton">
                            <a href="mailto:fernandezradovich@gmail.com" target="_blank" rel="noopener noreferrer">CONTACT</a>
                        </li>
                    </ul>
            </nav>
        </div>

    )
}

export default Navbar




