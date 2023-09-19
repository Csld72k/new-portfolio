import { FaSquareWhatsapp, FaFilePdf, FaEnvelopeCircleCheck, FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import { BsDiamondFill } from "react-icons/bs";
import { Container } from "./style";

let currentPage = 'about-me'; // It's to set the position of the navigation menu indicator

export function Header() {
  return (
    <Container>
      <nav>
        <div className="nav">
          <ul>
            <li><a href="#about-me">About.me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#knowledge">Knowledge</a></li>
          </ul>

          <div className="diamond-bar">
            <div>
              <span className="fixed-line"></span>
              <span className={`slider-line ${currentPage}`}></span>
              <BsDiamondFill className="external-diamond about-me background" />
              <BsDiamondFill className="external-diamond about-me" />
              <BsDiamondFill className="external-diamond projects background" />
              <BsDiamondFill className="external-diamond projects" />
              <BsDiamondFill className="external-diamond education background" />
              <BsDiamondFill className="external-diamond education" />
              <BsDiamondFill className="external-diamond knowledge background" />
              <BsDiamondFill className="external-diamond knowledge" />
              <BsDiamondFill className={`internal-diamond ${currentPage}`} />

            </div>
          </div>
        </div>
      </nav>

      <div className="logo">&lt; Claudiney &#47;&gt;</div>

      <div className="social-media">
        <div className="dark-light-mode-button"></div>
        <ul>
          <li><a href="https://github.com/Csld72k" rel="noopener noreferrer" target="_blank"><FaSquareGithub /></a></li>
          <li><a href="https://www.linkedin.com/in/csld72k/" rel="noopener noreferrer" target="_blank"><FaLinkedin /></a></li>
          <li><a href="mailto:csld72k@gmail.com"><FaEnvelopeCircleCheck /></a></li>
          <li><a href="https://wa.me/5561996749663?text=I%20am%20interested%20in%20your%20car%20for%20sale" target="_blank" rel="noopener noreferrer"><FaSquareWhatsapp /></a></li>
          <li><a href="https://www.canva.com/design/DAFMOPepaFY/_IcN0VfFe_v8-bc_jmSOSg/view?utm_content=DAFMOPepaFY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" rel="noopener noreferrer" target="_blank"><FaFilePdf /></a></li>
        </ul>
      </div>
    </Container>
  )
}