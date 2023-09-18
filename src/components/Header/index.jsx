import { FaSquareWhatsapp, FaTelegram, FaEnvelopeCircleCheck, FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import { BsDiamond, BsDiamondFill } from "react-icons/bs";
import { Container } from "./style";

export function Header() {
  return (
    <Container>
      <nav>
        <div className="nav">
          <ul>
            <li><a href="#">About.me</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Education</a></li>
            <li><a href="#">Knowledge</a></li>
          </ul>

          <div className="diamond-bar">
            <div>
              <span className="fixed-line"></span>
              <span className="slider-line projects"></span>
              <BsDiamond className="external-diamond about-me" />
              <BsDiamond className="external-diamond projects" />
              <BsDiamond className="external-diamond education" />
              <BsDiamond className="external-diamond knowledge" />
              <BsDiamondFill className="internal-diamond projects" />

            </div>
          </div>
        </div>
      </nav>

      <div className="logo">&lt; Claudiney &#47;&gt;</div>

      <div className="social-media">
        <div className="dark-light-mode-button"></div>
        <ul>
          <li><FaSquareGithub /></li>
          <li><FaLinkedin /></li>
          <li><FaEnvelopeCircleCheck /></li>
          <li><FaSquareWhatsapp /></li>
          <li><FaTelegram /></li>
        </ul>
      </div>
    </Container>
  )
}