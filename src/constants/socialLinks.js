import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  // FaDribbbleSquare,
  FaBehanceSquare,
  FaTwitterSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    name: 'Facebook',
    url: "https://www.facebook.com/hello.lumina.studio",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    name: 'Behance',
    url: "https://www.behance.net/lumina-studio",
  },
  {
    id: 3,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    name: 'Instagram',
    url: "https://www.instagram.com/_luminastudio/",
  },
  {
    id: 4,
    icon: <FaBehanceSquare className="social-icon"></FaBehanceSquare>,
    name: 'Dribbble',
    url: "https://www.behance.net/luminastudio2",
  },
  // {
  //   id: 5,
  //   icon: <FaBehanceSquare className="social-icon"></FaBehanceSquare>,
  //   name: 'Blog',
  //   url: "/blog",
  // },
]
const links = data.map(link => {
  return (
    <li key={link.id} className="social-links">
      <a href={link.url} className="social-link link link--kale">
        {/*{link.icon}*/}
        {link.name}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
