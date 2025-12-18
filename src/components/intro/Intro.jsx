import "./Intro.scss";
import profile from "../../assets/IdentityFraud.jpg";
import downArrow from "../../assets/down-arrow.png";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    // console.log(textRef);
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Full-Stack Developer",
        "Marathon Runner",
        "Forklift Certified Individual",
        "Banana Pudding Enthusiast",
      ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={profile} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Christian Razo</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
          <a href="#portfolio">
            <img src={downArrow} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
