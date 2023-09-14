import { FaSquareWhatsapp, FaTelegram, FaEnvelopeCircleCheck, FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import { BsDiamond, BsDiamondFill } from "react-icons/bs";
import { Container } from "./style";

export function Header() {
  return (
    <Container>
      <nav>
        <div className="nav">
          <ul>
            <li>About.me</li>
            <li>Projects</li>
            <li>Education</li>
            <li>Knowledge</li>
          </ul>

          <div className="diamond-bar">
            <div>
              <BsDiamond className="external-diamond" />
              <BsDiamondFill className="internal-diamond" />
              <span className="line"></span>

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